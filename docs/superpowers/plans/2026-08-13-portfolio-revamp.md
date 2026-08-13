# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2021 Create React App portfolio with a dark-first, modern single-page site built on Vite, React 19, TypeScript, and Tailwind CSS v4, carrying Watson Agbramu's current résumé content.

**Architecture:** A single scrolling page composed of independent section components, each reading from typed data modules in `src/content/`. No state management library — the only runtime state is the theme, held in a `useTheme` hook backed by `localStorage` and expressed as a `data-theme` attribute on `<html>`. Two shared primitives, `Section` and `Reveal`, own all section chrome and all motion respectively, so spacing and animation are defined in exactly one place each.

**Tech Stack:** Vite 7, React 19, TypeScript 5, Tailwind CSS v4 (`@tailwindcss/vite`), Framer Motion 12, lucide-react, `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`. Deployed to GitHub Pages with `gh-pages`.

**Spec:** `docs/superpowers/specs/2026-08-13-portfolio-revamp-design.md`

## Global Constraints

- Deployment path is unchanged: `homepage` stays `http://wittywatz.github.io/MyPortfolio`, and `vite.config.ts` must set `base: '/MyPortfolio/'`. Any absolute asset reference must go through `import.meta.env.BASE_URL`.
- Dark theme is the default. A visitor with no stored preference sees dark.
- No flash of the wrong theme on load — the stored theme is applied by an inline script in `index.html` before first paint.
- All colors are CSS custom properties. No hard-coded hex values in component files.
- Every motion effect is suppressed under `prefers-reduced-motion: reduce`.
- The role list mirrors the résumé exactly. **ThinkLP, Filament AI, Finklassic, University of Ilorin, and Alcon must not appear anywhere on the site.**
- Every role displays its date range, including entries in the "Previously" strip.
- No percentage skill bars. No certifications section. No Heroku links. No embedded video. No particle background.
- Contrast must meet WCAG AA in both themes. Every interactive element has a visible focus ring.
- There is no unit test suite. Each task's verification is a typecheck/build step plus, where the task produces visible output, a browser check. **Do not claim a task complete without running its verification commands and observing the output.**
- Two dependencies are added beyond the spec's list: `@fontsource-variable/inter` and `@fontsource-variable/jetbrains-mono`. These are self-hosted font packages — no external CDN, no network request at runtime. This is a deliberate deviation, recorded here.

---

### Task 1: Scaffold the new toolchain

Replaces Create React App with Vite. At the end of this task the old stack is gone, `npm run build` succeeds, and the browser shows a dark themed page with a single heading.

**Files:**
- Create: `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/styles/theme.css`
- Modify: `package.json`, `.gitignore`
- Delete: entire `src/` legacy tree, `build/`, `public/index.html`, `public/manifest.json`, `public/logo192.png`, `public/logo512.png`, `public/homepage.png`

**Interfaces:**
- Consumes: nothing
- Produces: a working `npm run dev` / `npm run build` / `npm run deploy` cycle; `src/styles/theme.css` importing Tailwind; `App.tsx` as the composition root that later tasks add sections to.

- [ ] **Step 1: Preserve the two assets worth keeping**

The profile photo and résumé PDF must survive the deletion of `src/`.

```bash
mkdir -p src/assets
cp src/components/images/profile.jpg src/assets/profile.jpg
cp src/static/Resume.pdf src/assets/Resume.pdf
ls -la src/assets/
```

Expected: both files listed, non-zero size.

- [ ] **Step 2: Delete the legacy source tree and build output**

```bash
git rm -r --cached build > /dev/null
rm -rf build src/components src/actions src/reducers src/static src/index.js
rm -f public/index.html public/manifest.json public/logo192.png public/logo512.png public/homepage.png
ls src public
```

Expected: `src` contains only `assets`; `public` contains only `favicon.ico` and `robots.txt`.

- [ ] **Step 3: Rewrite package.json**

```json
{
  "name": "myportfolio",
  "version": "2.0.0",
  "private": true,
  "type": "module",
  "homepage": "http://wittywatz.github.io/MyPortfolio",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@fontsource-variable/inter": "^5.1.1",
    "@fontsource-variable/jetbrains-mono": "^5.1.2",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.469.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "gh-pages": "^6.2.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^7.0.0"
  }
}
```

- [ ] **Step 4: Install**

```bash
rm -rf node_modules package-lock.json && npm install
```

Expected: completes without peer-dependency errors. If a listed version does not exist, install the latest matching major instead and record the actual version.

- [ ] **Step 5: Add .gitignore entries**

Append to `.gitignore`:

```
dist/
.superpowers/
```

Confirm `build/` is no longer referenced and `node_modules` already is.

