import { useMemo, useState } from 'react';
import { TbSearch, TbSortAscending, TbSortDescending, TbArrowsSort } from 'react-icons/tb';
import { skills } from '../data/resume';
import type { Skill } from '../types';

type SortKey = 'name' | 'category' | 'level';
type SortDir = 'asc' | 'desc';

const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))];

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <TbArrowsSort className="opacity-40" size={14} />;
  return dir === 'asc' ? <TbSortAscending size={14} /> : <TbSortDescending size={14} />;
}

export default function SkillsGrid() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('level');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const rows = useMemo(() => {
    let result: Skill[] = skills.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== 'All') {
      result = result.filter((s) => s.category === category);
    }
    result = [...result].sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      if (sortKey === 'level') return (a.level - b.level) * dir;
      return a[sortKey].localeCompare(b[sortKey]) * dir;
    });
    return result;
  }, [query, category, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
      {/* toolbar */}
      <div className="flex flex-col gap-3 border-b border-border-light bg-surface-light px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-border-dark dark:bg-surface-dark">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-light dark:text-muted-dark">
          <span className="text-accent">skills</span>.grid
          <span className="text-muted-light/60 dark:text-muted-dark/60">// {rows.length} of {skills.length} rows</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <TbSearch className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark" size={14} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills…"
              className="w-40 rounded-md border border-border-light bg-bg-light py-1.5 pl-8 pr-2 font-mono text-xs text-text-light outline-none placeholder:text-muted-light focus:border-accent sm:w-52 dark:border-border-dark dark:bg-bg-dark dark:text-text-dark dark:placeholder:text-muted-dark"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border border-border-light bg-bg-light px-2 py-1.5 font-mono text-xs text-text-light outline-none focus:border-accent dark:border-border-dark dark:bg-bg-dark dark:text-text-dark"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* header row */}
      <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-border-light bg-surface-light px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-muted-light sm:grid-cols-[2.5rem_1.4fr_1fr_7rem] dark:border-border-dark dark:bg-surface-dark dark:text-muted-dark">
        <span></span>
        <button onClick={() => handleSort('name')} className="flex items-center gap-1 text-left hover:text-accent">
          Skill <SortIcon active={sortKey === 'name'} dir={sortDir} />
        </button>
        <button onClick={() => handleSort('category')} className="hidden items-center gap-1 text-left hover:text-accent sm:flex">
          Category <SortIcon active={sortKey === 'category'} dir={sortDir} />
        </button>
        <button onClick={() => handleSort('level')} className="flex items-center gap-1 text-right hover:text-accent sm:justify-end">
          Level <SortIcon active={sortKey === 'level'} dir={sortDir} />
        </button>
      </div>

      {/* rows */}
      <div className="max-h-[420px] overflow-y-auto">
        {rows.length === 0 && (
          <p className="px-4 py-8 text-center font-mono text-xs text-muted-light dark:text-muted-dark">
            No rows match "{query}".
          </p>
        )}
        {rows.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className={[
                'grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-border-light/60 px-4 py-2.5 text-sm transition-colors last:border-none hover:bg-accent-soft sm:grid-cols-[2.5rem_1.4fr_1fr_7rem] dark:border-border-dark/60',
                i % 2 === 1 ? 'bg-surface-light/50 dark:bg-surface-dark/50' : '',
              ].join(' ')}
            >
              <Icon size={18} className="text-accent" />
              <span className="truncate text-text-light dark:text-text-dark">{skill.name}</span>
              <span className="hidden font-mono text-xs text-muted-light sm:block dark:text-muted-dark">
                {skill.category}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border-light dark:bg-border-dark">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="w-8 text-right font-mono text-[11px] text-muted-light dark:text-muted-dark">
                  {skill.level}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
