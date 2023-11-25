import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { AppRouter } from "./router";
import configureStore from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={configureStore()}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
