import {
  getCurrentLanguage,
  getTranslations,
  isLanguage,
  setLanguage,
  supportedLanguages,
  type Language
} from '../i18n';

type LanguageChangeEvent = CustomEvent<{ language: Language }>;

const getValue = (path: string, language: Language): string => {
  const value = path.split('.').reduce<unknown>((currentValue, segment) => {
    if (!currentValue || typeof currentValue !== 'object') return undefined;
    return (currentValue as Record<string, unknown>)[segment];
  }, getTranslations(language));

  return typeof value === 'string' ? value : '';
};

const setAttributeTranslation = (element: Element, datasetKey: string, attribute: string, language: Language) => {
  const path = (element as HTMLElement).dataset[datasetKey];
  if (!path) return;

  const value = getValue(path, language);
  if (value) element.setAttribute(attribute, value);
};

const updateLanguageSwitchers = (language: Language) => {
  document.querySelectorAll<HTMLElement>('[data-language-switcher]').forEach((switcher) => {
    switcher.dataset.currentLanguage = language;
  });

  document.querySelectorAll<HTMLButtonElement>('[data-language-option]').forEach((button) => {
    const option = button.dataset.languageOption;
    const isActive = option === language;

    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const updateComposedLabels = (language: Language) => {
  const copy = getTranslations(language);

  document.querySelectorAll<HTMLButtonElement>('[data-email-cat-button]').forEach((button) => {
    const widget = button.closest<HTMLElement>('[data-email-cat]');
    const email = widget?.dataset.email;
    if (email) button.setAttribute('aria-label', `${copy.emailWidget.copyEmailLabel} ${email}`);
  });

  document.querySelectorAll<HTMLAnchorElement>('a[data-project-index]').forEach((card) => {
    const projectIndex = Number(card.dataset.projectIndex);
    const project = copy.projects.items[projectIndex];
    if (project) card.setAttribute('aria-label', `${copy.projects.card.explore} ${project.title}`);
  });
};

const applyTranslations = (language: Language) => {
  const copy = getTranslations(language);

  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  document.title = copy.seo.title;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const path = element.dataset.i18n;
    if (!path) return;

    const value = getValue(path, language);
    if (value) element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((element) => {
    setAttributeTranslation(element, 'i18nAriaLabel', 'aria-label', language);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((element) => {
    setAttributeTranslation(element, 'i18nAlt', 'alt', language);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((element) => {
    setAttributeTranslation(element, 'i18nTitle', 'title', language);
  });

  document.querySelectorAll<HTMLMetaElement>('[data-i18n-content]').forEach((element) => {
    setAttributeTranslation(element, 'i18nContent', 'content', language);
  });

  updateLanguageSwitchers(language);
  updateComposedLabels(language);
  window.dispatchEvent(new Event('resize'));
};

const initLanguageSwitcher = () => {
  document.querySelectorAll<HTMLButtonElement>('[data-language-option]').forEach((button) => {
    if (button.dataset.languageReady === 'true') return;
    button.dataset.languageReady = 'true';

    button.addEventListener('click', () => {
      const language = button.dataset.languageOption;
      if (!isLanguage(language)) return;

      setLanguage(language);
    });
  });
};

function initI18n() {
  const language = getCurrentLanguage();

  applyTranslations(language);
  initLanguageSwitcher();
}

initI18n();

window.addEventListener('portfolio:language-change', ((event: LanguageChangeEvent) => {
  if (supportedLanguages.includes(event.detail.language)) {
    applyTranslations(event.detail.language);
  }
}) as EventListener);

document.addEventListener('astro:page-load', initI18n);

export {};
