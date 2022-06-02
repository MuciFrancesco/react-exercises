import { combineReducers, createStore } from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  counter: CounterReducer.reducer,
});

export const store = createStore(rootReducer);
