import { RouteType } from "./type.ts";
import { ROUTES } from "../../constants/routes";
import { Layout, Home, About, NotMatch } from "../../containers";

const { HOME, ABOUT } = ROUTES;

export const Routes: RouteType[] = [
  {
    id: "1",
    path: "*",
    element: <NotMatch />,
  },
  {
    id: "2",
    path: HOME,
    element: <Layout />,
    redirection: <NotMatch />,
    children: [
      {
        id: "2.1",
        index: true,
        element: <Home />,
        redirection: <NotMatch />,
      },
      {
        id: "2.2",
        path: ABOUT,
        element: <About />,
        redirection: <NotMatch />,
      },
    ],
  },
];
