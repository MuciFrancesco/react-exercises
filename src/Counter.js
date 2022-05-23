import React, { useState, useCallback, useEffect } from "react";

function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);
  const counterIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const counterDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const counterReset = () => {
    setCounter(0);
  };
  useEffect(() => {
    onCounterChange(counter);
  }, [counter]);
  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={counterIncrement}>Increment</button>
      <button onClick={counterDecrement}>Decrement</button>
      <button onClick={counterReset}>Reset</button>
    </div>
  );
}

export default Counter;
