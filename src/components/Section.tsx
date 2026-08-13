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
