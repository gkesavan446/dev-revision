# Redux Toolkit Practice App

A small React revision project covering the most important Redux Toolkit concepts without unnecessary abstraction.

## Topics

1. `configureStore` — combines slice reducers into the central store.
2. `Provider` — makes the store available to React components.
3. `createSlice` — creates reducers and action creators together.
4. `useSelector` — reads selected state from the store.
5. `useDispatch` — sends actions to the store.
6. Action payloads — carry values such as text, ids, and amounts.
7. `createAsyncThunk` — handles async pending, fulfilled, and rejected actions.
8. `extraReducers` — reacts to actions created outside the slice's normal reducers.

## Redux flow

```text
User event -> dispatch(action) -> reducer -> store updates -> UI re-renders
```

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

- Add a `clearCompleted` reducer to the todo slice.
- Add a number input for a custom counter increment.
- Add a `clearUsers` reducer.
- Show the total and completed todo counts using selectors.
