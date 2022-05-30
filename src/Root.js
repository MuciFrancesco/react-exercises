import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GitHubUserList from "./GitHubUserList";
import NotFound from "./NotFound";
import GitHubUsers from "./GitHubUsers";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<App />}></Route>
        <Route path='/welcome' element={<Welcome name='Andrea' />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route
          path='user'
          element={<GitHubUsers username={"MuciFrancesco"} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
