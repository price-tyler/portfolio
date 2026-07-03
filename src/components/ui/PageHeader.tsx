import { TelemetryTag } from "./TelemetryTag";

/**
 * Standard page intro: telemetry eyebrow, large title, supporting copy.
 * Every route uses this so the site feels like one system, not eight pages.
 */
export function PageHeader({
  code,
  label,
  title,
  lede,
}: {
  code: string;
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mb-14">
      <TelemetryTag code={code} label={label} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {lede && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {lede}
        </p>
      )}
    </header>
  );
}
