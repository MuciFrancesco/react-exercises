import React from "react";
import CarDetail from "./CarDetail";
const defaultValue = {
  model: "Ferrari",
  color: "red",
  year: "2021",
};

function App() {
  return (
    <div className='App'>
      <>
        <CarDetail defaultValue={defaultValue} />
      </>
    </div>
  );
}

export default App;
