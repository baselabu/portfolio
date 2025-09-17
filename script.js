// Main entry point - imports and initializes all modules
import { experiences, projects } from './js/data.js';
import { renderExperiences, renderProjects, setupNavToggle, setYear, setupTimelineProgress } from './js/render.js';
import { setupScrollReveal } from './js/animations.js';
import { setupTheme } from './js/theme.js';
import { setupContactForm, setupCvModal } from './js/contact.js';
import { renderEducationTree } from './js/education.js';
import { setupTranslation } from './js/translations.js';

document.addEventListener("DOMContentLoaded", () => {
  // Make render functions globally available for translation system
  window.renderExperiences = renderExperiences;
  window.renderProjects = renderProjects;
  window.renderEducationTree = renderEducationTree;
  
  // Initial render with English data
  renderExperiences(experiences);
  renderProjects(projects);
  setupNavToggle();
  setYear();
  setupScrollReveal();
  setupTimelineProgress();
  setupTheme();
  renderEducationTree();
  setupContactForm();
  setupCvModal();
  setupTranslation();
});