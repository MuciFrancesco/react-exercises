import { createStore, combineReducers } from "redux";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(rootReducer);
