/* PROMISE.ALL IMPLEMENTATION — INTERVIEW-FRIENDLY */

function myPromiseAll(iterable) {
  const values = Array.from(iterable);

  return new Promise((resolve, reject) => {
    if (values.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(values.length);
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then(result => {
          results[index] = result; // preserve input order
          completed++;

          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch(reject); // first rejection settles the outer Promise
    });
  });
}

const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 30));
const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 10));

myPromiseAll([slow, fast, 42]).then(result => {
  console.log(result); // [slow, fast, 42], preserving input order
});

myPromiseAll([]).then(result => console.log("Empty:", result));

/*
INTERVIEW QUESTIONS
1. Why wrap each input with Promise.resolve?
2. Why store results by index instead of pushing?
3. What happens after one input rejects?
4. Does rejecting cancel the remaining operations? No.

PRACTICE
Test a rejection and prove that the outer Promise rejects with that reason.
*/

