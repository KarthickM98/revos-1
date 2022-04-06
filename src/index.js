import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { DataContext } from "./components/context";

ReactDOM.render(
  <DataContext>
    <App />
  </DataContext>,

  document.getElementById("root")
);
