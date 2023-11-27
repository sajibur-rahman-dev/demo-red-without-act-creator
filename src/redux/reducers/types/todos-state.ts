/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReduxRequest } from "./redux-request";
import { TodoResponseType } from "../../../types/todos";
import { TODOS_ACTION_TYPE } from "../../actions/todos/type";

export type ErrorResponse = any;

export interface TodosState extends ReduxRequest<TodoResponseType | null> {}

export type GET_LOADING = {
  type: TODOS_ACTION_TYPE.LOADING;
  payload: true;
};

export type GET_ERROR = {
  type: TODOS_ACTION_TYPE.ERROR;
  payload: ErrorResponse;
};

export type GET_SUCCESS = {
  type: TODOS_ACTION_TYPE.SUCCESS;
  payload: TodoResponseType;
};

export type TodosActionState = GET_LOADING | GET_ERROR | GET_SUCCESS;
