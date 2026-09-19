/*
TOPIC: HOISTING AND TEMPORAL DEAD ZONE

WHAT?
Before execution, declarations are registered in their scope. Function
declarations can be called before their source line. var exists as undefined
before assignment. let and const exist but cannot be accessed during their TDZ.
*/

sayHello();
function sayHello() {
  console.log("Function declaration works before its line");
}

console.log(oldValue); // undefined
var oldValue = 10;
console.log(oldValue); // 10

// Accessing before these lines would throw ReferenceError.
let letValue = 20;
const constValue = 30;
console.log(letValue, constValue);

// Function expression follows its variable behavior.
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

/*
INTERVIEW ANSWER
Hoisting is the effect of declarations being processed before execution. It is
not literal movement of source code. var is initialized with undefined, while
let and const remain inaccessible in the temporal dead zone until their
declaration is evaluated.

COMMON MISTAKES
- Saying JavaScript physically moves declarations
- Saying let and const are not hoisted
- Confusing declaration hoisting with assignment
- Calling a const function expression before initialization

PRACTICE
Predict the output of examples using a function declaration, var, let, const,
and a function expression. Then run each risky example separately.
*/

