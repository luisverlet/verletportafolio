import { DEFAULT_LANGUAGE, getTranslations } from '../i18n';
import type { AboutHighlight } from '../types/content';

const about = getTranslations(DEFAULT_LANGUAGE).about;

export const aboutHighlights: AboutHighlight[] = about.highlights;

export const aboutCopy = {
  eyebrow: about.eyebrow,
  title: about.title,
  paragraphs: about.paragraphs
};
