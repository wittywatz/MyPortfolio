# Portfolio Revamp — Design

**Date:** 2026-08-13
**Owner:** Watson Agbramu
**Repo:** `wittywatz/MyPortfolio`
**Status:** Approved for planning

## Problem

The current site is a Create React App project from 2021 (`react-scripts` 2.1.3, React 17) styled with Bootstrap 4, jQuery, and tachyons, with a `react-particles-js` background and a Redux store used only to hold static content. The visual language — particle field, Bootstrap defaults, animated percentage skill bars, embedded YouTube project demos — reads as roughly a decade old. The featured projects are from 2021 and their Heroku live links are dead (Heroku removed free dynos in 2022). The content is also stale relative to Watson's current work in LLM products, multi-tenant data platforms, and event-driven architecture.

## Goal

A complete rebuild: a modern, dark-first single-page portfolio that positions Watson as a senior data-platform and AI systems engineer, with current content drawn from his résumé and LinkedIn export, and a codebase that is trivial to update going forward.

## Decisions

These were settled during brainstorming and are not open in planning:

| Decision | Choice |
| --- | --- |
| Foundation | Fresh rebuild — Vite + React 19 + TypeScript + Tailwind CSS v4 |
| Visual direction | "Dark technical / product-grade" — near-black, soft gradient glow, tight sans type, capability cards |
| Theme | Light/dark toggle; **dark by default**; choice persisted |
| Experience depth | LipDub AI and Arctic AI detailed; everything else in a compact "Previously" strip |
| Role list | Mirrors the résumé exactly — ThinkLP is not shown; every role displays its dates |
| Availability | Hero shows an "Open to new opportunities" status pill |
| Projects | The three résumé projects only |
| Voice Dictation visual | Hand-built SVG architecture diagram |
| Deployment | Unchanged — GitHub Pages via `npm run deploy` |

## Architecture

### Stack

Replace the entire `src/` tree and the build toolchain.

**Added:** `vite`, `@vitejs/plugin-react`, `react@19`, `react-dom@19`, `typescript`, `tailwindcss@4`, `@tailwindcss/vite`, `framer-motion`, `lucide-react`.

**Removed:** `react-scripts`, `bootstrap`, `jquery`, `popper.js`, `tachyons`, `redux`, `react-redux`, `react-particles-js`, `react-player`, `react-typical`, `web-vitals`, and the `@testing-library/*` packages.

`gh-pages` stays as a devDependency. `vite.config.ts` sets `base: '/MyPortfolio/'` to match the existing GitHub Pages path.

The checked-in `build/` directory is deleted from the repo and added to `.gitignore`; Vite outputs to `dist/`, and the `deploy` script targets `dist`.

### Content model

All page content lives in typed data modules under `src/content/`, exported as plain arrays and objects. No state management library; no content inside component bodies.

- `profile.ts` — name, title, location, lede, contact links, availability status
- `experience.ts` — two `DetailedRole` entries and a list of `PreviousRole` entries
- `projects.ts` — three `Project` entries
- `skills.ts` — six named categories, each a string array
- `education.ts` — two degrees plus the awards line

Each module exports a TypeScript type alongside its data so a malformed entry is a compile error rather than a broken render.

### Component structure

```
src/
  main.tsx
  App.tsx
  content/          profile.ts experience.ts projects.ts skills.ts education.ts
  components/
    Nav.tsx  ThemeToggle.tsx
    Hero.tsx  Capabilities.tsx
    Work.tsx  ProjectCard.tsx  VoiceArchitectureDiagram.tsx
    Experience.tsx  Stack.tsx  About.tsx  Contact.tsx  Footer.tsx
    Section.tsx  Reveal.tsx
  hooks/
    useTheme.ts  useScrolled.ts
  styles/
    theme.css
```

`Section.tsx` owns section chrome — id anchor, heading, eyebrow label, spacing — so every section is visually consistent and no component reimplements it. `Reveal.tsx` wraps children in the scroll-entry animation and is the single place motion is defined, which is also the single place `prefers-reduced-motion` is honoured. Each component reads from `src/content/` and renders; none of them hold content.

### Theming

Colors are CSS custom properties defined in `styles/theme.css` under `:root` and `[data-theme='light']`, surfaced to Tailwind through a v4 `@theme` block. `useTheme` reads `localStorage`, falls back to dark, and sets `data-theme` on `<html>`.

An inline script in `index.html` applies the stored theme before first paint to prevent a flash of the wrong theme.

Light mode is designed as its own palette — warm off-white surfaces, adjusted accent saturation for AA contrast on light backgrounds — not a mechanical inversion of the dark values.

### Motion

Framer Motion, used sparingly:

- Sections fade and rise 16px on scroll entry, once, via `whileInView`
- Project and capability cards lift on hover
- Hero gradient animates slowly and continuously
- The voice architecture diagram draws its connectors in on entry

Every one of these is disabled when `prefers-reduced-motion: reduce` is set. No parallax, no typewriter effect, no particle field.

## Page composition

**Nav** — sticky; transparent over the hero, acquiring a translucent blurred background and hairline border once scrolled. Brand mark, anchor links (Work, Experience, Stack, About), theme toggle, and a Résumé button linking the PDF. Collapses to a slide-down menu below 768px.

