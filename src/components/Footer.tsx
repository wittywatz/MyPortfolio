import { profile } from '../content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">Built with React, Vite and Tailwind</p>
      </div>
    </footer>
  );
}
