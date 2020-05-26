import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Better Professor</h1>
      <Route exact path="/" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  );
}

export default App;
