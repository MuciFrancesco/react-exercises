import "./index.css";
import { store } from "./state/Store";
import { addTodo, editTodo, removeTodo } from "./state/TodosReducer";

const root = document.querySelector("#root");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo({ id: 1, title: "Studying React", completed: true }));
store.dispatch(addTodo({ id: 2, title: "Studying Redux", completed: false }));
store.dispatch(removeTodo(2));
store.dispatch(editTodo(1, { title: "Studying Angular" }));
