/* DEBOUNCE IMPLEMENTATION WITH CANCEL AND FLUSH */

function debounce(callback, delay) {
  let timerId;
  let lastArgs;
  let lastContext;

  function debounced(...args) {
    lastArgs = args;
    lastContext = this;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback.apply(lastContext, lastArgs);
      timerId = undefined;
      lastArgs = undefined;
      lastContext = undefined;
    }, delay);
  }

  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = undefined;
    lastArgs = undefined;
    lastContext = undefined;
  };

  debounced.flush = function () {
    if (timerId === undefined) return;
    clearTimeout(timerId);
    callback.apply(lastContext, lastArgs);
    timerId = undefined;
    lastArgs = undefined;
    lastContext = undefined;
  };

  return debounced;
}

const search = debounce(query => console.log("Search:", query), 40);
search("rea");
search("react");
search.flush(); // run latest call immediately

const cancelled = debounce(() => console.log("Should not run"), 20);
cancelled();
cancelled.cancel();

/*
PRACTICE
Add an immediate option that runs on the leading edge and then blocks repeated
calls until the delay expires.
*/

