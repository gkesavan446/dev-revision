# Project-Linked JavaScript Questions

## 1. Where did you use asynchronous JavaScript?

I used `fetch` with async/await for authentication, products, transactions, orders, and RAG requests. I handled failures with try/catch and checked `response.ok` before reading the result.

## 2. How did you process transaction data in Money Metrics?

I used array methods to filter by type or category, map API data into display values, and reduce transactions into totals such as income, expense, balance, and category breakdowns.

## 3. Where would debounce help your projects?

It can delay a search request until the user stops typing, which avoids firing an API request for every keystroke.

## 4. How did you avoid mutating React state?

I created new arrays or objects using spread, `map`, and `filter`. For nested values, I copied every level that needed to change.

## 5. Where did closures appear even if you did not write one directly?

Event handlers and hook callbacks capture values from their component scope. Debounced functions and stateful utility factories also use closures directly.

## 6. Why did you use `Promise.all` or where could you use it?

It is suitable when multiple independent dashboard requests can start together. It reduces total waiting time compared with awaiting each request one after another.

## 7. How did you handle failed fetch requests?

I checked `response.ok`, parsed a useful error message when available, threw an Error, caught it at the UI or controller boundary, and updated loading and error state appropriately.

## 8. Why use `const` for arrays or objects that still change internally?

`const` prevents reassignment of the variable, not mutation of the referenced value. For React state I still avoid mutation and create a new reference.

## 9. How would you explain pagination logic in JavaScript?

The page and limit determine which records are requested. A filter change resets the page to one. The UI uses returned total pages to enable or disable navigation.

## 10. How do you keep utility code understandable?

I use small functions with clear names, avoid abstractions unless logic is genuinely reused, validate inputs at boundaries, and keep side effects separate from calculations when practical.

