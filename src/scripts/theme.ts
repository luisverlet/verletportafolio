type Theme = 'dark' | 'light';

const storageKey = 'portfolio-theme';
const toggleSelector = '[data-theme-toggle]';

const getStoredTheme = (): Theme | null => {
  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#ffffff' : '#000000');
};

const resolveTheme = () => getStoredTheme() ?? 'light';

const updateToggles = (theme: Theme) => {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  document.querySelectorAll<HTMLButtonElement>(toggleSelector).forEach((toggle) => {
    toggle.setAttribute('aria-label', `Cambiar a modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.dataset.themeState = theme;
  });
};

function initThemeToggle() {
  const theme = resolveTheme();
  applyTheme(theme);
  updateToggles(theme);

  document.querySelectorAll<HTMLButtonElement>(toggleSelector).forEach((toggle) => {
    if (toggle.dataset.themeReady === 'true') return;
    toggle.dataset.themeReady = 'true';

    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

      applyTheme(nextTheme);
      updateToggles(nextTheme);

      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // localStorage can be unavailable in private or restricted contexts.
      }
    });
  });
}

initThemeToggle();
document.addEventListener('astro:page-load', initThemeToggle);
