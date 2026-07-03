import type { ReactNode } from "react";

/**
 * Bordered surface with CAD-style crosshair corner ticks.
 * The base container for cards and grouped content across the site.
 */
export function Panel({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`panel-ticks border border-line bg-surface/60 backdrop-blur-sm ${
        interactive
          ? "transition-colors duration-200 hover:border-line-strong hover:bg-raised/70"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
