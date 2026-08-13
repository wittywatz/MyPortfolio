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
          <div className="leading-relaxed text-muted">
            <div className="space-y-4">
              <p>
                I build production systems end to end: the API a client integrates against, the
                pipeline moving the data behind it, and the infrastructure both run on. Most of my
                recent work sits where LLM products meet real engineering constraints, including
                latency budgets, tenant isolation, and outputs that have to be correct rather than
                plausible.
              </p>
              <p>
                At LipDub AI I own the public video-generation API and the service layer behind
                the product, and I designed the personalization system that regenerates voice and
                lip-sync for edited segments instead of re-rendering whole assets. Before that, at
                Arctic AI, I built RAG systems in production workflows and an enterprise data
                platform on Azure.
              </p>
              <p>
                I started in electrical and electronics engineering in Nigeria and moved into
                software through machine-learning research at Waterloo. That route left me
                comfortable close to the metal and equally comfortable in front of a client.
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-border pt-6">
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
