import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, MousePointer2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { HeroCanvas } from "@/components/three/HeroCanvas";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, reduced ? 1 : 0.15]);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 hairline-grid opacity-[0.35]" aria-hidden="true" />
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <HeroCanvas />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent lg:via-background/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-24 pt-28">
        <Fade delay={0}>
          <p className="mono-label flex flex-wrap items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {profile.status}
            <span className="hidden h-px w-6 bg-border-strong sm:block" aria-hidden="true" />
            <span className="hidden sm:inline">{profile.location}</span>
          </p>
        </Fade>

        <Fade delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02]">
            {profile.name},
            <br />
            <span className="text-gradient">{profile.role}</span>
          </h1>
        </Fade>

        <Fade delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="block text-foreground/90">{profile.headline}</span>
            <span className="mt-3 block">{profile.intro}</span>
          </p>
        </Fade>

        <Fade delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </Fade>

        <Fade delay={0.32}>
          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border sm:grid-cols-4">
            {profile.metrics.map((m) => (
              <div
                key={m.label}
                className="flex min-h-[5.5rem] flex-col justify-between bg-surface/50 px-4 py-4 backdrop-blur-sm"
              >
                <dt className="mono-label leading-relaxed">{m.label}</dt>
                <dd className="mt-2 font-display text-xl font-semibold">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Fade>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <a
          href="#about"
          className="mono-label group inline-flex flex-col items-center gap-2 transition-colors hover:text-foreground"
        >
          <MousePointer2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Scroll
          <span className="relative block h-8 w-px overflow-hidden bg-border-strong" aria-hidden="true">
            <span className="absolute inset-x-0 top-0 h-3 animate-[scrollcue_1.8s_ease-in-out_infinite] bg-primary" />
          </span>
        </a>
      </div>

      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}60%{transform:translateY(300%)}100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}

function Fade({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
