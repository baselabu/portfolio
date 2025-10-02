// Main entry point - imports and initializes all modules
import { experiences, projects, smallProjects } from './js/data.js';
import { renderExperiences, renderProjects, setupNavToggle, setYear, setupTimelineProgress, renderSmallProjects, setupSmallProjectsAnimation, renderExperienceTimeline, setupExperienceAnimation } from './js/render.js';
import { setupScrollReveal } from './js/animations.js';
import { setupTheme } from './js/theme.js';
import { setupContactForm, setupCvModal } from './js/contact.js';
import { renderEducationTree, setupEducationAnimation } from './js/education.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM loaded, starting initialization');
  console.log('Experiences data:', experiences);
  console.log('Projects data:', projects);
  
  // Initial render
  renderProjects(projects);
  setupNavToggle();
  setYear();
  setupScrollReveal();
  setupTimelineProgress();
  setupSmallProjectsAnimation();
  setupTheme();
  renderEducationTree();
  setupEducationAnimation();
  renderExperienceTimeline(experiences);
  setupExperienceAnimation();
  setupContactForm();
  setupCvModal();
  
  // Render small projects after main projects are set up
  setTimeout(() => {
    renderSmallProjects(smallProjects);
  }, 100);
  
  console.log('All initialization complete');
});