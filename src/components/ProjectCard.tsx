import { TbExternalLink, TbBrandGithub } from 'react-icons/tb';
import type { Project } from '../types';
import ImageCarousel from './ImageCarousel';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-lg border border-border-light bg-surface-light p-5 transition-colors hover:border-accent dark:border-border-dark dark:bg-surface-dark">
      <div className="mb-4">
        <ImageCarousel images={project.images} alt={project.name} />
      </div>
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-light dark:text-text-dark">
          {project.name}
        </h3>
        <div className="flex flex-none items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-muted-light transition-colors hover:text-accent dark:text-muted-dark"
            >
              <TbExternalLink size={18} />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} source code`}
            className="text-muted-light transition-colors hover:text-accent dark:text-muted-dark"
          >
            <TbBrandGithub size={18} />
          </a>
        </div>
      </div>
      <p className="mb-4 flex-1 text-sm text-muted-light dark:text-muted-dark">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border-light px-2 py-0.5 font-mono text-[11px] text-muted-light dark:border-border-dark dark:text-muted-dark"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 border-t border-border-light pt-3 text-xs font-mono dark:border-border-dark">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-text-light hover:text-accent dark:text-text-dark"
          >
            <TbExternalLink size={13} /> Live demo
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-text-light hover:text-accent dark:text-text-dark"
        >
          <TbBrandGithub size={13} /> Source
        </a>
      </div>
    </div>
  );
}
