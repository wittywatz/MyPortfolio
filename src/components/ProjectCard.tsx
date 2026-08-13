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

  if (project.diagram === 'voice') {
    return <VoiceArchitectureDiagram />;
  }

  return (
    <div className="flex h-full flex-col justify-center gap-2 px-2">
      {project.stack.map((tech) => (
        <p key={tech} className="font-mono text-sm text-faint">
          {tech}
        </p>
      ))}
    </div>
  );
}

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:p-8">
      <div className={flipped ? 'md:order-2' : ''}>
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
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

      <div
        className={`min-h-[240px] overflow-hidden rounded-xl border border-border bg-bg p-4 ${
          flipped ? 'md:order-1' : ''
        }`}
      >
        <Media project={project} />
      </div>
    </article>
  );
}
