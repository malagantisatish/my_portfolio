import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  category: 'Frontend' | 'Data & Reporting' | 'Mobile' | 'State' | 'Database' | 'Tools';
  level: number; // 1-100, used for the proficiency bar in the grid
  icon: IconType;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  demoUrl?: string;
  repoUrl: string;
  description: string;
  stack: string[];
  images?: string[];
}

export interface EducationItem {
  school: string;
  location: string;
  credential: string;
  metric: string;
  date: string;
}
