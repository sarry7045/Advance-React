import React from "react";
import { Routes, Route } from "react-router-dom";
import Links from "./Components/ReactRouterDom/Links";
import Home from "./Components/ReactRouterDom/Home";
import About from "./Components/ReactRouterDom/About";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
