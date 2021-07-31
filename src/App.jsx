// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
        <LoginPage />
        </Route>
        <Route>
          404 not found
          <Link to= "/login">login</Link>
        </Route>
      </Switch>
    </Router>
  );
}