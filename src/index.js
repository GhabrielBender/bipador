import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./global.css";
import { UserProvider } from "./contexts/user-context";
import { ModalProvider } from "./contexts/modal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </UserProvider>
  </React.StrictMode>
);
