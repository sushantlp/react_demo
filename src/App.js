import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Done from "./components/auth/Done";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/done" component={Done} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}
export default App;
