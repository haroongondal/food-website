import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoutes({ component: Component, _to: to,  ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isLogedin");
  return (
    <Route
      {...restOfProps}
      render={(props) =>

        {
          if (to === "crmDashboard") {
            if (isAuthenticated === "true") {
            return  <Component {...props} />
            } else {
            return  <Redirect to="/Business-Signup" />
            }
          } else if (to === "userDashboard") {
            if (isAuthenticated === "true") {
            return  <Component {...props} />
            } else {
            return  <Redirect to="/" />
            }
          }
        }
      }
    />
  );
}

export default ProtectedRoutes;