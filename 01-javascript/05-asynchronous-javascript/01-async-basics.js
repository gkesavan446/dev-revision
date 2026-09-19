/*
TOPIC: ASYNCHRONOUS JAVASCRIPT BASICS

WHAT?
Synchronous code runs one statement at a time. Asynchronous APIs allow delayed
work to complete later while JavaScript continues with other code.

WHY?
Network requests, timers, file access, and database operations should not freeze
the application while waiting.

INTERVIEW ANSWER
JavaScript executes code on a single call stack. The runtime handles operations
such as timers and I/O outside that stack. When ready, their callbacks are
queued and the event loop schedules them after the current stack is empty.
*/

console.log("1. Start");

setTimeout(() => {
  console.log("3. Timer callback");
}, 0);

console.log("2. End");

// CALLBACK-BASED ASYNC OPERATION
function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Kesavan" });
  }, 50);
}

getUser(user => {
  console.log("User:", user);
});

/*
COMMON MISTAKES
- Expecting setTimeout(..., 0) to run immediately
- Returning a value from inside a callback and expecting the outer function to return it
- Assuming asynchronous means multi-threaded JavaScript execution
- Nesting many dependent callbacks

INTERVIEW QUESTIONS
1. What is the difference between synchronous and asynchronous code?
2. Why does a zero-delay timer run after synchronous code?
3. Is JavaScript single-threaded?
4. What is callback hell?

PRACTICE
Create loadProfile(callback) that returns a user after 100 ms. Print messages
before calling it, inside its callback, and after calling it. Predict the order.
*/

