import { Dispatch } from "redux";
import { UsersActionState } from "../../reducers/types/users-state";
import axios from "axios";

export const fetchUsers =
  () => async (dispatch: Dispatch<UsersActionState>) => {
    try {
      dispatch({ type: "USERS_GET_LOADING", payload: true });

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const { data } = res || {};

      console.log("res data ===> ", data);

      dispatch({
        type: "USERS_GET_SUCCESS",
        payload: {
          data,
        },
      });
    } catch (err) {
      dispatch({ type: "USERS_GET_ERROR", payload: err });
    }
  };
