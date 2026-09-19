/*
TOPIC: CLOSURE

WHAT?
A closure is created when a function remembers and accesses variables from its
lexical outer scope even after the outer function has finished executing.

WHY?
Closures support private state, function factories, callbacks, memoization,
debounce, and many React patterns.

INTERVIEW ANSWER
A closure is a function bundled with references to its lexical environment.
The inner function keeps access to outer variables because those variables are
still referenced, even after the outer function returns.
*/

// BASIC COUNTER
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const firstCounter = createCounter();
console.log(firstCounter()); // 1
console.log(firstCounter()); // 2

const secondCounter = createCounter();
console.log(secondCounter()); // 1: it has an independent environment

// PRIVATE STATE
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) return "Invalid deposit";
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= 0 || amount > balance) return "Invalid withdrawal";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(300));
console.log(account.getBalance());
// account.balance is unavailable because balance is private.

// FUNCTION FACTORY
function createMultiplier(multiplier) {
  return number => number * multiplier;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// LOOP CLOSURE: let creates a new binding for each iteration.
const tasks = [];
for (let index = 1; index <= 3; index++) {
  tasks.push(() => console.log("Task", index));
}
tasks.forEach(task => task());

/*
COMMON MISTAKES
- Saying a closure is only a nested function; it is the function plus access
  to its lexical environment
- Expecting separate counter instances to share the same state
- Accidentally retaining large objects in closures and increasing memory use
- Using var in asynchronous loops and receiving one shared final value

INTERVIEW QUESTIONS
1. What is a closure in simple words?
2. Why is an outer variable not destroyed after its function returns?
3. Where are closures used in real applications?
4. Can different closure instances maintain separate state?

PRACTICE
Create createWallet(initialAmount). Return addMoney, spendMoney, and
getBalance methods. Keep balance inaccessible from outside and reject invalid
amounts or spending above the balance.
*/

// Write your solution below.

