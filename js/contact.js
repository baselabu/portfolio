// Contact form handling
export function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = /** @type {HTMLInputElement} */(document.getElementById('cf-email')).value.trim();
    const subject = /** @type {HTMLInputElement} */(document.getElementById('cf-subject')).value.trim();
    const message = /** @type {HTMLTextAreaElement} */(document.getElementById('cf-message')).value.trim();
    const mailto = `mailto:baseltv11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  });
}

// CV modal open/close
export function setupCvModal() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    if (target.id === 'cv-toggle') {
      openCvModal();
    }
    if (target.id === 'cv-close' || target.classList.contains('modal-overlay')) {
      closeCvModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCvModal();
  });

  function openCvModal() {
    const modal = document.getElementById('cv-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeCvModal() {
    const modal = document.getElementById('cv-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    // Delay hiding to allow transition
    setTimeout(() => modal.classList.add('hidden'), 200);
    document.documentElement.style.overflow = '';
  }
}
