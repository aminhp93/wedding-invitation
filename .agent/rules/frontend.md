# Frontend Development Standards

Extracted from project patterns. Apply these rules to all UI work.

## Core Architecture
- **Framework**: React 18 + TypeScript + Vite.
- **Routing**: TanStack Router (File-based routes in `src/routes/`).
- **Data Fetching**: TanStack Query. Use `useSuspenseQuery` for new code.
- **Styling**: **Tailwind CSS** only. No MUI, no custom CSS.

## Component Patterns
- **Standard**: Functional components with TypeScript interfaces for Props.
- **UI Components**: Use components from `src/components/ui/` (MetricCard, Panel, Badge, StatusBadge).
- **Lazy Loading**: Use `React.lazy()` for heavy components (Charts, Entity Explorer).
- **Loading States**: Always wrap lazy components/data-fetching in `<SuspenseLoader>` or a Suspense boundary.
- **Performance**: Wrap event handlers passed to children in `useCallback`.

## File Organization (Feature-first)
Create domain-specific code in `src/features/{feature-name}/`:
- `api/`: API service layer (`{feature}Api.ts`).
- `components/`: Feature-specific UI.
- `hooks/`: Custom hooks.
- `helpers/`: Utility functions.
- `types/`: TypeScript definitions.

## Import Aliases
- `@/*`: `src/*`
- `~components/`: (Legacy - avoid, use `@/components/`)
- `~features/`: (Legacy - avoid, use `@/features/`)
