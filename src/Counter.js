import React, { useState, useCallback, useEffect } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const counterIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const counterDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const counterReset = () => {
    setCounter(initialValue);
  };
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

function Counter({ initialValue = 0 }) {
  const { counter, counterIncrement, counterDecrement, counterReset } =
    useCounter(initialValue);

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
