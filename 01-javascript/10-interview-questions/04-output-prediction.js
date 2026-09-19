/* Predict each output before running this file. */

// 1. Scope and shadowing
let value = 10;
function showValue() {
  let value = 20;
  if (true) {
    let value = 30;
    console.log("Q1a:", value);
  }
  console.log("Q1b:", value);
}
showValue();
console.log("Q1c:", value);

// 2. Closure
function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log("Q2:", counter(), counter());

// 3. Reference copying
const first = { count: 1 };
const second = first;
second.count = 5;
console.log("Q3:", first.count);

// 4. Shallow copy
const original = { profile: { city: "Chennai" } };
const copied = { ...original };
copied.profile.city = "Madurai";
console.log("Q4:", original.profile.city);

// 5. Coercion
console.log("Q5:", "5" + 2, "5" - 2, 5 === "5", 5 == "5");

// 6. Map return
console.log("Q6:", [1, 2, 3].map(number => { number * 2; }));

// 7. Event loop
console.log("Q7a");
setTimeout(() => console.log("Q7d"), 0);
Promise.resolve().then(() => console.log("Q7c"));
console.log("Q7b");

/*
ANSWERS
1. 30, 20, 10 — each inner declaration shadows the outer value.
2. 1, 2 — the closure retains count.
3. 5 — both variables reference the same object.
4. Madurai — spread is shallow and profile remains shared.
5. "52", 3, false, true — + concatenates; - coerces; strict equality does not.
6. [undefined, undefined, undefined] — braces require an explicit return.
7. Q7a, Q7b, Q7c, Q7d — sync first, microtask next, timer task last.
*/

