/* REDUCE POLYFILL — INTERVIEW-FRIENDLY IMPLEMENTATION */

function myReduce(array, callback, ...initialArguments) {
  if (array == null) throw new TypeError("Array is required");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  let accumulator;
  let index = 0;

  if (initialArguments.length > 0) {
    accumulator = initialArguments[0];
  } else {
    while (index < array.length && !(index in array)) index++;
    if (index >= array.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[index];
    index++;
  }

  for (; index < array.length; index++) {
    if (!(index in array)) continue;
    accumulator = callback(accumulator, array[index], index, array);
  }

  return accumulator;
}

console.log(myReduce([1, 2, 3], (total, number) => total + number, 0));
console.log(myReduce([1, 2, 3], (total, number) => total + number));

/*
KEY POINT
Checking whether an initial argument was supplied is different from checking
whether its value is undefined. An explicitly supplied undefined is still an
initial value.

PRACTICE
Use myReduce to create a category-count object and to flatten one array level.
*/

