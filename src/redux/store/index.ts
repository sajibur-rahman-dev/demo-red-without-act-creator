import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { middleware } from "../middlewares";

const configureStore = (initialState?: ReturnType<typeof rootReducer>) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
  return store;
};

export default configureStore;
