import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        index="04"
        eyebrow="Selected work"
        title="Projects, and the problems behind them"
        lead="Each one started with something that annoyed me or something I didn't understand well enough."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.05}
            className={cn(p.featured ? "lg:col-span-2" : undefined)}
          >
            <ProjectCard project={p} large={!!p.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, large }: { project: Project; large: boolean }) {
  return (
    <article
      className={cn(
        "group panel relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong sm:p-8",
        large && "lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-10",
      )}
      style={{ boxShadow: "var(--glow-soft)" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="mono-label text-primary">{project.kind}</p>
          <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
          <p className="mono-label">{project.year}</p>
        </div>

        <h3 className={cn("mt-4 font-semibold", large ? "text-3xl sm:text-4xl" : "text-2xl")}>
          {project.title}
        </h3>

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="mono-label">Problem</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="mono-label">Approach</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-foreground/85">
              {project.solution}
            </dd>
          </div>
        </dl>
      </div>

      <div className={cn("mt-6 flex flex-col justify-between gap-6", large && "lg:mt-0")}>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
