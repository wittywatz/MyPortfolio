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
          {profile.availability}, currently based in {profile.location}. The fastest way to reach
          me is email.
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
