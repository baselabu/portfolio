// Education data and rendering

export const education = [
  {
    title: "First year— Semester 1",
    badges: ["Intro"],
    courses: [
      { code: "DAT120", name: "Fundamental Programming" },
      { code: "FYS102", name: "Physics for Data/Electro" },
      { code: "KJE101", name: "Fundamental Chemistry" },
      { code: "MAT100", name: "Mathematical Methods 1" },
      // Removed ING-stud per request
    ],
  },
  {
    title: "First year— Semester 2",
    badges: ["Web", "Robotikk"],
    courses: [
      { code: "DAT310", name: "Web Programming" },
      { code: "ELE130", name: "Applied Mathematics and Physics in Robot Programming" },
      { code: "MAT200", name: "Mathematical Methods 2" },
    ],
  },
  {
    title: "Second year— Semester 3",
    badges: ["Core CS"],
    courses: [
      { code: "DAT200", name: "Algorithms and Data Structures" },
      { code: "DAT250", name: "Information and Software Security" },
      { code: "DAT320", name: "Operating Systems and System Programming" },
    ],
  },
  {
    title: "Second year— Semester 4",
    badges: ["Systems"],
    courses: [
      { code: "DAT230", name: "Communication Technology 1" },
      { code: "STA100", name: "Probability and Statistics 1" },
      { code: "DAT220", name: "Database Systems" },
    ],
  },
  {
    title: "Third year— Semester 5",
    badges: ["AI", "Model", "Software Engineering"],
    courses: [
      { code: "DAT105", name: "AI Essentials for Everyone" },
      { code: "DAT305", name: "AI for Engineers" },
      { code: "MOD300", name: "Technical Modeling" },
      { code: "DAT240", name: "Software Development" },
    ],
  },
  {
    title: "Third year— Semester 6",
    badges: ["Capstone"],
    courses: [
      { code: "DATBAC", name: "Bachelor Thesis in Computer Technology" },
      { code: "ING200", name: "Technology Management (Engineering Systems Subject)" },
    ],
  },
];

