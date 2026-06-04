import { navLinks } from './navigation';
import { profile } from './profile';
import { socialLinks } from './socialLinks';
import type { NavItem } from '../types/content';

export interface SiteConfig {
  name: string;
  role: string;
  subtitle: string;
  description: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  navLinks: NavItem[];
}

const github = socialLinks.find((link) => link.name === 'GitHub')?.url ?? '#';
const linkedin = socialLinks.find((link) => link.name === 'LinkedIn')?.url ?? '#';

export const siteConfig: SiteConfig = {
  ...profile,
  github,
  linkedin,
  navLinks
};
