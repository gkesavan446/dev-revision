/*
TOPIC: TYPE CONVERSION AND COERCION

WHAT?
Type conversion changes a value from one data type to another explicitly.
Type coercion is JavaScript's automatic conversion of a value.

WHY?
Form inputs and API values often arrive as strings and must be converted before
calculation or validation.

INTERVIEW ANSWER
Explicit conversion is performed intentionally with functions such as Number,
String, and Boolean. Implicit coercion happens automatically during operations.
I prefer explicit conversion because it makes behavior clearer and safer.
*/

// EXPLICIT STRING CONVERSION
const price = 500;
const priceText = String(price);
console.log(priceText, typeof priceText); // 500 string

// EXPLICIT NUMBER CONVERSION
const inputQuantity = "4";
const quantity = Number(inputQuantity);
console.log(quantity, typeof quantity); // 4 number

console.log(Number("25"));       // 25
console.log(Number("25.5"));     // 25.5
console.log(Number("hello"));    // NaN
console.log(parseInt("25px"));   // 25
console.log(parseFloat("25.5")); // 25.5

// BOOLEAN CONVERSION
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// FALSY VALUES: false, 0, -0, 0n, "", null, undefined, and NaN.
// All other values are truthy, including [] and {}.
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// IMPLICIT COERCION
console.log("5" + 2); // "52" because + also performs string concatenation
console.log("5" - 2); // 3 because subtraction requires numbers
console.log("5" * 2); // 10

// == allows coercion; === compares both type and value.
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// PRACTICAL EXAMPLE
const formPrice = "750";
const formQuantity = "3";
const orderTotal = Number(formPrice) * Number(formQuantity);

if (Number.isNaN(orderTotal)) {
  console.log("Please enter valid numbers");
} else {
  console.log("Order total:", orderTotal);
}

/*
COMMON MISTAKES
- Adding numeric strings without converting them
- Using == when strict equality is safer
- Assuming Number("hello") throws an error; it returns NaN
- Using value === NaN; use Number.isNaN(value)
- Thinking empty arrays and objects are falsy

INTERVIEW QUESTIONS
1. What is the difference between conversion and coercion?
2. What is the difference between == and ===?
3. What are JavaScript's falsy values?
4. How do you reliably check for NaN?

PRACTICE
Store price, quantity, and discount as strings, convert them to numbers, and
calculate the final total. Display an error if any converted value is NaN.
*/

// Write your solution below.

