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
