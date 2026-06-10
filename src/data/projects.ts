import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { Project } from '../types/content';

export type { Project } from '../types/content';

export const projects: Project[] = getTranslations(DEFAULT_LANGUAGE).projects.items;
