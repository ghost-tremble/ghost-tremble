import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const Main = () => {
  return <App />;
};

const renderable = document.getElementById("root");

ReactDOM.render(<Main />, renderable);
