/*
TOPIC: COMMON ARRAY METHODS

WHAT?
Array methods perform common operations such as iterating, searching, copying,
adding, removing, and sorting values.

WHY?
Choosing the correct method makes collection-processing code shorter and clearer.

INTERVIEW ANSWER
Some array methods mutate the original array, including push, pop, splice,
reverse, and sort. Others return a new value or array, including slice, concat,
map, filter, and toSorted. I check mutation behavior before choosing a method.
*/

const numbers = [10, 20, 30, 40];

// forEach performs an action for every item and returns undefined.
numbers.forEach((number, index) => {
  console.log(index, number);
});

// find returns the first matching value; findIndex returns its index.
console.log(numbers.find(number => number > 20));      // 30
console.log(numbers.findIndex(number => number > 20)); // 2

// some asks whether at least one item matches; every checks all items.
console.log(numbers.some(number => number > 35));  // true
console.log(numbers.every(number => number >= 10)); // true

// slice does not mutate the original array.
const selectedNumbers = numbers.slice(1, 3);
console.log(selectedNumbers); // [20, 30]
console.log(numbers);         // unchanged

// splice mutates the original array.
const colors = ["red", "green", "blue"];
const removedColors = colors.splice(1, 1, "yellow");
console.log(colors);        // [red, yellow, blue]
console.log(removedColors); // [green]

// Sorting numbers requires a comparison function.
const prices = [1000, 50, 200, 25];
const ascendingPrices = [...prices].sort((a, b) => a - b);
const descendingPrices = [...prices].sort((a, b) => b - a);
console.log(ascendingPrices);
console.log(descendingPrices);
console.log("Original:", prices);

// Introductory MRF examples; studied deeply in the dedicated section.
console.log(numbers.map(number => number * 2));
console.log(numbers.filter(number => number >= 30));
console.log(numbers.reduce((total, number) => total + number, 0));

// PRACTICAL EXAMPLE
const products = [
  { title: "Phone", price: 20000, inStock: true },
  { title: "Laptop", price: 50000, inStock: false },
  { title: "Watch", price: 3000, inStock: true }
];

const watch = products.find(product => product.title === "Watch");
const hasUnavailableProduct = products.some(product => !product.inStock);
console.log(watch);
console.log("Has unavailable product:", hasUnavailableProduct);

/*
COMMON MISTAKES
- Expecting forEach to return a new array
- Forgetting that splice and sort mutate the source array
- Sorting numbers without a comparison function
- Confusing find (one value) with filter (an array)

INTERVIEW QUESTIONS
1. What is the difference between slice and splice?
2. What is the difference between find and filter?
3. What is the difference between some and every?
4. Which common array methods mutate the source array?

PRACTICE
Given an array of transactions, find the first expense above 1000, check
whether every transaction has a description, and sort a copied array by amount
without changing the original.
*/

// Write your solution below.

