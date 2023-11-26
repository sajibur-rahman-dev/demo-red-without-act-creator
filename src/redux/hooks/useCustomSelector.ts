import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer from "../reducers";

type RootState = ReturnType<typeof rootReducer>;

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
