/**
 * Work experience entries, newest first.
 * `engineeringNote` is the section that matters most on this page:
 * it translates non-engineering work into engineering thinking.
 */

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  engineeringNote: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Dutch Bros",
    role: "Barista",
    location: "Logan, UT",
    dates: "Feb 2025 — Present",
    summary:
      "High-volume drive-through service, worked 25–30 hours/week alongside a full engineering course load.",
    bullets: [
      "Sustained speed and drink-quality standards during peak-hour rushes where the line never stops",
      "Carried 15–18 credit semesters at a 4.0 institutional GPA while working — schedule discipline is the skill",
      "Trusted with consistency: same product, every time, under time pressure",
    ],
    engineeringNote:
      "A drive-through at rush is a throughput system: station layout, task sequencing, and buffer management decide whether the line moves. Working inside one builds an operator's intuition for bottlenecks that classroom queuing theory can't.",
  },
  {
    company: "UPS",
    role: "Package Handler",
    location: "Napavine, WA",
    dates: "Sep 2024 — Feb 2025",
    summary:
      "Overnight package sort and truck loading at a regional hub, against daily productivity quotas.",
    bullets: [
      "Met daily sort and load targets in a metrics-tracked, physically demanding environment",
      "Zero-tolerance accuracy: a missorted package is a guaranteed downstream failure",
      "Learned to work efficiently within a tightly engineered logistics system — and to notice where it wasn't",
    ],
    engineeringNote:
      "UPS hubs are among the most heavily industrially-engineered environments a student can work in. Load sequencing, conveyor flow, and human-factors constraints are all visible on the floor every night.",
  },
  {
    company: "Burgerville",
    role: "Crew Member",
    location: "Centralia, WA",
    dates: "Jun 2020 — Jun 2022",
    summary:
      "Kitchen operations at a fast-paced regional chain — first job, held for two years through high school.",
    bullets: [
      "Ran kitchen stations under rush conditions and cross-trained across roles",
      "Streamlined prep workflows to cut service time during peak periods",
      "Two-year tenure starting at 16 — reliability before it was a resume word",
    ],
    engineeringNote:
      "First exposure to process thinking: prep sequencing, station mise en place, and why small workflow changes compound. The interest in optimization started here.",
  },
];
