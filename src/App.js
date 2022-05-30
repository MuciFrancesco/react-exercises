import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome name='Andrea' />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='user/:username' element={<ShowGitHubUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
