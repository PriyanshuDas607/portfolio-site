import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

const title = "Priyanshu Das — CS (AI & ML) Student & Full Stack Developer";
const description =
  "Portfolio of Priyanshu Das — computer science (AI & ML) student, full stack developer, AI enthusiast and cybersecurity learner: projects, skills and achievements.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 hairline-grid opacity-[0.14]"
            aria-hidden="true"
          />
          <div className="relative">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Resume />
            <Contact />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
