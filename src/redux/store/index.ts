import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { middleware } from "../middlewares";

export type rootState = ReturnType<typeof rootReducer>;

const configureStore = (initialState?: rootState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
  return store;
};

export default configureStore;
