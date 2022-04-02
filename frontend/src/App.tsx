import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import TollPassages from "./screens/TollPassages";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="toll-passages/:regnumber" element={<TollPassages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
