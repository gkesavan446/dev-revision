/*
TOPIC: VARIABLES

WHAT?
A variable is a named container used to store a value.

WHY?
Variables let us store, reuse, and update data in a program.

INTERVIEW ANSWER
JavaScript declares variables with var, let, and const. let and const are
block-scoped, while var is function-scoped. I use const by default, let when
reassignment is required, and generally avoid var in modern JavaScript.
*/

// BASIC EXAMPLE
const userName = "Kesavan";
let score = 10;

score = 20;

console.log("Name:", userName);
console.log("Score:", score);

// let can be reassigned but not redeclared in the same scope.
let quantity = 2;
quantity = 3;
console.log("Quantity:", quantity);

// const cannot be reassigned and must receive an initial value.
const country = "India";
console.log("Country:", country);

// const protects the reference, not the contents of an object or array.
const skills = ["JavaScript", "React"];
skills.push("Node.js");
console.log("Skills:", skills);

const user = { name: "Kesavan", role: "Developer" };
user.role = "MERN Developer";
console.log("User:", user);

// BLOCK SCOPE
if (true) {
  const message = "I exist only inside this block";
  let blockValue = 100;
  console.log(message, blockValue);
}

// console.log(message); // ReferenceError

// var is not block-scoped.
if (true) {
  var oldStyleVariable = "Available outside the block";
}
console.log(oldStyleVariable);

// PRACTICAL EXAMPLE
const productPrice = 500;
let productQuantity = 2;
let total = productPrice * productQuantity;

console.log("Initial total:", total);

productQuantity = 4;
total = productPrice * productQuantity;
console.log("Updated total:", total);

/*
COMMON MISTAKES
- Reassigning a const variable
- Declaring const without an initial value
- Assuming a const object cannot be mutated
- Using var when block scope is required

INTERVIEW QUESTIONS
1. What is the difference between var, let, and const?
2. Can the contents of a const object or array change?
3. Why is const preferred by default?

PRACTICE
Create variables for an online order. Keep the customer name and product price
constant, allow quantity to change, and print the total before and after the
quantity changes. Explain why you chose let or const for every variable.
*/

// Write your solution below.

