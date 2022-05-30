import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GitHubUserList from "./GitHubUserList";
import GitHubUsers from "./GitHubUsers";
import NotFound from "./NotFound";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<App />}></Route>
        <Route path='/welcome' element={<Welcome name='Andrea' />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='user' element={<GitHubUserList />}>
          <Route path=':username' element={<GitHubUsers />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
