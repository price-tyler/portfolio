"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/**
 * Sticky site header: mono wordmark, indexed nav links, active-route
 * highlighting, and a plain disclosure menu on mobile.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.2em] text-foreground hover:text-accent transition-colors"
          onClick={() => setOpen(false)}
        >
          T.PRICE
          <span className="ml-2 text-[0.65rem] text-muted">/ ME·AERO</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <ThemeToggle />
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group font-mono text-[0.72rem] tracking-[0.12em] uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="mr-1 text-[0.6rem] opacity-50">
                    {link.index}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="font-mono text-xs tracking-widest text-muted hover:text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-background/95 md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 font-mono text-sm tracking-[0.12em] uppercase ${
                    isActive(link.href) ? "text-accent" : "text-muted"
                  }`}
                >
                  <span className="mr-2 text-xs opacity-50">{link.index}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
