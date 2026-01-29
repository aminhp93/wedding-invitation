---
description: Bootstrap a new project (ESM Pattern)
---

# /init [project-name]

1. **Create Vite App**: `pnpm create vite@latest [project-name] --template react-ts`
2. **Install Core**: `pnpm add @tanstack/react-router @tanstack/react-query zustand react-hook-form zod @hookform/resolvers tailwindcss autoprefixer postcss lucide-react framer-motion clsx tailwind-merge i18next react-i18next date-fns`
3. **Install Dev**: `pnpm add -D @tanstack/router-vite-plugin @vitejs/plugin-react-swc prettier eslint vitest @testing-library/react @testing-library/jest-dom jsdom @playwright/test`
4. **Setup**: `pnpm dlx shadcn@latest init`
5. **Standard**: Mirror `.agent/`, init `docs/`, and set up `src/routes/` structure.
6. **Testing**: Configure Vitest in `vite.config.ts`, Playwright in `playwright.config.ts`, and add sample tests in `src/__tests__/` and `e2e/`.

// turbo
6. Run installation and generate structure.
