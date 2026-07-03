/**
 * Loud placeholder for content the site owner still needs to supply.
 * Deliberately unmissable so nothing ships half-finished by accident.
 */
export function TodoMarker({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="todo-marker">
      <p className="mb-1 font-semibold">CONTENT REQUIRED — Tyler, supply:</p>
      <ul className="list-inside list-disc space-y-0.5 opacity-90">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
