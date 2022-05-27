import React, { useState, useCallback, useEffect } from "react";
function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const counterIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const counterDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const counterReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return {
    counter: counter,
    counterIncrement: counterIncrement,
    counterDecrement: counterDecrement,
    counterReset: counterReset,
  };
}
export default useCounter;
