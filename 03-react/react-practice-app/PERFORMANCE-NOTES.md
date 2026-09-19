# Performance Quick Recall

- `React.memo` compares props shallowly and may skip child rendering.
- `useMemo` caches a calculated value.
- `useCallback` caches a function reference.
- Objects, arrays and functions compare by reference.
- Memoization has its own comparison, memory and complexity costs.
- `lazy` enables component-level code splitting.
- `Suspense` supplies fallback UI while lazy content loads.
- Prefer route-level or genuinely heavy lazy boundaries.
- Use React DevTools Profiler before optimizing.

