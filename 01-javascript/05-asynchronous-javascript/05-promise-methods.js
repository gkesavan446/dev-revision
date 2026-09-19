/*
TOPIC: PROMISE COMBINATOR METHODS

Promise.all: fulfills when all fulfill; rejects on the first rejection.
Promise.allSettled: waits for every Promise and reports each outcome.
Promise.race: settles with the first settled Promise.
Promise.any: fulfills with the first fulfilled Promise; rejects if all reject.
*/

function task(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldFail ? reject(new Error(`${name} failed`)) : resolve(`${name} done`);
    }, delay);
  });
}

async function demonstrateMethods() {
  try {
    const allResults = await Promise.all([
      task("User", 20),
      task("Transactions", 30),
      task("Summary", 10)
    ]);
    console.log("all:", allResults);
  } catch (error) {
    console.log("all error:", error.message);
  }

  const settled = await Promise.allSettled([
    task("Email", 10),
    task("Notification", 20, true)
  ]);
  console.log("allSettled:", settled);

  const raceWinner = await Promise.race([
    task("Server A", 15),
    task("Server B", 30)
  ]);
  console.log("race:", raceWinner);

  const anyWinner = await Promise.any([
    task("Source A", 10, true),
    task("Source B", 20)
  ]);
  console.log("any:", anyWinner);
}

demonstrateMethods();

/*
INTERVIEW QUESTIONS
1. How do all and allSettled differ?
2. How do race and any differ?
3. Does Promise.all cancel remaining Promises when one rejects? No.
4. Which method suits independent dashboard requests? Usually Promise.all.

PRACTICE
Simulate three independent API calls. Run them with all and allSettled, make
one fail, and explain the different results.
*/

