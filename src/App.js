import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome name='Andrea' />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
