/* REAL-WORLD MAP, FILTER, AND REDUCE EXAMPLES */

const orders = [
  { id: 1, userId: "u1", status: "paid", total: 1500, items: 2 },
  { id: 2, userId: "u2", status: "pending", total: 900, items: 1 },
  { id: 3, userId: "u1", status: "paid", total: 2500, items: 3 },
  { id: 4, userId: "u3", status: "failed", total: 700, items: 1 },
  { id: 5, userId: "u2", status: "paid", total: 1200, items: 2 }
];

// 1. IDs of paid orders
const paidOrderIds = orders
  .filter(order => order.status === "paid")
  .map(order => order.id);
console.log("Paid order IDs:", paidOrderIds);

// 2. Paid revenue
const paidRevenue = orders
  .filter(order => order.status === "paid")
  .reduce((total, order) => total + order.total, 0);
console.log("Paid revenue:", paidRevenue);

// 3. Order counts by status
const statusCounts = orders.reduce((counts, order) => {
  counts[order.status] = (counts[order.status] ?? 0) + 1;
  return counts;
}, {});
console.log("Status counts:", statusCounts);

// 4. Revenue by user from paid orders
const revenueByUser = orders
  .filter(order => order.status === "paid")
  .reduce((totals, order) => {
    totals[order.userId] = (totals[order.userId] ?? 0) + order.total;
    return totals;
  }, {});
console.log("Revenue by user:", revenueByUser);

// 5. Dashboard summary in one reduce
const summary = orders.reduce(
  (result, order) => {
    result.orderCount++;
    result.itemCount += order.items;
    if (order.status === "paid") result.paidRevenue += order.total;
    return result;
  },
  { orderCount: 0, itemCount: 0, paidRevenue: 0 }
);
console.log("Dashboard summary:", summary);

/*
PRACTICE
Add date and category fields to the data. Produce monthly paid revenue, average
paid order value, the highest paid order, and totals grouped by category.
*/

