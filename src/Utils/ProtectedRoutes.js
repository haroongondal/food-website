import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoutes({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isLogedin");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated === "true" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoutes;