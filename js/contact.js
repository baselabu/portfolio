// Contact form handling with direct email sending
export function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = /** @type {HTMLInputElement} */(document.getElementById('cf-name')).value.trim();
    const email = /** @type {HTMLInputElement} */(document.getElementById('cf-email')).value.trim();
    const subject = /** @type {HTMLInputElement} */(document.getElementById('cf-subject')).value.trim();
    const message = /** @type {HTMLTextAreaElement} */(document.getElementById('cf-message')).value.trim();
    
    if (!name || !email || !subject || !message) {
      showFormMessage('Please fill in all fields.', 'error');
      return;
    }

    // Show loading state
    setLoadingState(true);
    hideFormMessage();

    try {
      // Use Web3Forms for direct email sending
      const formData = new FormData();
      formData.append('access_key', '77d7f236-56e7-4dc0-8daf-038716127a96'); // Replace with your Web3Forms access key
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('from_name', 'Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showFormMessage('Sorry, there was an error sending your message. Please try again or contact me directly at baseltv11@gmail.com', 'error');
    } finally {
      setLoadingState(false);
    }
  });
}

function setLoadingState(loading) {
  const sendBtn = document.getElementById('send-btn');
  if (!sendBtn) return;
  
  if (loading) {
    sendBtn.classList.add('loading');
    sendBtn.disabled = true;
  } else {
    sendBtn.classList.remove('loading');
    sendBtn.disabled = false;
  }
}

function showFormMessage(message, type) {
  const messageEl = document.getElementById('form-message');
  if (!messageEl) return;
  
  messageEl.textContent = message;
  messageEl.className = `form-message ${type}`;
  messageEl.classList.remove('hidden');
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      hideFormMessage();
    }, 5000);
  }
}

function hideFormMessage() {
  const messageEl = document.getElementById('form-message');
  if (!messageEl) return;
  messageEl.classList.add('hidden');
}

// CV modal open/close
export function setupCvModal() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    if (target.id === 'cv-toggle' || target.id === 'hero-cv-toggle') {
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
