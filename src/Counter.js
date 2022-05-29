import React from "react";
import { Link } from "react-router-dom";
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
      <Link to='/:username'>
        <button>Go to gitHubUser App</button>
      </Link>
      <Link to='/'>
        <button>Return to Welcome App</button>
      </Link>
    </div>
  );
}

export default Counter;
