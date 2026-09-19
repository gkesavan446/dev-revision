/* TOPIC: SEQUENTIAL VS PARALLEL ASYNC EXECUTION */

function waitFor(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(name), delay);
  });
}

async function runSequentially() {
  const startedAt = Date.now();
  const first = await waitFor("First", 40);
  const second = await waitFor("Second", 40);
  console.log("Sequential:", first, second, Date.now() - startedAt, "ms approx");
}

async function runInParallel() {
  const startedAt = Date.now();
  const firstPromise = waitFor("First", 40);
  const secondPromise = waitFor("Second", 40);
  const [first, second] = await Promise.all([firstPromise, secondPromise]);
  console.log("Parallel:", first, second, Date.now() - startedAt, "ms approx");
}

async function main() {
  await runSequentially();
  await runInParallel();
}

main();

/*
INTERVIEW ANSWER
Dependent operations should run sequentially. Independent operations can start
together and be awaited with Promise.all, reducing total wait time. Parallel
Promise handling means concurrent waiting; it does not necessarily mean the
JavaScript code itself runs on multiple CPU threads.

PRACTICE
Simulate fetching profile, notifications, and account totals. Run independent
requests concurrently, but make a transaction request wait for the profile id.
*/

