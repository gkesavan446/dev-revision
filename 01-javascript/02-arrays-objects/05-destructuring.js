/*
TOPIC: DESTRUCTURING

WHAT?
Destructuring extracts values from arrays or properties from objects into variables.

WHY?
It makes component props, API data, function parameters, and array values easier to use.

INTERVIEW ANSWER
Array destructuring matches values by position. Object destructuring matches
properties by key. Both support defaults, renaming, nested extraction, rest
elements, and use in function parameters.
*/

// ARRAY DESTRUCTURING
const technologies = ["React", "Node.js", "MongoDB"];
const [frontend, backend, database] = technologies;
console.log(frontend, backend, database);

// Skip values and collect the remaining values.
const numbers = [10, 20, 30, 40];
const [first, , third, ...remaining] = numbers;
console.log(first, third, remaining);

// Swap values.
let left = "L";
let right = "R";
[left, right] = [right, left];
console.log(left, right);

// OBJECT DESTRUCTURING
const user = {
  name: "Kesavan",
  role: "Developer",
  location: { city: "Chennai" }
};

const { name, role } = user;
const { name: displayName } = user;
const { experience = 0 } = user;
const { location: { city } } = user;
console.log(name, role, displayName, experience, city);

// FUNCTION PARAMETER DESTRUCTURING
function printProduct({ title, price, stock = 0 }) {
  console.log(`${title}: ₹${price}, stock ${stock}`);
}

printProduct({ title: "Keyboard", price: 1200, stock: 5 });

// PRACTICAL EXAMPLE: React-style props extraction
function createUserCard({ name, role, skills = [] }) {
  return `${name} - ${role} - ${skills.join(", ")}`;
}

console.log(createUserCard({
  name: "Kesavan",
  role: "MERN Developer",
  skills: ["React", "Node.js"]
}));

/*
COMMON MISTAKES
- Expecting object destructuring to use property order
- Destructuring a nested property when its parent may be undefined
- Confusing property renaming with object mutation
- Placing a rest element anywhere except the final position

INTERVIEW QUESTIONS
1. How does array destructuring differ from object destructuring?
2. How do you rename a destructured property?
3. How do default values work?
4. Why is destructuring common in React?

PRACTICE
Create an order with customer, products, total, and nested delivery details.
Extract customer and total, rename customer to customerName, extract the nested
city, and assign a default payment status when it is missing.
*/

// Write your solution below.

