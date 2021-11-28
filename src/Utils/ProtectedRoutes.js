import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoutes({ component: Component, _to: to,  ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isLogedin");
  const userObj = localStorage.getItem("userObj")

  return (
    <Route
      {...restOfProps}
      render={(props) =>

        {
          if (to === "crmDashboard") {
            if (isAuthenticated === "true") {
            //  if (userObj.AccountType.Id === 2) {
                return  <Component {...props} />
            //  }
            } else {
            return  <Redirect to="/Business-Signup" />
            }
          } else if (to === "userDashboard") {
            if (isAuthenticated === "true") {
           //   if (userObj.AccountType.Id === 5) {
                return  <Component {...props} />
            //  }
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