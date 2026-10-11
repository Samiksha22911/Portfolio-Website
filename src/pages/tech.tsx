import { SectionHead } from "@/components/portfolio/SectionHead";
import { TECH_STACK } from "@/lib/portfolio-data";

export default function Tech() {
  return (
    <section className="px-6 md:px-12 py-20">
      <SectionHead n="02" title="Tech Stack" kicker="technology" />

      <div className="grid md:grid-cols-2 gap-5">
        {TECH_STACK.map((group) => (
          <div
            key={group.title}
            className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl font-medium uppercase tracking-wide">
                {group.title}
              </h3>

              <span className="font-mono text-xs text-muted-foreground">
                {group.items.length.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.items.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-background border border-border hover:border-accent hover:-translate-y-0.5 transition-all"
                  title={t.name}
                >
                  {t.slug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${t.slug}/${t.color ?? "ffffff"}`}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      className="size-4"
                    />
                  ) : (
                    <span className="size-4 grid place-items-center">
                      <span className="size-1.5 rounded-full bg-accent" />
                    </span>
                  )}

                  <span className="font-mono text-xs">{t.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}