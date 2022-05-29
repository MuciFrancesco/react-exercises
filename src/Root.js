import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GitHubUsers from "./GitHubUsers";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/welcome' element={<Welcome name='Andrea' />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path=':username' element={<GitHubUsers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
