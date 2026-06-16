export function SectionHead({
  n,
  title,
  kicker,
}: {
  n: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-10 border-b border-border pb-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
          / {n} {kicker}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}
