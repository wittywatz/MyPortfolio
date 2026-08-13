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
