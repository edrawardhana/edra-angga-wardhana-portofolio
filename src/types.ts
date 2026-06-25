export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  primaryLinkText: string;
  primaryLinkUrl: string;
  secondaryLinkText?: string;
  secondaryLinkUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: number; // 0 to 100 percentage
  }[];
}
