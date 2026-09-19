/* TOPIC: RETRYING ASYNC OPERATIONS */

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function retry(operation, options = {}) {
  const { attempts = 3, delay = 50 } = options;
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${attempt} failed: ${error.message}`);

      if (attempt < attempts) {
        await wait(delay);
      }
    }
  }

  throw lastError;
}

let requestCount = 0;

async function unstableRequest() {
  requestCount++;
  if (requestCount < 3) throw new Error("Temporary failure");
  return "Request succeeded";
}

retry(unstableRequest, { attempts: 3, delay: 20 })
  .then(console.log)
  .catch(error => console.log("Final failure:", error.message));

/*
INTERVIEW ANSWER
Retries should be limited and usually use increasing delays. Retry only
transient failures and be careful with non-idempotent actions such as payments
or order creation, which could be duplicated.

PRACTICE
Add exponential backoff where delay grows for every retry. Add shouldRetry(error)
so validation errors stop immediately.
*/

