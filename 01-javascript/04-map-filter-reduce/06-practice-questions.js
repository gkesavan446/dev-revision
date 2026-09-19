/*
MAP, FILTER, AND REDUCE PRACTICE

Attempt these before opening 07-solutions.js.
*/

const products = [
  { id: 1, title: "Phone", category: "Electronics", price: 20000, stock: 5 },
  { id: 2, title: "Laptop", category: "Electronics", price: 50000, stock: 0 },
  { id: 3, title: "Shirt", category: "Fashion", price: 1200, stock: 10 },
  { id: 4, title: "Watch", category: "Fashion", price: 3000, stock: 3 }
];

/*
1. MAP: Return an array containing only product titles.
2. MAP: Add a priceWithTax property without mutating products.
3. FILTER: Return only products that are in stock.
4. FILTER: Return Electronics products priced below 30000.
5. REDUCE: Calculate the total value of all available stock.
6. REDUCE: Count products in each category.
7. CHAIN: Find in-stock Fashion products and return display strings.
8. CHAIN: Calculate the combined price of in-stock products.
9. REDUCE: Create a lookup object where each product id is the key.
10. CHALLENGE: Find the most expensive in-stock product using reduce.
*/

console.log("Products loaded:", products.length);

// Write your answers below.

