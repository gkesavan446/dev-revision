import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(current => !current);
  const reset = () => setValue(initialValue);
  return { value, toggle, reset };
}

export default useToggle;

