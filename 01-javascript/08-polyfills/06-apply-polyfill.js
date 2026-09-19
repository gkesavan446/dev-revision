/* APPLY POLYFILL — SIMPLIFIED INTERVIEW IMPLEMENTATION */

Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") throw new TypeError("myApply target must be a function");
  if (args == null) args = [];
  if (!Array.isArray(args)) throw new TypeError("Arguments must be an array in this version");

  const target = context == null ? globalThis : Object(context);
  const temporaryKey = Symbol("temporaryFunction");
  target[temporaryKey] = this;

  try {
    return target[temporaryKey](...args);
  } finally {
    delete target[temporaryKey];
  }
};

function calculate(discount, tax) {
  return this.price - discount + tax;
}

console.log(calculate.myApply({ price: 1000 }, [100, 50])); // 950

/*
CALL VS APPLY
Both invoke immediately. call receives separate arguments; apply receives an
array-like argument collection. This simplified version accepts arrays only.

PRACTICE
Reuse a method from one object on another object using myApply.
*/

