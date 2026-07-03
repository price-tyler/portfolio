import Link from "next/link";
import { Starfield } from "@/components/effects/Starfield";
import { Reveal } from "@/components/ui/Reveal";
import { TelemetryTag } from "@/components/ui/TelemetryTag";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-line">
        <Starfield />
        {/* Radial fade so the grid/stars recede behind the text */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 py-28 md:py-40">
          <Reveal>
            <TelemetryTag code="SYS.00" label={`${site.location} · ${site.coordinates}`} />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance md:text-7xl">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 font-mono text-sm tracking-[0.15em] text-accent uppercase md:text-base">
              {site.role} · {site.emphasis}
            </p>
            <p className="mt-1 font-mono text-xs tracking-[0.15em] text-muted uppercase">
              {site.university} · Class of {site.gradYear}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="border border-accent bg-accent-dim px-6 py-3 font-mono text-xs tracking-[0.15em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
              >
                View Projects →
              </Link>
              <Link
                href="/resume"
                className="border border-line px-6 py-3 font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:border-line-strong hover:text-foreground"
              >
                Resume
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <TelemetryTag code="SYS.01" label="Featured work" />
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:text-accent"
            >
              All projects →
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SNAPSHOT STRIP ================= */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 md:grid-cols-4">
          {[
            { label: "Institutional GPA", value: "4.0" },
            { label: "Degree track", value: "ME / Aero" },
            { label: "Eagle Scout", value: "BSA" },
            { label: "Target", value: "2027 Internship" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-2 text-center">
              <p className="font-mono text-2xl text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <Reveal>
          <TelemetryTag code="SYS.07" label="Contact" />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Looking for an intern who already builds things?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            I&apos;m targeting a summer 2027 mechanical or aerospace engineering
            internship. If the projects here look like your kind of work, let&apos;s
            talk.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="border border-accent bg-accent-dim px-6 py-3 font-mono text-xs tracking-[0.15em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
