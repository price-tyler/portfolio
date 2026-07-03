import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects — hardware design, Python automation, and web development, documented like engineering reports.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <PageHeader
        code="SYS.01"
        label="Project log"
        title="Projects"
        lede="Each entry is documented like a condensed engineering report: problem, constraints, design decisions, results, and what went wrong. New projects plug in as single markdown files."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
