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
            className="inline-flex items-center gap-2 rounded-lg bg-accent-solid px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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
