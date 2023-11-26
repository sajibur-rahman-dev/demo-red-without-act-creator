import { useDispatch } from "react-redux";
import configureStore from "../store";

const store = configureStore();

export type StoreDispatch = typeof store.dispatch;

export const useCustomDispatch: () => StoreDispatch = useDispatch;
