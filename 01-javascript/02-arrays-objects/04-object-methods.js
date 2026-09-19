/*
TOPIC: OBJECT UTILITY METHODS

WHAT?
Object utility methods help inspect, copy, combine, transform, and protect objects.

WHY?
They are useful when working with form data, API payloads, configuration, and records.

INTERVIEW ANSWER
Object.keys returns keys, Object.values returns values, and Object.entries
returns key-value pairs. Object.fromEntries performs the reverse transformation.
Object.assign and object spread create shallow copies.
*/

const transaction = {
  type: "expense",
  category: "Food",
  amount: 500
};

console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

for (const [key, value] of Object.entries(transaction)) {
  console.log(`${key}: ${value}`);
}

const entries = [
  ["name", "Kesavan"],
  ["role", "Developer"]
];
console.log(Object.fromEntries(entries));

// Shallow copying and merging
const copiedTransaction = { ...transaction };
const updatedTransaction = { ...transaction, amount: 750, note: "Dinner" };
const assignedCopy = Object.assign({}, transaction);

console.log(copiedTransaction);
console.log(updatedTransaction);
console.log(assignedCopy);

// freeze prevents top-level additions, deletions, and changes.
const settings = Object.freeze({ theme: "dark" });
// settings.theme = "light"; // silently fails here; throws in strict mode
console.log(settings);

// seal prevents additions and deletions but permits updates.
const account = Object.seal({ status: "active" });
account.status = "inactive";
console.log(account);

// PRACTICAL EXAMPLE: Remove empty form fields.
const formData = {
  name: "Kesavan",
  city: "",
  role: "Developer"
};

const cleanedEntries = Object.entries(formData).filter(([, value]) => value !== "");
const cleanedFormData = Object.fromEntries(cleanedEntries);
console.log(cleanedFormData);

/*
COMMON MISTAKES
- Expecting Object.keys/values/entries to include inherited properties
- Assuming object spread performs a deep copy
- Expecting Object.freeze to freeze nested objects automatically
- Reversing the key/value order when using Object.fromEntries

INTERVIEW QUESTIONS
1. What do Object.keys, Object.values, and Object.entries return?
2. What does Object.fromEntries do?
3. What is the difference between freeze and seal?
4. Is a copy made with object spread deep or shallow?

PRACTICE
Given an object of monthly category totals, use Object.entries to print every
category and amount. Remove entries whose amount is zero and rebuild a new
object using Object.fromEntries.
*/

// Write your solution below.

