/*
TOPIC: METHOD CHAINING

WHAT?
Chaining calls one array method on the result returned by the previous method.

WHY?
It expresses a data pipeline: select, transform, and combine values.

INTERVIEW ANSWER
Chaining is useful when each operation has a clear purpose. Order matters: it
is often efficient and readable to filter before mapping when many items will
be removed. Excessive chains can be split into named intermediate values.
*/

const transactions = [
  { type: "income", category: "Salary", amount: 50000 },
  { type: "expense", category: "Food", amount: 800 },
  { type: "expense", category: "Travel", amount: 2500 },
  { type: "expense", category: "Food", amount: 500 }
];

// Select expenses, extract amounts, and total them.
const totalExpense = transactions
  .filter(transaction => transaction.type === "expense")
  .map(transaction => transaction.amount)
  .reduce((total, amount) => total + amount, 0);

console.log("Total expense:", totalExpense);

// Produce display-ready data.
const expensiveLabels = transactions
  .filter(transaction => transaction.amount >= 1000)
  .map(transaction => `${transaction.category}: ₹${transaction.amount}`);

console.log(expensiveLabels);

// Named steps can improve debugging.
const expenses = transactions.filter(item => item.type === "expense");
const increasedExpenses = expenses.map(item => ({
  ...item,
  amount: item.amount * 1.1
}));
const increasedTotal = increasedExpenses.reduce(
  (total, item) => total + item.amount,
  0
);
console.log(increasedTotal);

/*
COMMON MISTAKES
- Chaining in an order that produces the wrong type for the next method
- Creating a very long pipeline that is difficult to debug
- Forgetting a reduce initial value
- Mutating objects inside a map step

INTERVIEW QUESTIONS
1. Why might filtering before mapping be preferable?
2. When should a chain be split into variables?
3. Does each step create an intermediate array?
4. How would you explain a filter-map-reduce pipeline?
5. what if accumlator was not specifically provided?

PRACTICE
From an array of products, keep in-stock products priced above 1000, create
objects containing title and discounted price, then calculate the total of all
discounted prices.
*/

// Write your solution below.

