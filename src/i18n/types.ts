import type { AboutHighlight, NavItem, Profile, Project, SkillGroup, SocialLink } from '../types/content';

export type Language = 'es' | 'en';

export interface SeoTranslations {
  title: string;
  description: string;
}

export interface LanguageSwitcherTranslations {
  ariaLabel: string;
  spanish: string;
  english: string;
}

export interface ProjectCardTranslations {
  participationLabel: string;
  participationValue: string;
  stackLabel: string;
  explore: string;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  calendarButton: string;
  emailLink: string;
  emailLabel: string;
  locationLabel: string;
}

export interface EmailWidgetTranslations {
  idleMessage: string;
  copiedMessage: string;
  errorMessage: string;
  copyEmailLabel: string;
  petAlt: string;
}

export interface AssistantMessage {
  id: string;
  message: string;
  state?: 'sleeping' | 'awake' | 'talking' | 'happy';
}

export interface ThemeTranslations {
  switchToDark: string;
  switchToLight: string;
}

export interface TranslationSchema {
  seo: SeoTranslations;
  profile: Profile;
  languageSwitcher: LanguageSwitcherTranslations;
  navbar: {
    ariaLabel: string;
    settingsLabel: string;
    items: NavItem[];
  };
  hero: {
    title: string;
    availability: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    card: ProjectCardTranslations;
    items: Project[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    marqueeAriaLabel: string;
    groups: SkillGroup[];
    marquee: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    photoAlt: string;
    sliderAriaLabel: string;
    paragraphs: string[];
    highlights: AboutHighlight[];
  };
  contact: ContactTranslations;
  footer: {
    copyright: string;
  };
  socialLinks: SocialLink[];
  theme: ThemeTranslations;
  emailWidget: EmailWidgetTranslations;
  assistant: {
    ariaLabel: string;
    closeLabel: string;
    petAlt: string;
    messages: AssistantMessage[];
  };
}
