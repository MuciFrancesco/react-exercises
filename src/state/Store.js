import { createStore, combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);
