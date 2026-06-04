export interface NavItem {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export interface Profile {
  name: string;
  role: string;
  subtitle: string;
  description: string;
  email: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface AboutHighlight {
  label: string;
  title: string;
  text: string;
  marker: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}
