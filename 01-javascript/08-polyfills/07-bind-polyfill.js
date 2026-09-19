/* BIND POLYFILL — SIMPLIFIED INTERVIEW IMPLEMENTATION */

Function.prototype.myBind = function (context, ...presetArgs) {
  if (typeof this !== "function") throw new TypeError("myBind target must be a function");

  const originalFunction = this;

  return function (...laterArgs) {
    return originalFunction.apply(context, [...presetArgs, ...laterArgs]);
  };
};

function introduce(city, skill) {
  return `${this.name} from ${city} uses ${skill}`;
}

const boundIntroduce = introduce.myBind({ name: "Kesavan" }, "Chennai");
console.log(boundIntroduce("React"));

/*
INTERVIEW ANSWER
bind returns a new function, remembers the chosen this through a closure, and
supports partial arguments.

IMPORTANT LIMITATION
Native bind also handles new constructor calls and prototype behavior. This is
the simpler form normally built first in interviews; mention the limitation.

PRACTICE
Extend myBind to support a function used with new without forcing context.
*/

