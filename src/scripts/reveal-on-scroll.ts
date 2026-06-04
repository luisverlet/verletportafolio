const revealSelector = '.reveal';
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

let revealObserver: IntersectionObserver | null = null;

function initRevealOnScroll() {
  const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
  const reducedMotion = window.matchMedia(reducedMotionQuery).matches;

  revealObserver?.disconnect();

  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.16
    }
  );

  items.forEach((item) => {
    if (item.classList.contains('is-visible')) return;
    revealObserver?.observe(item);
  });
}

initRevealOnScroll();
document.addEventListener('astro:page-load', initRevealOnScroll);
document.addEventListener('astro:before-swap', () => revealObserver?.disconnect());
