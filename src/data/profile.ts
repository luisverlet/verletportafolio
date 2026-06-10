import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { Profile } from '../types/content';

export const profile: Profile = getTranslations(DEFAULT_LANGUAGE).profile;
