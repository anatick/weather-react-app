import React from "react"; 
import Weather from "./Weather";
import './App.css';
import "./index.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lisbon"/>
      </div>
      <small>
        <a href="https://github.com/anatick/anatick" target="_blank" rel="noopener noreferrer" >Open-source code </a> by Ana Carraça
      </small>
    </div>
  );
}

