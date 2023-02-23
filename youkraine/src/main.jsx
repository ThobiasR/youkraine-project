import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DAppProvider } from "@usedapp/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
