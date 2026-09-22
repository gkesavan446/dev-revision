/*
TOPIC: MAP

WHAT?
map calls a callback for every array item and returns a new array containing
the returned values.

WHY?
Use map when every source item should be transformed into one output item.

INTERVIEW ANSWER
map returns a new array with the same length as the source array. Its callback
receives value, index, and the original array. map does not mutate the original
array by itself, but the callback can still mutate referenced objects.
*/

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // unchanged

// Callback parameters
const labels = numbers.map((number, index) => `${index}: ${number}`);
console.log(labels);

// Extract properties
const products = [
  { id: 1, title: "Phone", price: 20000 },
  { id: 2, title: "Laptop", price: 50000 },
  { id: 3, title: "Watch", price: 3000 }
];

const titles = products.map(product => product.title);
console.log(titles);

// Return new objects instead of mutating source objects.
const productsWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.18
}));

console.log(productsWithTax);
console.log(products);

// Arrow functions returning object literals need parentheses.
const options = products.map(product => ({
  value: product.id,
  label: product.title
}));
console.log(options);

/*
COMMON MISTAKES
- Forgetting return in a callback with braces
- Using map only for side effects; use forEach for that intention
- Expecting map to remove items
- Mutating object items inside map

INTERVIEW QUESTIONS
1. What does map return?
2. Does map change array length?
3. What is the difference between map and forEach?
4. Does map guarantee the original objects are not mutated?
5. polyfil for map

PRACTICE
Given products with title and price, return a new array with title, original
price, and a discountedPrice that is 10% lower. Do not mutate the source.
*/

// Write your solution below.