export function renderEducationTree() {
  console.log('renderEducationTree called');
  const root = document.getElementById('edu-accordion');
  console.log('Root element:', root);
  if (!root) return;
  root.className = 'edu-tree hidden';
  root.innerHTML = '';
  
  console.log('Education data:', education);
  
  // Add close button
  const closeButton = document.createElement("div");
  closeButton.className = "education-close";
  closeButton.innerHTML = `
    <button id="close-education" class="btn">
      <span>✕</span> Close Education Tree
    </button>
  `;
  root.appendChild(closeButton);
  
  // Create trunk
  const trunk = document.createElement('div');
  trunk.className = 'tree-trunk';
  root.appendChild(trunk);
  
  // Leaves (semesters)
  education.forEach((sem, idx) => {
    console.log('Processing semester:', sem.title);
    const leaf = document.createElement('div');
    leaf.className = 'tree-leaf';
    leaf.style.setProperty('--i', String(idx));
    const title = document.createElement('div');
    title.className = 'leaf-title';
    title.textContent = sem.title;
    const list = document.createElement('ul');
    list.className = 'leaf-courses';
    (sem.courses || []).forEach((c) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="course-name">${c.name}</span> <span class="course-code">${c.code}</span>`;
      list.appendChild(li);
    });
    leaf.appendChild(title);
    leaf.appendChild(list);
    root.appendChild(leaf);
  });
  console.log('Education tree rendered');
}

export function setupEducationAnimation() {
  const trigger = document.getElementById('education-trigger');
  const accordion = document.getElementById('edu-accordion');

  if (!trigger || !accordion) return;
  
  let isVisible = false;
  let closeButton = null;
  let scrollHandler = null;
  
      // Function to hide education
      function hideEducation(clickedFromBottom = false) {
        // Get the scroll amount we used when opening
        const scrollAmount = accordion.scrollAmount || 0;
        
        // Animate out the tree elements
        const trunk = accordion.querySelector('.tree-trunk');
        const leaves = accordion.querySelectorAll('.tree-leaf');

        // Hide leaves first (reverse order)
        leaves.forEach((leaf, index) => {
          setTimeout(() => {
            leaf.classList.remove('animate-in');
          }, index * 100);
        });

        // Hide trunk
        setTimeout(() => {
          if (trunk) trunk.classList.remove('animate-in');
        }, leaves.length * 100 + 100);

        // Hide the accordion with smooth CSS transition
        setTimeout(() => {
          accordion.classList.add('hidden');

          // Clean up scroll listener
          if (scrollHandler) {
            window.removeEventListener('scroll', scrollHandler);
            scrollHandler = null;
          }

          // Remove any bottom close button
          const bottomCloseButton = document.getElementById('close-education-bottom');
          if (bottomCloseButton) {
            bottomCloseButton.remove();
          }

          // Reset top close button display and visibility
          if (closeButton) {
            closeButton.style.display = 'block';
            closeButton.style.visibility = 'visible';
            closeButton.classList.remove('fade-out');
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
        }, leaves.length * 100 + 400);

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
        
        // Show the education tree
        accordion.classList.remove('hidden');
        
        // Auto-scroll to the end of the education tree after animation
        setTimeout(() => {
          const accordionRect = accordion.getBoundingClientRect();
          const accordionBottom = accordionRect.bottom;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much to scroll down to show the content
          const scrollAmount = accordionBottom - viewportHeight + 100; // 100px buffer
          
          // Smooth scroll to show the education content
          window.scrollTo({
            top: window.scrollY + scrollAmount,
            behavior: 'smooth'
          });
          
          // Store the scroll amount for later use when closing
          accordion.scrollAmount = scrollAmount;
          accordion.scrollPositionBeforeOpen = scrollPositionBeforeOpen;
        }, 800); // Wait for animations to complete
        
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
              const accordionRect = accordion.getBoundingClientRect();
              const accordionTop = accordionRect.top;
              const accordionBottom = accordionRect.bottom;
              const viewportHeight = window.innerHeight;
              
              // If scrolled past the accordion, hide top button and show bottom button
              if (accordionTop < viewportHeight * 0.1) {
                // Fade out top button smoothly
                closeButton.style.opacity = '0';
                closeButton.style.transition = 'opacity 0.3s ease';
                
                // Show bottom close button at end of accordion content
                let bottomCloseButton = document.getElementById('close-education-bottom');
                if (!bottomCloseButton) {
                  bottomCloseButton = document.createElement('div');
                  bottomCloseButton.id = 'close-education-bottom';
                  bottomCloseButton.className = 'education-close';
                  bottomCloseButton.style.position = 'relative';
                  bottomCloseButton.style.marginTop = '2rem';
                  bottomCloseButton.style.textAlign = 'center';
                  bottomCloseButton.style.opacity = '0';
                  bottomCloseButton.style.transition = 'opacity 0.3s ease';
                  bottomCloseButton.innerHTML = `
                    <button class="btn">
                      <span>✕</span> Close Education Tree
                    </button>
                  `;
                  bottomCloseButton.querySelector('.btn').addEventListener('click', () => hideEducation(true));
                  // Append to the accordion container, not document.body
                  accordion.appendChild(bottomCloseButton);
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
                const bottomCloseButton = document.getElementById('close-education-bottom');
                if (bottomCloseButton) {
                  bottomCloseButton.style.opacity = '0';
                }
              }
            }, 50); // 50ms debounce
          }
          
          // Add the new scroll listener
          window.addEventListener('scroll', scrollHandler);
        }, 200);
        
        // Animate in the tree elements
        setTimeout(() => {
          const trunk = accordion.querySelector('.tree-trunk');
          const leaves = accordion.querySelectorAll('.tree-leaf');
          
          // Animate trunk first
          if (trunk) trunk.classList.add('animate-in');
          
          // Animate leaves with stagger
          leaves.forEach((leaf, index) => {
            setTimeout(() => {
              leaf.classList.add('animate-in');
            }, 300 + (index * 150)); // Start after trunk, then stagger
          });
        }, 100);
      }, 200);
      
      isVisible = true;
    } else {
      hideEducation();
    }
  });
  
  // Add escape key functionality
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isVisible) {
      hideEducation();
    }
  });
  
  // Add close button functionality
  setTimeout(() => {
    closeButton = document.getElementById('close-education');
    if (closeButton) {
      closeButton.addEventListener('click', () => hideEducation(false));
    }
  }, 500);
}

