/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReduxRequest } from "./redux-request";
import { UsersResponseType } from "../../../types/users";

export type ErrorResponse = any;

export interface UsersState extends ReduxRequest<UsersResponseType | null> {}

export type GET_LOADING = {
  type: "USERS_GET_LOADING";
  payload: true;
};

export type GET_ERROR = {
  type: "USERS_GET_ERROR";
  payload: ErrorResponse;
};

export type GET_SUCCESS = {
  type: "USERS_GET_SUCCESS";
  payload: UsersResponseType;
};

export type UsersActionState = GET_LOADING | GET_ERROR | GET_SUCCESS;
