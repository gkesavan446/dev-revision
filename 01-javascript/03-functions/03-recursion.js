/*
TOPIC: RECURSION

WHAT?
Recursion occurs when a function calls itself to solve a smaller version of a
problem. It requires a base case and a recursive case.

WHY?
It naturally handles nested structures, trees, directory traversal, and
problems that repeatedly break into smaller versions.

INTERVIEW ANSWER
A recursive function calls itself until a base case stops it. Each call gets a
new stack frame. Without a reachable base case, calls continue until a maximum
call-stack error occurs.
*/

// COUNTDOWN
function countdown(number) {
  if (number <= 0) { // base case
    console.log("Finished");
    return;
  }

  console.log(number);
  countdown(number - 1); // recursive case
}

countdown(3);

// FACTORIAL: 5! = 5 * 4 * 3 * 2 * 1
function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
}

console.log("Factorial:", factorial(5)); // 120

// SUM ARRAY
function sumArray(numbers, index = 0) {
  if (index === numbers.length) return 0;
  return numbers[index] + sumArray(numbers, index + 1);
}

console.log("Sum:", sumArray([10, 20, 30])); // 60

// NESTED DATA
const categories = {
  name: "All",
  children: [
    { name: "Frontend", children: [{ name: "React", children: [] }] },
    { name: "Backend", children: [{ name: "Node.js", children: [] }] }
  ]
};

function printCategory(category, level = 0) {
  console.log(`${"  ".repeat(level)}${category.name}`);

  for (const child of category.children) {
    printCategory(child, level + 1);
  }
}

printCategory(categories);

/*
CALL STACK FOR factorial(3)
factorial(3) waits for factorial(2)
factorial(2) waits for factorial(1)
factorial(1) returns 1
factorial(2) returns 2
factorial(3) returns 6

COMMON MISTAKES
- Missing or unreachable base case
- Failing to make the input smaller on every call
- Using recursion for very large linear work and overflowing the call stack
- Forgetting to return the recursive result

INTERVIEW QUESTIONS
1. What are the base and recursive cases?
2. How does recursion use the call stack?
3. When is iteration preferable to recursion?
4. What causes maximum call stack size exceeded?

PRACTICE
Write recursive functions to calculate the sum from 1 to n and reverse a
string. Write the base case before the recursive case and trace one example by hand.
*/

// Write your solution below.

