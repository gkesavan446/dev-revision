/*
TOPIC: FILTER

WHAT?
filter tests every item and returns a new array containing items whose callback
returns a truthy value.

WHY?
Use filter for search results, categories, status, permissions, and ranges.

INTERVIEW ANSWER
filter always returns an array and does not mutate the source array by itself.
The result can be shorter, equal in length, or empty. It keeps the original
items rather than transforming them.
*/

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const transactions = [
  { id: 1, type: "income", category: "Salary", amount: 50000 },
  { id: 2, type: "expense", category: "Food", amount: 800 },
  { id: 3, type: "expense", category: "Travel", amount: 2500 },
  { id: 4, type: "income", category: "Freelance", amount: 10000 }
];

const expenses = transactions.filter(item => item.type === "expense");
const largeTransactions = transactions.filter(item => item.amount >= 10000);
console.log(expenses);
console.log(largeTransactions);

// Combine conditions.
const filtered = transactions.filter(item => {
  return item.type === "expense" && item.amount > 1000;
});
console.log(filtered);

// Case-insensitive search.
const searchText = "sal".toLowerCase();
const searchResults = transactions.filter(item => {
  return item.category.toLowerCase().includes(searchText);
});
console.log(searchResults);

// Remove duplicates from primitives.
const categories = ["Food", "Travel", "Food", "Bills"];
const uniqueCategories = categories.filter((category, index, array) => {
  return array.indexOf(category) === index;
});
console.log(uniqueCategories);

/*
COMMON MISTAKES
- Expecting one object instead of an array; find returns the first match
- Forgetting to return the condition
- Returning the item when a clear boolean expression is easier to read
- Assuming filter transforms each value

INTERVIEW QUESTIONS
1. What does filter return when nothing matches?
2. What is the difference between filter and find?
3. Can filter return an array of the same length?
4. Does filter clone the objects it keeps?

PRACTICE
Filter products by category, minimum price, and in-stock status. Treat an empty
category as no category restriction. Keep the source array unchanged.
*/

// Write your solution below.

