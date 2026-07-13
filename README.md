# Akshay Paghadar — Portfolio

A premium, animated, fully responsive portfolio for an Electronics / Embedded / Robotics engineer.
Built with **React (Vite) · JavaScript · Tailwind CSS · Framer Motion · React Router**.

**Design language:** dark "midnight lab" theme with copper PCB-trace accents. The hero features an
animated circuit-trace backdrop with travelling signal pulses, and section headings use silkscreen
reference designators (`U1 — ABOUT`, `J3 — CONTACT`) — the way components are labelled on a real PCB.

## ✨ Features

- Dark theme (default) with a light-mode toggle (persisted in `localStorage`)
- Smooth page transitions and scroll-reveal animations (Framer Motion, reduced-motion respected)
- Sticky navbar with animated active-link underline + mobile menu
- Hero with typewriter role cycling, CTA buttons and social links
- Animated statistics, categorized skills with progress bars and tech badges
- Projects with **category filter + search**, detail pages, image galleries and lightbox
- Research publications with DOI/abstracts, and a 4-patent grid (granted / published / in process)
- Achievements with photo + certificate galleries (click any image for full-screen lightbox)
- Experience timeline styled as solder-pad nodes
- Resume page with embedded PDF preview + download
- Contact page with a **validated Formspree form**, phone/email cards and a Google Maps embed
- **Live GitHub API** integration (repos + language stats, session-cached)
- Visitor counter (CounterAPI), SEO meta / Open Graph / JSON-LD / sitemap / robots.txt
- Accessibility: skip link, focus rings, aria labels, keyboard-navigable lightbox
- Performance: route-level code splitting, lazy images, vendor chunking, immutable image caching

## 🚀 Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## 🖼️ Add your photos & documents

**Read [`ASSETS.md`](./ASSETS.md).** It maps every one of your original photo/PDF files to the
exact filename the site expects inside `public/images/` and `public/docs/`.
Missing images render as clean labelled placeholders, so the site always works.

To remove the white background from your hero photo:

```bash
pip install pillow
python scripts/remove_bg.py photo_white_bg.jpg public/images/profile-hero.png
```

## ✏️ Customize content

Everything lives in **one file**: [`src/data/profile.js`](./src/data/profile.js) — name, roles,
about text, skills, projects, achievements, papers, patents, experience, links.
Change it there and the whole site updates.

Two placeholders you must set:

1. **Contact form** — create a free form at [formspree.io](https://formspree.io), then in
   `src/data/profile.js` replace `formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'`.
2. **Domain** — after deploying, replace `https://akshaypaghadar.vercel.app` in `index.html`,
   `public/sitemap.xml` and `public/robots.txt` with your real URL.

Optional: the visitor counter namespace in `src/hooks/useVisitorCounter.js`, and you can add
Vercel Analytics with `npm i @vercel/analytics` + `inject()` in `src/main.jsx`.

## ☁️ Deploy to Vercel

**Option A — Git (recommended)**
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Framework: *Vite* · Build: `npm run build` · Output: `dist`.
4. Click **Deploy**. Done — every `git push` redeploys automatically.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # first deploy (accept defaults)
vercel --prod   # production deploy
```

`vercel.json` is already included (SPA rewrites + long-cache for images).

## 📂 Project structure

```
portfolio/
├── index.html                  # SEO meta, OG tags, JSON-LD, fonts
├── vercel.json                 # SPA rewrites + caching
├── tailwind.config.js          # palette, fonts, animations
├── vite.config.js              # vendor chunk splitting
├── ASSETS.md                   # ← photo file mapping
├── scripts/remove_bg.py        # hero photo background removal
├── public/
│   ├── images/                 # ← your photos & certificates go here
│   ├── docs/                   # ← Akshay_Paghadar_Resume.pdf goes here
│   ├── favicon.svg  robots.txt  sitemap.xml
└── src/
    ├── main.jsx  App.jsx  index.css
    ├── data/profile.js         # ← ALL site content (edit me)
    ├── hooks/                  # useTypewriter, useGitHub, useVisitorCounter
    ├── components/             # Navbar, Footer, Lightbox, ProjectCard, …
    └── pages/                  # Home, Projects, ProjectDetail, Achievements,
                                #   Research, Resume, Contact, NotFound
```

## ♿ Accessibility & performance notes

- All interactive elements are keyboard-reachable with visible focus rings.
- `prefers-reduced-motion` disables all animation.
- Images are lazy-loaded with `decoding="async"`; routes are code-split.
- Lighthouse targets: 95+ across Performance / A11y / Best Practices / SEO
  (once real, compressed images are in place — keep photos under ~300 KB each;
  [squoosh.app](https://squoosh.app) is great for this).
