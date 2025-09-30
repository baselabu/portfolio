# Basel Abu Sablih - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer Science student at the University of Stavanger.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Interactive CV** - View and download CV with native PDF controls
- **Project Showcase** - GitHub links to my coding projects
- **Education Timeline** - Visual representation of my academic journey
- **Work Experience** - Detailed timeline of my professional experience
- **Contact Form** - Easy way to get in touch
- **Smooth Animations** - Engaging user experience

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main HTML file
├── 📄 script.js               # Main JavaScript entry point
├── 📄 README.md               # Project documentation
├── 📁 assets/                 # Static assets
│   └── 📁 icons/              # Website icons
│       ├── 🖼️ favicon.ico
│       ├── 🖼️ favicon.svg
│       └── 🖼️ apple-touch-icon.png
├── 📁 css/                    # Stylesheets
│   ├── 📄 base.css            # Base styles and CSS variables
│   └── 📁 components/         # Component-specific styles
│       ├── 📄 header.css
│       ├── 📄 hero.css
│       ├── 📄 experience.css
│       ├── 📄 projects.css
│       ├── 📄 education.css
│       ├── 📄 contact.css
│       ├── 📄 modal.css
│       ├── 📄 footer.css
│       └── 📄 animations.css
├── 📁 js/                     # JavaScript modules
│   ├── 📄 data.js             # Project data (experiences, projects)
│   ├── 📄 render.js           # DOM rendering functions
│   ├── 📄 theme.js            # Theme management
│   ├── 📄 contact.js          # Contact form and CV modal
│   ├── 📄 education.js        # Education timeline rendering
│   └── 📄 animations.js       # Scroll animations
└── 📁 documents/              # Documents and PDFs
    └── 📄 Basel Work CV.pdf   # Resume/CV
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript
- **Google Fonts** - Inter font family
- **PDF.js** - Native PDF viewing capabilities

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Download/clone the repository
2. Open `index.html` in your web browser

### Option 2: Local Server (Recommended)
1. Navigate to the project directory
2. Start a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## 🎨 Customization

### Adding New Projects
Edit `js/data.js` to add new projects:

#### Basic Project (GitHub only)
```javascript
export const projects = [
  {
    name: "Your Project Name",
    description: "Project description",
    tags: ["Technology1", "Technology2"],
    githubUrl: "https://github.com/yourusername/project"
  }
];
```

#### Project with Quick Demo Button
If your project has a live demo or deployed version, add a `demoUrl`:
```javascript
export const projects = [
  {
    name: "Your Project Name",
    description: "Project description",
    tags: ["Technology1", "Technology2"],
    demoUrl: "https://yourproject-demo.netlify.app",  // Live demo URL
    githubUrl: "https://github.com/yourusername/project"
  }
];
```

#### Project with Different Demo Types
```javascript
export const projects = [
  {
    name: "Web App",
    description: "A full-stack web application",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://myapp.herokuapp.com",
    githubUrl: "https://github.com/yourusername/webapp"
  },
  {
    name: "Mobile App",
    description: "A cross-platform mobile app",
    tags: ["React Native", "Firebase"],
    demoUrl: "https://expo.dev/@yourusername/mobileapp",  // Expo demo
    githubUrl: "https://github.com/yourusername/mobileapp"
  },
  {
    name: "Desktop App",
    description: "A desktop application",
    tags: ["Electron", "TypeScript"],
    demoUrl: "https://github.com/yourusername/desktopapp/releases",  // Download link
    githubUrl: "https://github.com/yourusername/desktopapp"
  },
  {
    name: "Console Project",
    description: "A command-line tool or script",
    tags: ["Python", "CLI"],
    // No demoUrl - will only show GitHub button
    githubUrl: "https://github.com/yourusername/consoleproject"
  }
];
```

#### Demo Button Configuration
The demo button will automatically appear when you add a `demoUrl` to your project. The button will:
- Show "Quick Demo" text
- Open the URL in a new tab
- Use secondary button styling
- Appear alongside the "View on GitHub" button

**Note**: If you don't include `demoUrl`, only the "View on GitHub" button will be displayed.

#### Example: Adding a Demo to Existing Project
To add a demo button to an existing project, simply add the `demoUrl` property:

```javascript
// Before (GitHub only)
{
  name: "Calculator",
  description: "Simple calculator built during learning process (C# console).",
  tags: ["C#"],
  githubUrl: "https://github.com/baselabu/Small-projects/tree/main/Calculator"
}

// After (with demo)
{
  name: "Calculator",
  description: "Simple calculator built during learning process (C# console).",
  tags: ["C#"],
  demoUrl: "https://calculator-demo.netlify.app",  // Add this line
  githubUrl: "https://github.com/baselabu/Small-projects/tree/main/Calculator"
}
```

#### Demo URL Examples
- **Web App**: `https://myapp.netlify.app`
- **Heroku**: `https://myapp.herokuapp.com`
- **Vercel**: `https://myapp.vercel.app`
- **GitHub Pages**: `https://username.github.io/projectname`
- **Expo**: `https://expo.dev/@username/project`
- **Download**: `https://github.com/username/project/releases`
- **Video Demo**: `https://youtube.com/watch?v=videoId`

### Adding Work Experience
Edit `js/data.js` to add new experiences:
```javascript
export const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Start Date – End Date",
    bullets: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
];
```

### Updating CV
Replace `documents/Basel Work CV.pdf` with your updated CV.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Performance

- ⚡ Fast loading times
- 🎨 Optimized images and icons
- 📦 Minimal dependencies
- 🚀 Vanilla JavaScript (no framework overhead)

## 📧 Contact

- **Email**: baseltv11@gmail.com
- **LinkedIn**: [Basel Abu Sablih](https://www.linkedin.com/in/basel-abu-sablih-547a5a290)
- **GitHub**: [baselabu](https://github.com/baselabu)

---

*Built with ❤️ by Basel Abu Sablih*