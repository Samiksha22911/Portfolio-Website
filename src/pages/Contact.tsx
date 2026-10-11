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

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("_honey")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");

    try {
      // FormSubmit forwards the message to SOCIALS.email (no backend needed).
      const res = await fetch(
        `https://formsubmit.co/ajax/${SOCIALS.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _replyto: email,
            _subject: `Portfolio: ${subject || `message from ${name}`}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const json = await res.json().catch(() => null);
      if (!res.ok || (json && json.success === "false")) {
        throw new Error("send failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      // Fallback: open the visitor's mail app with everything pre-filled.
      const mailSubject = encodeURIComponent(
        subject || `Portfolio message from ${name || "Someone"}`
      );
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${SOCIALS.email}?subject=${mailSubject}&body=${body}`;
      setStatus("error");
    }
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

            <input
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
            />
          </div>

          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

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
            disabled={status === "sending"}
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="size-4 group-hover:translate-x-0.5 transition" />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          <p
            role="status"
            aria-live="polite"
            className="text-xs text-muted-foreground font-mono min-h-4"
          >
            {status === "sent" && "Message sent — thanks for reaching out!"}
            {status === "error" &&
              "Couldn't send directly, so your mail app is opening instead."}
          </p>
        </form>
      </div>
    </section>
  );
}