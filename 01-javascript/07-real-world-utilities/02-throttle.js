/*
TOPIC: THROTTLE

WHAT?
Throttle limits a function to at most one execution during each time interval.

USE CASES
Scroll position, mouse movement, window resize, and rate-limited UI actions.

INTERVIEW ANSWER
A throttled wrapper keeps state in a closure to know whether execution is
currently allowed. Calls during the waiting period are ignored or saved as a
trailing call, depending on the implementation.
*/

function throttle(callback, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) return;

    canRun = false;
    callback.apply(this, args);

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

const reportScroll = throttle(position => {
  console.log("Scroll position:", position);
}, 50);

reportScroll(10); // runs
reportScroll(20); // ignored
reportScroll(30); // ignored

setTimeout(() => reportScroll(40), 60); // runs

/*
COMMON MISTAKES
- Confusing throttle with debounce
- Losing this or arguments
- Assuming ignored calls will automatically run later
- Creating multiple wrappers for the same event

PRACTICE
Implement a trailing throttle that remembers and runs the latest ignored call
after the interval ends.
*/

