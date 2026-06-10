import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { NavItem } from '../types/content';

export const navLinks: NavItem[] = getTranslations(DEFAULT_LANGUAGE).navbar.items;
