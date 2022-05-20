import React from "react";
import Welcome from "./Welcome";
import Sum from "./Sum";

const arrayOfNumber = [1, 2, 4, 6, 8, 10, 22, 55, 77];
const summOfNumber = arrayOfNumber.reduce((acc, el) => acc + el, 0);

function App() {
  return (
    <div className='App'>
      <Welcome name='Andrea' />
      <Sum summOfNumber={summOfNumber} />
    </div>
  );
}

export default App;
