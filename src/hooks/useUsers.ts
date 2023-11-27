import { useEffect } from "react";
import { useActionCreator } from "../redux/hooks/useActionCreator";
import { useCustomSelector } from "../redux/hooks/useCustomSelector";
import { UsersState } from "../redux/reducers/types/users-state";

interface UseUsersPropType {
  usersState: UsersState | null;
}

const useUsers = (): UseUsersPropType => {
  const { fetchUsers } = useActionCreator();

  const usersState = useCustomSelector((store) => store.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    usersState: usersState || null,
  };
};

export default useUsers;
