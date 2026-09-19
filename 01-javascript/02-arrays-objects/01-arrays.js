/*
TOPIC: ARRAYS

WHAT?
An array is an ordered collection that can store multiple values.

WHY?
Arrays are used for lists such as products, users, transactions, and search results.

INTERVIEW ANSWER
JavaScript arrays are ordered, zero-indexed, mutable objects. They can contain
different data types, although real applications normally keep related values
together. Array.isArray() is the reliable way to check for an array.
*/

const skills = ["JavaScript", "React", "Node.js"];

console.log(skills[0]);       // JavaScript
console.log(skills.length);   // 3

skills[1] = "React.js";
console.log(skills);

// ADDING AND REMOVING VALUES
skills.push("MongoDB");       // add at end
skills.unshift("HTML");       // add at beginning
console.log(skills);

const removedLast = skills.pop();
const removedFirst = skills.shift();
console.log(removedLast, removedFirst);

// Check values and positions.
console.log(skills.includes("Node.js")); // true
console.log(skills.indexOf("React.js")); // 1

// Nested arrays
const matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3

// Arrays are reference values.
const firstList = [1, 2];
const secondList = firstList;
secondList.push(3);
console.log(firstList); // [1, 2, 3]

// PRACTICAL EXAMPLE
const cart = [];
cart.push({ title: "Keyboard", price: 1200 });
cart.push({ title: "Mouse", price: 600 });
console.log("Cart items:", cart.length);
console.log("First item:", cart[0].title);

/*
COMMON MISTAKES
- Using array[array.length], expecting the last item; use length - 1
- Assuming const prevents array mutation
- Comparing arrays with === based on contents
- Using typeof to detect an array; use Array.isArray()

INTERVIEW QUESTIONS
1. Are JavaScript arrays primitive values or objects?
2. What is the difference between push/pop and unshift/shift?
3. How do you get the last element?
4. Why does [] === [] return false?

PRACTICE
Create a shopping list with three items. Add one item at the end, remove the
first item, update the second item, and print the final list and its length.
*/

// Write your solution below.

