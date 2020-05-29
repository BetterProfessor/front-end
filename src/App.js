import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import Header from "./components/Header";

import {AppProvider} from "./contexts/AppContext"
import PrivateRoute from "./utils/PrivateRoute"

import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    //<AppProvider> are for the state management
    <AppProvider>
      <div className="App">
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </div>
    </AppProvider>
  );
}

export default App;
