/*
TOPIC: FETCH API

INTERVIEW ANSWER
fetch returns a Promise that fulfills with a Response even for HTTP errors such
as 404 or 500. Therefore I check response.ok before parsing. It rejects mainly
for network-level failures or aborts.
*/

async function readLocalExample() {
  try {
    // A data URL keeps this revision example runnable without an external API.
    const response = await fetch(
      "data:application/json,%7B%22name%22%3A%22Kesavan%22%7D"
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

readLocalExample();

// POST PATTERN (not called)
async function createTransaction(transaction, signal) {
  const response = await fetch("http://localhost:3333/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(transaction),
    signal
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Unable to create transaction");
  }

  return response.json();
}

// AbortController can cancel a fetch request.
const controller = new AbortController();
// createTransaction(data, controller.signal);
// controller.abort();

/*
COMMON MISTAKES
- Assuming fetch rejects for every HTTP error
- Forgetting JSON.stringify for a JSON body
- Forgetting Content-Type or credentials when required
- Calling response.json more than once
- Updating React state after a request that should have been cancelled

PRACTICE
Write getTransactions(page, limit, signal). Build query parameters safely,
include cookie credentials, check response.ok, parse JSON, and handle aborts.
*/

