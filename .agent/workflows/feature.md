---
description: Create a new domain-specific feature following project standards
---

# /feature [name]

Set up a new feature directory with standardized subdirectories.

## Steps
1. **Structure**: Create `src/features/{name}/` with subdirectories: `api/`, `components/`, `hooks/`, `helpers/`, `types/`.
2. **API**: Create an initial `api/{name}Api.ts` with a TanStack Query query factory.
3. **Public API**: Create `features/{name}/index.ts` and export relevant components and hooks.
4. **Routing**: Add a new route in `src/routes/{name}/index.tsx` if needed.

// turbo
5. Create a placeholder component in the feature components folder.