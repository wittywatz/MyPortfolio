# Portfolio

Personal site for Watson Agbramu. Live at
[wittywatz.github.io/MyPortfolio](https://wittywatz.github.io/MyPortfolio/).

Vite, React 19, TypeScript, Tailwind CSS v4, Framer Motion. Single scrolling
page, dark by default with a light/dark toggle.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then build to dist/
npm run preview    # serve dist/ at the deployed base path
npm run deploy     # build, then publish dist/ to the gh-pages branch
```

`npm run preview` serves at `/MyPortfolio/`, matching production. The bare root
will be blank; open the URL the command prints.

## Editing content

All copy lives in `src/content/` as typed modules. Components read from them and
hold no content of their own, with one exception: the three About paragraphs in
`src/components/About.tsx` are prose rather than structured data.

| File | Holds |
| --- | --- |
| `profile.ts` | Name, headline, lede, links, availability, capability cards |
| `experience.ts` | Detailed roles and the shorter "Previously" list |
| `projects.ts` | Projects, their screenshots, and stack tags |
| `skills.ts` | Stack section, grouped by category |
| `education.ts` | Degrees and awards |

Adding a screenshot to a project: drop the file in `public/projects/`, then add
an entry to that project's `media` array with an `alt` describing what the shot
actually shows. Set `mediaLayout` to `wide` for desktop captures, which stack
across the full card, or `phones` for tall mobile captures, which sit side by
side.

## Conventions worth knowing before editing

- **Colors are CSS custom properties in `src/styles/theme.css`.** The raw tokens
  are deliberately not named `--color-*`; a `@theme inline` block maps them onto
  Tailwind's `--color-*` names. Renaming them would make that mapping
  self-referential and every color would resolve to nothing.
- **`Section.tsx` owns section chrome** (anchor id, eyebrow, heading, spacing).
  Use it rather than rebuilding the wrapper.
- **`Reveal.tsx` is the only place scroll motion is defined**, and therefore the
  only place `prefers-reduced-motion` needs honouring.
- **`index.html` carries an inline script** that applies the stored theme before
  first paint. Removing it reintroduces a flash of the wrong theme on load.
- `vite.config.ts` sets `base: '/MyPortfolio/'`. Absolute asset references must
  go through `import.meta.env.BASE_URL`.

## Design and planning notes

`docs/superpowers/specs/` and `docs/superpowers/plans/` record what was built
and why, including which content was deliberately left off the site.
