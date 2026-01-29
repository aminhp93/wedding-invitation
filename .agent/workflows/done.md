---
description: Execute Phase III Finalization and Sync
---

# /done [task-id]

Execute Phase III of the project development lifecycle.

## Steps
1. **Update Task**: Set status to ✅ Done in `.tasks/[task-id]/task.md`.
2. **Sync Docs**: Update `FEATURES_LIST.md`, `ARCHITECTURE.md`, or `TESTING.md` if the change affects high-level documentation.
3. **Walkthrough**: Generate the final `walkthrough.md` in the brain directory for the user.
4. **Clean up**: Remove any temporary files or debug logs.

// turbo
5. Commit changes with a descriptive message (e.g., `git commit -m "feat: [task-id] implementation"`).
