// Data: update these arrays with your real information
const experiences = [
  {
    role: "Butikkmedarbeider",
    company: "MENY (Kuben), Hønefoss",
    period: "Nov. 2022 – Nåværende",
    bullets: [
      "Daglig kundeservice og kassearbeid med høy trafikk.",
      "Ansvar for varepåfylling og ryddig butikklayout.",
      "Håndterer ulike kundebehov og produkttyper effektivt.",
    ],
  },
  {
    role: "Vakt",
    company: "Kistefoss, Jevnaker",
    period: "Mai 2024 – Sep. 2024",
    bullets: [
      "Bidro til sikker og ryddig gjennomføring av arrangementer.",
      "Kommuniserte tydelig med besøkende og team ved behov.",
    ],
  },
  {
    role: "Turistvert",
    company: "Glassverket, Jevnaker",
    period: "Juli 2022 – Aug. 2022",
    bullets: [
      "Veiledet og informerte turister om attraksjoner og aktiviteter.",
      "Sørget for gode opplevelser på ulike stasjoner.",
    ],
  },
  {
    role: "SFO‑assistent",
    company: "Toso skole, Jevnaker",
    period: "Juni 2021 – Juli 2022",
    bullets: [
      "Tilsyn og aktiviteter for barn i SFO.",
      "La til rette for trygge og gode relasjoner i hverdagen.",
    ],
  },
];

const projects = [
  {
    name: "Calculator",
    description: "Simple calculator built during learning process (C# console).",
    tags: ["C#"],
    demoUrl: "https://github.com/baselabu/Small-projects/tree/main/Calculator",
    githubUrl: "https://github.com/baselabu/Small-projects/tree/main/Calculator",
  },
  {
    name: "Guessing Number Game",
    description: "Console number guessing game (C#).",
    tags: ["C#"],
    demoUrl: "https://github.com/baselabu/Small-projects/tree/main/GuessingNumber",
    githubUrl: "https://github.com/baselabu/Small-projects/tree/main/GuessingNumber",
  },
];

// Education data (semesters with compact course lists)
const education = [
  {
    title: "First year— Semester 1",
    badges: ["Intro"],
    courses: [
      { code: "DAT120", name: "Grunnleggende programmering" },
      { code: "FYS102", name: "Fysikk for data/elektro" },
      { code: "KJE101", name: "Grunnleggende kjemi" },
      { code: "MAT100", name: "Matematiske metoder 1" },
      // Removed ING-stud per request
    ],
  },
  {
    title: "First year— Semester 2",
    badges: ["Web", "Robotikk"],
    courses: [
      { code: "DAT200", name: "Databaser og webprogrammering" },
      { code: "ELE130", name: "Anvendt matematikk og fysikk i robotprogrammering" },
      { code: "MAT200", name: "Matematiske metoder 2" },
    ],
  },
  {
    title: "Second year— Semester 3",
    badges: ["Core CS"],
    courses: [
      { code: "DAT220", name: "Algoritmer og datastrukturer" },
      { code: "DAT230", name: "Informasjons- og programvaresikkerhet" },
      { code: "DAT250", name: "Operativsystemer og systemprogrammering" },
    ],
  },
  {
    title: "Second year— Semester 4",
    badges: ["Systems"],
    courses: [
      { code: "ELE130", name: "Kommunikasjonsteknologi 1" },
      { code: "DAT240", name: "Programvareutvikling" },
      { code: "STA100", name: "Sannsynlighetsregning og statistikk 1" },
    ],
  },
  {
    title: "Third year— Semester 5",
    badges: ["AI", "Model"],
    courses: [
      { code: "DAT105", name: "AI Essentials for Everyone" },
      { code: "DAT305", name: "AI for Engineers" },
      { code: "MOD300", name: "Teknisk modellering" },
    ],
  },
  {
    title: "Third year— Semester 6",
    badges: ["Capstone"],
    courses: [
      { code: "DAT310", name: "Bacheloroppgave i datateknologi" },
      { code: "DAT320", name: "Teknologiledelse (ingeniørfaglig systememne)" },
    ],
  },
];

// Render experiences in reverse chronological order assuming newest first in array
function renderExperiences(items) {
  const container = document.getElementById("experience-list");
  if (!container) return;
  container.innerHTML = "";
  items.forEach((exp) => {
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
}

function renderProjects(items) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="taglist">
        ${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        <a class="btn secondary" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">Quick Demo</a>
        <a class="btn primary" href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupNavToggle() {
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

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

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
});


// Scroll reveal animations
function setupScrollReveal() {
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

// Vertical timeline progress that fills as you scroll
function setupTimelineProgress() {
  // No-op: visuals centered; keep function for structure
}

// Theme toggle with persistence and system preference
function setupTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (toggle) toggle.textContent = '🌙';
    } else {
      root.removeAttribute('data-theme');
      if (toggle) toggle.textContent = '☀️';
    }
  }
}

// CV modal open/close
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

// Hide header at very top for clean hero face
function setupTopHeaderHide() {
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

function setupContactForm() {
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

function closeCvModal() {
  const modal = document.getElementById('cv-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  // Delay hiding to allow transition
  setTimeout(() => modal.classList.add('hidden'), 200);
  document.documentElement.style.overflow = '';
}

function renderEducationTree() {
  const root = document.getElementById('edu-accordion');
  if (!root) return;
  root.className = 'edu-tree';
  root.innerHTML = '';
  // Create trunk
  const trunk = document.createElement('div');
  trunk.className = 'tree-trunk';
  root.appendChild(trunk);
  // Leaves (semesters)
  education.forEach((sem, idx) => {
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
}
