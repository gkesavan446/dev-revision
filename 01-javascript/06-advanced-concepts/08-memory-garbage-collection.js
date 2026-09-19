/*
TOPIC: MEMORY AND GARBAGE COLLECTION

WHAT?
JavaScript automatically reclaims objects that are no longer reachable from
active roots. Developers cannot directly force or predict collection timing.

WHY?
Unnecessary references can retain memory and create leaks in long-running apps.

INTERVIEW ANSWER
Modern JavaScript engines mainly use reachability-based garbage collection.
Common leaks come from uncleared timers, forgotten event listeners, caches that
grow forever, global references, and closures retaining large values.
*/

// Once the local object is no longer reachable, it becomes eligible for collection.
function createTemporaryData() {
  const data = { values: new Array(100).fill("temporary") };
  return data.values.length;
}
console.log(createTemporaryData());

// A bounded cache prevents unlimited growth.
function createBoundedCache(limit) {
  const cache = new Map();

  return {
    set(key, value) {
      if (cache.size >= limit && !cache.has(key)) {
        const oldestKey = cache.keys().next().value;
        cache.delete(oldestKey);
      }
      cache.set(key, value);
    },
    get(key) {
      return cache.get(key);
    },
    clear() {
      cache.clear();
    }
  };
}

const cache = createBoundedCache(2);
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
console.log(cache.get("a")); // undefined

// WeakMap keys do not prevent their object keys from being garbage-collected.
const metadata = new WeakMap();
let user = { name: "Kesavan" };
metadata.set(user, { lastSeen: Date.now() });
console.log(metadata.get(user));
user = null;

/*
COMMON CLEANUP
- clearInterval/clearTimeout
- removeEventListener
- abort obsolete fetch requests
- unsubscribe from streams
- remove unnecessary references from caches

PRACTICE
Explain how an interval, event listener, unbounded Map, and closure can retain
memory. Write a cleanup function for a timer and listener.
*/

