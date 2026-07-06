import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbMenu2, TbX } from 'react-icons/tb';
import ThemeToggle from './ThemeToggle';
import ResumeButton from './ResumeButton';

const tabs = [
  { label: 'Home.tsx', path: '/' },
  { label: 'Experience.tsx', path: '/experience' },
  { label: 'Projects.tsx', path: '/projects' },
  { label: 'Contact.tsx', path: '/contact' },
];

function Tab({ label, path, onClick }: { label: string; path: string; onClick?: () => void }) {
  return (
    <NavLink
      to={path}
      end={path === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'group relative flex items-center gap-2 whitespace-nowrap border-r border-border-light px-4 py-3 font-mono text-[13px] transition-colors dark:border-border-dark',
          isActive
            ? 'bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark'
            : 'text-muted-light hover:text-text-light dark:text-muted-dark dark:hover:text-text-dark',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={[
              'h-1.5 w-1.5 rounded-full transition-colors',
              isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-border-light dark:group-hover:bg-border-dark',
            ].join(' ')}
          />
          {label}
          {isActive && (
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-surface-light/90 backdrop-blur dark:border-border-dark dark:bg-surface-dark/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 py-2 pr-3 font-mono text-sm text-muted-light dark:text-muted-dark">
          <span className="text-accent">~/</span>satish
        </div>

        <nav className="hidden flex-1 items-stretch overflow-x-auto border-l border-border-light sm:flex dark:border-border-dark">
          {tabs.map((tab) => (
            <Tab key={tab.path} {...tab} />
          ))}
        </nav>

        <div className="flex items-center gap-2 py-2 pl-3">
          <ResumeButton compact />
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border-light text-text-light sm:hidden dark:border-border-dark dark:text-text-dark"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <TbX size={18} /> : <TbMenu2 size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border-light sm:hidden dark:border-border-dark">
          {tabs.map((tab) => (
            <Tab key={tab.path} {...tab} onClick={() => setOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  );
}
