import { experience, education, accomplishments, languages } from '../data/resume';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex items-center gap-2 font-mono text-xs text-muted-light dark:text-muted-dark">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-light dark:border-border-dark">●</span>
        Experience.tsx
      </div>

      <section className="mb-16">
        <SectionHeading eyebrow="Work" title="Experience" />
        <Timeline items={experience} />
      </section>

      <section className="mb-16">
        <SectionHeading eyebrow="Education" title="Education" />
        <div className="grid gap-4 sm:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-lg border border-border-light bg-surface-light p-5 dark:border-border-dark dark:bg-surface-dark"
            >
              <p className="font-mono text-xs text-muted-light dark:text-muted-dark">{item.date}</p>
              <h3 className="mt-1 font-display text-base font-semibold text-text-light dark:text-text-dark">
                {item.school}
              </h3>
              <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">{item.credential}</p>
              <p className="mt-2 inline-block rounded border border-border-light px-2 py-0.5 font-mono text-xs text-accent dark:border-border-dark">
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-10 sm:grid-cols-2">
        <section>
          <SectionHeading eyebrow="Accomplishments" title="Accomplishments" />
          <ul className="space-y-2">
            {accomplishments.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-text-light/90 dark:text-text-dark/90">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Languages" title="Languages" />
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-md border border-border-light px-3 py-1.5 font-mono text-xs text-text-light dark:border-border-dark dark:text-text-dark"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
