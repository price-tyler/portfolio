import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups, tierLabels, type SkillTier } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills grouped by engineering discipline, with honest proficiency tiers and the projects that prove them.",
};

/** Three-segment indicator — filled segments encode the tier. */
function TierIndicator({ tier }: { tier: SkillTier }) {
  const filled = tier === "deployed" ? 3 : tier === "working" ? 2 : 1;
  return (
    <span
      className="flex gap-1"
      title={tierLabels[tier].label}
      aria-label={`Proficiency: ${tierLabels[tier].label}`}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-3.5 w-1.5 ${
            i < filled ? "bg-accent" : "bg-line-strong"
          }`}
        />
      ))}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <PageHeader
        code="SYS.03"
        label="Capability matrix"
        title="Skills"
        lede="Grouped by discipline, rated with honest tiers instead of made-up percentages — and every claim cites the project or context that backs it."
      />

      {/* Tier legend */}
      <div className="mb-12 flex flex-wrap gap-x-8 gap-y-3">
        {(Object.keys(tierLabels) as SkillTier[]).map((tier) => (
          <div key={tier} className="flex items-center gap-3">
            <TierIndicator tier={tier} />
            <div>
              <span className="font-mono text-xs tracking-[0.12em] uppercase">
                {tierLabels[tier].label}
              </span>
              <span className="ml-2 text-xs text-muted">
                {tierLabels[tier].description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.discipline} delay={(gi % 2) * 0.08}>
            <Panel className="h-full p-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold tracking-tight">
                  {group.discipline}
                </h2>
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">
                  {group.index}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.blurb}
              </p>
              <ul className="mt-5 divide-y divide-line border-t border-line">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="py-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <TierIndicator tier={skill.tier} />
                    </div>
                    {skill.evidence && (
                      <p className="mt-1 font-mono text-[0.68rem] leading-relaxed text-muted">
                        ↳ {skill.evidence}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
