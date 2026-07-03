import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProject, statusConfig } from "@/lib/projects";
import { TelemetryTag } from "@/components/ui/TelemetryTag";
import { TodoMarker } from "@/components/ui/TodoMarker";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const status = statusConfig[project.status];

  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      {/* Report header block */}
      <header className="border-b border-line pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <TelemetryTag code={project.designation} label={project.date} />
          <span
            className={`border px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.15em] ${status.className}`}
          >
            {status.label}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        {project.metrics.length > 0 && (
          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="border border-line bg-surface/60 px-4 py-3"
              >
                <dt className="font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
                  {m.label}
                </dt>
                <dd className="mt-1 font-mono text-lg text-accent">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2 py-0.5 font-mono text-[0.62rem] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Report body */}
      <div className="report mt-4">
        <MDXRemote source={project.content} />
      </div>

      {project.todos.length > 0 && (
        <div className="mt-12">
          <TodoMarker items={project.todos} />
        </div>
      )}

      <nav className="mt-14 border-t border-line pt-8">
        <Link
          href="/projects"
          className="font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:text-accent"
        >
          ← All projects
        </Link>
      </nav>
    </article>
  );
}
