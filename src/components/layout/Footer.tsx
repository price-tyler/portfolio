import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-[0.68rem] tracking-[0.15em] text-muted uppercase">
          <p>
            {site.name} — {site.location}
          </p>
          <p className="mt-1 opacity-60">{site.coordinates}</p>
        </div>

        <div className="flex items-center gap-5 font-mono text-[0.68rem] tracking-[0.15em] uppercase">
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
          <Link
            href="/contact"
            className="text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
