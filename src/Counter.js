import React, { useState, useEffect, useCallback } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`the counter is now${counter}`);
  }, [counter]);

  const counterIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const counterDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const counterReset = () => {
    setCounter(0);
  };

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
