import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Better Professor</h1>
      <Login />
      <Register />
    </div>
  );
}

export default App;
