import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { SocialLink } from '../types/content';

export const socialLinks: SocialLink[] = getTranslations(DEFAULT_LANGUAGE).socialLinks;
