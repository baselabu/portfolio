import { no, projects, moreProjects, experience, education } from "./content.js";

const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};

// English for runtime-only strings; the rest of the English lives in the HTML.
const en = {
  "form.sending": "Sending…",
  "form.sent": "Message sent. I'll reply as soon as I can.",
  "form.error": "The message wasn't sent. Try again, or email baselabusablih@gmail.com directly.",
};

// ?lang=no gives a shareable Norwegian link.
let lang = new URLSearchParams(location.search).get("lang") || store.get("lang") ||(/^(nb|nn|no)/i.test(navigator.language) ? "no" : "en");
const t = (key) => (lang === "no" ? no[key] : en[key]);
const pick = (v) => (typeof v === "string" ? v : v[lang]);

const esc = (s) => s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);

function linksHtml(links = []) {
  return links.length
    ? `<p class="links">${links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(pick(l))}</a>`).join("")}</p>`
    : "";
}

function renderProjects() {
  document.getElementById("project-list").innerHTML = projects.map((p) => `
    <article class="project">
      <header>
        <h3>${esc(pick(p.title))}</h3>
        <span class="year">${p.status ? `<em>${esc(pick(p.status))}</em> ` : ""}${p.year}</span>
      </header>
      <p class="meta">${esc(pick(p.context))}</p>
      <p>${esc(pick(p.desc))}</p>
      <p class="tags">${esc(p.stack)}</p>
      ${linksHtml(p.links)}
    </article>`).join("");

  document.getElementById("more-list").innerHTML = moreProjects.map((p) => `
    <article class="small">
      <h4>${esc(pick(p.title))} <span class="year">${p.year}</span></h4>
      <p class="meta">${esc(pick(p.context))}</p>
      <p>${esc(pick(p.desc))} <span class="tags">${esc(p.stack)}</span></p>
      ${linksHtml(p.links)}
    </article>`).join("");
}

function renderExperience() {
  document.getElementById("exp-list").innerHTML = experience.map((e) => `
    <li>
      <span class="when">${esc(pick(e.period))}</span>
      <div>
        <h3>${esc(pick(e.role))}</h3>
        <p class="meta">${esc(pick(e.org))}</p>
        ${e.bullets.length ? `<ul>${e.bullets.map((b) => `<li>${esc(pick(b))}</li>`).join("")}</ul>` : ""}
      </div>
    </li>`).join("");
}

function renderEducation() {
  const label = lang === "no" ? no["edu.courses"] : "Show all courses";
  document.getElementById("edu-list").innerHTML = education.map((d) => `
    <article class="degree">
      <header>
        <h3>${esc(pick(d.degree))}</h3>
        <span class="year">${d.period}</span>
      </header>
      <p class="meta">${esc(pick(d.school))}</p>
      <p>${esc(pick(d.note))}</p>
      <details${d.open ? " open" : ""}>
        <summary>${esc(label)}</summary>
        ${d.terms.map((term) => `
          <h4>${esc(pick(term.name))}</h4>
          <ul class="courses">
            ${term.courses.map((c) => `<li><span class="code">${c.code}</span> ${esc(c[lang])}${c.grade ? ` <span class="grade">${c.grade}</span>` : ""}</li>`).join("")}
          </ul>`).join("")}
      </details>
    </article>`).join("");
}

function applyLang() {
  document.documentElement.lang = lang === "no" ? "nb" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.en ??= el.textContent;
    el.textContent = lang === "no" ? no[el.dataset.i18n] ?? el.dataset.en : el.dataset.en;
  });
  document.querySelectorAll(".cv").forEach((a) => (a.href = `documents/Basel_Abu_Sablih_CV_${lang === "no" ? "NO" : "EN"}.pdf`));
  const btn = document.getElementById("lang");
  btn.textContent = lang === "no" ? "EN" : "NO";
  btn.setAttribute("aria-label", lang === "no" ? "Switch to English" : "Bytt til norsk");
  renderProjects();
  renderExperience();
  renderEducation();
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "no" ? "en" : "no";
  store.set("lang", lang);
  applyLang();
});

document.getElementById("theme").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  store.set("theme", root.dataset.theme);
});

// Web3Forms access keys are public by design; the key only allows sending to my inbox.
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const status = document.getElementById("form-status");
  const button = form.querySelector("button");
  const data = new FormData(form);
  data.append("access_key", "77d7f236-56e7-4dc0-8daf-038716127a96");
  data.append("subject", "Portfolio message");
  button.disabled = true;
  status.textContent = t("form.sending");
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
    if (!(await res.json()).success) throw new Error();
    status.textContent = t("form.sent");
    form.reset();
  } catch {
    status.textContent = t("form.error");
  } finally {
    button.disabled = false;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLang();
