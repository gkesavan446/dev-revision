/*
TOPIC: REDUCE

WHAT?
reduce processes an array into one accumulated result. That result can be a
number, string, object, array, map, or another value.

WHY?
Use reduce for totals, grouping, counting, lookup objects, and combined results.

INTERVIEW ANSWER
reduce receives a reducer callback and usually an initial value. The callback
receives accumulator, current value, index, and source array. The returned
value becomes the next accumulator. Providing the correct initial value makes
behavior predictable, especially for empty arrays.
*/

const numbers = [10, 20, 30];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 60

const transactions = [
  { type: "income", category: "Salary", amount: 50000 },
  { type: "expense", category: "Food", amount: 800 },
  { type: "expense", category: "Travel", amount: 2500 },
  { type: "income", category: "Freelance", amount: 10000 },
  { type: "expense", category: "Food", amount: 500 }
];

// Calculate balance.
const balance = transactions.reduce((total, transaction) => {
  return transaction.type === "income"
    ? total + transaction.amount
    : total - transaction.amount;
}, 0);
console.log("Balance:", balance);

// Group totals by category.
const categoryTotals = transactions.reduce((totals, transaction) => {
  totals[transaction.category] =
    (totals[transaction.category] ?? 0) + transaction.amount;
  return totals;
}, {});
console.log(categoryTotals);

// Count occurrences without mutating input.
const skills = ["React", "Node", "React", "MongoDB", "React"];
const counts = skills.reduce((result, skill) => {
  return {
    ...result,
    [skill]: (result[skill] ?? 0) + 1
  };
}, {});
console.log(counts);

// Build lookup by id.
const users = [
  { id: "u1", name: "Kesavan" },
  { id: "u2", name: "Arun" }
];
const usersById = users.reduce((lookup, user) => {
  lookup[user.id] = user;
  return lookup;
}, {});
console.log(usersById.u1);

/*
COMMON MISTAKES
- Forgetting to return the accumulator
- Omitting the initial value without understanding empty-array behavior
- Using the wrong initial type, such as [] when building an object
- Using reduce when map, filter, or a simple loop would be clearer

INTERVIEW QUESTIONS
1. What is the accumulator?
2. Why should an initial value usually be supplied?
3. Can reduce return an object or array?
4. What happens when reduce runs on an empty array without an initial value?

PRACTICE
Given orders with status and total, calculate total paid revenue and create an
object counting how many orders have each status.
*/

// Write your solution below.

