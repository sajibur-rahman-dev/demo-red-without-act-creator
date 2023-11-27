import { combineReducers } from "redux";
import UsersReducer from "./users-reducer";
import TodosReducer from "./todos-reducer";

const rootReducer = combineReducers({
  users: UsersReducer,
  todos: TodosReducer,
});

export default rootReducer;
