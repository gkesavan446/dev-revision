/*
TOPIC: SPREAD AND REST

WHAT?
Both use ... syntax. Spread expands a value; rest collects multiple values.

WHY?
They support immutable updates, copying, merging, flexible parameters, and
collecting remaining properties.

INTERVIEW ANSWER
Spread expands iterable values or object properties into a new location. Rest
collects remaining values into an array or object. Their meaning depends on
where the ... syntax appears.
*/

// ARRAY SPREAD
const frontendSkills = ["HTML", "CSS", "React"];
const backendSkills = ["Node.js", "Express.js"];
const allSkills = [...frontendSkills, ...backendSkills];
console.log(allSkills);

const copiedSkills = [...frontendSkills];
copiedSkills.push("Tailwind CSS");
console.log(frontendSkills);
console.log(copiedSkills);

// OBJECT SPREAD
const user = { name: "Kesavan", role: "Developer" };
const updatedUser = { ...user, role: "MERN Developer", city: "Chennai" };
console.log(user);
console.log(updatedUser);

// Later properties overwrite earlier properties.
const defaults = { page: 1, limit: 10, sort: "latest" };
const query = { page: 2, sort: "highest" };
const options = { ...defaults, ...query };
console.log(options);

// REST PARAMETERS
function calculateTotal(...amounts) {
  let total = 0;
  for (const amount of amounts) total += amount;
  return total;
}
console.log(calculateTotal(100, 200, 300));

// REST IN DESTRUCTURING
const transaction = {
  id: 1,
  type: "expense",
  category: "Food",
  amount: 500
};

const { id, ...transactionData } = transaction;
console.log(id);
console.log(transactionData);

// Spread passes array values as arguments.
const marks = [80, 92, 75];
console.log(Math.max(...marks));

/*
COMMON MISTAKES
- Believing spread creates a deep copy
- Placing rest anywhere except last
- Using spread on null or undefined without considering the context
- Forgetting that later object properties overwrite earlier ones

INTERVIEW QUESTIONS
1. What is the difference between spread and rest?
2. How do you update an object without directly mutating it?
3. What happens when merged objects contain the same property?
4. Does spread make a deep copy?

PRACTICE
Merge default filters with user-selected filters so user values win. Then use
object rest to remove an internal id before creating an API payload.
*/

// Write your solution below.

