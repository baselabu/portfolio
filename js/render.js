import { experiences, projects, smallProjects } from './data.js';

// Render experiences in reverse chronological order assuming newest first in array
export function renderExperiences(items, lang = 'en') {
  console.log('renderExperiences called with:', items);
  const container = document.getElementById("experience-list");
  console.log('Experience container:', container);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((exp) => {
    console.log('Processing experience:', exp.role);
    const wrapper = document.createElement("article");
    wrapper.className = "timeline-item";
    wrapper.innerHTML = `
      <div class="date-badge">${exp.period}</div>
      <header>
        <div>
          <div class="role">${exp.role}</div>
          <div class="company">${exp.company}</div>
        </div>
        <div class="period"></div>
      </header>
      <ul class="bullets">
        ${(exp.bullets || [])
          .map((b) => `<li>${b}</li>`)
          .join("")}
      </ul>
    `;
    container.appendChild(wrapper);
  });
  console.log('Experiences rendered');
}

// Render experience timeline with close button
export function renderExperienceTimeline(items, lang = 'en') {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;
  
  // Add close button
  const closeButton = document.createElement("div");
  closeButton.className = "experience-close";
  closeButton.innerHTML = `
    <button id="close-experience" class="btn">
      <span>✕</span> Close Work Experience
    </button>
  `;
  timeline.insertBefore(closeButton, timeline.firstChild);
  
  // Render experiences
  renderExperiences(items, lang);
}

