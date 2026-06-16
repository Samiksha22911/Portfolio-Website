import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHead } from "@/components/portfolio/SectionHead";
import { SOCIALS } from "@/lib/portfolio-data";

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
      />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `Portfolio message from ${data.get("name") || "Someone"}`
    );

    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );

    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section className="px-6 md:px-12 py-20">
      <SectionHead n="06" title="Get In Touch" kicker="contact" />

      <div className="grid md:grid-cols-12 gap-6">
        <form
          onSubmit={onSubmit}
          className="md:col-span-7 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Full Name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Subject
            </label>

            <textarea
              name="subject"
              required
              rows={3}
              placeholder="Subject"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none"
            />
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Message"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            <Send className="size-4 group-hover:translate-x-0.5 transition" />
            Send Message
          </button>

          {sent && (
            <p className="text-xs text-muted-foreground font-mono">
              Opening your mail client… thanks for reaching out!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}