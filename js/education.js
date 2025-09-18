// Education data and rendering
import { getTranslation } from './translations.js';

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
      { code: "STA100", name: "Sannsynlighetsregning og statistikk 1" },
    ],
  },
  {
    title: "Third year— Semester 5",
    badges: ["AI", "Model", "Software Engineering"],
    courses: [
      { code: "DAT105", name: "AI Essentials for Everyone" },
      { code: "DAT305", name: "AI for Engineers" },
      { code: "MOD300", name: "Teknisk modellering" },
      { code: "DAT240", name: "Programvareutvikling" },
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

export function renderEducationTree(lang = 'en') {
  const root = document.getElementById('edu-accordion');
  if (!root) return;
  root.className = 'edu-tree';
  root.innerHTML = '';
  
  // Get translated education data
  const educationData = getEducationData(lang);
  
  // Create trunk
  const trunk = document.createElement('div');
  trunk.className = 'tree-trunk';
  root.appendChild(trunk);
  
  // Leaves (semesters)
  educationData.forEach((sem, idx) => {
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

function getEducationData(lang) {
  const semesterTitles = {
    en: {
      "1": "First year— Semester 1",
      "2": "First year— Semester 2", 
      "3": "Second year— Semester 3",
      "4": "Second year— Semester 4",
      "5": "Third year— Semester 5",
      "6": "Third year— Semester 6"
    },
    no: {
      "1": "Første år— Semester 1",
      "2": "Første år— Semester 2",
      "3": "Andre år— Semester 3", 
      "4": "Andre år— Semester 4",
      "5": "Tredje år— Semester 5",
      "6": "Tredje år— Semester 6"
    }
  };

  const courseNames = {
    en: {
      "DAT120": "Fundamental Programming",
      "FYS102": "Physics for Data/Electro",
      "KJE101": "Fundamental Chemistry",
      "MAT100": "Mathematical Methods 1",
      "DAT200": "Databases and Web Programming",
      "ELE130": "Applied Mathematics and Physics in Robot Programming",
      "MAT200": "Mathematical Methods 2",
      "DAT220": "Algorithms and Data Structures",
      "DAT230": "Information and Software Security",
      "DAT250": "Operating Systems and System Programming",
      "DAT240": "Software Development",
      "STA100": "Probability and Statistics 1",
      "DAT105": "AI Essentials for Everyone",
      "DAT305": "AI for Engineers",
      "MOD300": "Technical Modeling",
      "DAT310": "Bachelor Thesis in Computer Technology",
      "DAT320": "Technology Management (Engineering Systems Subject)"
    },
    no: {
      "DAT120": "Grunnleggende programmering",
      "FYS102": "Fysikk for data/elektro",
      "KJE101": "Grunnleggende kjemi",
      "MAT100": "Matematiske metoder 1",
      "DAT200": "Databaser og webprogrammering",
      "ELE130": "Anvendt matematikk og fysikk i robotprogrammering",
      "MAT200": "Matematiske metoder 2",
      "DAT220": "Algoritmer og datastrukturer",
      "DAT230": "Informasjons- og programvaresikkerhet",
      "DAT250": "Operativsystemer og systemprogrammering",
      "DAT240": "Programvareutvikling",
      "STA100": "Sannsynlighetsregning og statistikk 1",
      "DAT105": "AI Essentials for Everyone",
      "DAT305": "AI for Engineers",
      "MOD300": "Teknisk modellering",
      "DAT310": "Bacheloroppgave i datateknologi",
      "DAT320": "Teknologiledelse (ingeniørfaglig systememne)"
    }
  };

  return education.map((sem, index) => {
    const semesterNumber = (index + 1).toString();
    return {
      ...sem,
      title: semesterTitles[lang][semesterNumber] || sem.title,
      courses: sem.courses.map(course => ({
        ...course,
        name: courseNames[lang][course.code] || course.name
      }))
    };
  });
}
