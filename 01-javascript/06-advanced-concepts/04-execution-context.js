/*
TOPIC: EXECUTION CONTEXT AND CALL STACK

WHAT?
An execution context is the environment in which JavaScript code is evaluated.
The call stack tracks active execution contexts in last-in, first-out order.

INTERVIEW ANSWER
JavaScript creates a global execution context, then a new function execution
context for each function call. Each context has bindings and a link to its
outer lexical environment. Calls are pushed onto the stack and removed when
they return.
*/

function calculateFinalPrice(price) {
  const discount = calculateDiscount(price, 10);
  return price - discount;
}

function calculateDiscount(price, percentage) {
  return price * (percentage / 100);
}

console.log(calculateFinalPrice(1000));

/*
STACK AT THE DEEPEST POINT

calculateDiscount()
calculateFinalPrice()
global context

Then calculateDiscount returns and is popped, followed by calculateFinalPrice.
*/

function first() {
  console.log("First starts");
  second();
  console.log("First ends");
}

function second() {
  console.log("Second runs");
}

first();

/*
COMMON MISTAKES
- Confusing execution context with only the value of this
- Saying asynchronous callbacks remain on the stack while waiting
- Forgetting that recursion adds one stack frame per call

PRACTICE
Write three nested function calls and draw the stack at the deepest point.
Explain the exact push and pop order.
*/

