/*
TOPIC: OPTIONAL CHAINING AND NULLISH COALESCING

WHAT?
Optional chaining (?.) safely accesses a property, index, or method when the
preceding value might be null or undefined. Nullish coalescing (??) provides a
fallback only for null or undefined.

WHY?
API responses and user data may contain missing nested values.

INTERVIEW ANSWER
Optional chaining stops property access and returns undefined when the value on
its left is null or undefined. Nullish coalescing preserves valid falsy values
such as 0, false, and an empty string, unlike the || fallback pattern.
*/

const user = {
  name: "Kesavan",
  address: { city: "Chennai" },
  greet() {
    return `Hello ${this.name}`;
  }
};

console.log(user.address?.city);       // Chennai
console.log(user.contact?.phone);      // undefined
console.log(user.skills?.[0]);         // undefined
console.log(user.greet?.());           // Hello Kesavan
console.log(user.logout?.());          // undefined

// Combine optional chaining and nullish coalescing.
const phone = user.contact?.phone ?? "Phone not provided";
console.log(phone);

// Difference between || and ??
const page = 0;
const isEnabled = false;
const search = "";

console.log(page || 1);         // 1
console.log(page ?? 1);         // 0
console.log(isEnabled || true); // true
console.log(isEnabled ?? true); // false
console.log(search || "all");   // all
console.log(search ?? "all");   // empty string

// PRACTICAL EXAMPLE
const apiResponse = {
  data: {
    user: {
      preferences: {
        resultsPerPage: 0
      }
    }
  }
};

const city = apiResponse.data?.user?.address?.city ?? "Unknown city";
const resultsPerPage = apiResponse.data?.user?.preferences?.resultsPerPage ?? 10;
console.log(city);
console.log(resultsPerPage); // keeps valid 0

/*
COMMON MISTAKES
- Using ?. when the root variable itself was never declared
- Using || when 0, false, or "" is valid
- Overusing optional chaining and hiding required-data errors
- Assigning through optional chaining; user?.name = value is invalid

INTERVIEW QUESTIONS
1. What does optional chaining return when access stops?
2. What is the difference between || and ??
3. Can optional chaining be used with methods and arrays?
4. When should optional chaining not be used?

PRACTICE
Create an API response with some missing profile fields. Safely read a nested
city, the first skill, and an optional formatting method. Use fallbacks while
preserving valid values such as 0 and false.
*/

// Write your solution below.

