export interface Todo {
  title?: string;
  completed?: boolean;
}

export interface TodoResponseType {
  data: Todo[];
}
