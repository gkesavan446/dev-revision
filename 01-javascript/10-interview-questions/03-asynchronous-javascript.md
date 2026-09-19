# Asynchronous JavaScript

## 1. Is JavaScript synchronous or asynchronous?

The language executes JavaScript on one call stack, but the runtime provides asynchronous APIs. The event loop schedules their callbacks when the stack is available.

## 2. What are Promise states?

Pending, fulfilled, and rejected. A Promise can settle only once.

## 3. What does an `async` function return?

Always a Promise. A returned normal value becomes a fulfilled Promise, while a thrown error becomes a rejected Promise.

## 4. Does `await` block JavaScript?

It pauses only the surrounding async function. The thread can continue processing other work.

## 5. How do you handle async errors?

Use `.catch()` for Promise chains or `try/catch` around awaited operations. `finally` is useful for cleanup such as stopping a loader.

## 6. What is the event loop?

It coordinates the call stack and queued work. When the stack is empty, it processes queued microtasks before moving to the next task such as a timer.

## 7. What is the difference between microtasks and tasks?

Promise reactions and `queueMicrotask` use the microtask queue. Timers use a task queue. Microtasks are drained before the next task.

## 8. Why does `setTimeout(callback, 0)` not run immediately?

The callback is queued only after the timer requirement is met, and it cannot run until synchronous work and current microtasks allow it.

## 9. What does `Promise.all` do?

It fulfills with results in input order after all inputs fulfill. It rejects when the first input rejects, but does not cancel remaining operations.

## 10. How is `Promise.allSettled` different?

It waits for every input and returns each fulfillment or rejection outcome instead of rejecting early.

## 11. How do `Promise.race` and `Promise.any` differ?

`race` settles with the first settled input, whether fulfilled or rejected. `any` fulfills with the first fulfilled input and rejects only if all reject.

## 12. When should requests run sequentially versus concurrently?

Dependent requests must run sequentially. Independent requests can start together and usually be awaited with `Promise.all` to reduce total wait time.

## 13. Does `fetch` reject for HTTP 404 or 500?

Normally no. It fulfills with a Response, so I check `response.ok`. It mainly rejects for network failures or an abort.

## 14. What is `AbortController` used for?

It cancels supported asynchronous operations such as fetch, helping prevent obsolete requests and updates after cleanup.

