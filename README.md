# Kelsey Johnston — Portfolio Website

Professional portfolio site for Kelsey Johnston, Global Marketing Events Specialist.

## Tech Stack

- **React 19** + **Vite** — build tooling and dev server
- **React Router v7** — multi-page routing with clean URLs
- **Tailwind CSS v4** — utility-first styling (via `@tailwindcss/vite`)
- **Framer Motion** — scroll-triggered fade/slide animations
- **react-helmet-async** — per-route SEO meta tags
- **lucide-react** — icon set
- **oxlint** — fast linting, run in CI on every push

## Project Structure

```
src/
  components/
    layout/      Navbar, Footer, Layout, ScrollToTop, SEO
    ui/           Button, Card, Section, FadeIn, PlaceholderImage, LinkedInIcon
  pages/          One file per route (Home, About, Events, EventDetail,
                   Contact, NotFound)
  data/           Content arrays (expertise, events, timeline)
  assets/images/  Headshot and other images
public/
  _redirects      Cloudflare Pages SPA fallback (required for client-side routing)
```

## Getting Started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

### Contact form setup

The contact form posts to [Web3Forms](https://web3forms.com). To make it functional:

1. Go to [web3forms.com](https://web3forms.com) and generate a free access key (no account required).
2. Copy `.env.example` to `.env`.
3. Set `VITE_WEB3FORMS_ACCESS_KEY` to your key.
4. Restart the dev server if it's running.

Without a key configured, the form will show a friendly error and point visitors to the email address in the footer instead of failing silently.

## Placeholder Content

- **Event photos** use a labeled placeholder component (`PlaceholderImage`) sized to the correct aspect ratio — drop in real photos later by replacing the component usage in `src/pages/Events.jsx`, `src/pages/EventDetail.jsx`, and `src/pages/Home.jsx` with an `<img>` tag.

## Deploying to Cloudflare Pages

This project is preconfigured for Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- `public/_redirects` handles the SPA fallback so routes like `/about` work on direct load/refresh.
- `wrangler.toml` is included for CLI-based deploys.

### Option A: Connect via the Cloudflare dashboard (recommended)

1. Push this repo to GitHub (see below).
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository.
4. Set the build configuration:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable under **Settings → Environment variables** (for both Production and Preview).
6. Deploy. Every push to `main` will auto-deploy to production; pushes to other branches get preview URLs.

### Option B: Deploy via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name=kelsey-johnston-portfolio
```

## Version Control

- `main` — production, deploys automatically via Cloudflare Pages
- `dev` — staging/integration branch for work in progress

Suggested workflow: branch off `dev` for new work, open a PR into `dev` to preview changes, then merge `dev` into `main` when ready to publish. Enable branch protection on `main` in GitHub (**Settings → Branches**) to require the CI workflow to pass and reviews before merging.

CI runs on every push and pull request to `main` and `dev` via `.github/workflows/ci.yml` (lint + build).
