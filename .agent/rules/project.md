# Project Standard: AI-Native React (Vite)

Core technical context and configuration for the project.

## Technical Stack
- **Framework**: React 18.3+ + TypeScript 5.8+ + Vite 6+.
- **Routing**: TanStack Router 1.14+ (File-based).
- **State**: TanStack Query 5.9+ (Server) + Zustand 5+ (Client).
- **UI**: Tailwind CSS 3.4+ + shadcn/ui + Lucide Icons.
- **Testing**: Vitest 4+ + Playwright 1.57+.

## Project Structure
- `.agent/`: Master rules & workflows.
- `.tasks/`: Task-specific documentation.
- `docs/`: Architecture, Features, Testing.
- `src/features/`: Feature-first logic (api, components, hooks, utils, types).
- `src/routes/`: File-based routes.
- `src/components/ui/`: shadcn base components.

## Core Configuration
### Scripts (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --max-warnings 0",
    "test": "vitest",
    "test:e2e": "playwright test",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\""
  }
}
```

### Path Aliases (tsconfig.json / vite.config.ts)
- `@/*`: `src/*`
- Base URL: `.`
