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
      { code: "DAT200", name: "Databases and Web Programming" },
      { code: "ELE130", name: "Applied Mathematics and Physics in Robot Programming" },
      { code: "MAT200", name: "Mathematical Methods 2" },
    ],
  },
  {
    title: "Second year— Semester 3",
    badges: ["Core CS"],
    courses: [
      { code: "DAT220", name: "Algorithms and Data Structures" },
      { code: "DAT230", name: "Information and Software Security" },
      { code: "DAT250", name: "Operating Systems and System Programming" },
    ],
  },
  {
    title: "Second year— Semester 4",
    badges: ["Systems"],
    courses: [
      { code: "ELE130", name: "Communication Technology 1" },
      { code: "STA100", name: "Probability and Statistics 1" },
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
      { code: "DAT310", name: "Bachelor Thesis in Computer Technology" },
      { code: "DAT320", name: "Technology Management (Engineering Systems Subject)" },
    ],
  },
];

export function renderEducationTree() {
  console.log('renderEducationTree called');
  const root = document.getElementById('edu-accordion');
  console.log('Root element:', root);
  if (!root) return;
  root.className = 'edu-tree';
  root.innerHTML = '';
  
  console.log('Education data:', education);
  
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

