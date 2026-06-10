import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { SkillGroup } from '../types/content';

export type { SkillGroup } from '../types/content';

const skills = getTranslations(DEFAULT_LANGUAGE).skills;

export const skillGroups: SkillGroup[] = skills.groups;
export const skillMarquee: string[] = skills.marquee;
