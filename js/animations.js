// Scroll reveal animations
export function setupScrollReveal() {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return; // Respect user preference

  const toReveal = [];
  // Sections
  document.querySelectorAll('.section .container').forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(idx * 0.08, 0.24)}s`);
    toReveal.push(el);
  });
  // Timeline items (after experiences render)
  document.querySelectorAll('.timeline-item').forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(idx * 0.06, 0.24)}s`);
    toReveal.push(el);
  });
  // Project cards (after projects render)
  document.querySelectorAll('.project-card').forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(idx * 0.06, 0.24)}s`);
    toReveal.push(el);
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback: show immediately
    toReveal.forEach((el) => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  toReveal.forEach((el) => observer.observe(el));
}

// Hide header at very top for clean hero face
export function setupTopHeaderHide() {
  function update() {
    if (window.scrollY <= 2) {
      document.body.classList.add('at-top');
    } else {
      document.body.classList.remove('at-top');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}
