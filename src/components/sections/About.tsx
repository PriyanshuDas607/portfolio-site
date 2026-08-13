import { about } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        index="01"
        eyebrow="Intro"
        title="Engineering with intent, not volume."
        lead="A short version of how I work and what I'm drawn to."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {about.story.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                <span className="text-foreground">{p.slice(0, 0)}</span>
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="pt-4">
              <p className="mono-label">Currently exploring</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-border sm:grid-cols-2">
          {about.strengths.map((s, i) => (
            <li key={s.title} className="bg-surface/40">
              <Reveal delay={i * 0.05} className="group h-full p-5 transition-colors hover:bg-surface-raised/60">
                <p className="mono-label text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
