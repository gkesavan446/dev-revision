function groupByCategory(products) {
  return products.reduce((groups, product) => {
    (groups[product.category] ??= []).push(product);
    return groups;
  }, {});
}

function flattenOneLevel(values) {
  return values.reduce((result, value) => {
    return Array.isArray(value) ? [...result, ...value] : [...result, value];
  }, []);
}

function chunkArray(values, size) {
  if (!Number.isInteger(size) || size <= 0) throw new Error("Size must be positive");
  const chunks = [];
  for (let index = 0; index < values.length; index += size) {
    chunks.push(values.slice(index, index + size));
  }
  return chunks;
}

function findSecondLargest(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const number of numbers) {
    if (number > largest) {
      secondLargest = largest;
      largest = number;
    } else if (number < largest && number > secondLargest) {
      secondLargest = number;
    }
  }

  return secondLargest === -Infinity ? undefined : secondLargest;
}

function createCounter(initial = 0) {
  let value = initial;
  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
}

function calculateCategoryTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    totals[transaction.category] =
      (totals[transaction.category] ?? 0) + transaction.amount;
    return totals;
  }, {});
}

function deepGet(object, path, fallback) {
  const result = path.split(".").reduce((value, key) => value?.[key], object);
  return result ?? fallback;
}

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const products = [
  { title: "Phone", category: "Electronics" },
  { title: "Shirt", category: "Fashion" },
  { title: "Watch", category: "Fashion" }
];
console.log(groupByCategory(products));
console.log(flattenOneLevel([1, [2, 3], 4, [5]]));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(findSecondLargest([10, 5, 8, 10, 7]));
const counter = createCounter(5);
console.log(counter.increment(), counter.decrement(), counter.getValue());
console.log(calculateCategoryTotals([
  { category: "Food", amount: 500 },
  { category: "Food", amount: 300 },
  { category: "Travel", amount: 1000 }
]));
console.log(deepGet({ user: { address: { city: "Chennai" } } }, "user.address.city", "Unknown"));
const square = memoize(number => number * number);
console.log(square(5), square(5));

