# Coding Standards - Foresight Platform

Enforce these standards during every code generation and review task.

## Framework & Core
- **Stack**: React 18 + TypeScript + Vite.
- **State**: TanStack Query (server) + Zustand (client).
- **Routing**: TanStack Router.

## UI & Styling
- **CSS**: Use **ONLY Tailwind CSS** utility classes. Avoid custom CSS files or inline styles.
- **Icons**: Use **ONLY Lucide React** (`lucide-react`).
- **Standard**: Follow shadcn/ui-like patterns for consistent UI components.

## Coding Patterns
- **Components**: Functional components, **PascalCase**.
- **Hooks**: Must start with `use`, **camelCase**.
- **Forms**: React Hook Form + Zod for validation.
- **Props**: Define interfaces/types for all component props.

## Imports Order
Group and order imports as follows:
1. React & Core libs
2. TanStack (Router/Query)
3. UI Components
4. Hooks
5. Types & Utils

## Commands
- Always use **pnpm**.
- `pnpm run dev` for local development.
- `pnpm run lint` before finishing any task.
