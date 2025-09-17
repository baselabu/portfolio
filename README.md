Basel Abu Sablih — Portfolio

Simple, fast, and responsive portfolio website built with vanilla HTML/CSS/JS. Host anywhere (GitHub Pages, Netlify, Vercel, local file system).

Quick start
- Open `index.html` in your browser.
- Optional: serve with any static server.

Customize content
- Edit `script.js`:
  - `experiences`: newest first. Each has `role`, `company`, `period`, `bullets`.
  - `projects`: `name`, `description`, `tags`, `demoUrl`, `githubUrl`.
- Edit `index.html`:
  - Name and About text
  - Email `baseltv11@gmail.com` (appears in multiple places)

Structure
- `index.html`: sections for About, Experience, Projects, Contact
- `styles.css`: responsive layout, theme, components
- `script.js`: renders experiences/projects, mobile nav, current year

Deployment
- GitHub Pages: push and enable Pages from `main` root
- Netlify/Vercel: new site from repo, framework = static

Notes
- Experiences render in reverse chronological order (as provided in array).
- Projects include Quick Demo and View on GitHub buttons.

