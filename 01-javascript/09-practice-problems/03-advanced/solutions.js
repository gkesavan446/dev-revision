function flattenDeep(values) {
  const result = [];
  for (const value of values) {
    if (Array.isArray(value)) result.push(...flattenDeep(value));
    else result.push(value);
  }
  return result;
}

function debounce(callback, delay) {
  let timerId;
  function debounced(...args) {
    clearTimeout(timerId);
    const context = this;
    timerId = setTimeout(() => callback.apply(context, args), delay);
  }
  debounced.cancel = () => clearTimeout(timerId);
  return debounced;
}

function promiseAll(iterable) {
  const items = Array.from(iterable);
  return new Promise((resolve, reject) => {
    if (items.length === 0) return resolve([]);
    const results = new Array(items.length);
    let completed = 0;

    items.forEach((item, index) => {
      Promise.resolve(item).then(value => {
        results[index] = value;
        completed++;
        if (completed === items.length) resolve(results);
      }, reject);
    });
  });
}

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function retry(operation, attempts = 3, delay = 20) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(delay);
    }
  }
  throw lastError;
}

function buildDashboardSummary(transactions) {
  return transactions.reduce((summary, transaction) => {
    summary.transactionCount++;

    if (transaction.type === "income") {
      summary.income += transaction.amount;
      summary.balance += transaction.amount;
    } else {
      summary.expense += transaction.amount;
      summary.balance -= transaction.amount;
      summary.categoryExpenses[transaction.category] =
        (summary.categoryExpenses[transaction.category] ?? 0) + transaction.amount;

      if (!summary.highestExpense || transaction.amount > summary.highestExpense.amount) {
        summary.highestExpense = transaction;
      }
    }

    return summary;
  }, {
    income: 0,
    expense: 0,
    balance: 0,
    categoryExpenses: {},
    transactionCount: 0,
    highestExpense: null
  });
}

console.log(flattenDeep([1, [2, [3, [4]]]]));
promiseAll([Promise.resolve("A"), 2]).then(console.log);

let attemptCount = 0;
retry(() => {
  attemptCount++;
  return attemptCount === 2 ? Promise.resolve("Success") : Promise.reject(new Error("Failed"));
}).then(console.log);

console.log(buildDashboardSummary([
  { type: "income", category: "Salary", amount: 50000 },
  { type: "expense", category: "Food", amount: 800 },
  { type: "expense", category: "Travel", amount: 2500 }
]));

