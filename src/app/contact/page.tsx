import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel } from "@/components/ui/Panel";
import { TodoMarker } from "@/components/ui/TodoMarker";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, LinkedIn, GitHub, and resume download.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Fastest response",
  },
  ...(site.linkedin
    ? [{ label: "LinkedIn", value: site.linkedin, href: site.linkedin, note: "Professional profile" }]
    : []),
  ...(site.github
    ? [{ label: "GitHub", value: site.github, href: site.github, note: "Code" }]
    : []),
  ...(site.resumePdfReady
    ? [{ label: "Resume", value: "resume.pdf", href: "/resume.pdf", note: "PDF download" }]
    : []),
];

export default function ContactPage() {
  const missing = [
    ...(site.linkedin ? [] : ["LinkedIn profile URL → src/data/site.ts"]),
    ...(site.github ? [] : ["GitHub profile URL → src/data/site.ts"]),
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <PageHeader
        code="SYS.07"
        label="Comms"
        title="Contact"
        lede="Recruiting for summer 2027 mechanical or aerospace engineering internships — or want to talk about anything on this site? Reach out."
      />

      <div className="space-y-4">
        {channels.map((c) => (
          <a key={c.label} href={c.href} className="block">
            <Panel interactive className="flex items-center justify-between p-5">
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.18em] text-accent uppercase">
                  {c.label}
                </p>
                <p className="mt-1 font-mono text-sm text-foreground md:text-base">
                  {c.value}
                </p>
              </div>
              <span className="font-mono text-xs text-muted">{c.note} →</span>
            </Panel>
          </a>
        ))}
      </div>

      {missing.length > 0 && (
        <div className="mt-10">
          <TodoMarker items={missing} />
        </div>
      )}

      <p className="mt-10 font-mono text-[0.68rem] tracking-[0.15em] text-muted uppercase">
        Based in {site.location} · {site.coordinates} · Open to relocation
      </p>
    </div>
  );
}
