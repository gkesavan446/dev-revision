# Rendering Quick Recall

- Render phase calculates the next UI; commit phase applies necessary DOM work.
- State, consumed context, and parent work can cause rendering.
- A component render does not guarantee a DOM mutation.
- Effects synchronize after commit and must clean up external resources.
- Reconciliation compares element type, position and keys.
- Stable keys preserve the correct identity in dynamic lists.
- State values are snapshots for a render.
- Functional setters compose queued updates.
- Strict Mode development checks expose impure rendering and missing cleanup.

