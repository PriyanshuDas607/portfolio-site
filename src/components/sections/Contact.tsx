import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { ArrowUpRight, Check, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.message.trim().length < 12) next.message = "A little more detail helps (12+ chars).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("sending");
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          from_email: values.email,
          message: values.message,
          title: "Portfolio Contact Form",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setState("sent");
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setState("idle");
      toast.error("Failed to send message.", {
        description: "Please try again or email me directly.",
      });
    }
  };

  const field =
    "w-full rounded-md border border-input bg-background/60 px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        index="07"
        eyebrow="Contact"
        title="Let's build something"
        lead="Internships, collaborations, or a question about one of the projects — all welcome."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-8">
            <a
              href={`mailto:${profile.email}`}
              className="group panel flex items-center justify-between gap-4 p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm">{profile.email}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div>
              <p className="mono-label">Elsewhere</p>
              <ul className="mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-4 px-5 py-4 text-sm transition-colors hover:bg-surface-raised/60"
                    >
                      <span className="font-medium">{s.label}</span>
                      <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        {s.handle}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mono-label leading-relaxed">
              Timezone IST (UTC+5:30) · typically replies within a day
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="panel space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mono-label mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(field, errors.name && "border-destructive")}
                  placeholder="Ada Lovelace"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mono-label mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(field, errors.email && "border-destructive")}
                  placeholder="you@company.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mono-label mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(field, "resize-y", errors.message && "border-destructive")}
                placeholder="What are you working on?"
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={state !== "idle"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
            >
              {state === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : state === "sent" ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
            <p aria-live="polite" className="sr-only">
              {state === "sent" ? "Message sent" : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
