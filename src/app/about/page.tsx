import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am, why engineering, and where this is headed — Mechanical Engineering student with an Aerospace emphasis at Utah State University.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <PageHeader
        code="SYS.05"
        label="Personnel file"
        title="About"
      />

      <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-end">
        <div className="panel-ticks border border-line bg-surface/60 p-1.5">
          <Image
            src="/profile.jpg"
            alt={`${site.name} — portrait`}
            width={224}
            height={224}
            priority
            className="h-44 w-44 object-cover sm:h-56 sm:w-56"
          />
        </div>
        <p className="font-mono text-[0.65rem] leading-relaxed tracking-[0.18em] text-muted uppercase">
          {site.name}
          <br />
          {site.location} · {site.coordinates}
          <br />
          {site.university}
        </p>
      </div>

      <div className="report space-y-0">
        <Reveal>
          <h2>The short version</h2>
          <p>
            I&apos;m a Mechanical Engineering student at Utah State University on
            the Aerospace emphasis track, carrying a 4.0 institutional GPA
            while working 25–30 hours a week. I grew up in Washington — Lynden,
            then Chehalis — ran track as a sprinter, and earned Eagle Scout
            before finishing high school. I got to engineering the honest way:
            by noticing that the things I couldn&apos;t stop doing — taking
            problems apart, optimizing systems, building tools — all had the
            same job title attached.
          </p>
        </Reveal>

        <Reveal>
          <h2>Why engineering</h2>
          <p>
            Math and physics have always been the subjects where effort
            converts directly into results, and I like fields where the
            scoreboard is real. Engineering is math and physics with
            consequences: the motor is sized right or the ball doesn&apos;t
            launch; the scraper handles the edge case or the pipeline dies at
            2 a.m. That feedback loop — predict, build, measure, be wrong,
            fix it — is the part I genuinely enjoy. It&apos;s the same reason my
            side projects all converge on the same shape: figure out how a
            system works, then build one.
          </p>
          <p>
            The aerospace pull is specific. Spacecraft and launch vehicles are
            the hardest version of the discipline — mass budgets, thermal
            limits, and physics that doesn&apos;t negotiate. Being at USU puts me
            next to the Space Dynamics Laboratory, a UARC with 400+ space
            missions delivered, and that proximity is not an accident. It&apos;s
            the target.
          </p>
        </Reveal>

        <Reveal>
          <h2>How I work</h2>
          <p>
            The pattern across everything on this site: I&apos;d rather build the
            thing than talk about building it. When the internship search got
            tedious, I didn&apos;t grind through job boards — I wrote a Python
            pipeline that scrapes, scores, and ranks listings with a local
            LLM. When I wanted a portfolio hardware project, I gave myself a
            hard $100 budget so the design work would be real. I take notes in
            a cross-linked knowledge base with a few hundred entries on
            engineering, aerospace, and everything else I&apos;m learning, because
            knowledge you can&apos;t retrieve is knowledge you don&apos;t have.
          </p>
          <p>
            Style-wise: blunt, fast, allergic to wasted time. Two years of
            scouting leadership and three throughput-driven jobs taught me
            that reliability is the rarest skill — being the person who shows
            up, hits the number, and doesn&apos;t need chasing.
          </p>
        </Reveal>

        <Reveal>
          <h2>Where this is going</h2>
          <p>
            Near term: a mechanical or aerospace engineering internship for
            summer 2027, SolidWorks CSWA certification, and finishing the
            launcher test campaign with real predicted-vs-measured data.
            Longer term: graduate in 2029 and work on flight hardware —
            propulsion, structures, or small satellites — for an organization
            that ships things into environments where the engineering has to
            be right.
          </p>
          <p>
            Off the clock: pickleball, tennis, hiking, lifting, and an
            unreasonable amount of ping pong.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
