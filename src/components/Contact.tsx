import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content/profile';
import Reveal from './Reveal';
import Section from './Section';

export default function Contact() {
  const links = [
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, external: false },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, external: true },
    { icon: Github, label: 'GitHub', href: profile.github, external: true },
    { icon: FileText, label: 'Résumé', href: profile.resume, external: true },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <Reveal>
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
    </Section>
  );
}
