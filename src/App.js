import React from "react";
import "./styles/theme.css";
import "./styles/index.css";
import Portfolio from "./pages/portfolio";
import OpeningLoader from "./components/openingLoader/Opening";

const App = () => {
  return (
    <>
      <OpeningLoader />
      <Portfolio />
    </>
  );
};

export default App;
