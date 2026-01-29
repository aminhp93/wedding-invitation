---
description: Execute Phase II Implementation and Coding
---

# /cook [implementation]

Execute Phase II of the project development lifecycle.

## Steps
1. **Initialize**: Ensure `.tasks/[task-name]/task.md` exists and status is set to ⏸️.
2. **Implement**: Follow the approved `implementation_plan.md` and `@rules`.
3. **Document**: Record all significant changes.
4. **Verify**:
    - Run `pnpm run lint`.
    - Run unit/component tests: `pnpm test`.
    - Run E2E tests: `pnpm test:e2e`.
    - Verify logic changes manually if needed.

// turbo
5. Update task.md status as progress is made.
