import { Dispatch } from "redux";
import { UsersActionState } from "../../reducers/types/users-state";
import axios from "axios";
import { USERS_ACTION_Type } from "./types";

export const fetchUsers =
  () => async (dispatch: Dispatch<UsersActionState>) => {
    try {
      dispatch({ type: USERS_ACTION_Type.LOADING, payload: true });

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const { data } = res || {};

      console.log("res data ===> ", data);

      dispatch({
        type: USERS_ACTION_Type.SUCCESS,
        payload: {
          data,
        },
      });
    } catch (err) {
      dispatch({ type: USERS_ACTION_Type.ERROR, payload: err });
    }
  };
