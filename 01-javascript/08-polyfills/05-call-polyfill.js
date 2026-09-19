/* CALL POLYFILL — SIMPLIFIED INTERVIEW IMPLEMENTATION */

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError("myCall target must be a function");

  const target = context == null ? globalThis : Object(context);
  const temporaryKey = Symbol("temporaryFunction");
  target[temporaryKey] = this;

  try {
    return target[temporaryKey](...args);
  } finally {
    delete target[temporaryKey];
  }
};

function introduce(city, skill) {
  return `${this.name} from ${city} uses ${skill}`;
}

console.log(introduce.myCall({ name: "Kesavan" }, "Chennai", "MERN"));

/*
HOW IT WORKS
Temporarily attaching the function as an object method makes that object the
receiver. Symbol avoids overwriting a normal property, and finally cleans up.

LIMITATION
Native call has specification details this learning version does not fully reproduce.
*/

