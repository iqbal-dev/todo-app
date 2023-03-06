import { combineReducers } from "redux";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
