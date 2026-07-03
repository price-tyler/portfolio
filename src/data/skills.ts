/**
 * Skills grouped by discipline. Proficiency is communicated with honest
 * tiers instead of meaningless percentage bars:
 *
 *  - "deployed"  — used to ship something real; can be interrogated on it
 *  - "working"   — used in coursework or projects; productive with a reference
 *  - "developing" — actively learning; on the flight plan, not yet proven
 *
 * Each skill can cite `evidence` — the project or context that proves it.
 * Recruiters trust claims with receipts.
 */

export type SkillTier = "deployed" | "working" | "developing";

export interface Skill {
  name: string;
  tier: SkillTier;
  evidence?: string;
}

export interface SkillGroup {
  discipline: string;
  /** Mono index label, e.g. "SK.01" */
  index: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    discipline: "Programming",
    index: "SK.01",
    blurb:
      "Python is the primary tool — used for automation, data handling, and AI integration, not just class exercises.",
    skills: [
      {
        name: "Python",
        tier: "deployed",
        evidence:
          "Job search tool: web scraping, SQLite storage, LLM scoring pipeline, Excel/docx generation",
      },
      {
        name: "HTML / CSS / JavaScript",
        tier: "deployed",
        evidence: "Responsive client-facing business sites, built from scratch",
      },
      { name: "SQL (SQLite)", tier: "working", evidence: "Jobs database in the search tool" },
      { name: "C#", tier: "developing", evidence: "Unity cellular-automata experiments" },
      { name: "MATLAB", tier: "developing", evidence: "Upcoming in the USU ME curriculum" },
      { name: "LaTeX", tier: "working", evidence: "Technical documents and coursework" },
    ],
  },
  {
    discipline: "Mechanical Design & CAD",
    index: "SK.02",
    blurb:
      "SolidWorks fundamentals with a CSWA certification in progress — the goal is verified proficiency, not a resume keyword.",
    skills: [
      {
        name: "SolidWorks",
        tier: "working",
        evidence: "Part modeling and basic assemblies; CSWA exam prep underway",
      },
      {
        name: "Design for cost",
        tier: "working",
        evidence: "Pickleball launcher: full BOM held under $100",
      },
      { name: "Engineering drawings / GD&T", tier: "developing" },
      { name: "Adobe Illustrator", tier: "working", evidence: "Vector graphics and layout work" },
    ],
  },
  {
    discipline: "Analysis & Mathematics",
    index: "SK.03",
    blurb:
      "The strongest raw discipline — the math sequence and physics core of an aerospace-track ME degree, carried at a 4.0.",
    skills: [
      {
        name: "Calculus sequence",
        tier: "working",
        evidence: "Calc 2 complete, Calc 3 in progress at USU",
      },
      { name: "Newtonian mechanics", tier: "working", evidence: "Physics 1–2 with lab work" },
      {
        name: "Projectile & rigid-body dynamics",
        tier: "working",
        evidence: "Launch-velocity and trajectory predictions for the pickleball launcher",
      },
      {
        name: "Excel data analysis",
        tier: "deployed",
        evidence: "Scoring exports and outreach tracking workbooks",
      },
    ],
  },
  {
    discipline: "Electromechanical Systems",
    index: "SK.04",
    blurb:
      "Hands-on 12V DC power and motor control, learned by building — not by watching videos about building.",
    skills: [
      {
        name: "DC motor sizing & selection",
        tier: "working",
        evidence: "775-class motor analysis: RPM → surface speed → launch velocity",
      },
      {
        name: "PWM motor control",
        tier: "working",
        evidence: "BTS7960 H-bridge drivers in the launcher power system",
      },
      { name: "Battery power systems", tier: "working", evidence: "12V SLA sizing and charging" },
      { name: "Microcontrollers", tier: "developing", evidence: "Next iteration of launcher controls" },
    ],
  },
  {
    discipline: "Software & AI Tooling",
    index: "SK.05",
    blurb:
      "Comfortable wiring modern AI into real workflows — locally-hosted models doing useful work, not chatbot demos.",
    skills: [
      {
        name: "LLM integration",
        tier: "deployed",
        evidence: "Ollama-hosted model scoring hundreds of job listings against weighted criteria",
      },
      {
        name: "Web scraping",
        tier: "deployed",
        evidence: "Indeed / LinkedIn / USAJobs scrapers with structured storage",
      },
      { name: "Git / GitHub", tier: "working" },
      { name: "VS Code / Jupyter", tier: "working" },
    ],
  },
  {
    discipline: "Operations & Communication",
    index: "SK.06",
    blurb:
      "Three high-throughput jobs and an Eagle Scout project: process discipline, reliability, and leading volunteers who don't have to listen to you.",
    skills: [
      {
        name: "Process optimization",
        tier: "deployed",
        evidence: "Throughput-driven work at UPS and Burgerville",
      },
      {
        name: "Project leadership",
        tier: "deployed",
        evidence: "Eagle Scout service project: scope, budget, volunteers, delivery",
      },
      { name: "Technical documentation", tier: "working", evidence: "This site and its project reports" },
      { name: "Client communication", tier: "working", evidence: "Freelance web work for local businesses" },
    ],
  },
];

export const tierLabels: Record<SkillTier, { label: string; description: string }> = {
  deployed: {
    label: "Deployed",
    description: "Used to ship something real",
  },
  working: {
    label: "Working",
    description: "Productive in coursework and projects",
  },
  developing: {
    label: "Developing",
    description: "Actively learning now",
  },
};
