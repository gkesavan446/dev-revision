/* FOREACH POLYFILL — INTERVIEW-FRIENDLY IMPLEMENTATION */

function myForEach(array, callback, thisArg) {
  if (array == null) throw new TypeError("Array is required");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  for (let index = 0; index < array.length; index++) {
    if (!(index in array)) continue;
    callback.call(thisArg, array[index], index, array);
  }

  // Native forEach returns undefined.
}

const output = myForEach(["JS", "React", "Node"], (skill, index) => {
  console.log(index, skill);
});
console.log("Return value:", output); // undefined

/*
MAP VS FOREACH
map creates and returns a transformed array. forEach returns undefined and is
used when the intention is an external action.

PRACTICE
Use myForEach to calculate a total through an outer variable, then explain why
reduce communicates that purpose more clearly.
*/

