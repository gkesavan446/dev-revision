/*
TOPIC: CONDITIONALS

WHAT?
Conditionals run different code depending on whether a condition is true or
false.

WHY?
Applications use conditionals for validation, permissions, status messages,
filters, and business rules.

INTERVIEW ANSWER
JavaScript supports if, else if, else, switch, and the ternary operator. I use
if/else for ranges or complex conditions, switch for multiple exact matches,
and a ternary for a short two-result expression.
*/

// IF, ELSE IF, ELSE
const score = 78;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Needs improvement");
}

// COMBINING CONDITIONS
const isLoggedIn = true;
const role = "admin";

if (isLoggedIn && role === "admin") {
  console.log("Open admin dashboard");
} else if (isLoggedIn) {
  console.log("Open user dashboard");
} else {
  console.log("Go to login page");
}

// EARLY RETURN
function checkWithdrawal(balance, amount) {
  if (amount <= 0) {
    return "Amount must be greater than zero";
  }

  if (amount > balance) {
    return "Insufficient balance";
  }

  return `Withdrawal successful. Remaining balance: ${balance - amount}`;
}

console.log(checkWithdrawal(5000, 1200));

// SWITCH
const orderStatus = "shipped";

switch (orderStatus) {
  case "pending":
    console.log("Order is being processed");
    break;
  case "shipped":
    console.log("Order is on the way");
    break;
  case "delivered":
    console.log("Order was delivered");
    break;
  default:
    console.log("Unknown order status");
}

// TERNARY
const age = 20;
const message = age >= 18 ? "Can vote" : "Cannot vote";
console.log(message);

// PRACTICAL EXAMPLE
function getShippingFee(total, isPremiumMember) {
  if (isPremiumMember || total >= 1000) {
    return 0;
  }

  return 80;
}

console.log("Shipping fee:", getShippingFee(750, false)); // 80
console.log("Shipping fee:", getShippingFee(750, true));  // 0

/*
COMMON MISTAKES
- Checking broader conditions before more specific conditions
- Forgetting break in a switch case
- Using assignment (=) instead of comparison (===)
- Creating deeply nested if blocks instead of using early returns
- Using a nested ternary that is difficult to read

INTERVIEW QUESTIONS
1. When would you choose switch instead of if/else?
2. What is an early return or guard clause?
3. Why does the order of else-if conditions matter?
4. When is a ternary operator appropriate?

PRACTICE
Write getTicketPrice(age, isStudent). Children below 12 pay 100, adults pay
250, and people aged 60 or above pay 150. Students receive a further discount
of 50, but the final price must not go below zero.
*/

// Write your solution below.

