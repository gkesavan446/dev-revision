/*
TOPIC: EVENT LOOP

WHAT?
The event loop coordinates the call stack and task queues. Promise reactions
use the microtask queue; timers use a task/macrotask queue.

INTERVIEW ANSWER
After the synchronous stack becomes empty, JavaScript drains queued microtasks
before processing the next task such as a timer. Therefore Promise callbacks
normally run before setTimeout callbacks scheduled in the same turn.
*/

console.log("1. synchronous start");

setTimeout(() => {
  console.log("5. timer task");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise microtask");
});

queueMicrotask(() => {
  console.log("4. queued microtask");
});

console.log("2. synchronous end");

/*
EXPECTED ORDER
1. synchronous start
2. synchronous end
3. Promise microtask
4. queued microtask
5. timer task

The two microtasks keep their queue order.

NODE NOTE
Node.js has additional phases and process.nextTick behavior. For basic MERN
interviews, clearly explain the call stack, runtime APIs, microtask queue, task
queue, and event loop before discussing Node-specific details.

COMMON MISTAKES
- Saying setTimeout with zero delay runs immediately
- Forgetting that microtasks are processed before the next timer task
- Saying the event loop itself performs network requests
- Confusing concurrency with parallel JavaScript execution

PRACTICE
Write an example containing two console logs, two Promise callbacks, and two
timers. Predict the exact order before running it.
*/

