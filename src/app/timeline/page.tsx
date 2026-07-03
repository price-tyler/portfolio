import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TimelineView } from "@/components/timeline/TimelineView";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Engineering timeline — education, work, projects, and milestones from first job to graduation target.",
};

export default function TimelinePage() {
  // Newest first; data file order is authoritative via sort key.
  const entries = [...timeline].sort((a, b) => b.sort.localeCompare(a.sort));

  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <PageHeader
        code="SYS.02"
        label="Mission log"
        title="Engineering Timeline"
        lede="Where I've been, what I've built, and where this is headed. Dashed nodes are planned trajectory — targets, not history."
      />
      <TimelineView entries={entries} />
    </div>
  );
}
