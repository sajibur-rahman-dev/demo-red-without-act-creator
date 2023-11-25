import { ReactNode } from "react";
import { RouteType } from "./Routes/type";
import { Route, Routes } from "react-router-dom";
import { Routes as ProjectRoutes } from "./Routes";

export const AppRouter = () => {
  const buildRoute = (route: RouteType): ReactNode | null => {
    if (route === undefined || null) return null;

    const { id, path, element, index: idx, children } = route;

    return idx ? (
      <Route index key={id} element={element} />
    ) : (
      <Route path={path} key={id} element={element}>
        {children ? (
          children.length && children.map((child) => buildRoute(child))
        ) : (
          <></>
        )}
      </Route>
    );
  };

  return (
    <Routes>
      {ProjectRoutes.map((route: RouteType) => buildRoute(route))}
    </Routes>
  );
};
