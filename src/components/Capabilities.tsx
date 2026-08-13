import { capabilities } from '../content/profile';
import Reveal from './Reveal';

export default function Capabilities() {
  return (
    // These cards sit between the hero's h1 and the first section's h2, so
    // their titles are styled text rather than headings: a real h3 here would
    // leave a level-3 heading with no level-2 ancestor in the outline. The
    // aria-label gives the region a name without adding a visible one.
    <section aria-label="What I work on" className="mx-auto w-full max-w-5xl px-6 pb-8">
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.label} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-surface p-5 transition-transform hover:-translate-y-1">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {cap.label}
              </p>
              <p className="mb-2 text-base font-semibold text-text">{cap.title}</p>
              <p className="text-sm leading-relaxed text-muted">{cap.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
