import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.jpg";
import { SectionHead } from "@/components/portfolio/SectionHead";

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 hover:border-accent transition-colors">
      <p className="font-display text-3xl md:text-4xl font-medium">{n}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-20 pb-20">
      <SectionHead n="01" title=" Who Am I ?" kicker="About" />

      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8"></div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 md:sticky md:top-10">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] ring-1 ring-border bg-secondary group shadow-[var(--shadow-glow)]">
            <img
              src={portrait}
              alt="Portrait of SAMIKSHA"
              width={896}
              height={1152}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                B.Tech · MAC · 3rd Year
              </p>

              <p className="font-display text-2xl font-medium mt-1">
                Mathematics &amp; Computing
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8">
          <p className="font-display text-xl md:text-2xl leading-[1.3] tracking-tight">
            I'm Samiksha Sharma, currently pursuing a Bachelor's degree in
            Mathematics & Computing at Madhav Institute of Technology & Science
            (MITS), Gwalior. With a strong foundation in web development and
            problem-solving, I enjoy building scalable and user-centric
            applications that address real-world challenges.
            <br />
            <br />
            My expertise spans modern web technologies including React.js,
            Next.js, Node.js, Express.js, MongoDB, and RESTful APIs, along with
            proficiency in programming languages such as C++, Python,
            JavaScript, and SQL.
            <br />
            <br />
            Through hands-on projects like a Faculty Research Impact Portal,
            Hospital Management System, and Music Analytics Dashboard, I have
            gained practical experience in full-stack development,
            authentication systems, database management, and data visualization.
            <br />
            <br />
            Beyond development, I actively strengthen my problem-solving
            abilities through Data Structures & Algorithms and competitive
            programming, having solved 290+ coding problems across various
            platforms.
            <br />
            <br />
            I am also an Open Source Contributor at GSSoC'26 and continuously
            seek opportunities to collaborate, learn, and contribute to
            impactful software projects.
            <br />
            <br />
            My journey as a developer is driven by curiosity, continuous
            learning, and a passion for creating technology that delivers
            meaningful user experiences and solves real-world problems.
          </p>

          <div>
            <h3 className="font-semibold mb-4">Following are my expertise:</h3>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Full-Stack Web Development using React.js, Next.js, Node.js,
                Express.js, and MongoDB.
              </li>

              <li>
                Strong understanding of Data Structures & Algorithms, DBMS,
                Operating Systems, and Object-Oriented Programming.
              </li>

              <li>
                Experience building scalable applications with authentication,
                role-based access control, REST APIs, and responsive user
                interfaces.
              </li>

              <li>
                Skilled in data visualization and dashboard development using
                Chart.js and modern frontend technologies.
              </li>

              <li>
                Active Open Source Contributor and passionate learner focused on
                software engineering best practices and continuous growth.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-glow)]"
            >
              Get in touch
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            >
              See projects
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2"></div>
        </div>
      </div>
    </section>
  );
}