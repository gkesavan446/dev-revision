/*
TOPIC: FUNCTION BASICS

WHAT?
A function is a reusable block of code that performs a task and can optionally
receive inputs and return an output.

WHY?
Functions reduce repetition, organize logic, and make code easier to test and
maintain.

INTERVIEW ANSWER
A function packages reusable logic. Parameters are variable names in the
function definition, while arguments are the actual values passed during a
call. return sends a result to the caller and stops that function execution.
*/

// FUNCTION DECLARATION
function greetUser(name) {
  return `Hello, ${name}`;
}

console.log(greetUser("Kesavan"));

// PARAMETERS AND ARGUMENTS
function calculateTotal(price, quantity) {
  return price * quantity;
}

const orderTotal = calculateTotal(500, 3);
console.log("Order total:", orderTotal);

// DEFAULT PARAMETER
function createMessage(name = "Guest") {
  return `Welcome, ${name}`;
}

console.log(createMessage());
console.log(createMessage("Kesavan"));

// FUNCTION EXPRESSION
const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

console.log("Difference:", subtract(10, 4));

// ARROW FUNCTION
const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const square = number => number * number;

console.log("Product:", multiply(4, 5));
console.log("Square:", square(6));

// RETURN STOPS FUNCTION EXECUTION
function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "Cannot divide by zero";
  }

  return firstNumber / secondNumber;
}

console.log(divide(20, 4));
console.log(divide(20, 0));

// REST PARAMETERS
function addNumbers(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log("Sum:", addNumbers(10, 20, 30));

// CALLBACK BASICS
function processNumber(number, operation) {
  return operation(number);
}

function double(number) {
  return number * 2;
}

console.log("Processed number:", processNumber(5, double));

// PRACTICAL EXAMPLE
function calculateFinalPrice(price, discountPercentage = 0) {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    return "Invalid price or discount";
  }

  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

console.log("Final price:", calculateFinalPrice(1000, 10));

/*
COMMON MISTAKES
- Printing a result but forgetting to return it
- Confusing parameters with arguments
- Calling a function immediately when it should be passed as a callback
- Assuming arrow functions and regular functions handle this identically
- Writing a function that performs too many unrelated tasks

INTERVIEW QUESTIONS
1. What is the difference between parameters and arguments?
2. What is the difference between return and console.log?
3. What is a callback function?
4. What is a default parameter?
5. What is a rest parameter?

PRACTICE
Create calculateBill(amount, taxPercentage, discountPercentage). Validate that
none of the inputs are negative, calculate the tax and discount, and return the
final amount. Add sensible default values for tax and discount.
*/

// Write your solution below.

