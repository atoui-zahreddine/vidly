import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../services/authService";

function ProtectedRoute({ path, component: Component, render, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        authService.getCurrentUser() ? (
          Component ? (
            <Component {...props} />
          ) : (
            render(props)
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
