import { SectionHead } from "@/components/portfolio/SectionHead";
import { TIMELINE } from "@/lib/portfolio-data";

export default function Timeline() {
  return (
    <section className="px-6 md:px-12 py-20">
      <SectionHead n="04" title="Growth Timeline" kicker="timeline" />

      <ol className="relative border-l-2 border-border ml-3 space-y-10">
        {TIMELINE.map((e, i) => (
          <li key={e.when} className="pl-8 relative group">
            <span className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-background border-2 border-accent group-hover:scale-125 transition-transform" />

            <span
              className="absolute -left-[5px] top-[14px] size-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />

            <div className="rounded-2xl border border-border bg-card p-5 hover:border-accent/60 transition-colors">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                {e.when}
              </p>

              <h3 className="font-display text-2xl font-medium">
                {e.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {e.place}
              </p>

              <p className="mt-2 text-foreground/80 max-w-2xl">
                {e.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}