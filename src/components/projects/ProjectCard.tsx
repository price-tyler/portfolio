import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { statusConfig } from "@/lib/projects";
import { Panel } from "@/components/ui/Panel";

/** Grid card for a project — designation, status, summary, telemetry strip. */
export function ProjectCard({ project }: { project: ProjectMeta }) {
  const status = statusConfig[project.status];

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Panel interactive className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">
            {project.designation}
          </p>
          <span
            className={`border px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.15em] ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        {project.metrics.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4">
            {project.metrics.slice(0, 4).map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
                  {m.label}
                </dt>
                <dd className="font-mono text-sm text-foreground">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2 py-0.5 font-mono text-[0.62rem] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Panel>
    </Link>
  );
}
