import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store";

export const useCustomSelector: TypedUseSelectorHook<rootState> = useSelector;
