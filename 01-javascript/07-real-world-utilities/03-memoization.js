/*
TOPIC: MEMOIZATION

WHAT?
Memoization caches a function's result for previously seen inputs.

WHY?
It can avoid repeating an expensive deterministic calculation.

INTERVIEW ANSWER
A memoized wrapper stores argument-result pairs in a closure. Before computing,
it checks the cache. Memoization trades memory for speed and is safest for pure functions.
*/

function memoize(callback) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("From cache:", key);
      return cache.get(key);
    }

    const result = callback.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function calculateTotal(price, quantity, taxRate) {
  console.log("Calculating...");
  return price * quantity * (1 + taxRate);
}

const memoizedTotal = memoize(calculateTotal);
console.log(memoizedTotal(500, 2, 0.18));
console.log(memoizedTotal(500, 2, 0.18));

// Recursive memoization example
function createMemoizedFibonacci() {
  const cache = new Map([[0, 0], [1, 1]]);

  function fibonacci(number) {
    if (cache.has(number)) return cache.get(number);
    const result = fibonacci(number - 1) + fibonacci(number - 2);
    cache.set(number, result);
    return result;
  }

  return fibonacci;
}

const fibonacci = createMemoizedFibonacci();
console.log(fibonacci(10)); // 55

/*
COMMON MISTAKES
- Memoizing impure functions
- Allowing an unbounded cache to grow forever
- Using JSON.stringify keys with unsupported or order-sensitive inputs
- Assuming React useMemo is a general persistent cache

PRACTICE
Add cache.clear() and cache.size() methods to the memoized wrapper.
*/

