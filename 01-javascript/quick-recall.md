# JavaScript Quick Recall

Use this for a 15–20 minute pre-interview revision.

## Variables and types

- Prefer `const`; use `let` for reassignment; avoid `var`.
- `let` and `const` are block-scoped; `var` is function-scoped.
- Primitives: string, number, bigint, boolean, undefined, symbol, null.
- Objects, arrays, and functions are reference types.
- `typeof null` is `"object"`; check arrays with `Array.isArray()`.
- Primitives copy by value; objects copy references.
- Spread creates a shallow copy, not a deep copy.
- `structuredClone()` supports deep copying of many built-in data types.

## Comparison and fallback

- Prefer `===` and `!==` because they avoid coercion.
- Falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- `||` falls back for any falsy value.
- `??` falls back only for `null` or `undefined`.
- `?.` safely accesses a property, index, or method.

## Arrays and objects

- `push/pop` operate at the end; `unshift/shift` at the beginning.
- `slice` copies without mutation; `splice` mutates.
- `find` returns the first match; `filter` returns every match.
- `some` checks at least one; `every` checks all.
- Numeric sort: `numbers.sort((a, b) => a - b)`.
- `Object.keys`, `values`, and `entries` return arrays.
- Array destructuring uses positions; object destructuring uses keys.
- Spread expands; rest collects.

## Map, filter, and reduce

- `map`: transform every item; returns a same-length array.
- `filter`: keep matching items; returns an array.
- `reduce`: combine items into one accumulated result.
- `forEach`: performs an action and returns `undefined`.
- Always consider mutation and the correct `reduce` initial value.

## Functions

- Parameters appear in the definition; arguments are passed values.
- `return` sends a result and stops that function execution.
- Lexical scope is determined by where code is written.
- A closure is a function plus access to its lexical environment.
- A callback is passed to another function.
- A higher-order function accepts or returns a function.
- Currying changes `f(a, b)` into `f(a)(b)`.
- A pure function is deterministic and has no side effects.
- Recursion needs a base case and a smaller recursive step.

## `this`, call, apply, and bind

- Regular-function `this` normally depends on how the function is called.
- Arrow functions capture `this` from the surrounding scope.
- `call(context, a, b)` invokes immediately.
- `apply(context, [a, b])` invokes immediately.
- `bind(context, a)` returns a new function.

## Hoisting and execution

- Function declarations can be called before their source line.
- `var` is initialized as `undefined` before assignment.
- `let` and `const` are inaccessible in the temporal dead zone.
- The call stack tracks active function execution in LIFO order.
- Objects inherit through the prototype chain.
- Classes are cleaner syntax over prototype-based behavior.

## Asynchronous JavaScript

- A Promise is pending, fulfilled, or rejected and settles once.
- An `async` function always returns a Promise.
- `await` pauses its async function, not the JavaScript thread.
- Use `try/catch/finally` with awaited work.
- Microtasks such as Promise callbacks run before the next timer task.
- `Promise.all`: all succeed or the result rejects early.
- `allSettled`: report every outcome.
- `race`: first settled result.
- `any`: first fulfilled result.
- Run dependent tasks sequentially and independent tasks concurrently.
- `fetch` does not normally reject for HTTP 404/500; check `response.ok`.
- Use `AbortController` to cancel obsolete requests.

## Real-world utilities

- Debounce waits until calls stop; useful for search.
- Throttle limits execution frequency; useful for scroll/resize.
- Memoization caches deterministic function results.
- Event delegation uses one parent listener and event bubbling.
- Retry only transient failures and limit attempts.
- Clean timers, listeners, subscriptions, and obsolete requests.

## High-value interview reminders

- Explain concepts in simple words before giving formal definitions.
- State whether an operation mutates data.
- For async questions, mention error handling.
- For polyfills, explain callback arguments and edge cases.
- For coding questions, test empty inputs and duplicates.
- Connect answers to Trendz, Money Metrics, or AskMyDoc when relevant.

