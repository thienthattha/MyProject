import { combineReducers } from "redux";
import { toDoListReducer } from "./toDoList";

export const appReducer = combineReducers({
  toDoListReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
