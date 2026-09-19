/*
TOPIC: SCOPE AND LEXICAL SCOPE

WHAT?
Scope determines where a variable can be accessed. JavaScript has global,
function, and block scope. Lexical scope means access is determined by where
functions and blocks are written in the source code.

WHY?
Scope prevents naming conflicts, protects data, and controls variable lifetime.

INTERVIEW ANSWER
Global variables are accessible broadly, function-scoped values are available
inside their function, and let/const are block-scoped. Inner scopes can access
outer scopes, but outer scopes cannot access variables declared inside an inner
scope. JavaScript resolves this through the scope chain.
*/

const globalMessage = "Global value";

function showScopes() {
  const functionMessage = "Function value";

  if (true) {
    const blockMessage = "Block value";
    console.log(globalMessage);
    console.log(functionMessage);
    console.log(blockMessage);
  }

  // console.log(blockMessage); // ReferenceError
}

showScopes();
// console.log(functionMessage); // ReferenceError

// LEXICAL SCOPE AND SCOPE CHAIN
function outer() {
  const outerValue = "I belong to outer";

  function inner() {
    const innerValue = "I belong to inner";
    console.log(outerValue);
    console.log(innerValue);
    console.log(globalMessage);
  }

  inner();
  // console.log(innerValue); // ReferenceError
}

outer();

// VARIABLE SHADOWING
const status = "global";

function displayStatus() {
  const status = "function";

  if (true) {
    const status = "block";
    console.log(status); // block
  }

  console.log(status); // function
}

displayStatus();
console.log(status); // global

// var is function-scoped, not block-scoped.
function varExample() {
  if (true) {
    var visibleInFunction = "var value";
  }
  console.log(visibleInFunction);
}

varExample();

/*
COMMON MISTAKES
- Accessing a block or function variable outside its scope
- Creating unnecessary global variables
- Expecting var to follow block scope
- Confusing lexical scope with the location from which a function is called

INTERVIEW QUESTIONS
1. What are global, function, and block scope?
2. What is lexical scope?
3. What is the scope chain?
4. What is variable shadowing?

PRACTICE
Create a global app name, a function-level user name, and a block-level role.
Log which values are accessible at each level and explain every inaccessible
value. Add one example of variable shadowing.
*/

// Write your solution below.

