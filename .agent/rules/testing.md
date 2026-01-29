# Testing Standards

This project uses **Vitest** for unit and component tests, and **Playwright** for E2E tests.

## Test Types

- **Unit Tests**: Test individual functions or small pieces of logic. Located in `__tests__` directories next to the code.
- **Component Tests**: Test UI components using React Testing Library. Located in `__tests__` directories next to the component.
- **E2E Tests**: Test full user flows in the browser. Located in the root `e2e/` directory.

## Commands

- `pnpm test`: Run all unit and component tests.
- `pnpm test:ui`: Run unit tests with Vitest UI.
- `pnpm test:coverage`: Generate test coverage report.
- `pnpm test:e2e`: Run E2E tests with Playwright.
- `pnpm test:e2e:ui`: Run E2E tests with Playwright UI.

## Best Practices

1. **Write tests as you code**: Do not wait until the end of a task.
2. **Test behavior, not implementation**: Focus on user-facing outcomes.
3. **Use descriptive names**: Make it clear what is being tested and what the expected result is.
4. **Mock dependencies**: Keep tests isolated and fast by mocking external services or heavy dependencies.
5. **Coverage**: Aim for high coverage on critical business logic (>80%).

## File Structure

```text
src/
├── components/ui/__tests__/     # Component tests
├── lib/utils/__tests__/         # Utility function tests
└── test/
    ├── setup.ts                 # Vitest setup
    └── utils/
        └── test-utils.tsx       # Custom render with providers

e2e/                             # Playwright E2E tests
```
