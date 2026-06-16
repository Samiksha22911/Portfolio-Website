import { Code2, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV, SOCIALS } from "@/lib/portfolio-data";

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="md:fixed md:top-0 md:left-0 md:h-screen md:w-72 border-b md:border-b-0 md:border-r border-border bg-background/70 backdrop-blur-xl z-30 flex flex-col">
      <div className="px-8 pt-8 pb-6 flex items-start justify-between gap-3">
        <div>
          <Link
            to="/"
            className="font-display font-bold text-2xl tracking-tight"
          >
            SAMIKSHA<span className="text-accent"></span>
          </Link>

          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-2">
            MAC · 3rd Year · B.Tech
          </p>
        </div>
      </div>

      <nav className="px-8 flex-1 overflow-y-auto scrollbar-hide">
        <ul className="space-y-1">
          {NAV.map((item) => {
            const isActive = pathname === item.to;

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group flex items-center gap-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isActive
                        ? "text-accent opacity-100"
                        : "opacity-60 group-hover:opacity-100 group-hover:text-accent"
                    }`}
                  >
                    {item.n}
                  </span>

                  <span className="font-display tracking-tight text-base">
                    {item.label}
                  </span>

                  <span
                    className={`ml-auto h-px transition-all ${
                      isActive
                        ? "w-10 bg-accent"
                        : "w-4 bg-border group-hover:w-10 group-hover:bg-accent"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-8 py-6 space-y-3 border-t border-border">
        <a
          href={SOCIALS.resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-full bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
        >
          <FileText className="size-4" />
          Resume
        </a>

        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition"
        >
          <Github className="size-4" />
          GitHub
        </a>

        <div className="flex items-center justify-between pt-3">
          <SocialIcon href={SOCIALS.linkedin} label="LinkedIn">
            <Linkedin className="size-4" />
          </SocialIcon>

          <SocialIcon href={SOCIALS.twitter} label="Twitter">
            <Twitter className="size-4" />
          </SocialIcon>

          <SocialIcon href={SOCIALS.leetcode} label="LeetCode">
            <Code2 className="size-4" />
          </SocialIcon>

          <SocialIcon href={SOCIALS.github} label="GitHub">
            <Github className="size-4" />
          </SocialIcon>
        </div>
      </div>
    </aside>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="size-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}