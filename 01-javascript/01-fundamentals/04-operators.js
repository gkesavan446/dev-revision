/*
TOPIC: OPERATORS

WHAT?
Operators perform calculations, comparisons, assignments, and logical checks.

WHY?
They let programs calculate results and make decisions.

INTERVIEW ANSWER
JavaScript includes arithmetic, assignment, comparison, logical, ternary,
nullish coalescing, and optional chaining operators. I generally use strict
equality to avoid unexpected type coercion.
*/

// ARITHMETIC OPERATORS
const firstNumber = 10;
const secondNumber = 3;

console.log(firstNumber + secondNumber); // 13
console.log(firstNumber - secondNumber); // 7
console.log(firstNumber * secondNumber); // 30
console.log(firstNumber / secondNumber); // 3.333...
console.log(firstNumber % secondNumber); // 1
console.log(firstNumber ** secondNumber); // 1000

// ASSIGNMENT OPERATORS
let total = 10;
total += 5;
total -= 2;
total *= 3;
console.log("Total:", total); // 39

// COMPARISON OPERATORS
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 === 10);  // true
console.log(10 !== "10"); // true

// LOGICAL OPERATORS
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isLoggedIn);           // false

// Logical operators return operands, not necessarily booleans.
const displayName = "" || "Guest";
console.log(displayName); // Guest

// NULLISH COALESCING
// ?? uses the fallback only for null or undefined.
const savedCount = 0;
console.log(savedCount || 10); // 10
console.log(savedCount ?? 10); // 0

// OPTIONAL CHAINING
const customer = {
  name: "Kesavan",
  address: { city: "Chennai" }
};

console.log(customer.address?.city); // Chennai
console.log(customer.contact?.phone); // undefined

// TERNARY OPERATOR
const age = 20;
const eligibility = age >= 18 ? "Eligible" : "Not eligible";
console.log(eligibility);

// PRACTICAL EXAMPLE
const cartTotal = 1500;
const hasMembership = true;
const discount = cartTotal >= 1000 && hasMembership ? 200 : 0;
console.log("Final amount:", cartTotal - discount);

/*
COMMON MISTAKES
- Using = instead of === in a comparison
- Using == and receiving unexpected coercion
- Assuming && and || always return booleans
- Using || for valid values such as 0 or an empty string when ?? is intended
- Writing deeply nested ternary expressions

INTERVIEW QUESTIONS
1. What is the difference between == and ===?
2. What is the difference between || and ??
3. What do && and || return?
4. What problem does optional chaining solve?

PRACTICE
Create an order total and a coupon status. Give a discount only when the total
is at least 1000 and the coupon is valid. Use a ternary operator to print
whether the discount was applied.
*/

// Write your solution below.

