import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HTML from "./components/HTML";
import CSS from "./components/CSS";
import JavaScript from "./components/JavaScript";
import React from "./components/React";

function App() {
  return (
    <div id="app">
      <h1>The Web Dev Handbook</h1>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/react" element={<React />} />
        </Routes>
    </div>
  );
}

export default App;
