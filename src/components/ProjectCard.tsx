import type { Project } from '../content/projects';
import VoiceArchitectureDiagram from './VoiceArchitectureDiagram';

function Body({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
      <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-5 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex max-w-[70ch] gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-faint"
          >
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
}

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const cardClasses = 'rounded-2xl border border-border bg-surface p-6 md:p-8';

  // A screenshot of an application interface is unreadable in a half-width
  // column, so media cards stack: text first, then the image across the full
  // card. The architecture diagram is drawn to be legible small, so it keeps
  // the side-by-side layout. Cards with neither simply run full width.
  if (project.media) {
    return (
      <article className={cardClasses}>
        <Body project={project} />
        <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-bg">
          <img
            src={`${import.meta.env.BASE_URL}projects/${project.media}`}
            alt={project.mediaAlt ?? `${project.name} interface`}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </article>
    );
  }

  if (project.diagram === 'voice') {
    const flipped = index % 2 === 1;
    return (
      <article className={`grid items-center gap-8 md:grid-cols-2 ${cardClasses}`}>
        <div className={flipped ? 'md:order-2' : ''}>
          <Body project={project} />
        </div>
        <div
          className={`min-h-[240px] overflow-hidden rounded-xl border border-border bg-bg p-4 ${
            flipped ? 'md:order-1' : ''
          }`}
        >
          <VoiceArchitectureDiagram />
        </div>
      </article>
    );
  }

  return (
    <article className={cardClasses}>
      <Body project={project} />
    </article>
  );
}
