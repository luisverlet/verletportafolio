type CatState = 'sleeping' | 'awake' | 'talking' | 'happy';

type SectionMessage = {
  id: string;
  message: string;
  state?: CatState;
};

declare global {
  interface Window {
    showCatAssistant?: () => void;
  }
}

const sectionMessages: SectionMessage[] = [
  {
    id: 'inicio',
    message: 'Bienvenido. Aquí Luis muestra cómo piensa, construye y cuida cada detalle.',
    state: 'sleeping'
  },
  {
    id: 'proyectos',
    message: 'Estos proyectos resumen su forma de trabajar: problema claro, solución útil y ejecución completa.'
  },
  {
    id: 'skills',
    message: 'Este stack es la caja de herramientas; el valor está en cómo se usa para resolver bien.'
  },
  {
    id: 'sobre-mi',
    message: 'Aquí aparece la persona detrás del código: hábitos, criterio y motivaciones reales.'
  },
  {
    id: 'contacto',
    message: 'Si la idea merece pasar a producto, este es el mejor punto para empezar la conversación.',
    state: 'happy'
  }
];

function initCatAssistant() {
  const assistant = document.querySelector<HTMLElement>('[data-cat-assistant]');
  if (!assistant || assistant.dataset.initialized === 'true') return;

  if (window.matchMedia('(max-width: 640px)').matches) {
    assistant.classList.add('is-hidden');
    document.documentElement.classList.remove('has-cat-assistant-source');
    assistant.dataset.initialized = 'true';
    return;
  }

  assistant.dataset.initialized = 'true';

  const messageTarget = assistant.querySelector<HTMLElement>('[data-cat-message]');
  const closeButton = assistant.querySelector<HTMLButtonElement>('[data-cat-close]');
  const pet = assistant.querySelector<HTMLElement>('[data-cat-pet]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function syncStartPosition() {
    if (!pet) return false;

    const heroCatStage = document.querySelector<HTMLElement>('.email-cat.hero-email .email-cat__stage');
    if (!heroCatStage) return false;

    const heroRect = heroCatStage.getBoundingClientRect();
    const petRect = pet.getBoundingClientRect();
    if (!heroRect.width || !heroRect.height || !petRect.width || !petRect.height) return false;

    assistant.style.setProperty('--cat-source-left', `${heroRect.left}px`);
    assistant.style.setProperty('--cat-source-top', `${heroRect.top}px`);
    assistant.style.setProperty('--cat-source-width', `${heroRect.width}px`);
    assistant.style.setProperty('--cat-start-scale-x', '1');
    assistant.style.setProperty('--cat-start-scale-y', '1');
    return true;
  }

  function showAssistant() {
    if (assistant.classList.contains('is-hidden')) return;

    const isAtTop = window.scrollY <= 80;
    if (isAtTop) {
      syncStartPosition();
      assistant.classList.add('is-sourced');
      assistant.classList.remove('is-docked');
    } else {
      assistant.classList.add('is-docked');
      assistant.classList.remove('is-sourced');
    }

    document.documentElement.classList.add('has-cat-assistant-source');
    window.requestAnimationFrame(() => {
      assistant.classList.add('is-ready');
    });
  }

  function scheduleInitialShow() {
    if (window.scrollY > 80) {
      document.documentElement.classList.add('has-cat-assistant-source');
      assistant.classList.add('is-docked', 'is-ready');
      assistant.classList.remove('is-sourced');
      return;
    }

    const heroEmail = document.querySelector<HTMLElement>('.email-cat.hero-email');
    let hasShown = false;

    const showOnce = () => {
      if (hasShown) return;
      hasShown = true;
      window.setTimeout(showAssistant, 80);
    };

    heroEmail?.addEventListener('animationend', showOnce, { once: true });
    window.setTimeout(showOnce, reducedMotion.matches ? 180 : 3300);
  }

  window.showCatAssistant = () => {
    assistant.classList.remove('is-hidden');
    showAssistant();
  };

  let activeSection = 'inicio';
  let scrollFrame = 0;
  let stateTimer = 0;
  let isHoveringPet = false;

  function setState(state: CatState) {
    assistant.dataset.state = state;
  }

  function settleState(nextState: CatState = 'awake') {
    window.clearTimeout(stateTimer);
    if (reducedMotion.matches) {
      setState(nextState);
      return;
    }

    stateTimer = window.setTimeout(() => {
      if (!isHoveringPet) setState(nextState);
    }, 1500);
  }

  function setMessage(section: SectionMessage) {
    if (!messageTarget || section.id === activeSection) return;

    activeSection = section.id;
    messageTarget.textContent = section.message;

    const nextState = section.state ?? 'awake';
    setState(section.state === 'happy' ? 'happy' : 'talking');
    settleState(nextState);
  }

  function updateDockedState() {
    scrollFrame = 0;
    const hasScrolled = window.scrollY > 80;

    if (!hasScrolled) syncStartPosition();
    assistant.classList.toggle('is-sourced', !hasScrolled);
    assistant.classList.toggle('is-docked', hasScrolled);

    if (!hasScrolled) {
      setState('sleeping');
      activeSection = 'inicio';
      if (messageTarget) messageTarget.textContent = sectionMessages[0].message;
      return;
    }

    if (assistant.dataset.state === 'sleeping') setState('awake');
  }

  function requestDockedUpdate() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateDockedState);
  }

  closeButton?.addEventListener('click', () => {
    assistant.classList.add('is-hidden');
    document.documentElement.classList.remove('has-cat-assistant-source');
  });

  pet?.addEventListener('mouseenter', () => {
    isHoveringPet = true;
    setState('happy');
  });

  pet?.addEventListener('mouseleave', () => {
    isHoveringPet = false;
    setState(window.scrollY > 80 ? 'awake' : 'sleeping');
  });

  const visibleSections = sectionMessages
    .map((section) => ({
      ...section,
      element: document.getElementById(section.id)
    }))
    .filter((section): section is SectionMessage & { element: HTMLElement } => Boolean(section.element));

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const section = visibleSections.find((item) => item.element === visibleEntry.target);
      if (section) setMessage(section);
    },
    {
      root: null,
      rootMargin: '-32% 0px -42% 0px',
      threshold: [0.18, 0.35, 0.55]
    }
  );

  visibleSections.forEach((section) => observer.observe(section.element));

  window.addEventListener('scroll', requestDockedUpdate, { passive: true });
  window.addEventListener(
    'resize',
    () => {
      if (assistant.classList.contains('is-ready')) syncStartPosition();
      requestDockedUpdate();
    },
    { passive: true }
  );

  updateDockedState();
  scheduleInitialShow();
}

initCatAssistant();
document.addEventListener('astro:page-load', initCatAssistant);

export {};
