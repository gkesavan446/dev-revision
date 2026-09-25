/*
TOPIC: CLASSES

WHAT?
JavaScript classes provide clearer syntax over prototype-based inheritance.
They support constructors, instance methods, static methods, private fields,
and extends/super.
*/

class Transaction {
  #reference;

  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.#reference = `TX-${Date.now()}`;
  }

  getSummary() {
    return `${this.type}: ₹${this.amount}`;
  }

  getReference() {
    return this.#reference;
  }

  static isValidAmount(amount) {
    return typeof amount === "number" && amount > 0;
  }
}

class Expense extends Transaction {
  constructor(amount, category) {
    super("expense", amount);
    this.category = category;
  }

  getSummary() {
    return `${super.getSummary()} (${this.category})`;
  }
}

const expense = new Expense(500, "Food");
console.log(expense.getSummary());
console.log(expense.getReference());
console.log(Transaction.isValidAmount(500));

/*
INTERVIEW ANSWER
Classes are primarily syntactic sugar over prototypes. Instance methods are
shared through the class prototype. extends links prototype chains and super
calls the parent constructor or method.

COMMON MISTAKES
- Forgetting super() before using this in a derived constructor
- Calling a static method on an instance
- Believing classes replace JavaScript's prototype system

// what is super in class
// types of functions

PRACTICE
Create Account and SavingsAccount classes. Add deposit, a static validator,
and an overridden summary method. Keep the account number private.
*/


