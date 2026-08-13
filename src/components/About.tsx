import { degrees } from '../content/education';
import { profile } from '../content/profile';
import Reveal from './Reveal';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit more context">
      {/* items-start keeps the photo's top edge level with the first line of
          prose. Without it the two columns stretch to equal height and the
          photo, being much shorter than the text, floats out of alignment. */}
      <div className="grid items-start gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <Reveal className="w-full">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="aspect-4/5 w-full rounded-2xl border border-border object-cover"
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
          </div>
        </Reveal>
      </div>

      {/* Education sits below both columns rather than trailing the prose. Kept
          inside the text column it hung off one side with the space beside the
          photo left empty, which read as an accident. Spanning the full width
          makes it a deliberate footer to the section. */}
      <Reveal className="mt-12 border-t border-border pt-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {degrees.map((degree) => (
            <div key={degree.qualification}>
              <p className="text-sm text-text">{degree.qualification}</p>
              <p className="text-sm text-faint">
                {degree.institution} · {degree.dates}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
