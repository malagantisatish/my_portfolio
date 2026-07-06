import { TbFileDownload } from 'react-icons/tb';
import { profile } from '../data/resume';

export default function ResumeButton({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a
        href={profile.resumeUrl}
        download
        aria-label="Download resume"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border-light text-text-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark"
      >
        <TbFileDownload size={18} />
      </a>
    );
  }

  return (
    <a
      href={profile.resumeUrl}
      download
      className="inline-flex items-center gap-2 rounded-md border border-border-light px-5 py-2.5 text-sm font-semibold text-text-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark"
    >
      <TbFileDownload size={16} /> Download resume
    </a>
  );
}
