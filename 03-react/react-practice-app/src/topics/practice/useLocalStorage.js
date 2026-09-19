import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) : initialValue; }
    catch { return initialValue; }
  });
  function updateValue(nextValue) {
    setValue(current => { const resolved = typeof nextValue === "function" ? nextValue(current) : nextValue; localStorage.setItem(key, JSON.stringify(resolved)); return resolved; });
  }
  return [value, updateValue];
}
export default useLocalStorage;

