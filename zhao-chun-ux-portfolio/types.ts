
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  size: 'large' | 'medium' | 'small';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  projects: { name: string; tag: string }[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}
