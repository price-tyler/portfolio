"use client";

import { useEffect, useState } from "react";

/**
 * Light/dark switch. Dark is the site default; the choice persists in
 * localStorage and is applied pre-paint by the inline script in layout.tsx,
 * so there's no flash of the wrong theme on load.
 */
export function ThemeToggle() {
  // null until mounted — avoids a hydration mismatch, since the server
  // can't know what's in localStorage.
  const [light, setLight] = useState<boolean | null>(null);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* storage unavailable (private mode) — theme still switches for the session */
    }
    setLight(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="font-mono text-[0.68rem] tracking-[0.15em] text-muted transition-colors hover:text-accent"
    >
      {light === null ? "[ ◐ ]" : light ? "[ DARK ]" : "[ LIGHT ]"}
    </button>
  );
}
