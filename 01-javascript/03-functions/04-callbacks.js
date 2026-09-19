/*
TOPIC: CALLBACK FUNCTIONS

WHAT?
A callback is a function passed to another function so it can be called later
or when a task reaches a particular point.

WHY?
Callbacks customize behavior and support events, timers, array methods, and
older asynchronous APIs.

INTERVIEW ANSWER
A callback is passed as a value to another function. Synchronous callbacks run
during the outer call; asynchronous callbacks run later after a timer, event,
or operation completes. Deeply nested asynchronous callbacks can create
callback hell, which Promises and async/await help avoid.
*/

// SYNCHRONOUS CALLBACK
function processNumber(number, callback) {
  return callback(number);
}

function double(number) {
  return number * 2;
}

console.log(processNumber(5, double)); // pass double, not double()
console.log(processNumber(5, number => number ** 2));

// CUSTOM SUCCESS AND FAILURE CALLBACKS
function divide(firstNumber, secondNumber, onSuccess, onError) {
  if (secondNumber === 0) {
    onError("Cannot divide by zero");
    return;
  }

  onSuccess(firstNumber / secondNumber);
}

divide(
  10,
  2,
  result => console.log("Result:", result),
  error => console.log("Error:", error)
);

// ASYNCHRONOUS CALLBACK
console.log("Before timer");
setTimeout(() => {
  console.log("Timer callback");
}, 0);
console.log("After timer");

// The timer callback runs after the current synchronous stack finishes.

// PRACTICAL EXAMPLE
const products = [
  { title: "Phone", price: 20000 },
  { title: "Watch", price: 3000 }
];

function findProduct(title, onFound, onMissing) {
  const product = products.find(item => item.title === title);
  if (product) onFound(product);
  else onMissing(title);
}

findProduct(
  "Watch",
  product => console.log("Found:", product),
  title => console.log(`${title} was not found`)
);

/*
COMMON MISTAKES
- Calling the callback while passing it: double() instead of double
- Assuming every callback is asynchronous
- Forgetting to validate that an optional callback exists before calling it
- Nesting many async callbacks and creating difficult error handling

INTERVIEW QUESTIONS
1. What is a callback function?
2. Are all callbacks asynchronous?
3. What is callback hell?
4. Why does setTimeout(..., 0) not run immediately?

PRACTICE
Create calculate(a, b, operation, onError). Pass add and multiply callbacks.
Call onError when either input is not a number.
*/

// Write your solution below.

