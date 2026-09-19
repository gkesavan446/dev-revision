/*
TOPIC: THIS KEYWORD

WHAT?
this is a runtime value usually determined by how a regular function is called.
Arrow functions do not create their own this; they capture it lexically.

INTERVIEW ANSWER
For a method call such as user.show(), this is user. A detached regular method
loses that receiver. With new, this refers to the new instance. call, apply,
and bind can explicitly choose this. Arrow functions inherit this from their
surrounding scope.
*/

const user = {
  name: "Kesavan",
  showName() {
    console.log(this.name);
  }
};

user.showName(); // Kesavan

// Detached method: receiver is lost. Bind it before calling.
const safeShowName = user.showName.bind(user);
safeShowName();

// Arrow callback preserves the method's this.
const account = {
  owner: "Kesavan",
  transactions: [100, 200],
  printTransactions() {
    this.transactions.forEach(amount => {
      console.log(this.owner, amount);
    });
  }
};
account.printTransactions();

// Constructor call
function Product(title) {
  this.title = title;
}
const laptop = new Product("Laptop");
console.log(laptop.title);

/*
COMMON MISTAKES
- Saying this always means the object where the function was written
- Using an arrow function as an object method when a dynamic receiver is needed
- Detaching a method without binding it
- Assuming this behaves identically in scripts, modules, and strict mode

PRACTICE
Create a cart object with owner, items, and printItems(). Use an arrow callback
inside printItems so every item prints with the correct owner.
*/

