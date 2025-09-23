# Copilot Instructions for PointSell

## Overview
- **PointSell** is a React + Vite web application for a food ordering/menu platform.
- The codebase uses functional React components, React Router v7, and styled-components for layout and theming.
- State for product modals is managed via React Context (`ProductModalContext`) and a custom provider.
- The project uses Embla Carousel for carousels and Lucide React for icons.
- API calls are made via Axios, with a Vite dev server proxy for `/api` to `localhost:3000`.

## Key Structure
- `src/components/`: All UI components, each in its own folder with an `index.jsx` entry point.
- `src/pages/`: Top-level pages (e.g., `Cardapio.jsx`, `ProdutoPage.jsx`).
- `src/constants/`: Shared constants, including button/category definitions and API helpers.
- `src/contexts/` and `src/providers/`: Context and provider for modal state.
- `src/services/`: Utility functions (e.g., currency formatting).
- `src/styles/`: CSS and Embla carousel styles.
- `src/images/`: Static images for banners and products.

## Patterns & Conventions
- **Component Imports:** Always import components from their folder's `index.jsx`.
- **Styled Components:** Layout is handled with styled-components, not global CSS.
- **API Data:** Use `produtosAPI` from `src/constants/index.js` for product data, which is fetched via Axios from `/api/produtos`.
- **Routing:** All routes are defined in `src/main.jsx` using React Router v7's `<Routes>` and `<Route>`.
- **Modal State:** Use `ProductModalContext` for modal visibility and product info.
- **Carousel:** Use Embla Carousel for scrollable sections (see `ScrollCarousel`).

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Preview Build:** `npm run preview`
- **Lint:** `npm run lint`
- **API Proxy:** During development, `/api` requests are proxied to `localhost:3000` (see `vite.config.js`).

## Examples
- To add a new menu section, update `CaroucelButtons` in `src/constants/index.js` and create a new component in `src/components/`.
- To use modal state, consume `ProductModalContext` via `useContext` in your component.
- To add a new route, update `<Routes>` in `src/main.jsx`.

## External Integrations
- **Axios** for API calls
- **Embla Carousel** for carousels
- **Lucide React** for icons
- **styled-components** for styling

## Project-Specific Notes
- All product/category logic is centralized in `src/constants/index.js`.
- Avoid direct DOM manipulation; use React state and context.
- Use the provided proxy for API calls in development to avoid CORS issues.

---
For more details, see `README.md` and the `src/` directory structure.