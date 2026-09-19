/*
TOPIC: LOOPS

WHAT?
A loop repeats a block of code while a condition is satisfied or for every
item in a collection.

WHY?
Loops help process arrays, calculate totals, search data, and repeat tasks.

INTERVIEW ANSWER
JavaScript provides for, while, do...while, for...of, and for...in loops.
I use for...of for iterable values such as arrays, for...in for object keys,
and a regular for loop when I need index control.
*/

// FOR LOOP
for (let index = 1; index <= 3; index++) {
  console.log("For loop:", index);
}

// WHILE LOOP
let count = 1;
while (count <= 3) {
  console.log("While loop:", count);
  count++;
}

// DO...WHILE RUNS AT LEAST ONCE
let attempt = 5;
do {
  console.log("Do...while attempt:", attempt);
  attempt++;
} while (attempt < 5);

// FOR...OF: VALUES OF AN ITERABLE
const skills = ["JavaScript", "React", "Node.js"];
for (const skill of skills) {
  console.log("Skill:", skill);
}

// FOR...IN: ENUMERABLE OBJECT KEYS
const user = {
  name: "Kesavan",
  role: "MERN Developer"
};

for (const key in user) {
  console.log(key, user[key]);
}

// BREAK AND CONTINUE
for (let number = 1; number <= 8; number++) {
  if (number === 3) {
    continue; // Skip 3.
  }

  if (number === 7) {
    break; // Stop before printing 7.
  }

  console.log("Selected number:", number);
}

// PRACTICAL EXAMPLE: TOTAL ARRAY VALUES
const transactions = [1200, -300, -150, 2000];
let balance = 0;

for (const amount of transactions) {
  balance += amount;
}

console.log("Balance:", balance); // 2750

// PRACTICAL EXAMPLE: SEARCH
const products = ["phone", "laptop", "watch"];
const searchItem = "laptop";
let found = false;

for (const product of products) {
  if (product === searchItem) {
    found = true;
    break;
  }
}

console.log("Product found:", found);

/*
COMMON MISTAKES
- Forgetting to update the condition and creating an infinite loop
- Using for...in to read array values
- Using <= array.length and accessing one extra index
- Forgetting that break exits a loop while continue skips one iteration
- Mutating an array unexpectedly while looping through it

INTERVIEW QUESTIONS
1. What is the difference between for...of and for...in?
2. What is the difference between break and continue?
3. When would you use a while loop?
4. What makes do...while different from while?

PRACTICE
Given [4, 7, 10, 13, 16, 19], use a loop to create a new array containing
only the even numbers. Then calculate the total of those even numbers. Do not
use filter or reduce yet.
*/

// Write your solution below.

