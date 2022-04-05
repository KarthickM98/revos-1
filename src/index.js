import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "./components/context";

ReactDOM.render(
  <Router>
    <DataContext>
      <App />
    </DataContext>
  </Router>,
  document.getElementById("root")
);