export interface UserType {
  id?: string;
  name?: string;
  email?: string;
}

export interface UsersResponseType {
  data: UserType[];
}
