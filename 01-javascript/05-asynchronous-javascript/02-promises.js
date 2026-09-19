/*
TOPIC: PROMISES

WHAT?
A Promise represents the eventual success or failure of an asynchronous operation.
Its states are pending, fulfilled, and rejected.

WHY?
Promises provide composable async control flow and centralized error handling.

INTERVIEW ANSWER
A Promise starts pending and settles once as fulfilled or rejected. then handles
fulfilled values, catch handles rejection, and finally runs in either outcome.
Returning from then passes a value to the next then; returning a Promise makes
the chain wait for it.
*/

function getProduct(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!productId) {
        reject(new Error("Product ID is required"));
        return;
      }

      resolve({ id: productId, title: "Laptop", price: 50000 });
    }, 50);
  });
}

getProduct(1)
  .then(product => {
    console.log("Product:", product);
    return product.price * 0.9;
  })
  .then(discountedPrice => {
    console.log("Discounted price:", discountedPrice);
  })
  .catch(error => {
    console.error("Request failed:", error.message);
  })
  .finally(() => {
    console.log("Product request finished");
  });

// Rejection flows to the nearest catch.
getProduct(null).catch(error => console.log("Expected error:", error.message));

// Promise.resolve and Promise.reject create already-settled Promises.
Promise.resolve("Ready").then(console.log);
Promise.reject(new Error("Example rejection")).catch(error => {
  console.log(error.message);
});

/*
COMMON MISTAKES
- Forgetting to return a Promise from a then callback
- Creating a Promise unnecessarily around an API that already returns one
- Missing catch and causing an unhandled rejection
- Thinking finally receives the resolved value

INTERVIEW QUESTIONS
1. What are the three Promise states?
2. Can a settled Promise change state again?
3. How does Promise chaining work?
4. What is the purpose of finally?

PRACTICE
Create checkStock(quantity) that resolves with a message when quantity is
positive and rejects with an Error otherwise. Chain a price calculation after it.
*/

