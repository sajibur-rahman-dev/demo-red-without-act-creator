import { fetchTodos } from "./todos/todos";
import { fetchUsers } from "./users/users";

const allActionHandlers = {
  fetchUsers,
  fetchTodos,
};

export default allActionHandlers;
