# Functions and Advanced Concepts

## 1. What is lexical scope?

Variable access is determined by where functions and blocks are written. An inner scope can access its outer scopes through the scope chain.

## 2. What is a closure?

A closure is a function together with access to its lexical environment. It lets an inner function keep using outer variables after the outer function returns.

## 3. Where are closures used?

Private state, function factories, event handlers, memoization, debounce, throttle, and many React patterns.

## 4. What is recursion?

Recursion is when a function calls itself with a smaller version of the problem. It needs a reachable base case to stop.

## 5. What is a callback?

A callback is a function passed to another function to be invoked by that function. Callbacks can be synchronous or asynchronous.

## 6. What is a higher-order function?

A function that accepts another function, returns a function, or both. Examples include `map`, middleware factories, and memoization wrappers.

## 7. What is currying?

Currying transforms a multi-argument function such as `f(a, b, c)` into a sequence such as `f(a)(b)(c)`. It helps build specialized functions.

## 8. What is a pure function?

A pure function gives the same output for the same inputs and has no external side effects. It does not mutate its inputs or outside state.

## 9. How is `this` decided?

For regular functions, it normally depends on the call site. Method calls use the receiver, constructor calls use the new instance, and call/apply/bind can set it explicitly. Arrow functions capture `this` lexically.

## 10. What is the difference between call, apply, and bind?

`call` invokes immediately with separate arguments. `apply` invokes immediately with an argument array. `bind` returns a new function for later use.

## 11. What is hoisting?

It is the effect of declarations being registered before execution. Function declarations are callable early, `var` is initialized as `undefined`, and `let`/`const` are inaccessible in their temporal dead zone.

## 12. What is an execution context?

It is the environment in which code is evaluated. JavaScript creates a global context and a new function context for each call.

## 13. What is the call stack?

It tracks active execution contexts in last-in, first-out order. A call is pushed and removed when it returns. Unbounded recursion can overflow it.

## 14. What is the prototype chain?

When a property is missing, JavaScript searches the object's prototype, then that prototype's prototype, until it finds the property or reaches `null`.

## 15. What is event delegation?

It attaches one handler to a parent and uses bubbling to handle matching descendants. It reduces listeners and supports dynamically added children.

