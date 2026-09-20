# React Quick Recall

## Core

- Components are capitalized functions that return React elements.
- JSX accepts expressions inside braces and returns one parent or Fragment.
- Props are read-only parent-to-child inputs.
- State is component memory; setters schedule rendering.
- Use functional setters when the next value depends on previous state.
- Pass event handlers as functions rather than calling them during render.
- Stable keys preserve list-item identity.

## Hooks

- Call hooks only at the top level of components or custom hooks.
- `useState`: local state.
- `useEffect`: synchronize with external systems and return cleanup function.
- `useRef`: persistent mutable value without rendering.
- `useContext`: read the nearest provider value.
- `useReducer`: action-based complex state transitions.
- `useMemo`: cache a calculated value.
- `useCallback`: cache a function reference.
- Custom hooks reuse stateful logic; each call has independent state.

## Rendering

- Render calculates UI; commit applies necessary DOM changes.
- State values are snapshots for one render.
- Effects run after commit and clean up before rerun or unmount.
- Reconciliation compares element types, positions and keys.
- Strict Mode performs extra development checks; production is unaffected.

## Forms

- Controlled fields use state-backed `value` or `checked`.
- Use `event.target.value`; checkboxes use `checked`.
- Call `preventDefault()` for client-handled submission.
- Convert number input strings at the validation/submission boundary.
- Client and server validation are both required.

## Performance

- `React.memo` may skip child rendering when props are shallowly equal.
- Objects, arrays and functions compare by reference.
- Memoization is optional performance work, not correctness.
- Profile before optimizing.
- `lazy` splits component code; `Suspense` provides fallback UI.

## Practical patterns

- Lift shared state to the closest common parent.
- Prefer composition and `children` over UI inheritance.
- Keep state close to consumers and derive values during render when possible.
- Represent loading, error, empty and success states explicitly.
- Cancel obsolete fetch requests and clean timers/subscriptions.
