/* TOPIC: ASYNC ERROR HANDLING */

function fakeRequest(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldSucceed
        ? resolve({ message: "Request completed" })
        : reject(new Error("Request failed"));
    }, 30);
  });
}

async function runRequest() {
  try {
    const result = await fakeRequest(false);
    console.log(result);
  } catch (error) {
    console.error("Handled:", error.message);
  } finally {
    console.log("Stop loading indicator");
  }
}

runRequest();

// Catch, add context, and rethrow when the caller should decide what to do.
async function serviceFunction() {
  try {
    return await fakeRequest(false);
  } catch (error) {
    throw new Error(`Service error: ${error.message}`);
  }
}

serviceFunction().catch(error => console.log(error.message));

// A rejected Promise must be awaited or returned for an outer catch to see it.
async function properlyReturned() {
  return fakeRequest(false);
}

properlyReturned().catch(error => console.log("Caller handled:", error.message));

/*
INTERVIEW ANSWER
Promise errors are handled with catch or try/catch around awaited operations.
finally is useful for cleanup such as stopping a loader. Lower layers may add
context and rethrow, while routes or UI layers decide the user response.

COMMON MISTAKES
- Starting a Promise inside try without await or return
- Catching an error and silently ignoring it
- Throwing strings instead of Error objects
- Revealing internal error details to users

PRACTICE
Write saveTransaction(data) that rejects invalid amounts. Call it from an async
controller using try/catch/finally and return a user-friendly result.
*/

