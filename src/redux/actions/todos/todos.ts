import axios from "axios";
import { TodosActionState } from "./../../reducers/types/todos-state";
import { Dispatch } from "react";
import { TODOS_ACTION_TYPE } from "./type";

export const fetchTodos =
  () => async (dispatch: Dispatch<TodosActionState>) => {
    try {
      dispatch({ type: TODOS_ACTION_TYPE.LOADING, payload: true });

      const res = await axios.get("");

      const { data } = res || {};

      dispatch({ type: TODOS_ACTION_TYPE.SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({ type: TODOS_ACTION_TYPE.ERROR, payload: error });
    }
  };
