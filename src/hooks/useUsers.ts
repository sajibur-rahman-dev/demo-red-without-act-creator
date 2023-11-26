import { useEffect } from "react";
import { useActionCreator } from "../redux/hooks/useActionCreator";
import { useCustomSelector } from "../redux/hooks/useCustomSelector";
import { UsersState } from "../redux/reducers/types/users-state";

interface UseUsersPropType {
  usersState: UsersState | null;
}

const useUsers = (): UseUsersPropType => {
  const { fetchUsers } = useActionCreator();

  const usersState = useCustomSelector((store) => store);

  console.log("usersState :", usersState);

  console.log("usersState :", usersState);

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    usersState: usersState.users || null,
  };
};

export default useUsers;
