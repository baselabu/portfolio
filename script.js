// Main entry point - imports and initializes all modules
import { experiences, projects } from './js/data.js';
import { renderExperiences, renderProjects, setupNavToggle, setYear, setupTimelineProgress } from './js/render.js';
import { setupScrollReveal, setupTopHeaderHide } from './js/animations.js';
import { setupTheme } from './js/theme.js';
import { setupContactForm, setupCvModal } from './js/contact.js';
import { renderEducationTree } from './js/education.js';

document.addEventListener("DOMContentLoaded", () => {
  renderExperiences(experiences);
  renderProjects(projects);
  setupNavToggle();
  setYear();
  setupScrollReveal();
  setupTimelineProgress();
  setupTheme();
  renderEducationTree();
  setupTopHeaderHide();
  setupContactForm();
  setupCvModal();
});