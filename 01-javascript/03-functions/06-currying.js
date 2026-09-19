/*
TOPIC: CURRYING AND PARTIAL APPLICATION

WHAT?
Currying transforms a function that accepts multiple arguments into a sequence
of functions that each accepts one argument.

WHY?
It helps create specialized reusable functions and makes configuration reusable.

INTERVIEW ANSWER
Currying changes f(a, b, c) into f(a)(b)(c). Partial application fixes some
arguments and returns a function waiting for the remaining arguments. They are
related, but not identical.
*/

// NORMAL FUNCTION
function addNormally(first, second, third) {
  return first + second + third;
}

console.log(addNormally(10, 20, 30));

// CURRIED FUNCTION
function curriedAdd(first) {
  return function (second) {
    return function (third) {
      return first + second + third;
    };
  };
}

console.log(curriedAdd(10)(20)(30));

// ARROW VERSION
const multiply = first => second => first * second;
const double = multiply(2);
const triple = multiply(3);

console.log(double(10));
console.log(triple(10));

// PRACTICAL EXAMPLE: configurable messages
const createMessage = type => moduleName => message => {
  return `[${type}] [${moduleName}] ${message}`;
};

const authError = createMessage("ERROR")("AUTH");
console.log(authError("Invalid token"));
console.log(authError("User not found"));

// PARTIAL APPLICATION
function calculateTax(rate, amount) {
  return amount * rate;
}

function applyRate(rate) {
  return amount => calculateTax(rate, amount);
}

const calculateGst = applyRate(0.18);
console.log(calculateGst(1000)); // 180

/*
COMMON MISTAKES
- Calling any nested function currying even when argument structure is unchanged
- Confusing currying with closures; currying typically uses closures, but they
  describe different ideas
- Overusing currying where a normal function is clearer
- Forgetting to call every returned function

INTERVIEW QUESTIONS
1. What is currying?
2. How is currying different from partial application?
3. How do closures support currying?
4. Give a practical currying use case.

PRACTICE
Create a curried filter builder: createFilter(field)(operator)(value). It should
return an object such as { field: "amount", operator: "greaterThan", value: 500 }.
Then create specialized amount and category filter builders.
*/

// Write your solution below.

