"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { TimelineEntry, TimelineKind } from "@/data/timeline";

/* Colors come from theme-aware CSS variables (see globals.css) so the
   palette flips with light/dark mode. */
const kindConfig: Record<TimelineKind, { label: string; cssVar: string }> = {
  education: { label: "Education", cssVar: "--c-education" },
  work: { label: "Work", cssVar: "--c-work" },
  project: { label: "Projects", cssVar: "--c-project" },
  milestone: { label: "Milestones", cssVar: "--c-milestone" },
  target: { label: "Targets", cssVar: "--c-target" },
};

const filters: Array<{ key: TimelineKind | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "project", label: "Projects" },
  { key: "education", label: "Education" },
  { key: "work", label: "Work" },
  { key: "milestone", label: "Milestones" },
  { key: "target", label: "Targets" },
];

/**
 * Vertical mission-log timeline with kind-based filtering.
 * Entries flagged `future` render dashed — planned trajectory, not history.
 */
export function TimelineView({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState<TimelineKind | "all">("all");
  const reduced = useReducedMotion();

  const visible =
    active === "all" ? entries : entries.filter((e) => e.kind === active);

  return (
    <div>
      {/* Filter chips */}
      <div
        role="tablist"
        aria-label="Filter timeline"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            className={`border px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.12em] uppercase transition-colors ${
              active === f.key
                ? "border-accent bg-accent-dim text-accent"
                : "border-line text-muted hover:border-line-strong hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Rail */}
      <ol className="relative ml-2 border-l border-line-strong">
        <AnimatePresence initial={false}>
          {visible.map((entry) => {
            const cfg = kindConfig[entry.kind];
            return (
              <motion.li
                key={entry.title}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="relative pb-10 pl-8 last:pb-0"
              >
                {/* Node */}
                <span
                  aria-hidden
                  style={{ color: `var(${cfg.cssVar})` }}
                  className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                    entry.future
                      ? "border border-current bg-background"
                      : "bg-current"
                  }`}
                />
                <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted uppercase">
                  {entry.date}
                  <span className="ml-3" style={{ color: `var(${cfg.cssVar})` }}>
                    {cfg.label}
                  </span>
                  {entry.future && (
                    <span className="ml-3 opacity-60">— planned</span>
                  )}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                  {entry.href ? (
                    <Link
                      href={entry.href}
                      className="transition-colors hover:text-accent"
                    >
                      {entry.title} →
                    </Link>
                  ) : (
                    entry.title
                  )}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>
    </div>
  );
}
