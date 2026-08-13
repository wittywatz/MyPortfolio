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

function Shot({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-bg">
      <img
        src={`${import.meta.env.BASE_URL}projects/${file}`}
        alt={alt}
        loading="lazy"
        className="w-full"
      />
    </figure>
  );
}

type Props = {
  project: Project;
};

/**
 * Layout follows the shape of the evidence rather than one template.
 *
 * A desktop capture is unreadable in a half-width column, so it runs the full
 * card width beneath the text. A phone capture is the opposite: tall and
 * narrow, and stranded under a wide text block it relates to nothing, so it
 * sits beside the text instead. The architecture diagram is drawn to read
 * small and takes the same side-by-side treatment. A project with no asset at
 * all simply runs full width.
 */
export default function ProjectCard({ project }: Props) {
  const cardClasses = 'rounded-2xl border border-border bg-surface p-6 md:p-8';
  const splitClasses = `grid items-center gap-8 ${cardClasses}`;

  if (project.mediaLayout === 'wide') {
    return (
      <article className={cardClasses}>
        <Body project={project} />
        <div className="mt-8 grid gap-4">
          {project.media.map((shot) => (
            <Shot key={shot.file} file={shot.file} alt={shot.alt} />
          ))}
        </div>
      </article>
    );
  }

  if (project.mediaLayout === 'phones') {
    return (
      <article className={`${splitClasses} md:grid-cols-[1fr_280px]`}>
        <div>
          <Body project={project} />
        </div>
        {/* Capped and centred so a single phone does not stretch to the column
            width and lose its proportions. */}
        <div className="mx-auto grid w-full max-w-[280px] gap-4">
          {project.media.map((shot) => (
            <Shot key={shot.file} file={shot.file} alt={shot.alt} />
          ))}
        </div>
      </article>
    );
  }

  if (project.diagram === 'voice') {
    return (
      <article className={`${splitClasses} md:grid-cols-2`}>
        <div className="md:order-2">
          <Body project={project} />
        </div>
        <div className="min-h-[240px] overflow-hidden rounded-xl border border-border bg-bg p-4 md:order-1">
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
