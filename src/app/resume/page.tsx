import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel } from "@/components/ui/Panel";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Interactive resume — education, experience, skills, and awards, with a downloadable PDF.",
};

const education = [
  {
    school: "Utah State University",
    credential: "B.S. Mechanical Engineering — Aerospace Emphasis",
    dates: "Aug 2025 — Present",
    detail: "4.0 institutional GPA · Expected graduation 2029",
  },
  {
    school: "Centralia College",
    credential: "Associate's Degree",
    dates: "Sep 2022 — Jun 2024",
    detail: "Included first programming coursework (Python)",
  },
];

const skillLines = [
  {
    label: "Programming",
    value: "Python (scraping, SQLite, LLM integration), HTML/CSS/JS, LaTeX",
  },
  { label: "CAD", value: "SolidWorks — parts, assemblies; CSWA in progress" },
  { label: "Analysis", value: "Excel data analysis, projectile/rigid-body dynamics" },
  { label: "Electromech", value: "DC motor sizing, PWM control, 12V power systems" },
  { label: "Tools", value: "Git/GitHub, VS Code, Jupyter, Ollama" },
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <PageHeader
          code="SYS.06"
          label="Document"
          title="Resume"
          lede="The web version, generated from the same data as the rest of this site. Prefer paper?"
        />
        {site.resumePdfReady && (
          <a
            href="/resume.pdf"
            download
            className="shrink-0 border border-accent bg-accent-dim px-5 py-3 font-mono text-xs tracking-[0.15em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
          >
            ↓ Download PDF
          </a>
        )}
      </div>

      {/* Header block */}
      <Panel className="p-6">
        <h2 className="text-2xl font-semibold tracking-tight">{site.name}</h2>
        <p className="mt-1 font-mono text-xs tracking-[0.15em] text-muted uppercase">
          {site.location} · {site.email}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Mechanical Engineering student (Aerospace emphasis) at Utah State
          University with a 4.0 institutional GPA, hands-on project experience
          in electromechanical design and Python automation, and three years of
          high-throughput operational work. Seeking a summer 2027 engineering
          internship.
        </p>
      </Panel>

      {/* Education */}
      <section className="mt-10">
        <h2 className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
          01 // Education
        </h2>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="border-l-2 border-line pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.school}</h3>
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  {e.dates}
                </span>
              </div>
              <p className="text-sm text-muted">{e.credential}</p>
              <p className="mt-0.5 font-mono text-[0.7rem] text-muted/80">{e.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects pointer */}
      <section className="mt-10">
        <h2 className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
          02 // Projects
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          Full engineering write-ups live on the{" "}
          <a href="/projects" className="text-accent underline underline-offset-4">
            projects page
          </a>
          : a design-to-cost dual-wheel ball launcher (motor sizing, contact
          mechanics, $100 BOM), a Python job-search pipeline with local-LLM
          scoring, and client web work for local businesses.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
          03 // Experience
        </h2>
        <div className="space-y-4">
          {experience.map((job) => (
            <div key={job.company} className="border-l-2 border-line pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {job.company}
                  <span className="ml-2 font-normal text-muted">— {job.role}</span>
                </h3>
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
          04 // Technical Skills
        </h2>
        <dl className="space-y-2.5">
          {skillLines.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5 md:flex-row md:gap-4">
              <dt className="w-32 shrink-0 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase md:pt-0.5">
                {s.label}
              </dt>
              <dd className="text-sm text-foreground/90">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Awards */}
      <section className="mt-10">
        <h2 className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
          05 // Awards
        </h2>
        <div className="border-l-2 border-line pl-5">
          <h3 className="font-semibold">Eagle Scout — Boy Scouts of America</h3>
          <p className="mt-1 text-sm text-muted">
            BSA&apos;s highest rank (~4% of Scouts). Planned and led a community
            service project end to end: scope, budget, volunteers, delivery.
          </p>
        </div>
      </section>
    </div>
  );
}
