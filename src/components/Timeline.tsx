import { TbExternalLink } from 'react-icons/tb';
import type { ExperienceItem } from '../types';

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative border-l border-border-light pl-6 dark:border-border-dark">
      {items.map((item) => (
        <li key={`${item.company}-${item.role}`} className="mb-10 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg-light dark:bg-bg-dark" />
          <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-text-light dark:text-text-dark">
              {item.role}
            </h3>
            <span className="font-mono text-xs text-muted-light dark:text-muted-dark">{item.period}</span>
          </div>
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-light dark:text-muted-dark">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"
              >
                {item.company}
                <TbExternalLink size={13} />
              </a>
            ) : (
              <span>{item.company}</span>
            )}
            <span aria-hidden>·</span>
            <span>{item.location}</span>
          </div>
          <ul className="space-y-2">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-text-light/90 dark:text-text-dark/90">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-muted-light dark:bg-muted-dark" />
                {point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
