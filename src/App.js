import HTML from "./components/HTML";
import CSS from "./components/CSS";
import JavaScript from "./components/JavaScript";
import React from "./components/React";

function App() {
  return (
    <div id="app">
      <h1>The Web Dev Handbook</h1>

      <div id="topics-container">
        <HTML />
        <CSS />
        <JavaScript />
        <React />
      </div>

    </div>
  );
}

export default App;
