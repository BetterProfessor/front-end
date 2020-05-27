import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  );
}

export default App;
