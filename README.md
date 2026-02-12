# Plywood Stores

A React SPA for Plywood Stores - Premium plywood and interior materials dealer.

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output goes to `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This is a Single Page Application (SPA). Configure your hosting to redirect all routes to `index.html`:

- **Netlify**: Add `_redirects` with `/* /index.html 200`
- **Vercel**: Configure `rewrites` in `vercel.json`
- **Apache**: Use `.htaccess` with `FallbackResource /index.html`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Site data (brands, categories)
├── pages/         # Route pages
├── App.tsx        # Root component with router
├── main.tsx       # Entry point
└── index.css      # Global styles
```
