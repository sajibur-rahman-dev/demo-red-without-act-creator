import { ReactNode } from "react";

export interface RouteType {
  path?: string;
  index?: boolean;
  children?: RouteType[];
  id?: string;
  element?: ReactNode | null;
  redirection?: ReactNode;
}
