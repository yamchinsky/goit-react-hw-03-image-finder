import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>,
  document.getElementById("root")
);
