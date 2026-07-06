import { projects } from '../data/resume';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex items-center gap-2 font-mono text-xs text-muted-light dark:text-muted-dark">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-light dark:border-border-dark">●</span>
        Projects.tsx
      </div>

      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A few side projects outside of client work — full-stack apps, real-time features, and a mobile app."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
