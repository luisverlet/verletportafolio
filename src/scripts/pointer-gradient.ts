const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

const root = document.documentElement;
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight * 0.32;
let smoothX = targetX;
let smoothY = targetY;
let frame = 0;
let isRunning = false;

function setPointerVars() {
  root.style.setProperty('--pointer-x', `${targetX}px`);
  root.style.setProperty('--pointer-y', `${targetY}px`);
  root.style.setProperty('--pointer-smooth-x', `${smoothX}px`);
  root.style.setProperty('--pointer-smooth-y', `${smoothY}px`);
}

function animatePointer() {
  smoothX += (targetX - smoothX) * 0.09;
  smoothY += (targetY - smoothY) * 0.09;
  setPointerVars();

  const delta = Math.abs(targetX - smoothX) + Math.abs(targetY - smoothY);
  if (delta > 0.4) {
    frame = window.requestAnimationFrame(animatePointer);
    return;
  }

  isRunning = false;
}

function startPointerAnimation() {
  if (isRunning) return;
  isRunning = true;
  frame = window.requestAnimationFrame(animatePointer);
}

function updatePointer(event: PointerEvent) {
  if (reducedMotion.matches || !finePointer.matches) return;

  targetX = event.clientX;
  targetY = event.clientY;
  root.style.setProperty('--pointer-active', '1');
  startPointerAnimation();
}

function hidePointerAura() {
  root.style.setProperty('--pointer-active', '0.35');
}

if (!reducedMotion.matches && finePointer.matches) {
  root.style.setProperty('--pointer-active', '0.65');
  setPointerVars();
  window.addEventListener('pointermove', updatePointer, { passive: true });
  window.addEventListener('pointerleave', hidePointerAura, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
      isRunning = false;
    }
  });
}
