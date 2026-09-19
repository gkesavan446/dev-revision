/* FILTER POLYFILL — INTERVIEW-FRIENDLY IMPLEMENTATION */

function myFilter(array, callback, thisArg) {
  if (array == null) throw new TypeError("Array is required");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (!(index in array)) continue;

    const value = array[index];
    if (callback.call(thisArg, value, index, array)) {
      result.push(value);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];
console.log(myFilter(numbers, number => number % 2 === 0));

/*
EXPLANATION
filter keeps the original value when the callback result is truthy. It does not
push the callback's result, which is a common interview mistake.

PRACTICE
Test with objects, an empty array, a sparse array, and a thisArg.
*/

