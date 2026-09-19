/*
SIMPLE MANUAL IMPLEMENTATIONS

These functions explain the core logic. Formal Array.prototype polyfills,
including edge cases and this handling, belong in the Polyfills section.
*/

function manualMap(array, callback) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(callback(array[index], index, array));
  }
  return result;
}

function manualFilter(array, callback) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      result.push(array[index]);
    }
  }
  return result;
}

function manualReduce(array, callback, initialValue) {
  if (array.length === 0 && arguments.length < 3) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length < 3) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < array.length; index++) {
    accumulator = callback(accumulator, array[index], index, array);
  }

  return accumulator;
}

const numbers = [1, 2, 3, 4];
console.log(manualMap(numbers, number => number * 2));
console.log(manualFilter(numbers, number => number % 2 === 0));
console.log(manualReduce(numbers, (total, number) => total + number, 0));
console.log(manualReduce(numbers, (total, number) => total + number));

/*
INTERVIEW QUESTIONS
1. What callback arguments does each method receive?
2. Why does map always push one returned value per visited item?
3. Why does filter push only when the callback is truthy?
4. How does reduce select an accumulator without an initial value?

PRACTICE
Rewrite each manual implementation without looking. Then compare the output
with the native method for at least three inputs.
*/

