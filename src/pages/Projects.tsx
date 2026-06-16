import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";
import { SectionHead } from "@/components/portfolio/SectionHead";
import { PROJECTS } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section className="px-6 md:px-12 py-20">
      <SectionHead n="03" title="Projects" kicker="what I've built" />

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="group relative rounded-3xl border border-border bg-card p-6 md:p-8 hover:border-accent/60 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {p.year}
                </p>

                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                  {p.name}
                </h3>
              </div>

              <div className="flex gap-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="size-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition"
                >
                  <Github className="size-4" />
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} live`}
                  className="size-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition"
                >
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {p.blurb}
            </p>

            <div className="mt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                / what I did
              </p>

              <ul className="space-y-2">
                {p.did.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border bg-background"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all"
            >
              View project <ArrowUpRight className="size-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
