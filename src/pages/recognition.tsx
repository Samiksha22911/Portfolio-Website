import { SectionHead } from "@/components/portfolio/SectionHead";
import { RECOG } from "@/lib/portfolio-data";

export default function Recognition() {
  return (
    <section className="px-6 md:px-12 py-20">
      <SectionHead n="05" title="Recognition" kicker="highlights" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {RECOG.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-8 hover:border-accent/60 hover:-translate-y-1 transition-all"
          >
            <Icon className="size-7 mb-6 text-accent" />

            <h3 className="font-display text-xl font-medium mb-2">
              {title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}