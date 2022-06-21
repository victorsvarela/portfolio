import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import React from "react";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
