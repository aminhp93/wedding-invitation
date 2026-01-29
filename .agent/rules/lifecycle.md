# Development Lifecycle

Process for managing tasks and documentation.

## Phase I: Planning (/plan)
- Propose `implementation_plan.md` and get approval.
- Create `.tasks/[task-id]/task.md` (Status: ⏸️).

## Phase II: Implementation (/cook)
- Follow @rules for all implementation.
- Prerequisite: aprobbed plan and active task.md.

## Phase III: Finalization (/done)
- Set status to ✅ and generate `walkthrough.md`.
- Sync Docs: Update `FEATURES_LIST.md`, `ARCHITECTURE.md`, `TESTING.md`.

## Documentation Standard
- **docs/**: Feature inventory, high-level architecture, master test cases.
- **task.md**: Per-task log of changes, notes, and local test results.
