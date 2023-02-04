import React from "react";
import { useUserContext } from "../context/user_context";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { myUser } = useUserContext();
  return (
    <div>
      {!myUser ? <Navigate to="/" replace={true} /> : null}
      <h1>hello</h1>
    </div>
  );
}

export default PrivateRoute;
{
  /* <Route
      {...rest}
      render={() => {
        return myUser ? children : <Navigate to="/"></Navigate>;
      }}
    >
      Privatemain
    </Route> */
}
