import { education } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader
        index="02"
        eyebrow="Education"
        title="Academic track"
        lead="Formal foundations, plus the coursework and roles that shaped how I build."
      />

      <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-10">
        {education.map((item, i) => (
          <li key={item.institution + item.period} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-6 h-2 w-2 rounded-full sm:-left-[2.9rem]"
              style={{
                background: item.current ? "var(--gradient-accent)" : "var(--color-border-strong)",
                boxShadow: item.current ? "0 0 0 4px oklch(0.79 0.14 200 / 0.15)" : undefined,
              }}
            />
            <Reveal delay={i * 0.06}>
              <article className="panel group p-6 transition-colors hover:border-border-strong">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="mono-label text-primary">{item.period}</p>
                  {item.current ? (
                    <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-widest text-primary">
                      Ongoing
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.credential}</h3>
                <p className="mt-1 text-sm text-foreground/80">{item.institution}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
