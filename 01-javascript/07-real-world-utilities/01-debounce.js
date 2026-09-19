/*
TOPIC: DEBOUNCE

WHAT?
Debounce delays execution until calls have stopped for a specified time. Each
new call resets the timer.

USE CASES
Search input, form validation, resize handling, and autosave.

INTERVIEW ANSWER
Debounce uses a closure to retain a timer id. Every call clears the previous
timer and creates a new one, so only the final call executes after the quiet period.
*/

function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

const search = debounce(query => {
  console.log("Searching for:", query);
}, 50);

search("r");
search("re");
search("react"); // only this call executes

/*
DEBOUNCE VS THROTTLE
Debounce waits until calls stop. Throttle allows execution at a controlled rate.

COMMON MISTAKES
- Declaring timerId inside the returned function
- Forgetting to forward arguments and this
- Creating a new debounced function on every React render
- Using debounce when regular periodic updates are required

PRACTICE
Add cancel() to a debounced function so pending execution can be cancelled.
*/

