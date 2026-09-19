/*
TOPIC: PURE AND IMPURE FUNCTIONS

WHAT?
A pure function returns the same output for the same inputs and has no external
side effects. An impure function depends on or changes external state, time,
randomness, storage, the DOM, network state, or other outside values.

WHY?
Pure functions are predictable, easy to test, and safer for state updates.

INTERVIEW ANSWER
A pure function is deterministic and produces no side effects. It does not
mutate its inputs or external state. Real applications still need impure work,
but isolating side effects makes core logic easier to reason about and test.
*/

// PURE FUNCTION
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(500, 2)); // always 1000
console.log(calculateTotal(500, 2)); // always 1000

// IMPURE: depends on and changes outside state.
let balance = 1000;

function depositImpure(amount) {
  balance += amount;
  return balance;
}

console.log(depositImpure(500));
console.log(depositImpure(500));

// PURE IMMUTABLE UPDATE
function addSkill(user, skill) {
  return {
    ...user,
    skills: [...user.skills, skill]
  };
}

const originalUser = {
  name: "Kesavan",
  skills: ["JavaScript"]
};

const updatedUser = addSkill(originalUser, "React");
console.log(originalUser);
console.log(updatedUser);

// IMPURE EXAMPLES: output varies or side effects occur.
function getCurrentTime() {
  return Date.now();
}

function getRandomValue() {
  return Math.random();
}

// PRACTICAL EXAMPLE: keep calculation pure, perform logging separately.
function calculateDiscount(total, percentage) {
  return total - total * (percentage / 100);
}

const finalTotal = calculateDiscount(2000, 10);
console.log("Final total:", finalTotal); // logging is a side effect

/*
COMMON MISTAKES
- Mutating an input object and calling the function pure
- Assuming console.log, fetch, or database writes are pure
- Assuming a function without parameters must be pure
- Believing an application should contain only pure functions

INTERVIEW QUESTIONS
1. What are the two main conditions of a pure function?
2. Is console.log a side effect?
3. Why are pure functions easier to test?
4. How do pure functions relate to React state updates and reducers?

PRACTICE
Write a pure updateTransaction(transaction, changes) function that returns a
new object without modifying the original. Then write down why a function that
saves the result to a database is impure.
*/

// Write your solution below.

