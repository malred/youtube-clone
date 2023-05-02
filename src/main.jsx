import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProviders from "./context/index.jsx";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // 主题切换
  <ContextProviders>
    <Router>
      <App />
    </Router>
  </ContextProviders>
);
