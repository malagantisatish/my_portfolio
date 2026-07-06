import { Link } from 'react-router-dom';
import { TbBrandGithub, TbBrandLinkedin, TbArrowRight, TbMail } from 'react-icons/tb';
import { profile } from '../data/resume';
import { useTypewriter } from '../hooks/useTypewriter';
import SectionHeading from '../components/SectionHeading';
import SkillsGrid from '../components/SkillsGrid';
import ResumeButton from '../components/ResumeButton';

const stack = ['React.js', 'TypeScript', 'AG Grid', 'Redux Toolkit', 'REST APIs'];

export default function Home() {
  const typed = useTypewriter(stack);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* hero */}
      <section className="border-b border-border-light py-16 sm:py-24 dark:border-border-dark">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-light dark:text-muted-dark">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-light dark:border-border-dark">●</span>
          Home.tsx
        </div>

        <p className="mb-4 font-mono text-sm text-muted-light dark:text-muted-dark">
          <span className="text-accent">const</span> developer <span className="text-accent">=</span> "{profile.name}"
        </p>

        <h1 className="font-display text-4xl font-bold leading-tight text-text-light sm:text-6xl dark:text-text-dark">
          {profile.role}
        </h1>

        <p className="mt-4 h-7 font-mono text-base text-accent sm:text-lg">
          building with {typed}
          <span className="caret">|</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-light dark:text-muted-dark">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            View projects <TbArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border-light px-5 py-2.5 text-sm font-semibold text-text-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark"
          >
            Get in touch
          </Link>
          <ResumeButton />
          <div className="ml-1 flex items-center gap-3 text-muted-light dark:text-muted-dark">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <TbBrandGithub size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <TbBrandLinkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <TbMail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with day to day"
          description="Search, sort, or filter by category — it's an actual data grid, same as the ones I build for a living."
        />
        <SkillsGrid />
      </section>
    </div>
  );
}
