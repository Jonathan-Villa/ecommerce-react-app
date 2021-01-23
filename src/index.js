import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { default as GlobalStore } from "./store/Store";

ReactDOM.render(
  <Router>
    <GlobalStore >
      <App />
    </GlobalStore>
  </Router>,
  document.getElementById("root")
);
