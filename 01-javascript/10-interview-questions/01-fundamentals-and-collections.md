# Fundamentals and Collections

## 1. What is the difference between `var`, `let`, and `const`?

`var` is function-scoped and can be redeclared and reassigned. `let` is block-scoped and can be reassigned but not redeclared in the same scope. `const` is block-scoped and cannot be reassigned. I prefer `const`, use `let` when a value changes, and avoid `var`.

## 2. What are JavaScript's primitive data types?

String, number, bigint, boolean, undefined, symbol, and null. Objects, arrays, and functions are reference types.

## 3. What is the difference between `null` and `undefined`?

`undefined` normally means a value has not been assigned. `null` is an intentional empty value. `typeof null` returning `"object"` is a historical JavaScript behavior.

## 4. What is the difference between `==` and `===`?

`==` allows type coercion before comparison. `===` compares both type and value without coercion, so I normally use strict equality.

## 5. What are falsy values?

`false`, `0`, `-0`, `0n`, an empty string, `null`, `undefined`, and `NaN`. Arrays and objects are truthy even when empty.

## 6. What is the difference between `||` and `??`?

`||` uses its fallback for any falsy value. `??` uses its fallback only for `null` or `undefined`, so it preserves valid values such as `0`, `false`, and an empty string.

## 7. What is optional chaining?

Optional chaining safely accesses a property, index, or method. If the value before `?.` is `null` or `undefined`, evaluation stops and returns `undefined`.

## 8. Are arrays objects in JavaScript?

Yes. `typeof []` is `"object"`. The reliable array check is `Array.isArray(value)`.

## 9. What is the difference between value and reference copying?

Primitive assignments copy the value. Object assignments copy a reference, so both variables can point to the same object and observe its mutations.

## 10. What is a shallow copy?

A shallow copy creates a new top-level array or object, but nested objects remain shared references. Spread syntax, `slice`, and `Object.assign` create shallow copies.

## 11. What is the difference between `slice` and `splice`?

`slice` returns a selected copy without modifying the source. `splice` changes the source by removing, replacing, or inserting items.

## 12. What is the difference between `map` and `forEach`?

`map` returns a new transformed array with the same length. `forEach` returns `undefined` and is intended for performing an action for each item.

## 13. What is the difference between `find` and `filter`?

`find` returns the first matching value or `undefined`. `filter` returns an array containing every match and returns an empty array when none match.

## 14. What is the accumulator in `reduce`?

It is the result carried from one iteration to the next. The reducer returns the accumulator used by the following iteration.

## 15. Why provide an initial value to `reduce`?

It clearly defines the accumulator type and allows empty arrays to be processed safely. Without one, the first present element becomes the accumulator and an empty array throws.

