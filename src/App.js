import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome name='Andrea' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
