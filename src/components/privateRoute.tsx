import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUser } from "../store";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  user: CurrentUser | null;
}> = (props) => {
  return props.user ? (
    <Route
      path={props.path}
      exact={props.exact}
      component={props.component}
      user={props.user}
    />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
