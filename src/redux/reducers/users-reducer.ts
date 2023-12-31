import { USERS_ACTION_Type } from "../actions/users/types";

import { UsersState, UsersActionState } from "./types/users-state";

const initialState: UsersState = {
  isGetLoading: false,

  getError: null,

  getSuccess: false,

  getData: null,
};

export default function UsersReducer(
  state: UsersState = initialState,
  action: UsersActionState
) {
  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_Type.LOADING:
      return {
        ...state,
        isGetLoading: payload,
        getError: null,
        getSuccess: false,
      };
    case USERS_ACTION_Type.ERROR:
      return {
        ...state,
        isGetLoading: false,
        getError: payload,
        getSuccess: false,
      };

    case USERS_ACTION_Type.SUCCESS:
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
