import { useDebugValue, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  useDebugValue(count, (count) => `Current Count is ${count}`);
  useDebugValue(setCount);

  return { count, setCount };
}

export default useCounter;
