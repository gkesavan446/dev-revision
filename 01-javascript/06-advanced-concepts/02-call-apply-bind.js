/*
TOPIC: CALL, APPLY, AND BIND

WHAT?
These Function methods explicitly set this. call invokes immediately with
separate arguments, apply invokes immediately with an argument array, and bind
returns a new function for later use.
*/

function introduce(city, skill) {
  return `${this.name} from ${city} works with ${skill}`;
}

const developer = { name: "Kesavan" };

console.log(introduce.call(developer, "Chennai", "MERN"));
console.log(introduce.apply(developer, ["Chennai", "React"]));

const boundIntroduce = introduce.bind(developer, "Chennai");
console.log(boundIntroduce("Node.js"));

// Method borrowing
const person = {
  name: "Arun",
  greet(greeting) {
    return `${greeting}, ${this.name}`;
  }
};

console.log(person.greet.call(developer, "Hello"));

// bind is useful when passing a method as a callback.
const logger = {
  prefix: "APP",
  log(message) {
    console.log(`[${this.prefix}] ${message}`);
  }
};

setTimeout(logger.log.bind(logger, "Loaded"), 0);

/*
INTERVIEW ANSWER
call and apply execute a function immediately; bind creates a new bound
function. call accepts comma-separated arguments while apply accepts an array.

PRACTICE
Create calculateDiscount(discount, tax) using this.price. Invoke it with call
and apply for a product, then create a reusable 10%-discount function with bind.
*/

