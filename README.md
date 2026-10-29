# Zukhruf Toufeeq — Portfolio Website

This is my **Zukhruf Toufeeq** portfolio, a Computer Science undergraduate and full-stack / AI developer. Built with **Vite + React (JavaScript/JSX)**, Tailwind CSS 4, and Framer Motion. 

## Features

- **Dark premium theme** — deep navy background with a rose/coral gradient accent, glassmorphism cards, and animated gradient blobs.
- **Fully responsive** — mobile-first layout with a hamburger drawer, sticky glass navbar with scroll-spy active links, and a sticky footer.
- **Animated hero** — typewriter role effect, decorative code card with floating badges, and smooth Framer Motion entrance animations.
- **Eight content sections** — Hero, About (with stats), Skills (5 categorized cards), Education, Projects, Recognition (certifications + achievements + languages + interests), Contact, and Footer.
- **Working contact form** — opens the visitor's email client pre-filled; plus a copy-email-to-clipboard button with toast feedback.
- **Accessible & SEO-ready** — semantic HTML, ARIA labels, descriptive alt text, and rich OpenGraph / Twitter meta tags in `index.html`.
- **Centralized content** — all text, skills, projects, and links live in a single data file for effortless editing.

---

## Tech Stack

| Layer        | Technology                                              |
| ------------ | ------------------------------------------------------- |
| Build tool   | [Vite 7](https://vite.dev/)                             |
| UI Library   | [React 19](https://react.dev/)                          |
| Language     | JavaScript (JSX)                |
| Styling      | Tailwind CSS 4 (via `@tailwindcss/vite`)                |
| Animation    | [Framer Motion](https://www.framer.com/motion/)         |
| Icons        | [Lucide React](https://lucide.dev/)                     |
| Toasts       | [Sonner](https://sonner.emilkowal.ski/)                 |
| Fonts        | Inter (body) + Space Grotesk (display) via Google Fonts |


## Getting Started

### Prerequisites

- **Node.js 18+** (or Bun / pnpm)
- npm, pnpm, or bun

### Installation

```bash
# 1. Extract the zip
unzip portfolio.zip
cd portfolio

# 2. Install dependencies (pick one)
npm install
# or
pnpm install
# or
bun install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser — the portfolio will hot-reload as you edit.

### Available Scripts

| Script              | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server on port 5173 (HMR)       |
| `npm run build`     | Create an optimized production build in `dist/`    |
| `npm run preview`   | Preview the production build locally               |
| `npm run lint`      | Run ESLint to check code quality                   |



## Project Structure


portfolio/
├── index.html                 # Vite entry: meta tags, fonts, #root
├── vite.config.js             # Vite config: React + Tailwind + @ alias
├── jsconfig.json              # Path alias (@/*) for editor IntelliSense
├── eslint.config.js           # ESLint flat config
├── package.json
├── public/
│   └── favicon.svg            # ZT monogram favicon
└── src/
    ├── main.jsx               # React entry — mounts App + Toaster
    ├── App.jsx                # Composes all portfolio sections
    ├── globals.css            # Custom dark theme, glassmorphism, animations
    ├── lib/
    │   └── portfolio-data.js  # ← ALL editable content lives here
    └── components/
        └── portfolio/         # Portfolio components (all .jsx)
            ├── navbar.jsx     # Sticky glass nav + mobile drawer + scroll-spy
            ├── hero.jsx       # Typewriter hero + code card + socials
            ├── about.jsx      # Professional summary + stats grid
            ├── skills.jsx     # 5 categorized skill cards
            ├── education.jsx  # Academic timeline cards
            ├── projects.jsx   # 4 project cards (AI Travel Planner featured)
            ├── recognition.jsx# Certifications + achievements + languages + interests
            ├── contact.jsx    # Contact info + working form + copy-email
            └── footer.jsx     # Brand, socials, back-to-top


## Customization

Almost everything you'd want to change lives in **one file**:

### `src/lib/portfolio-data.js`

This is the single source of truth for all content. Edit it to update:

- `personal` — name, roles, tagline, contact info, social links, professional summary
- `stats` — the four stat cards in the About section (CGPA, project count, etc.)
- `skillCategories` — the five skill groups, each with title, icon, accent color, and tags
- `education` — academic qualifications, institutions, and results
- `projects` — project name, tagline, description bullets, tech stack, icon, accent, and GitHub link
- `certifications` — certificate titles, issuers, dates, credential IDs, and verify URLs
- `achievements` — achievement titles and descriptions
- `languages` — spoken languages and proficiency levels
- `interests` — interest tags
- `navLinks` — navbar links (label + section anchor)

#### Example: Add a new project

```js
export const projects = [
  // ...existing projects
  {
    name: "My New Project",
    tagline: "A short one-line description",
    description: [
      "What it does.",
      "Key feature two.",
      "Key feature three.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    icon: "sparkles",       // plane | cloud | gamepad | shield | sparkles
    accent: "violet",       // rose | cyan | violet | emerald | amber
    link: "",
  },
];
```

### Changing the accent color

The rose/coral palette is defined in `src/globals.css` under the `.dark` selector (look for `--primary` and `--accent`). To switch to a different hue, change those `oklch(...)` values — every component that uses `bg-primary`, `text-primary`, or the `.accent-*` helper classes will update automatically.

### Adding a profile photo to the Hero

The hero currently uses a decorative code card on the right. To swap in a real photo:

1. Drop your image into `public/` (e.g. `public/profile.jpg`).
2. In `src/components/portfolio/hero.jsx`, replace the `<pre>` code-card block (inside the `lg:col-span-5` column) with an `<img>`:
   ```jsx
   <img
     src="/profile.jpg"
     alt="Zukhruf Toufeeq"
     className="relative rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
   />
   ```

---

## 🌐 Deployment

This is a static Vite app — the `npm run build` command outputs a `dist/` folder you can host anywhere.

### Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

### Netlify

1. Push to GitHub.
2. Connect the repo on [netlify.com](https://netlify.com).
3. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages / any static host

```bash
npm run build
# Upload the contents of dist/ to your host
```

For GitHub Pages, set `base: "/your-repo-name/"` in `vite.config.js` before building.

---

## 📄 License

Personal portfolio for Zukhruf Toufeeq. The code is provided as-is for personal use. Please don't reuse the personal information, project descriptions, or certifications without permission.

---

## 👤 About

**Zukhruf Toufeeq** — BS Computer Science undergraduate at Hajvery University Lahore, passionate about full-stack web development and AI-powered applications.

- 📧 [EMAIL_ADDRESS]
- 💼 [LinkedIn]()
- 🐙 [GitHub](https://github.com/zukhruf16)


---

_Built with Vite, React & Tailwind CSS._
