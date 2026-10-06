# Ritik Kumar Portfolio — React + Vite

This project recreates the supplied portfolio HTML as a reusable React/Vite site.

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm


## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Netlify

This is a standard Vite SPA and can be deployed directly to Netlify.

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

No server-side code or database is required for the portfolio itself.

## Where to edit content

Most editable portfolio content lives in:

```text
src/data/portfolio.js
```

React UI is split into reusable components under:

```text
src/components/
```

Global styling is in:

```text
src/styles/global.css
```

The blog's likes/comments remain browser-local, matching the behavior of the supplied HTML preview. A shared backend would be needed to make them visible to other visitors.
