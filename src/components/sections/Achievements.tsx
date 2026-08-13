import { achievements } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { Award, GitPullRequest, ScrollText, Terminal, Trophy, Flag } from "lucide-react";

const icons: Record<string, typeof Award> = {
  Hackathon: Trophy,
  "Open source": GitPullRequest,
  Certificate: ScrollText,
  Competitive: Terminal,
  Milestone: Flag,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader
        index="05"
        eyebrow="Achievements"
        title="Recognition & milestones"
        lead="Competitions, certifications, contributions and the moments that moved things forward."
      />

      <ul className="grid gap-px overflow-hidden rounded-lg border border-border sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.category] ?? Award;
          return (
            <li key={a.title} className="bg-surface/40">
              <Reveal delay={i * 0.04} className="group h-full">
                <div className="flex h-full flex-col p-6 transition-colors hover:bg-surface-raised/60">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/50 text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mono-label">{a.year}</p>
                  </div>
                  <p className="mono-label mt-5">{a.category}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-xs text-primary/90">{a.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
