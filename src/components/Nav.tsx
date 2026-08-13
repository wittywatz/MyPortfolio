import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../content/profile';
import { useScrolled } from '../hooks/useScrolled';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
];

/** Tailwind's `md`. Must match the `md:` classes that hide the mobile menu. */
const MD_BREAKPOINT = 768;

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  // Above `md` both the menu and its close button are hidden by CSS, so an
  // open menu would be stranded: no way to dismiss it, and it reappears
  // already open on the way back down. Close it whenever the viewport reaches
  // that width.
  //
  // Not verifiable in this project's browser tooling: its viewport emulation
  // changes innerWidth without dispatching resize or MediaQueryList change
  // events, so no listener of any kind fires. Confirmed by measurement, not
  // assumed. Needs a manual check by dragging a real browser window.
  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);

    const closeAboveBreakpoint = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    closeAboveBreakpoint(query);
    query.addEventListener('change', closeAboveBreakpoint);
    return () => query.removeEventListener('change', closeAboveBreakpoint);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text transition-colors hover:border-accent sm:block"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <nav aria-label="Primary, mobile">
          <ul id="mobile-menu" className="border-t border-border bg-bg px-6 py-4 md:hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm text-muted transition-colors hover:text-text"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
