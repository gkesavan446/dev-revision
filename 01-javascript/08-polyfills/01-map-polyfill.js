/* MAP POLYFILL — INTERVIEW-FRIENDLY IMPLEMENTATION */

function myMap(array, callback, thisArg) {
  if (array == null) throw new TypeError("Array is required");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  const result = new Array(array.length);

  for (let index = 0; index < array.length; index++) {
    if (!(index in array)) continue; // preserve sparse holes
    result[index] = callback.call(thisArg, array[index], index, array);
  }

  return result;
}

const numbers = [1, 2, 3];
console.log(myMap(numbers, (number, index) => number * 2 + index));
console.log(numbers);

/*
EXPLANATION
map creates an output array with the same length, visits present indexes, calls
the callback with value/index/source, and stores each returned value.

PRACTICE
Add myMap to Array.prototype with Object.defineProperty so it is non-enumerable.
*/

