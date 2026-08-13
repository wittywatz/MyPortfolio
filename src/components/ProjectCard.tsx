import type { Project } from '../content/projects';
import VoiceArchitectureDiagram from './VoiceArchitectureDiagram';

function Media({ project }: { project: Project }) {
  if (project.media) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}projects/${project.media}`}
        alt={`${project.name} interface`}
        loading="lazy"
        className="h-full w-full rounded-lg object-cover"
      />
    );
  }

  return <VoiceArchitectureDiagram />;
}

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  // A card only splits into two columns when it has something worth showing.
  // With no asset and no diagram it runs full width, rather than padding the
  // layout with a panel that repeats the stack tags printed just below it.
  const hasVisual = Boolean(project.media) || project.diagram !== null;
  const flipped = index % 2 === 1;

  return (
    <article
      className={`grid gap-8 rounded-2xl border border-border bg-surface p-6 md:p-8 ${
        hasVisual ? 'items-center md:grid-cols-2' : ''
      }`}
    >
      <div className={hasVisual && flipped ? 'md:order-2' : ''}>
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
      </div>

      {hasVisual && (
        <div
          className={`min-h-[240px] overflow-hidden rounded-xl border border-border bg-bg p-4 ${
            flipped ? 'md:order-1' : ''
          }`}
        >
          <Media project={project} />
        </div>
      )}
    </article>
  );
}
