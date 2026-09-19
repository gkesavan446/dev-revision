/*
TOPIC: DATA TYPES

WHAT?
A data type describes the kind of value stored in a variable.

WHY?
The type determines which operations can be performed on a value.

INTERVIEW ANSWER
JavaScript has seven primitive types: string, number, bigint, boolean,
undefined, symbol, and null. Objects, arrays, and functions are reference
types. Primitive values are copied by value; objects are copied by reference.
*/

// PRIMITIVE DATA TYPES
const fullName = "Kesavan";          // string
const age = 25;                      // number
const largeNumber = 9007199254740993n; // bigint
const isLearning = true;             // boolean
let selectedCourse;                  // undefined
const emptyValue = null;             // null
const uniqueId = Symbol("id");        // symbol

console.log(typeof fullName);       // string
console.log(typeof age);            // number
console.log(typeof largeNumber);    // bigint
console.log(typeof isLearning);     // boolean
console.log(typeof selectedCourse); // undefined
console.log(typeof emptyValue);     // object (historical JavaScript behavior)
console.log(typeof uniqueId);       // symbol

// REFERENCE DATA TYPES
const skills = ["JavaScript", "React"];
const profile = { name: "Kesavan", city: "Chennai" };
const greet = function () {
  return "Hello";
};

console.log(typeof skills);  // object
console.log(typeof profile); // object
console.log(typeof greet);   // function
console.log(Array.isArray(skills)); // true

// PRIMITIVES ARE COPIED BY VALUE
let firstScore = 10;
let secondScore = firstScore;
secondScore = 50;

console.log(firstScore);  // 10
console.log(secondScore); // 50

// OBJECTS ARE COPIED BY REFERENCE
const firstUser = { name: "Kesavan" };
const secondUser = firstUser;
secondUser.name = "K7";

console.log(firstUser.name);  // K7
console.log(secondUser.name); // K7

// Create a separate shallow copy using spread syntax.
const originalProfile = { name: "Kesavan", role: "Developer" };
const copiedProfile = { ...originalProfile };
copiedProfile.role = "MERN Developer";

console.log(originalProfile.role); // Developer
console.log(copiedProfile.role);   // MERN Developer

/*
COMMON MISTAKES
- Believing typeof null returns "null"; it returns "object"
- Using typeof to check for arrays; prefer Array.isArray()
- Expecting two variables pointing to the same object to be independent
- Mixing number and bigint in arithmetic

INTERVIEW QUESTIONS
1. What are JavaScript's primitive data types?
2. Why does typeof null return "object"?
3. What is the difference between value and reference copying?
4. How do you check whether a value is an array?

PRACTICE
Create one primitive value and copy it. Then create an object and copy its
reference. Change each copy and compare the original values. Finally, create a
separate object using spread syntax and demonstrate the difference.
*/

// Write your solution below.

