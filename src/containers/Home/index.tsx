import useUsers from "../../hooks/useUsers";

export function Home() {
  const { usersState } = useUsers();
  console.log(usersState);

  return <div>home</div>;
}
