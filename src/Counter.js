import React from "react";
import useCounter from "./useCounter";

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
