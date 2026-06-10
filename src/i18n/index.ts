import { en } from './locales/en';
import { es } from './locales/es';
import type { Language, TranslationSchema } from './types';

export type { AssistantMessage, Language, TranslationSchema } from './types';

export const DEFAULT_LANGUAGE: Language = 'es';
export const STORAGE_KEY = 'portfolio-language';
export const supportedLanguages = ['es', 'en'] as const;

export const translations = {
  es,
  en
} satisfies Record<Language, TranslationSchema>;

type DotKeys<T> = {
  [Key in keyof T & string]: T[Key] extends readonly unknown[]
    ? Key
    : T[Key] extends Record<string, unknown>
      ? Key | `${Key}.${DotKeys<T[Key]>}`
      : Key;
}[keyof T & string];

export type TranslationKey = DotKeys<TranslationSchema>;

export function isLanguage(value: unknown): value is Language {
  return value === 'es' || value === 'en';
}

export function resolveLanguage(languages?: string | readonly string[] | null): Language {
  const languageList = Array.isArray(languages) ? languages : languages ? [languages] : [];
  return languageList.some((language) => language.toLowerCase().startsWith('es')) ? 'es' : 'en';
}

export function getTranslations(language: Language = DEFAULT_LANGUAGE): TranslationSchema {
  return translations[language] ?? translations[DEFAULT_LANGUAGE];
}

export function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null;

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const storedLanguage = getStoredLanguage();
  if (storedLanguage) return storedLanguage;

  return resolveLanguage(window.navigator.languages?.length ? window.navigator.languages : window.navigator.language);
}

export function setLanguage(language: Language): Language {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage can be unavailable in private or restricted contexts.
    }

    window.dispatchEvent(new CustomEvent('portfolio:language-change', { detail: { language } }));
  }

  return language;
}

export function t(key: TranslationKey, language: Language = getCurrentLanguage()): string {
  const value = key.split('.').reduce<unknown>((currentValue, segment) => {
    if (!currentValue || typeof currentValue !== 'object') return undefined;
    return (currentValue as Record<string, unknown>)[segment];
  }, getTranslations(language));

  return typeof value === 'string' ? value : '';
}
