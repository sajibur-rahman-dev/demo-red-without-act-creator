import { GET_TODOS } from "../actions/todos/type";
import { TodosActionState, TodosState } from "./types/todos-state";

const initialState: TodosState = {
  isGetLoading: false,

  getError: null,

  getSuccess: false,

  getData: null,
};

export default function TodosReducer(
  state = initialState,
  action: TodosActionState
) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS.LOADING:
      return {
        ...state,
        isGetLoading: payload,
        getError: null,
        getSuccess: false,
      };

    case GET_TODOS.ERROR:
      return {
        ...state,
        isGetLoading: false,
        getError: payload,
        getSuccess: false,
      };

    case GET_TODOS.SUCCESS:
      return {
        ...state,
        isGetLoading: false,
        getError: null,
        getSuccess: true,
        getData: payload,
      };

    default:
      return state;
  }
}
