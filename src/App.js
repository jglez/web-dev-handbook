import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import HTML from "./components/HTML";
import CSS from "./components/CSS";
import JavaScript from "./components/JavaScript";

function App() {
  return (
    <div id="app">
      <header>
        <Link to="/" id="back-nav"><span id="back-arrow">&#8678;</span></Link>
        
        <h1>The Web Dev Handbook</h1>
      </header>
 

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<JavaScript />} />
        </Routes>
    </div>
  );
}

export default App;
