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
      <Link to='user:username'>
        <button>Go to gitHubUser App</button>
      </Link>
      <Link to='/welcome'>
        <button>Return to Welcome App</button>
      </Link>
      <Link to='/'>
        <button>Go to Main App</button>{" "}
      </Link>
    </div>
  );
}

export default Counter;
