/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReduxRequest } from "./redux-request";
import { UsersResponseType } from "../../../types/users";
import { USERS_ACTION_Type } from "../../actions/users/types";

export type ErrorResponse = any;

export interface UsersState extends ReduxRequest<UsersResponseType | null> {}

export interface GET_LOADING {
  type: USERS_ACTION_Type.LOADING;
  payload: true;
}

export interface GET_ERROR {
  type: USERS_ACTION_Type.ERROR;
  payload: ErrorResponse;
}

export interface GET_SUCCESS {
  type: USERS_ACTION_Type.SUCCESS;
  payload: UsersResponseType;
}

export type UsersActionState = GET_LOADING | GET_ERROR | GET_SUCCESS;
