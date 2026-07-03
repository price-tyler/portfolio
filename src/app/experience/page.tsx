import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience — high-throughput operational jobs held alongside a full engineering course load.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <PageHeader
        code="SYS.04"
        label="Work history"
        title="Experience"
        lede="None of these are engineering jobs — yet. What they are: three high-throughput operational environments, held while carrying a full course load, that taught process thinking from the inside."
      />

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <Panel className="p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {job.company}
                  <span className="ml-3 text-base font-normal text-muted">
                    {job.role}
                  </span>
                </h2>
                <p className="font-mono text-[0.68rem] tracking-[0.15em] text-muted uppercase">
                  {job.dates} · {job.location}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 bg-accent" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-l-2 border-accent/50 bg-accent-dim/40 py-3 pl-4 pr-3">
                <p className="font-mono text-[0.62rem] tracking-[0.18em] text-accent uppercase">
                  Engineering lens
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {job.engineeringNote}
                </p>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
