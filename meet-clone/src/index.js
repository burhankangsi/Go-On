import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";
import "animate.css";
import { RoomContextProvider } from "./Context/videoContext";

ReactDOM.render(
  <ContextProvider>
    <RoomContextProvider>
      <App />
    </RoomContextProvider>
  </ContextProvider>,
  document.getElementById("root")
);