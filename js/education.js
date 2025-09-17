// Education data and rendering
export const education = [
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

export function renderEducationTree() {
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
