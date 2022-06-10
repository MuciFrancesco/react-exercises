import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

function Root() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
