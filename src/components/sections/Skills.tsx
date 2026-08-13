import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        index="03"
        eyebrow="Technical skills"
        title="The toolkit"
        lead="Grouped by where they sit in the stack. No invented percentages — just what I reach for and why."
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04} className="h-full">
            <div
              onMouseEnter={() => setHovered(group.category)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative flex h-full flex-col bg-surface/40 p-6 transition-colors duration-300",
                hovered === group.category && "bg-surface-raised/70",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px transition-opacity duration-300"
                style={{
                  background: "var(--gradient-accent)",
                  opacity: hovered === group.category ? 1 : 0,
                }}
              />
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold">{group.category}</h3>
                <p className="mono-label">{group.note}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    tabIndex={0}
                    className="cursor-default rounded-md border border-border bg-background/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:border-primary/50 focus-visible:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
