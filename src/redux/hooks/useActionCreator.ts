import { bindActionCreators } from "redux";
import { useCustomDispatch } from "./useCustomDispatch";
import allActionHandlers from "../actions";

export const useActionCreator = () => {
  const dispatch = useCustomDispatch();

  const allActionCreator = bindActionCreators(allActionHandlers, dispatch);

  return {
    ...allActionCreator,
  };
};
