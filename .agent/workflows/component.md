---
description: Create a new modern React component following project standards
---

# /component [name]

Create a new functional component with TypeScript, lazy loading, and Suspense support.

## Steps
1. **Setup**: Create `src/features/{feature}/components/{name}.tsx` (or `src/components/ui/{name}.tsx`).
2. **Template**: Use the `React.FC<Props>` pattern.
3. **MUI v7**: Use `sx` prop and latest Grid syntax if needed.
4. **Lazy Export**: Ensure component is exported as default for `React.lazy()` compatibility.
5. **Wrap**: Remind user to use `<SuspenseLoader>` or `<Suspense>` when importing this component.

// turbo
6. Add basic unit test if applicable.