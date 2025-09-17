import { experiences, projects } from './data.js';

// Render experiences in reverse chronological order assuming newest first in array
export function renderExperiences(items) {
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

export function renderProjects(items) {
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
