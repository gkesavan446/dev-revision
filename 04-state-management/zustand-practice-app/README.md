# Zustand Practice App

A small React revision project covering the important Zustand concepts with direct, junior-friendly code.

## Topics

1. `create` — builds a store and returns a custom React hook.
2. `set` — updates state with an object or callback.
3. Actions — normal functions stored beside state.
4. Selectors — subscribe a component to only the state it needs.
5. Immutable arrays — use spread, `map`, and `filter` for collection changes.
6. Async actions — call `set` before and after an API request.
7. `persist` middleware — saves selected store state in localStorage.
8. Multiple stores — separates unrelated feature state.

## Zustand flow

```text
User event -> call store action -> set(new state) -> subscribed UI re-renders
```

Unlike Redux Toolkit, this basic setup does not require a Provider, dispatch, action objects, or reducers.

## Add these files to your scaffolded app

Replace its `src` folder and `vite.config.js` with the files in this package. Keep the `package.json` and installed dependencies from your existing Vite app.

Then run:

```bash
npm run dev
```

Check the production build:

```bash
npm run lint
npm run build
```

## Practice challenge

- Add a `clearCompleted` todo action.
- Display total and completed task counts.
- Add a `clearUsers` action.
- Create and use a separate light/dark theme store.
