import { projects } from '../content/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import Section from './Section';

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Things I have built">
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