- [ ] **Step 6: Create vite.config.ts**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/MyPortfolio/',
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 7: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": false,
    "noEmit": true,
    "skipLibCheck": true,
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
```

One config covers both `src` and `vite.config.ts`, so there is no `tsconfig.node.json` and no project-reference build — this is why the build script is `tsc --noEmit && vite build`.

- [ ] **Step 8: Create index.html at the repo root**

```html
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/MyPortfolio/favicon.ico" />
    <title>Watson Agbramu — Senior Software Engineer</title>
    <script>
      (function () {
        try {
          var stored = localStorage.getItem('theme');
          document.documentElement.setAttribute(
            'data-theme',
            stored === 'light' ? 'light' : 'dark'
          );
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Full metadata and Open Graph tags are added in Task 9.

- [ ] **Step 9: Create src/styles/theme.css**

```css
@import 'tailwindcss';

/*
  Palette variables are deliberately NOT named --color-*. The `@theme inline`
  block below maps them onto Tailwind's --color-* names to generate utilities.
  If the raw tokens shared those names the mapping would be self-referential
  (--color-bg: var(--color-bg)) and every colour would resolve to nothing.

  Raw tokens, for use in inline styles and SVG attributes:
    --bg --elev --surface --line --text --muted --faint --accent --accent-2
    --glow-1 --glow-2
*/
:root,
[data-theme='dark'] {
  --bg: #08090c;
  --elev: #0d0f14;
  --surface: rgba(255, 255, 255, 0.04);
  --line: rgba(255, 255, 255, 0.09);
  --text: #e8eaf0;
  --muted: #98a0b4;
  --faint: #7d859a;
  --accent: #6d8bff;
  --accent-2: #31d0aa;
  --glow-1: rgba(88, 120, 255, 0.28);
  --glow-2: rgba(0, 220, 190, 0.14);
}

[data-theme='light'] {
  --bg: #fbfaf8;
  --elev: #ffffff;
  --surface: rgba(15, 20, 40, 0.03);
  --line: rgba(15, 20, 40, 0.12);
  --text: #14161c;
  --muted: #4d5464;
  --faint: #656c7c;
  --accent: #3552d9;
  --accent-2: #0f7a63;
  --glow-1: rgba(80, 110, 255, 0.14);
  --glow-2: rgba(0, 180, 150, 0.1);
}

@theme inline {
  --color-bg: var(--bg);
  --color-elev: var(--elev);
  --color-surface: var(--surface);
  --color-border: var(--line);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-faint: var(--faint);
  --color-accent: var(--accent);
  --color-accent-2: var(--accent-2);
  --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

body {
  background-color: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 10: Create src/main.tsx**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './styles/theme.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 11: Create a placeholder src/App.tsx**

```tsx
export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text font-sans grid place-items-center">
      <h1 className="text-4xl font-semibold tracking-tight">Scaffold online</h1>
    </main>
  );
}
```

- [ ] **Step 12: Verify the build**

```bash
npm run typecheck && npm run build
```

Expected: no TypeScript errors; Vite writes to `dist/` and reports the bundle size.

- [ ] **Step 13: Verify in the browser**

```bash
npm run dev
```

Open the printed URL. Expected: near-black page, light grey Inter heading reading "Scaffold online", centred. Confirm no console errors.

- [ ] **Step 14: Commit**

```bash
git add -A
git commit -m "Replace CRA with Vite + React 19 + Tailwind v4 scaffold"
```

---

### Task 2: Theme system

Adds the working light/dark toggle. At the end of this task the toggle flips the palette, the choice survives a reload, and no flash occurs.

**Files:**
- Create: `src/hooks/useTheme.ts`, `src/components/ThemeToggle.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: the `data-theme` contract and CSS variables from Task 1.
- Produces: `useTheme(): { theme: Theme; toggle: () => void }` where `type Theme = 'dark' | 'light'`; and `<ThemeToggle />`, a self-contained button used by `Nav` in Task 4.

- [ ] **Step 1: Create src/hooks/useTheme.ts**

```ts
import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

function readTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage unavailable (private mode) — the theme still applies for this session.
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
```

The initial state is read from the DOM attribute the inline script already set, so React and the pre-paint script never disagree.

- [ ] **Step 2: Create src/components/ThemeToggle.tsx**

```tsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-text"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
```

- [ ] **Step 3: Wire it into App.tsx temporarily**

```tsx
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text font-sans grid place-items-center gap-6">
      <h1 className="text-4xl font-semibold tracking-tight">Scaffold online</h1>
      <ThemeToggle />
    </main>
  );
}
```

- [ ] **Step 4: Verify behaviour in the browser**

Run `npm run dev` and check all four:

1. Page loads dark.
2. Clicking the toggle switches to the light palette — off-white background, near-black text.
3. Reloading while in light mode loads light with **no dark flash**. Watch the very first frame; reload several times.
4. `localStorage.getItem('theme')` in the console returns the current theme.

- [ ] **Step 5: Verify the build**

```bash
npm run typecheck && npm run build
```

Expected: clean.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Add theme system with persisted light/dark toggle"
```

---

### Task 3: Content data modules

All site copy, typed. No components in this task — it is pure data, and later tasks import from it rather than hard-coding strings.

**Files:**
- Create: `src/content/profile.ts`, `src/content/experience.ts`, `src/content/projects.ts`, `src/content/skills.ts`, `src/content/education.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: the exported types and constants below. Later tasks import these exact names.

- [ ] **Step 1: Create src/content/profile.ts**

```ts
import profilePhoto from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

export const profile = {
  name: 'Watson Agbramu',
  title: 'Senior Software Engineer',
  location: 'Ontario, Canada',
  availability: 'Open to new opportunities',
  headline: 'Data platforms and AI systems, built to scale.',
  lede: 'Senior Software Engineer with 8+ years building production systems across SaaS, media, and fintech — from client-facing APIs and interfaces through data pipelines and cloud infrastructure. Recent work in LLM-powered products, multi-tenant platforms, and event-driven architecture.',
  photo: profilePhoto,
  resume: resumePdf,
  email: 'watsonagbramu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/watson-agbramu/',
  github: 'https://github.com/wittywatz',
} as const;

export type Capability = {
  label: string;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    label: 'LLM products',
    title: 'RAG and agents in production',
    body: 'LangGraph and LangChain systems with vector search, tool calling, and evals — tuned against real query patterns, not demos.',
  },
  {
    label: 'Data platforms',
    title: 'Enterprise pipelines',
    body: 'Multi-source ingestion on Azure Databricks, Data Factory, and Data Lake, consolidating overlapping pipelines across client products.',
  },
  {
    label: 'Cloud and infrastructure',
    title: 'Event-driven on AWS',
    body: 'Lambda, SQS, CloudFront and Route 53 with Terraform, ArgoCD, and GitHub Actions standardising deployment across services.',
  },
];
```

Each capability is backed by a role shown on the page: LipDub AI and Arctic AI for the first, Arctic AI for the second, LipDub AI and Neo Financial for the third. **Do not reword the second card to mention dbt, Snowflake, or Airbyte** — that work belongs to a role deliberately not listed on this site.

- [ ] **Step 2: Add the PDF module declaration**

Vite has no built-in type for `.pdf` imports. Create `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

declare module '*.pdf' {
  const src: string;
  export default src;
}
```

- [ ] **Step 3: Create src/content/experience.ts**

```ts
export type DetailedRole = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type PreviousRole = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

export const detailedRoles: DetailedRole[] = [
  {
    company: 'LipDub AI (MARZ)',
    role: 'Senior Software Engineer',
    dates: 'Sept 2024 – Aug 2026',
    location: 'Remote',
    bullets: [
      'Initiated and designed the personalization epic, delivering the API in production today that regenerates voice and lip-sync for edited text segments, eliminating full-asset re-renders on client revisions.',
      'Built and own the public video-generation API and the internal service layer behind the Next.js frontend using Python, Flask, and FastAPI, covering generation, asset management, and account workflows.',
      'Architected feature gating on Stripe entitlements as the plan-level source of truth with LaunchDarkly as a per-tenant resolver, avoiding a bespoke entitlements service, with short-TTL caching invalidated on Stripe plan-change webhooks to keep gate checks off the critical path.',
      'Shipped custom subdomain support on AWS CloudFront and Route 53, automating CNAME delegation and TLS provisioning while scoping edge routing to expose only client-facing watch routes.',
      'Built a media ingestion worker accepting public and YouTube URLs, and added workflow prioritization for Argo generation jobs, moving download and validation server-side.',
      'Delivered voice cloning, occlusion handling, AI avatars, video looping, translation memory, and the assets library across Python services and Next.js, deployed via ArgoCD.',
    ],
  },
  {
    company: 'Arctic AI',
    role: 'Senior Software Developer',
    dates: 'Feb 2022 – Sept 2024',
    location: 'Remote',
    bullets: [
      'Developed RAG-based AI systems using LangChain and LLMs in production workflows, tuning chunking and retrieval strategy against domain-specific query patterns.',
      'Implemented vector search infrastructure for semantic retrieval, improving answer grounding and reducing token spend by narrowing context to relevant messages.',
      'Built an enterprise data platform on Azure (Databricks, Data Factory, Data Lake), consolidating overlapping pipelines and scaling multi-source ingestion across client products.',
      'Led a full platform redesign in Next.js and implemented CI/CD with GitHub Actions and Docker, standardizing deployments across services.',
      'Mentored engineers and contributed to system design and technical direction across projects.',
    ],
  },
];

export const previousRoles: PreviousRole[] = [
  {
    company: 'Divergence Neuro',
    role: 'Web Application Developer',
    dates: 'Aug 2021 – Oct 2021',
    summary:
      'Client-facing React and AWS application with PWA offline support, plus a custom QR scanner and Bluetooth pairing for Neurosity devices.',
  },
  {
    company: 'Neo Financial',
    role: 'Software Developer',
    dates: 'Jun 2021 – Aug 2021',
    summary:
      'Credit statement generation on Node, React, Terraform and GraphQL, and the decider microservice routing declined transactions to third-party fraud detection.',
  },
  {
    company: 'University of Waterloo',
    role: 'Data Scientist (M.Eng Research)',
    dates: 'Sept 2019 – Dec 2020',
    summary:
      'Transfer-learning image classification reaching 92.18% across 120 classes, and Faster R-CNN pedestrian detection on re-annotated datasets.',
  },
];
```

- [ ] **Step 4: Create src/content/projects.ts**

```ts
export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  bullets: string[];
  /** Filename inside public/projects/, or null when no asset exists yet. */
  media: string | null;
  /** Renders the hand-built architecture diagram in place of media. */
  diagram: 'voice' | null;
};

export const projects: Project[] = [
  {
    slug: 'nl-bi-platform',
    name: 'Natural-Language Business Intelligence Platform',
    summary:
      'A multi-tenant BI platform where a LangGraph agent turns plain-English questions into SQL, picks a visualization, and assembles shareable dashboards.',
    stack: ['FastAPI', 'LangGraph', 'Next.js', 'Celery', 'Redis', 'Snowflake', 'Stripe'],
    bullets: [
      'Queries across Postgres, MySQL, SQLite, and Snowflake from a single natural-language interface.',
      'Semantic business-term layer, natural-language alerts, and automated anomaly and root-cause analysis.',
      'Usage-based Stripe billing, with Celery and Redis running scheduled and long-running jobs.',
    ],
    media: null,
    diagram: null,
  },
  {
    slug: 'voice-dictation',
    name: 'On-Device Voice Dictation',
    summary:
      'Push-to-talk dictation that transcribes speech straight to the cursor in any application, with recognition and cleanup running entirely on device.',
    stack: ['Rust', 'Swift', 'Kotlin', 'whisper.cpp', 'Silero VAD', 'UniFFI'],
    bullets: [
      'One Rust core — whisper.cpp, Silero VAD, and the session state machine — exposed through UniFFI.',
      'Native shells on both platforms: a Swift menu-bar app on macOS and a Kotlin input method on Android.',
      'No audio leaves the machine at runtime.',
    ],
    media: null,
    diagram: 'voice',
  },
  {
    slug: 'strength-training',
    name: 'AI-Assisted Strength Training App',
    summary:
      'An offline-first mobile app that turns a conversational intake into a multi-week training program and auto-progresses weights from logged performance.',
    stack: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'SQLite', 'Supabase'],
    bullets: [
      'LLM calls constrained to the edges of a deterministic training engine.',
      'Every model output validated against program invariants before it can modify a plan.',
      'Full offline capability with local SQLite and Supabase sync.',
    ],
    media: null,
    diagram: null,
  },
];
```

`media` stays `null` until Watson supplies GIFs or screenshots. Adding one is a single-line change — drop the file in `public/projects/` and set `media: 'nl-bi-platform.gif'`.

- [ ] **Step 5: Create src/content/skills.ts**

```ts
export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust'] },
  {
    label: 'AI',
    items: [
      'LangChain',
      'LangGraph',
      'LiteLLM',
      'OpenAI SDK',
      'Anthropic SDK',
      'RAG',
      'Vector search',
      'Embeddings',
      'Agentic workflows',
      'Tool calling',
      'Evals',
    ],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'GraphQL', 'REST', 'Celery', 'Event-driven architecture'],
  },
  { label: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS'] },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector DB', 'DBT', 'Snowflake', 'Airbyte', 'Databricks'],
  },
  {
    label: 'Infra',
    items: [
      'AWS Lambda',
      'SQS',
      'S3',
      'CloudFront',
      'Route 53',
      'AWS SAM',
      'GCP',
      'Azure',
      'Docker',
      'Terraform',
      'ArgoCD',
      'Argo Workflows',
      'GitHub Actions',
    ],
  },
];
```

- [ ] **Step 6: Create src/content/education.ts**

```ts
export type Degree = {
  qualification: string;
  institution: string;
  dates: string;
};

export const degrees: Degree[] = [
  {
    qualification: 'M.Eng, Electrical and Computer Engineering (Distinction)',
    institution: 'University of Waterloo',
    dates: 'Sept 2019 – Dec 2020',
  },
  {
    qualification: 'B.Eng, Electrical and Electronics Engineering (First Class)',
    institution: 'Federal University Oye',
    dates: 'Feb 2013 – Jan 2018',
  },
];

export const awards: string[] = [
  'Best Overall Graduating Student, 2016/2017',
  'Best Student, Faculty of Engineering, 2016/2017',
];
```

- [ ] **Step 7: Verify it all typechecks**

```bash
npm run typecheck
```

Expected: clean. If `.pdf` or `.jpg` imports error, Step 2's `vite-env.d.ts` is missing or malformed.

- [ ] **Step 8: Confirm the excluded companies appear nowhere**

```bash
grep -ril "thinklp\|filament\|finklassic\|ilorin\|alcon" src/ index.html || echo "CLEAN"
```

Expected: `CLEAN`.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "Add typed content modules from resume"
```

---

### Task 4: Layout primitives and navigation

Builds the two shared primitives every later section depends on, plus the sticky nav.

**Files:**
- Create: `src/components/Section.tsx`, `src/components/Reveal.tsx`, `src/components/Nav.tsx`, `src/hooks/useScrolled.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `profile` from Task 3; `ThemeToggle` from Task 2.
- Produces:
  - `<Section id: string, eyebrow: string, title: ReactNode, children: ReactNode, className?: string />`
  - `<Reveal delay?: number, children: ReactNode, className?: string />`
  - `<Nav />`
  - `useScrolled(threshold?: number): boolean`

- [ ] **Step 1: Create src/hooks/useScrolled.ts**

```ts
import { useEffect, useState } from 'react';

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
```

- [ ] **Step 2: Create src/components/Reveal.tsx**

This is the only place scroll motion is defined. `useReducedMotion` is Framer Motion's hook reading the media query.

```tsx
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create src/components/Section.tsx**

```tsx
import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-24 md:py-32 ${className}`}>
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
```

- [ ] **Step 4: Create src/components/Nav.tsx**

```tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../content/profile';
import { useScrolled } from '../hooks/useScrolled';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
];

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text transition-colors hover:border-accent sm:block"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border bg-bg px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm text-muted transition-colors hover:text-text"
            >
              Résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
```

Note the mobile menu repeats the Résumé link because the desktop one is hidden below `sm`.

- [ ] **Step 5: Wire Nav into App.tsx**

```tsx
import Nav from './components/Nav';
import Section from './components/Section';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main className="pt-16">
        <Section id="work" eyebrow="Selected work" title="Things I have built">
          <p className="text-muted">Placeholder — replaced in Task 6.</p>
        </Section>
        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <p className="text-muted">Placeholder — replaced in Task 7.</p>
        </Section>
      </main>
    </div>
  );
}
```

- [ ] **Step 6: Verify in the browser**

Run `npm run dev` and confirm:

1. Nav is transparent at the top, then gains a blurred background and hairline border after scrolling ~24px.
2. Clicking "Experience" scrolls to that section with the heading clear of the nav (this is `scroll-padding-top` from Task 1).
3. At a 375px-wide viewport, the desktop links are hidden and the hamburger appears; opening it shows the menu; clicking a link closes it.
4. Tabbing through the nav shows a visible focus ring on every link and button.
5. Both themes still render correctly.

- [ ] **Step 7: Verify the build**

```bash
npm run typecheck && npm run build
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Add Section and Reveal primitives with sticky navigation"
```

---

### Task 5: Hero and capabilities

**Files:**
- Create: `src/components/Hero.tsx`, `src/components/Capabilities.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `profile` and `capabilities` from Task 3; `Reveal` from Task 4.
- Produces: `<Hero />`, `<Capabilities />`.

- [ ] **Step 1: Create src/components/Hero.tsx**

```tsx
import { ArrowRight, FileText } from 'lucide-react';
import { profile } from '../content/profile';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(760px 340px at 22% -10%, var(--glow-1), transparent 62%), radial-gradient(560px 300px at 92% 6%, var(--glow-2), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(600px 400px at 30% 0%, #000, transparent 75%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-accent-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          {profile.availability}
        </p>

        <h1 className="max-w-[17ch] text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted md:text-lg">
          {profile.lede}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            See the work <ArrowRight size={16} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent"
          >
            <FileText size={16} /> Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
```

The headline is not gradient-clipped text. Gradient-clipped headings fail contrast checks and disappear in forced-colors mode; the gradient lives in the background instead, which reads the same and stays accessible.

- [ ] **Step 2: Create src/components/Capabilities.tsx**

```tsx
import { capabilities } from '../content/profile';
import Reveal from './Reveal';

export default function Capabilities() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-8">
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.label} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-surface p-5 transition-transform hover:-translate-y-1">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {cap.label}
              </p>
              <h3 className="mb-2 text-base font-semibold">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{cap.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Wire into App.tsx**

Add the imports and place `<Hero />` and `<Capabilities />` at the top of `<main>`, before the existing placeholder sections. Remove the `pt-16` from `<main>` — the hero supplies its own top padding.

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Section from './components/Section';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Section id="work" eyebrow="Selected work" title="Things I have built">
          <p className="text-muted">Placeholder — replaced in Task 6.</p>
        </Section>
        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <p className="text-muted">Placeholder — replaced in Task 7.</p>
        </Section>
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Verify in the browser**

1. Hero fills the viewport with the glow visible top-left and top-right, and the grid fading out.
2. The status pill pulses.
3. Headline wraps to two or three lines and does not overflow at 375px.
4. Capability cards are three across on desktop, stacked on mobile, and lift on hover.
5. Switch to light theme: the glow is subtle rather than absent, and all text still meets contrast.
6. In your browser devtools, emulate `prefers-reduced-motion: reduce` and reload — the pill stops pulsing and cards appear without the rise animation.

- [ ] **Step 5: Verify the build**

```bash
npm run typecheck && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Add hero and capability cards"
```

---

### Task 6: Selected work

**Files:**
- Create: `src/components/Work.tsx`, `src/components/ProjectCard.tsx`, `src/components/VoiceArchitectureDiagram.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `projects` and the `Project` type from Task 3; `Section` and `Reveal` from Task 4.
- Produces: `<Work />`; `<ProjectCard project: Project, index: number />`; `<VoiceArchitectureDiagram />`.

- [ ] **Step 1: Create src/components/VoiceArchitectureDiagram.tsx**

A hand-built SVG. It is the media for the voice project, and it must be announced to assistive technology as an image with a description.

```tsx
export default function VoiceArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 420 260"
      role="img"
      aria-labelledby="voice-diagram-title voice-diagram-desc"
      className="h-full w-full"
    >
      <title id="voice-diagram-title">On-device voice dictation architecture</title>
      <desc id="voice-diagram-desc">
        A single Rust core containing whisper.cpp, Silero VAD, and a session state machine is
        exposed through a UniFFI boundary to two native shells: a Swift menu-bar application on
        macOS and a Kotlin input method on Android. All processing stays on the device.
      </desc>

      <defs>
        <marker id="vd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--faint)" />
        </marker>
      </defs>

      <rect
        x="8" y="8" width="404" height="244" rx="12"
        fill="none" stroke="var(--line)" strokeDasharray="4 4"
      />
      <text x="20" y="28" fill="var(--faint)" fontSize="10" fontFamily="var(--font-mono)">
        DEVICE — NO NETWORK
      </text>

      <rect x="130" y="52" width="160" height="76" rx="10"
            fill="var(--surface)" stroke="var(--accent)" />
      <text x="210" y="76" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">
        Rust core
      </text>
      <text x="210" y="94" textAnchor="middle" fill="var(--muted)" fontSize="10">
        whisper.cpp · Silero VAD
      </text>
      <text x="210" y="110" textAnchor="middle" fill="var(--muted)" fontSize="10">
        session state machine
      </text>

      <line x1="210" y1="128" x2="210" y2="150" stroke="var(--faint)" />
      <text x="210" y="146" textAnchor="middle" fill="var(--accent-2)" fontSize="10"
            fontFamily="var(--font-mono)">
        UniFFI
      </text>

      <line x1="210" y1="152" x2="105" y2="152" stroke="var(--faint)" />
      <line x1="210" y1="152" x2="315" y2="152" stroke="var(--faint)" />
      <line x1="105" y1="152" x2="105" y2="182" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />
      <line x1="315" y1="152" x2="315" y2="182" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />

      <rect x="36" y="188" width="138" height="46" rx="9"
            fill="var(--surface)" stroke="var(--line)" />
      <text x="105" y="207" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        macOS
      </text>
      <text x="105" y="223" textAnchor="middle" fill="var(--muted)" fontSize="10">
        Swift menu-bar app
      </text>

      <rect x="246" y="188" width="138" height="46" rx="9"
            fill="var(--surface)" stroke="var(--line)" />
      <text x="315" y="207" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        Android
      </text>
      <text x="315" y="223" textAnchor="middle" fill="var(--muted)" fontSize="10">
        Kotlin input method
      </text>
    </svg>
  );
}
```

Because every fill and stroke is a CSS variable, the diagram re-themes automatically with no extra work.

- [ ] **Step 2: Create src/components/ProjectCard.tsx**

```tsx
import type { Project } from '../content/projects';
import VoiceArchitectureDiagram from './VoiceArchitectureDiagram';

function Media({ project }: { project: Project }) {
  if (project.media) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}projects/${project.media}`}
        alt={`${project.name} interface`}
        loading="lazy"
        className="h-full w-full rounded-lg object-cover"
      />
    );
  }

  if (project.diagram === 'voice') {
    return <VoiceArchitectureDiagram />;
  }

  return (
    <div className="flex h-full flex-col justify-center gap-2 px-2">
      {project.stack.map((tech) => (
        <p key={tech} className="font-mono text-sm text-faint">
          {tech}
        </p>
      ))}
    </div>
  );
}

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:p-8">
      <div className={flipped ? 'md:order-2' : ''}>
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-faint"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`min-h-[240px] overflow-hidden rounded-xl border border-border bg-bg p-4 ${
          flipped ? 'md:order-1' : ''
        }`}
      >
        <Media project={project} />
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Create src/components/Work.tsx**

```tsx
import { projects } from '../content/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import Section from './Section';

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Things I have built">
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Create the media directory**

```bash
mkdir -p public/projects
printf 'Drop project GIFs and screenshots here, then set `media` in src/content/projects.ts to the filename.\n' > public/projects/README.md
```

- [ ] **Step 5: Wire into App.tsx**

Replace the `work` placeholder `<Section>` with `<Work />` and add the import.

- [ ] **Step 6: Verify in the browser**

1. Three project cards render, alternating which side the media panel sits on at desktop width.
2. The voice card shows the architecture diagram, legible and correctly proportioned.
3. Toggle to light theme — the diagram re-themes; strokes and text remain readable.
4. At 375px, cards stack to a single column and the diagram scales without clipping.
5. Cards 1 and 3 show the typographic stack panel rather than an empty box.

- [ ] **Step 7: Verify the build**

```bash
npm run typecheck && npm run build
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Add selected work section with project cards and voice architecture diagram"
```

---

### Task 7: Experience

**Files:**
- Create: `src/components/Experience.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `detailedRoles`, `previousRoles` from Task 3; `Section`, `Reveal` from Task 4.
- Produces: `<Experience />`.

- [ ] **Step 1: Create src/components/Experience.tsx**

```tsx
import { detailedRoles, previousRoles } from '../content/experience';
import Reveal from './Reveal';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
      <div className="space-y-12">
        {detailedRoles.map((role) => (
          <Reveal key={role.company}>
            <article className="border-l border-border pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{role.role}</h3>
                <p className="font-mono text-xs text-faint">{role.dates}</p>
              </div>
              <p className="mt-1 text-sm text-accent">
                {role.company} · {role.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">Previously</h3>
        <ul className="space-y-5">
          {previousRoles.map((role) => (
            <li key={role.company} className="border-l border-border pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-semibold">
                  {role.role} <span className="font-normal text-accent">· {role.company}</span>
                </p>
                <p className="font-mono text-xs text-faint">{role.dates}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{role.summary}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 2: Wire into App.tsx**

Replace the `experience` placeholder `<Section>` with `<Experience />` and add the import.

- [ ] **Step 3: Verify in the browser**

1. LipDub AI and Arctic AI each render with dates, company, location, and full bullets.
2. The "Previously" list shows exactly three entries — Divergence Neuro, Neo Financial, University of Waterloo — **each with a date range**.
3. Confirm no ThinkLP, Filament AI, Finklassic, Ilorin, or Alcon entry is visible anywhere.
4. At 375px, the date wraps below the role title rather than overflowing.

- [ ] **Step 4: Verify the build**

```bash
npm run typecheck && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add experience section with detailed and previous roles"
```

---

### Task 8: Stack, About, Contact, Footer

**Files:**
- Create: `src/components/Stack.tsx`, `src/components/About.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `skillGroups` (Task 3), `degrees` and `awards` (Task 3), `profile` (Task 3), `Section`/`Reveal` (Task 4).
- Produces: `<Stack />`, `<About />`, `<Contact />`, `<Footer />`.

- [ ] **Step 1: Create src/components/Stack.tsx**

```tsx
import { skillGroups } from '../content/skills';
import Reveal from './Reveal';
import Section from './Section';

export default function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="What I work with">
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid gap-3 md:grid-cols-[140px_1fr]">
              <p className="pt-1 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create src/components/About.tsx**

```tsx
import { awards, degrees } from '../content/education';
import { profile } from '../content/profile';
import Reveal from './Reveal';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit more context">
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <Reveal>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              I build production systems end to end — the API a client integrates against, the
              pipeline moving the data behind it, and the infrastructure both run on. Most of my
              recent work sits where LLM products meet real engineering constraints: latency
              budgets, tenant isolation, and outputs that have to be correct rather than plausible.
            </p>
            <p>
              At LipDub AI I own the public video-generation API and the service layer behind the
              product, and I designed the personalization system that regenerates voice and
              lip-sync for edited segments instead of re-rendering whole assets. Before that, at
              Arctic AI, I built RAG systems in production workflows and an enterprise data
              platform on Azure.
            </p>
            <p>
              I started in electrical and electronics engineering in Nigeria and moved into
              software through machine-learning research at Waterloo. That route left me
              comfortable close to the metal and equally comfortable in front of a client.
            </p>

            <div className="!mt-8 space-y-3 border-t border-border pt-6">
              {degrees.map((degree) => (
                <div key={degree.qualification}>
                  <p className="text-sm text-text">{degree.qualification}</p>
                  <p className="text-sm text-faint">
                    {degree.institution} · {degree.dates}
                  </p>
                </div>
              ))}
              <p className="pt-1 text-sm text-faint">{awards.join(' · ')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
```

The three paragraphs are new prose written from the résumé, replacing the old site's generic "seasoned engineer" copy. Verify every factual claim in them against `src/content/experience.ts` before committing.

- [ ] **Step 3: Create src/components/Contact.tsx**

```tsx
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content/profile';
import Reveal from './Reveal';

const ICON = { Mail, Linkedin, Github, FileText };

export default function Contact() {
  const links = [
    { icon: ICON.Mail, label: 'Email', href: `mailto:${profile.email}`, external: false },
    { icon: ICON.Linkedin, label: 'LinkedIn', href: profile.linkedin, external: true },
    { icon: ICON.Github, label: 'GitHub', href: profile.github, external: true },
    { icon: ICON.FileText, label: 'Résumé', href: profile.resume, external: true },
  ];

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Let us talk
        </h2>
        <p className="mb-9 max-w-[52ch] leading-relaxed text-muted">
          {profile.availability} — currently in {profile.location}. The fastest way to reach me is
          email.
        </p>

        <div className="flex flex-wrap gap-3">
          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 4: Create src/components/Footer.tsx**

```tsx
import { profile } from '../content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">Built with React, Vite and Tailwind</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Assemble the final App.tsx**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Experience from './components/Experience';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Work />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 6: Verify in the browser**

1. All sections render in order with consistent spacing.
2. Every nav anchor scrolls to the right section.
3. The profile photo loads and is not distorted.
4. Both themes look deliberate across the full page.

- [ ] **Step 7: Verify the build**

```bash
npm run typecheck && npm run build
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Add stack, about, contact and footer sections"
```

---

### Task 9: Metadata, social preview, and favicon

The current `index.html` shipped CRA's default title and description. This task makes the page share correctly and describes itself accurately to search engines.

**Files:**
- Modify: `index.html`
- Create: `public/og-image.png`

**Interfaces:**
- Consumes: nothing.
- Produces: complete `<head>` metadata.

- [ ] **Step 1: Produce the Open Graph image**

Build the site, serve it, open it at a 1200×630 viewport in a browser, and screenshot the hero. Save as `public/og-image.png`. Confirm it is under 1MB and that the headline is legible at small sizes.

```bash
ls -la public/og-image.png
```

- [ ] **Step 2: Replace the head of index.html**

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/MyPortfolio/favicon.ico" />

  <title>Watson Agbramu — Senior Software Engineer</title>
  <meta
    name="description"
    content="Senior Software Engineer with 8+ years building production systems across SaaS, media, and fintech. LLM-powered products, multi-tenant platforms, and event-driven architecture."
  />
  <link rel="canonical" href="https://wittywatz.github.io/MyPortfolio/" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://wittywatz.github.io/MyPortfolio/" />
  <meta property="og:title" content="Watson Agbramu — Senior Software Engineer" />
  <meta
    property="og:description"
    content="Data platforms and AI systems, built to scale. 8+ years across SaaS, media, and fintech."
  />
  <meta property="og:image" content="https://wittywatz.github.io/MyPortfolio/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Watson Agbramu — Senior Software Engineer" />
  <meta
    name="twitter:description"
    content="Data platforms and AI systems, built to scale. 8+ years across SaaS, media, and fintech."
  />
  <meta name="twitter:image" content="https://wittywatz.github.io/MyPortfolio/og-image.png" />

  <meta name="theme-color" content="#08090c" />

  <script>
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        document.documentElement.setAttribute(
          'data-theme',
          stored === 'light' ? 'light' : 'dark'
        );
      } catch (e) {}
    })();
  </script>
</head>
```

The inline theme script must stay — do not drop it while editing this block.

- [ ] **Step 3: Verify**

```bash
npm run build && npm run preview
```

View source on the served page and confirm every meta tag is present and the `og:image` URL resolves. Confirm the browser tab shows the correct title and favicon.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add page metadata and social preview image"
```

---

### Task 10: Full verification pass and deploy

No new features. This task is where the spec's verification section actually gets executed.

**Files:**
- Modify: only files needing fixes found during the pass.

**Interfaces:**
- Consumes: the complete site.
- Produces: a deployed site and a recorded verification result.

- [ ] **Step 1: Clean build**

```bash
rm -rf dist && npm run build
```

Expected: zero TypeScript errors, zero Vite warnings about unresolved imports. Record the bundle size.

- [ ] **Step 2: Serve the production build**

```bash
npm run preview
```

Vite preview serves at the configured base, so the URL it prints already ends in `/MyPortfolio/`. Open exactly that URL — the bare root will be blank, which is expected and not a bug.

- [ ] **Step 3: Responsive pass**

At 375px, 768px, and 1280px, confirm on each:
- No horizontal scrollbar on `body`
- No text clipped or overflowing its container
- Nav behaves correctly (hamburger below 768px)
- Project cards, capability cards, and skill tags reflow sensibly

- [ ] **Step 4: Theme pass**

Repeat Step 3's three widths in **both** themes. Confirm the SVG diagram, the hero glow, the grid overlay, and all borders read correctly in light mode — these are the four things most likely to break.

- [ ] **Step 5: No-flash check**

In light mode, hard-reload five times, watching the first painted frame. Any dark flash means the inline script in `index.html` regressed.

- [ ] **Step 6: Link check**

Click every link. Confirm:
- All five nav anchors scroll to their section
- The Résumé link opens the PDF (in both nav and hero and contact)
- LinkedIn and GitHub open in new tabs
- The email link opens a mail client
- No link 404s

- [ ] **Step 7: Keyboard pass**

Tab from the top of the page to the bottom without touching the mouse. Confirm every interactive element receives a visible focus ring, focus order follows visual order, and the mobile menu can be opened and closed by keyboard.

- [ ] **Step 8: Reduced-motion pass**

Enable `prefers-reduced-motion: reduce` in devtools, hard-reload, and confirm: no section rise animation, no pulsing status pill, and instant (non-smooth) anchor scrolling.

- [ ] **Step 9: Contrast check**

Run the browser's built-in accessibility audit (Lighthouse or the Chrome DevTools accessibility pane) in both themes. Every text/background pair must pass AA. `text-faint` on `bg-surface` is the most likely failure — if it fails, lighten `--faint` in dark and darken it in light until it passes, then re-run.

- [ ] **Step 10: Confirm excluded content is absent from the built output**

```bash
grep -ril "thinklp\|filament\|finklassic\|ilorin\|alcon\|heroku\|particles" dist/ || echo "CLEAN"
```

Expected: `CLEAN`.

- [ ] **Step 11: Fix anything the pass found, then re-run Steps 1–10**

Do not proceed to deploy with a known failure. If something cannot be fixed, stop and report it rather than deploying around it.

- [ ] **Step 12: Commit any fixes**

```bash
git add -A
git commit -m "Fix issues found in verification pass"
```

- [ ] **Step 13: Deploy**

```bash
npm run deploy
```

- [ ] **Step 14: Verify the live site**

Open `https://wittywatz.github.io/MyPortfolio/`. Confirm the new site loads, assets resolve (no 404s in the network tab — a wrong `base` shows up here as missing CSS/JS), and the theme toggle works. GitHub Pages can cache for a few minutes; hard-reload if you see the old site.

- [ ] **Step 15: Report the result**

State plainly what was verified and what, if anything, was not. Do not claim a check passed that was not actually run.

---

## Notes for the implementer

**When Watson supplies project GIFs or screenshots:** drop the file into `public/projects/`, then set `media: '<filename>'` on the matching entry in `src/content/projects.ts`. No component changes. Keep GIFs under about 3MB — they are downloaded eagerly by many browsers despite `loading="lazy"`, and a heavy GIF is the easiest way to undo the performance of this rebuild. Prefer a short looping MP4 converted to GIF at a modest frame rate, or a static screenshot.

**Content is data, not markup.** If you find yourself typing a company name, a bullet, or a skill into a `.tsx` file, it belongs in `src/content/` instead. The one exception is the three About paragraphs, which are prose rather than structured data.

**The exclusion rule is not stylistic.** ThinkLP, Filament AI, Finklassic, University of Ilorin, and Alcon are deliberately absent so the site matches the résumé exactly. Do not add them back for completeness.
