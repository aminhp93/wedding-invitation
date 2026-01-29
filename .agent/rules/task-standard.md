# Task Standards & Lifecycle

Rules for managing the development lifecycle on Foresight Platform.

## Lifecycle Phases

### Phase I: Planning (/plan)
- Objective: Analyze codebase and design the solution.
- Requirement: Propose an `implementation_plan.md` in the brain directory and get approval.
- Context: Create `.tasks/[task-id]/task.md` to track objectives.

### Phase II: Implementation (/cook)
- Objective: Execute the plan using coding standards.
- Requirement: Update task status to ⏸️ while working.
- Requirement: Follow Tailwind CSS and TypeScript strict mode.

### Phase III: Finalization (/done)
- Objective: Sync documentation and clean up.
- Requirement: Set status to ✅ Done and update `walkthrough.md`.

## Task Template
Every task must follow the structure defined in `.tasks/[task-id]/task.md`. Ensure it includes:
- Task ID & Status
- Clear Objectives
- Implementation Plan
- Verification Steps
