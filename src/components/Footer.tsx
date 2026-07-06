import { profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-border-light py-8 dark:border-border-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
