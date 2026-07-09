export default function OpenToWorkBadge({ className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      Open to New Opportunities
    </div>
  );
}
