import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="section-shell">
      <Reveal>
        <div className="panel relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 hairline-grid opacity-30" aria-hidden="true" />
          <div
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "var(--gradient-accent)", opacity: 0.14 }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mono-label flex items-center gap-3">
                <span className="text-primary">06</span>
                <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
                Resume
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-[2.5rem]">
                One page, no filler.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Coursework, projects, internships and tooling — formatted for both humans and
                applicant tracking systems. Updated regularly.
              </p>
              <p className="mono-label mt-6">
                PDF · A4 · last updated Aug 2026
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                View in browser
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
