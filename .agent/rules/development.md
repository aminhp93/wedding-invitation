# Development Standards

Enforce these patterns for all code generation and UI work.

## Coding Patterns
- **Components**: Functional, PascalCase, exported. Use TypeScript interfaces.
- **Hooks**: Start with `use`, camelCase.
- **Imports**: Grouped by (1) Core/React, (2) TanStack, (3) Components, (4) Hooks/Utils.
- **Aliases**: Prefer `@/` over relative paths.

## UI & Styling
- **Standard**: Follow shadcn/ui patterns and Lucide React icons.
- **Tailwind**: Use utility classes ONLY. No external CSS or inline styles.
- **Forms**: React Hook Form + Zod for schema validation.
- **States**: Use Suspense for lazy components and TanStack Query for data.

## Features (Feature-First)
Organize code in `src/features/[name]/`:
- `api/`, `components/`, `hooks/`, `utils/`, `types/`.
- Export public API via `index.ts`.
