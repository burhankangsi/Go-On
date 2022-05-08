import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";
import { RoomContextProvider } from "./VideoContext";

ReactDOM.render(
  <ContextProvider>
    <RoomContextProvider>
      <App />
    </RoomContextProvider>
  </ContextProvider>,
  document.getElementById("root")
);