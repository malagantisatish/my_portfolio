import { TbSun, TbMoon } from 'react-icons/tb';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex h-9 w-9 items-center justify-center rounded-md border border-border-light text-text-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark dark:hover:border-accent dark:hover:text-accent"
    >
      {isDark ? <TbSun size={18} /> : <TbMoon size={18} />}
    </button>
  );
}
