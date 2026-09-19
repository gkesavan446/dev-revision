# Hooks Quick Recall

- Call hooks only at the top level of React components or custom hooks.
- `useState`: local state and functional updates.
- `useEffect`: synchronization and cleanup, not ordinary derived values.
- `useRef`: persistent mutable value without rendering.
- `useContext`: nearest provider value for shared data.
- `useReducer`: action-based complex state transitions.
- `useMemo`: cached calculated value.
- `useCallback`: cached function reference.
- Include every reactive value used by an effect or memo callback in its dependencies.

