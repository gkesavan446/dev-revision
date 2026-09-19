/*
TOPIC: OBJECTS

WHAT?
An object stores related data as key-value pairs.

WHY?
Objects represent real entities such as users, products, orders, and API records.

INTERVIEW ANSWER
JavaScript objects store properties using string or symbol keys. Dot notation
is convenient for known valid property names; bracket notation supports dynamic
keys and keys containing spaces. Objects are mutable reference values.
*/

const user = {
  name: "Kesavan",
  role: "MERN Developer",
  city: "Chennai",
  skills: ["JavaScript", "React"],
  address: {
    state: "Tamil Nadu",
    country: "India"
  },
  introduce() {
    return `I am ${this.name}, a ${this.role}`;
  }
};

// Reading properties
console.log(user.name);
console.log(user["city"]);

const selectedProperty = "role";
console.log(user[selectedProperty]);

// Adding, updating, and deleting
user.isAvailable = true;
user.city = "Bengaluru";
delete user.isAvailable;

console.log(user.address.country);
console.log(user.skills[0]);
console.log(user.introduce());

// Check ownership safely.
console.log(Object.hasOwn(user, "name")); // true

// Computed property name
const fieldName = "email";
const contact = {
  [fieldName]: "kesavan@example.com"
};
console.log(contact.email);

// PRACTICAL EXAMPLE
const product = {
  title: "Laptop",
  price: 50000,
  stock: 3
};

function purchaseProduct(item, quantity) {
  if (quantity > item.stock) return "Insufficient stock";
  item.stock -= quantity;
  return `Purchased ${quantity}. Remaining stock: ${item.stock}`;
}

console.log(purchaseProduct(product, 2));

/*
COMMON MISTAKES
- Using dot notation with a dynamic property name
- Accessing a deeply nested missing property without checking it
- Assuming two objects with identical contents are strictly equal
- Mutating a shared object unintentionally
- Using an arrow function as an object method when dynamic this is needed

INTERVIEW QUESTIONS
1. When do you use bracket notation instead of dot notation?
2. Are objects copied by value or reference?
3. What is a computed property name?
4. How do you check whether an object owns a property?

PRACTICE
Create a transaction object containing type, category, amount, date, and a
nested account object. Read one property dynamically, update the amount, add a
description, and write a method that returns a formatted summary.
*/

// Write your solution below.

