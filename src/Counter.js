import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterState from "./state/CounterReducer";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispach = useDispatch();

  const handleCounterIncrement = () => {
    dispach(counterState.actions.increment(1));
  };
  const handleCounterDecrement = () => {
    dispach(counterState.actions.decrement(1));
  };
  const handleCounterReset = () => {
    dispach(counterState.actions.reset());
  };

  return (
    <div>
      <h2>Current value :{counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

export default Counter;
