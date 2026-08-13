# Digital Ascent

Build a premium, immersive 3D portfolio website for a Computer Science student. This should feel like a real high-end interactive developer portfolio, NOT a generic template and NOT a cartoon/game-like site.

Core sections/navigation: Landing/Hero, Intro/About, Education, Technical Skills, Projects, Achievements, Resume, Contact.

Visual direction:
- Dark futuristic black/charcoal base with restrained electric blue/cyan/violet accents, subtle glassmorphism, fine borders, soft glow, depth and cinematic lighting.
- Strong typography hierarchy, generous whitespace, editorial premium feel.
- Use real WebGL/3D where it adds value: an interactive 3D hero scene (for example an abstract low-poly/digital computer-science-inspired object, particles, orbital geometry, or futuristic data structure) that reacts smoothly to pointer movement and scroll. It must be elegant and realistic rather than a gimmicky 3D game.
- Use React Three Fiber / Three.js and supporting libraries if appropriate. Optimize for performance, lazy-load heavy 3D, respect prefers-reduced-motion, and provide a graceful fallback.
- Smooth scrolling and tasteful motion using Framer Motion or equivalent. Animations should be subtle, fast, and intentional.

UX requirements:
- Responsive desktop/tablet/mobile design.
- Sticky minimal navigation with active section state.
- Hero should immediately communicate: Computer Science Student + aspiring software/AI engineer/developer, with concise CTA buttons for View Projects, Resume, Contact.
- Include a visually interesting scroll cue and small technical/status details to make it feel like an engineer's portfolio.
- About/Intro should tell a concise story and show strengths/interests.
- Education should be presented as a polished timeline/card system.
- Technical Skills should have categorized skill groups and interactive visual treatment without fake proficiency percentages.
- Projects should be the strongest content section: large premium project cards with technology tags, short problem/solution descriptions, GitHub and live-demo CTAs, and hover/scroll interactions. Use placeholder project data that is easy to replace.
- Achievements should support certificates, hackathons, milestones, contributions, etc. with placeholder data.
- Resume section should have a strong downloadable/view-resume CTA with a placeholder resume path.
- Contact should have a polished contact form UI, email/social links, and a clear call to action. Frontend validation is enough initially; do not require backend unless needed.

Engineering requirements:
- TypeScript, clean reusable components, semantic HTML, accessible keyboard navigation, visible focus states, good contrast, SEO metadata, and polished loading/error states.
- Avoid excessive gradients, excessive rounded cards, huge text that breaks mobile layouts, and generic SaaS styling.
- Do not use stock photos unless truly necessary. Prefer CSS/3D/typography and abstract visuals.
- Make all content easy to edit from centralized data/config files.
- Ensure there are no console errors, broken links, overflow issues, or inaccessible controls.

Create the complete landing page and all sections in one polished single-page experience. Make the initial implementation visually impressive enough to serve as the foundation for a real portfolio, with thoughtful micro-interactions and a cohesive design system.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
