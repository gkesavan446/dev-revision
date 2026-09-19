/*
TOPIC: FUNCTION COMPOSITION AND PIPE

WHAT?
Composition combines small functions into a new function. pipe applies them
from left to right; compose commonly applies them from right to left.
*/

const pipe = (...functions) => initialValue => {
  return functions.reduce((value, fn) => fn(value), initialValue);
};

const compose = (...functions) => initialValue => {
  return functions.reduceRight((value, fn) => fn(value), initialValue);
};

const trim = value => value.trim();
const lowercase = value => value.toLowerCase();
const replaceSpaces = value => value.replaceAll(" ", "-");

const createSlug = pipe(trim, lowercase, replaceSpaces);
console.log(createSlug("  MERN Revision Notes  "));

const addTwo = number => number + 2;
const double = number => number * 2;

console.log(pipe(addTwo, double)(5));    // (5 + 2) * 2 = 14
console.log(compose(addTwo, double)(5)); // (5 * 2) + 2 = 12

// Practical data normalization
const removeEmptyDescription = transaction => ({
  ...transaction,
  description: transaction.description.trim()
});

const normalizeCategory = transaction => ({
  ...transaction,
  category: transaction.category.trim().toLowerCase()
});

const normalizeTransaction = pipe(removeEmptyDescription, normalizeCategory);
console.log(normalizeTransaction({ category: " Food ", description: " Dinner " }));

/*
INTERVIEW ANSWER
Composition builds complex transformations from small pure functions. It is
useful when every function accepts the previous function's output.

PRACTICE
Build a product normalization pipeline that trims title, converts price to a
number, and normalizes category without mutating the source object.
*/

