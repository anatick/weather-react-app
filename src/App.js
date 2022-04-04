import React from "react"; 
import Weather from "./Weather";


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      </div>
      <small>
        <a href="https://github.com/anatick/anatick">Open-source code </a> by Ana Carraça
      </small>
    </div>
  );
}

export default App;
