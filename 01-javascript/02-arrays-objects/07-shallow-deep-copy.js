/*
TOPIC: SHALLOW COPY AND DEEP COPY

WHAT?
A shallow copy duplicates only the first level. Nested references remain shared.
A deep copy duplicates every supported nested level.

WHY?
Understanding copies prevents accidental mutation, especially in React state.

INTERVIEW ANSWER
Spread, slice, and Object.assign create shallow copies. Nested objects still
share references. structuredClone creates a deep copy for many built-in data
types and is preferable to the JSON technique when supported.
*/

const originalUser = {
  name: "Kesavan",
  address: { city: "Chennai" },
  skills: ["JavaScript", "React"]
};

// SHALLOW COPY
const shallowUser = { ...originalUser };
shallowUser.name = "K7";                 // original top level is unaffected
shallowUser.address.city = "Bengaluru";  // nested original is affected

console.log(originalUser.name);         // Kesavan
console.log(originalUser.address.city); // Bengaluru

// Copy nested levels that will be updated.
const immutableUpdate = {
  ...originalUser,
  address: {
    ...originalUser.address,
    city: "Chennai"
  },
  skills: [...originalUser.skills, "Node.js"]
};

console.log(immutableUpdate);
console.log(originalUser.skills);

// DEEP COPY
const source = {
  name: "Kesavan",
  address: { city: "Chennai" },
  joinedAt: new Date("2026-01-01")
};

const deepCopy = structuredClone(source);
deepCopy.address.city = "Madurai";
console.log(source.address.city);   // Chennai
console.log(deepCopy.address.city); // Madurai

/*
JSON.parse(JSON.stringify(value)) has limitations: it loses undefined, symbols,
functions, and special object behavior, and converts Date values into strings.
It also fails on circular references.
*/

// REFERENCE EQUALITY
console.log(originalUser === shallowUser);                  // false
console.log(originalUser.address === shallowUser.address);  // true
console.log(source.address === deepCopy.address);            // false

/*
COMMON MISTAKES
- Assuming spread copies nested values deeply
- Directly mutating nested React state
- Using JSON cloning without knowing what data it loses
- Expecting copied objects with equal contents to be ===

INTERVIEW QUESTIONS
1. What is a shallow copy?
2. Why can nested mutation affect the original after spreading an object?
3. How do you safely update nested React state?
4. What are limitations of JSON-based deep copying?

PRACTICE
Create a user with nested address and settings objects. Make a shallow copy and
demonstrate the shared reference. Then make an immutable nested update and a
structuredClone copy, proving which original values remain unchanged.
*/

// Write your solution below.