**Hero** — status pill reading "Open to new opportunities" with a pulsing indicator; gradient-clipped headline; a two-line lede covering 8+ years across SaaS, media, and fintech; primary CTA to Work and secondary to the résumé. Background is a radial glow over a faint grid.

**Capabilities** — three cards immediately below the hero, each a label, a title, and one sentence. Every claim must be backed by a role or project shown elsewhere on the page:

1. *LLM products* — production RAG and agentic systems: LangGraph, LangChain, vector search, evals. Backed by LipDub AI and Arctic AI.
2. *Data platforms* — enterprise pipelines on Azure Databricks, Data Factory, and Data Lake, consolidating multi-source ingestion. Backed by Arctic AI.
3. *Cloud and infrastructure* — AWS and event-driven services, Terraform, ArgoCD, CI/CD. Backed by LipDub AI and Neo Financial.

Note the second card is deliberately worded around the Arctic AI Azure platform rather than dbt/Snowflake/Airbyte, since the role that work belongs to is not shown on the site.

**Selected Work** — three large cards in alternating layout. Each card carries name, one-line summary, stack tags, two to three outcome bullets, and a media slot.

The media slot renders, in priority order: a GIF or screenshot from `public/projects/` when one exists; the architecture diagram for the voice project; otherwise a styled typographic panel. Cards are built so adding an asset later is a one-line content change with no component edits.

Projects:

1. **Natural-Language Business Intelligence Platform** — FastAPI, LangGraph, Next.js, Celery, Redis, Stripe. Multi-tenant; a LangGraph agent translates plain-English questions into SQL across Postgres, MySQL, SQLite, and Snowflake, picks a visualization, and assembles shareable dashboards. Semantic business-term layer, natural-language alerts, automated anomaly and root-cause analysis, usage-based billing.
2. **On-Device Voice Dictation (macOS, Android)** — Rust, Swift, Kotlin, whisper.cpp, Silero VAD, UniFFI. Push-to-talk dictation to the cursor in any application, with recognition and cleanup entirely on device. Media slot uses the architecture diagram.
3. **AI-Assisted Strength Training App** — React Native, Expo, SQLite, Supabase, FastAPI, TypeScript. Offline-first; converts a conversational intake into a multi-week program that auto-progresses weights from logged performance, with LLM calls constrained to the edges of a deterministic training engine and every model output validated against program invariants.

**Experience** — two detailed roles with dates, company, title, and résumé bullets:

- *Senior Software Engineer, LipDub AI (MARZ)* — Sept 2024 – Aug 2026
- *Senior Software Developer, Arctic AI* — Feb 2022 – Sept 2024

Below them, a **Previously** strip. Each entry is company, role, **date range**, and one line of context:

- *Web Application Developer, Divergence Neuro* — Aug 2021 – Oct 2021
- *Software Developer, Neo Financial* — Jun 2021 – Aug 2021
- *Data Scientist (M.Eng Research), University of Waterloo* — Sept 2019 – Dec 2020

The site's role list mirrors the résumé exactly. **ThinkLP is not shown**, matching the résumé's own omission. This keeps the site and the PDF telling an identical, gapless, non-overlapping story — which is what a reader comparing the two is checking for. Filament AI, Finklassic, University of Ilorin, and Alcon appear in the LinkedIn export but not the résumé, and so are not shown either.

**Stack** — six categories rendered as tag groups, taken verbatim from the résumé: Languages, AI, Backend, Frontend, Data, Infra.

**About** — profile photo, three tightened paragraphs, and a single line covering the Waterloo M.Eng (Distinction), the Federal University Oye B.Eng (First Class), and the graduating-student awards.

**Contact / Footer** — email, LinkedIn, GitHub, résumé, and a copyright line. `mailto:` only; there is no contact form, because GitHub Pages has no backend to receive one.

## Explicitly removed

- **Percentage skill bars.** Unverifiable, self-assessed, and a strong visual marker of a dated portfolio. Replaced by categorized tags.
- **Certifications section.** Entries such as "GitHub Quick Tips" and "React.js Essential Training" undercut a Waterloo M.Eng and production LLM work. The awards are retained as one line in About.
- **Dead project links.** No Heroku URLs, no embedded YouTube demos.
- **Particle background.**

## Accessibility and metadata

Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, ordered headings. Visible focus rings on every interactive element. AA contrast verified in both themes. Alt text on all images; the architecture diagram gets a `<title>`, `<desc>`, and `role="img"`.

`index.html` gets a real title, description, canonical URL, and Open Graph and Twitter card tags with an image — the current file still ships CRA's default "React App" title.

## Verification

No unit test suite. This is a static content site with no business logic; tests would assert that data files contain their own contents.

Verification is instead:

1. `npm run build` completes with no TypeScript or Vite errors
2. The built site is served and driven in a real browser at 375px, 768px, and 1280px
3. Both themes checked at each breakpoint, including the no-flash behaviour on reload
4. Every link and anchor followed and confirmed to resolve
5. Keyboard-only pass through the full page
6. `prefers-reduced-motion` forced on, confirming animation is suppressed

No completion claim is made before these have actually been run and their output observed.

## Out of scope

- Blog, MDX, or case-study subpages
- Custom domain
- Analytics
- Contact form backend
- Moving off GitHub Pages

## Open items

Watson may supply GIFs or screenshots for the BI platform and strength-training projects. The card is designed to accept them without component changes; they are not a prerequisite for shipping.
