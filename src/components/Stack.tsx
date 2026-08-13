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
