/**
 * Mono section designator in the mission-control style, e.g. "SYS.02 // PROJECTS".
 * Used as the eyebrow above every major heading for visual consistency.
 */
export function TelemetryTag({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[0.7rem] tracking-[0.25em] text-accent uppercase">
      {code}
      <span className="text-muted/60 mx-2">{"//"}</span>
      <span className="text-muted">{label}</span>
    </p>
  );
}
