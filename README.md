# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # keremcemtorun.me — Personal portfolio

  This repository contains a personal portfolio website built with React, TypeScript and Vite. The site showcases projects, provides an About page, and includes a Contact page (coming soon).

  ## What's in this project

  - A modern React + TypeScript app scaffolded with Vite
  - Component-based structure under `src/components`
  - Pages under `src/pages` (Home, About, Portfolio, Services, Contact)
  - Styling in `src/styles` and global CSS in `src/index.css`

  ## Tech stack

  - React 18+
  - TypeScript
  - Vite for fast dev builds and HMR
  - React Bootstrap for layout and UI utilities

  ## Run locally

  1. Install dependencies

  ```bash
  npm install
````

2. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 (or the URL printed by Vite) in your browser.

## Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (top-level)

- `index.html` — app entry
- `src/main.tsx` — React entry
- `src/App.tsx` — top-level app and routes/layout
- `src/pages/` — page components (Home, About, Contact, etc.)
- `src/components/` — reusable components
- `src/styles/` — page/component-specific styles

## Deployment

This site can be deployed to Vercel, Netlify, GitHub Pages, or any static-hosting provider that supports Vite builds. Vercel is recommended for an easy zero-config deployment.

## Contributing

If you'd like to contribute or send fixes: open a PR against `main`. Keep changes small and focused. If you're adding content to the site (projects, text), follow the existing component patterns in `src/pages` and `src/components`.

## License

See `LICENSE` if present. If there is no license file, contact the repo owner for reuse permissions.

## Contact

The site includes a Contact page at `/contact` (currently a placeholder). For quick questions, open an issue in the repo.
