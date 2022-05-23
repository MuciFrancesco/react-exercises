import React from "react";
import Counter from "./Counter";

function App() {
  const onCounterChange = (counter) => {
    console.log(`the counter is now${counter}`);
  };
  return (
    <div className='App'>
      <>
        <Counter onCounterChange={onCounterChange} />
      </>
    </div>
  );
}

export default App;
