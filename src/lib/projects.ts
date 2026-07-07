import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Markdown-based project system.
 *
 * To add a project: drop a new `.mdx` file in `content/projects/`.
 * It automatically appears in the projects grid, gets its own page at
 * /projects/<filename>, and shows up in sitemaps. No code changes needed.
 */

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectStatus = "operational" | "in-development" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  /** Short designation shown in mono, e.g. "PRJ-001". */
  designation: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  date: string;
  featured: boolean;
  /** Sort order on the projects page (lower = first). */
  order: number;
  /** Headline numbers rendered as a telemetry strip on cards and pages. */
  metrics: ProjectMetric[];
  /** Content the owner still needs to supply (photos, links, results). */
  todos: string[];
}

export interface Project extends ProjectMeta {
  content: string;
}

function parseProject(filename: string): Project {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    designation: data.designation ?? "PRJ-000",
    summary: data.summary ?? "",
    status: (data.status ?? "in-development") as ProjectStatus,
    tags: data.tags ?? [],
    date: data.date ?? "",
    featured: data.featured ?? false,
    order: data.order ?? 99,
    metrics: data.metrics ?? [],
    todos: data.todos ?? [],
    content,
  };
}

export function getAllProjects(): Project[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parseProject)
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  const file = fs
    .readdirSync(PROJECTS_DIR)
    .find((f) => f.replace(/\.mdx?$/, "") === slug);
  return file ? parseProject(file) : undefined;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

/* Badge colors live in globals.css as theme-aware classes (.status-*) so
   they flip correctly between dark and light mode. */
export const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  operational: { label: "OPERATIONAL", className: "status-operational" },
  "in-development": { label: "IN DEVELOPMENT", className: "status-indev" },
  archived: { label: "ARCHIVED", className: "status-archived" },
};
