/*
TOPIC: PROTOTYPES AND PROTOTYPE CHAIN

WHAT?
Objects can inherit properties and methods through an internal prototype link.
JavaScript searches the object first, then walks its prototype chain.

WHY?
Shared prototype methods avoid creating the same function for every instance.
*/

function User(name, role) {
  this.name = name;
  this.role = role;
}

User.prototype.introduce = function () {
  return `${this.name} is a ${this.role}`;
};

const firstUser = new User("Kesavan", "MERN Developer");
const secondUser = new User("Arun", "Designer");

console.log(firstUser.introduce());
console.log(secondUser.introduce());
console.log(firstUser.introduce === secondUser.introduce); // true

console.log(Object.getPrototypeOf(firstUser) === User.prototype); // true
console.log(firstUser.hasOwnProperty("name")); // true
console.log(firstUser.hasOwnProperty("introduce")); // false

// Object.create sets a chosen prototype.
const employeeMethods = {
  work() {
    return `${this.name} is working`;
  }
};

const employee = Object.create(employeeMethods);
employee.name = "Kesavan";
console.log(employee.work());

/*
INTERVIEW ANSWER
When a property is missing on an object, JavaScript looks through its prototype
chain until it finds the property or reaches null. Constructor functions expose
a prototype object used by instances created with new.

PRACTICE
Create a Product constructor with title and price as own properties. Put a
getDiscountedPrice method on Product.prototype and verify it is shared.
*/

