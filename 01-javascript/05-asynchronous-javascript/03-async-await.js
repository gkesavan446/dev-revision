/*
TOPIC: ASYNC AND AWAIT

WHAT?
async/await is syntax built on Promises. An async function always returns a
Promise. await pauses that async function until a Promise settles.

WHY?
It makes dependent asynchronous steps read similarly to synchronous code.

INTERVIEW ANSWER
await pauses only the surrounding async function, not the entire JavaScript
thread. A fulfilled value is returned from await; a rejection is thrown and can
be handled with try/catch.
*/

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function returnValue() {
  return "Async result";
}

returnValue().then(console.log);

async function loadDashboard() {
  console.log("Loading dashboard...");
  await wait(50);
  const user = { id: 1, name: "Kesavan" };

  await wait(50);
  const transactions = [1000, -250, 500];

  return { user, transactions };
}

async function displayDashboard() {
  const data = await loadDashboard();
  console.log("Dashboard:", data);
}

displayDashboard();

// await can be used only inside async functions in this CommonJS-style file.

/*
COMMON MISTAKES
- Forgetting async before using await
- Forgetting that an async function returns a Promise
- Awaiting independent operations one by one unnecessarily
- Mixing then chains and await without a clear reason

INTERVIEW QUESTIONS
1. What does an async function return?
2. Does await block the JavaScript thread?
3. What happens when an awaited Promise rejects?
4. Is async/await different internally from Promises?

PRACTICE
Create async getOrderSummary(). Await a fake order, then await its products,
calculate the total, and return one summary object.
*/