export function renderProjects(items, lang = 'en') {
  console.log('renderProjects called with:', items);
  const grid = document.getElementById("projects-grid");
  console.log('Projects grid:', grid);
  if (!grid) return;
  grid.innerHTML = "";
  
  // Render main projects
  items.forEach((p) => {
    console.log('Processing project:', p.name);
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="taglist">
        ${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        ${p.demoUrl ? `<a class="btn secondary" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">Quick Demo</a>` : ''}
        <a class="btn primary" href="${p.githubUrl || '#'}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Add small projects trigger box
  const triggerBox = document.createElement("article");
  triggerBox.className = "project-card small-projects-trigger";
  triggerBox.id = "small-projects-trigger";
  triggerBox.innerHTML = `
    <div class="plus-icon">+</div>
    <h3>Small Projects</h3>
    <p>Learning projects & experiments</p>
  `;
  grid.appendChild(triggerBox);
  
  // Add hidden small projects grid
  const smallGrid = document.createElement("div");
  smallGrid.id = "small-projects-grid";
  smallGrid.className = "small-projects-grid hidden";
  grid.appendChild(smallGrid);
  
  console.log('Projects rendered with small projects trigger');
}

export function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");
  if (!toggle || !list) return;
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  list.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

export function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

export function setupTimelineProgress() {
  // No-op: visuals centered; keep function for structure
}

// Render small projects with snake animation
export function renderSmallProjects(items, lang = 'en') {
  console.log('renderSmallProjects called with:', items);
  const grid = document.getElementById("small-projects-grid");
  console.log('Small projects grid:', grid);
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // Add small project cards
  items.forEach((p) => {
    console.log('Processing small project:', p.name);
    const card = document.createElement("article");
    card.className = "small-project-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="taglist">
        ${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        <a class="btn primary" href="${p.githubUrl || '#'}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Add close button at the bottom (original way)
  const closeButton = document.createElement('div');
  closeButton.className = 'small-projects-close';
  closeButton.innerHTML = `
    <button class="btn">
      <span>✕</span> Close Small Projects
    </button>
  `;
  grid.appendChild(closeButton);
  
  console.log('Small projects rendered');
}

// Setup small projects trigger and animation
export function setupSmallProjectsAnimation() {
  const trigger = document.getElementById('small-projects-trigger');
  const grid = document.getElementById('small-projects-grid');
  
  if (!trigger || !grid) return;
  
  let isVisible = false;
  
  // Function to hide small projects
  function hideSmallProjects() {
    const cards = grid.querySelectorAll('.small-project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('animate-in');
      }, index * 80); // Faster hide animation - reverse train effect
    });
    
    setTimeout(() => {
      grid.classList.add('hidden');
      grid.classList.remove('visible');
      
      // Show the trigger box again with smooth animation
      trigger.style.display = 'block';
      trigger.style.transform = 'scale(0)';
      trigger.style.opacity = '0';
      
      // Animate trigger box back in
      setTimeout(() => {
        trigger.style.transform = 'scale(1)';
        trigger.style.opacity = '1';
      }, 50);
    }, cards.length * 80 + 200);
    
    isVisible = false;
  }
  
  trigger.addEventListener('click', () => {
    if (!isVisible) {
      // Hide the trigger box
      trigger.style.transform = 'scale(0)';
      trigger.style.opacity = '0';
      
      setTimeout(() => {
        trigger.style.display = 'none';
        
        // Show the grid
        grid.classList.remove('hidden');
        grid.classList.add('visible');
        
        // Connect the close button (already exists in the grid)
        const closeBtn = grid.querySelector('.small-projects-close .btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', hideSmallProjects);
        }
        
        // Trigger train animation for each card (left to right)
        setTimeout(() => {
          const cards = grid.querySelectorAll('.small-project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 150); // 150ms delay between each card for smoother train effect
          });
        }, 100);
        
      }, 300);
      
      isVisible = true;
    } else {
      hideSmallProjects();
    }
  });
  
}

// Setup work experience animation
export function setupExperienceAnimation() {
  const trigger = document.getElementById('experience-trigger');
  const timeline = document.getElementById('experience-timeline');

  if (!trigger || !timeline) return;

  let isVisible = false;
  let closeButton = null;
  let scrollHandler = null;
  
    // Function to hide experience
    function hideExperience(clickedFromBottom = false) {
      // Get the scroll amount we used when opening
      const scrollAmount = timeline.scrollAmount || 0;
      
      timeline.classList.add('hidden');

      // Clean up scroll listener
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
        scrollHandler = null;
      }

      // Remove any bottom close button
      const bottomCloseButton = document.getElementById('close-experience-bottom');
      if (bottomCloseButton) {
        bottomCloseButton.remove();
      }

      // Reset top close button display and visibility
      const topCloseButton = document.getElementById('close-experience');
      if (topCloseButton) {
        topCloseButton.style.display = 'block';
        topCloseButton.style.visibility = 'visible';
        topCloseButton.classList.remove('fade-out');
      }

      // Show the trigger box again with smooth animation
      trigger.style.visibility = 'visible';
      trigger.style.transform = 'scale(0)';
      trigger.style.opacity = '0';

      // Animate trigger box back in and scroll back up
      setTimeout(() => {
        trigger.style.transform = 'scale(1)';
        trigger.style.opacity = '1';
        
        // Only scroll back if clicked from bottom close button
        if (scrollAmount > 0 && clickedFromBottom) {
          window.scrollTo({
            top: window.scrollY - scrollAmount,
            behavior: 'smooth'
          });
        }
      }, 50);

      isVisible = false;
    }
  
  trigger.addEventListener('click', () => {
    if (!isVisible) {
      // Save current scroll position before opening
      const scrollPositionBeforeOpen = window.scrollY;
      
      // Hide the trigger box
      trigger.style.transform = 'scale(0)';
      trigger.style.opacity = '0';
      
      setTimeout(() => {
        trigger.style.visibility = 'hidden';
        
        // Show the experience timeline
        timeline.classList.remove('hidden');
        
        // Auto-scroll to the end of the timeline after a short delay
        setTimeout(() => {
          const timelineRect = timeline.getBoundingClientRect();
          const timelineBottom = timelineRect.bottom;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much to scroll down to show the content
          const scrollAmount = timelineBottom - viewportHeight + 100; // 100px buffer
          
          // Smooth scroll to show the timeline content
          window.scrollTo({
            top: window.scrollY + scrollAmount,
            behavior: 'smooth'
          });
          
          // Store the scroll amount for later use when closing
          timeline.scrollAmount = scrollAmount;
          timeline.scrollPositionBeforeOpen = scrollPositionBeforeOpen;
        }, 300); // Wait for content to be visible
        
        // Reinitialize scroll handler for the new open state
        setTimeout(() => {
          // Remove any existing scroll listener first
          if (scrollHandler) {
            window.removeEventListener('scroll', scrollHandler);
          }
          
          // Recreate scroll handler for the new open state
          let scrollTimeout;
          scrollHandler = function handleScroll() {
            if (!isVisible || !closeButton) return;
            
            // Debounce scroll events
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              const timelineRect = timeline.getBoundingClientRect();
              const timelineTop = timelineRect.top;
              const timelineBottom = timelineRect.bottom;
              const viewportHeight = window.innerHeight;
              
              // If scrolled past the timeline, hide top button and show bottom button
              if (timelineTop < viewportHeight * 0.1) {
                // Fade out top button smoothly
                closeButton.style.opacity = '0';
                closeButton.style.transition = 'opacity 0.3s ease';
                
                // Show bottom close button at end of timeline content
                let bottomCloseButton = document.getElementById('close-experience-bottom');
                if (!bottomCloseButton) {
                  bottomCloseButton = document.createElement('div');
                  bottomCloseButton.id = 'close-experience-bottom';
                  bottomCloseButton.className = 'experience-close';
                  bottomCloseButton.style.position = 'relative';
                  bottomCloseButton.style.marginTop = '2rem';
                  bottomCloseButton.style.textAlign = 'center';
                  bottomCloseButton.style.opacity = '0';
                  bottomCloseButton.style.transition = 'opacity 0.3s ease';
                  bottomCloseButton.innerHTML = `
                    <button class="btn">
                      <span>✕</span> Close Work Experience
                    </button>
                  `;
                  bottomCloseButton.querySelector('.btn').addEventListener('click', () => hideExperience(true));
                  // Append to the timeline container, not document.body
                  timeline.appendChild(bottomCloseButton);
                }
                
                // Fade in bottom button smoothly
                setTimeout(() => {
                  bottomCloseButton.style.opacity = '1';
                }, 50);
              } else {
                // Fade in top button smoothly
                closeButton.style.opacity = '1';
                closeButton.style.transition = 'opacity 0.3s ease';
                
                // Fade out bottom close button
                const bottomCloseButton = document.getElementById('close-experience-bottom');
                if (bottomCloseButton) {
                  bottomCloseButton.style.opacity = '0';
                }
              }
            }, 50); // 50ms debounce
          }
          
          // Add the new scroll listener
          window.addEventListener('scroll', scrollHandler);
        }, 200);
      }, 200);
      
      isVisible = true;
    } else {
      hideExperience();
    }
  });
  
  // Add escape key functionality
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isVisible) {
      hideExperience();
    }
  });
  
  // Add close button functionality
  setTimeout(() => {
    closeButton = document.getElementById('close-experience');
    if (closeButton) {
      closeButton.addEventListener('click', () => hideExperience(false));
    }
  }, 500);
}
