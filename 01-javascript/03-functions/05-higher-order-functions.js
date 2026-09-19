/*
TOPIC: HIGHER-ORDER FUNCTIONS

WHAT?
A higher-order function accepts a function as an argument, returns a function,
or does both.

WHY?
Higher-order functions make behavior reusable and configurable. JavaScript's
map, filter, reduce, event handlers, middleware, and function factories use this idea.

INTERVIEW ANSWER
Functions are first-class values in JavaScript, so they can be stored, passed,
and returned. A function that receives or returns another function is called a
higher-order function. The passed function is often called a callback.
*/

// FUNCTIONS ARE FIRST-CLASS VALUES
function greet(name) {
  return `Hello ${name}`;
}

const savedFunction = greet;
console.log(savedFunction("Kesavan"));

// ACCEPTING A FUNCTION
function transformValues(values, transformer) {
  const results = [];
  for (const value of values) {
    results.push(transformer(value));
  }
  return results;
}

const doubled = transformValues([1, 2, 3], number => number * 2);
console.log(doubled);

// RETURNING A FUNCTION
function createPermissionChecker(requiredRole) {
  return function (user) {
    return user.role === requiredRole;
  };
}

const isAdmin = createPermissionChecker("admin");
console.log(isAdmin({ name: "Kesavan", role: "admin" })); // true

// WRAPPING A FUNCTION
function withLogging(fn) {
  return function (...args) {
    console.log("Arguments:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const loggedAdd = withLogging(add);
loggedAdd(10, 20);

// PRACTICAL EXAMPLE: reusable validator
function createValidator(rule, errorMessage) {
  return value => rule(value) ? null : errorMessage;
}

const validatePositive = createValidator(
  value => value > 0,
  "Value must be positive"
);

console.log(validatePositive(100)); // null
console.log(validatePositive(-1));  // error message

/*
COMMON MISTAKES
- Saying every function using another function is asynchronous
- Confusing the higher-order function with its callback
- Calling a function instead of passing it
- Creating abstractions that make simple logic harder to understand

INTERVIEW QUESTIONS
1. What makes a function higher-order?
2. What does first-class function mean?
3. Is a callback itself always a higher-order function?
4. Where are higher-order functions used in React or Express?

PRACTICE
Create withValidation(fn, validator). The returned function should run fn only
when validator approves its input; otherwise it should return a clear error.
Use it to wrap a function that adds a transaction.
*/

// Write your solution below.

