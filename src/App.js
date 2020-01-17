import React from "react";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> PROJECT TRACKER </h1>
        <div>
          <ProjectList />
        </div>
      </header>
    </div>
  );
}

export default App;
