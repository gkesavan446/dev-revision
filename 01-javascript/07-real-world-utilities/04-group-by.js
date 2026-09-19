/* TOPIC: GROUPING DATA */

function groupBy(items, getKey) {
  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}

const transactions = [
  { type: "expense", category: "Food", amount: 500 },
  { type: "income", category: "Salary", amount: 50000 },
  { type: "expense", category: "Travel", amount: 1200 },
  { type: "expense", category: "Food", amount: 300 }
];

console.log(groupBy(transactions, item => item.type));
console.log(groupBy(transactions, item => item.category));

function sumByGroup(items, getKey, getValue) {
  return items.reduce((totals, item) => {
    const key = getKey(item);
    totals[key] = (totals[key] ?? 0) + getValue(item);
    return totals;
  }, {});
}

console.log(
  sumByGroup(transactions, item => item.category, item => item.amount)
);

/*
INTERVIEW ANSWER
Grouping commonly uses reduce with an object or Map accumulator. For each item,
derive a key, initialize its bucket if needed, then add the item or aggregate.

PRACTICE
Group orders by payment status, then build a second utility that calculates
total order value per status.
*/

