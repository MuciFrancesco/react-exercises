import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./state/Store";
import { addTodo, editTodo, removeTodo } from "./state/TodosReducer";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

store.subscribe(() => {
  console.log("I'm changing", store.getState());
});

store.dispatch(addTodo({ id: 1, title: "Studying React", completed: true }));
store.dispatch(addTodo({ id: 2, title: "Studying Redux", completed: false }));
store.dispatch(removeTodo(2));
store.dispatch(editTodo(1, { title: "Studying Angular" }));
