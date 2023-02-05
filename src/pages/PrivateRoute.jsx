import React from "react";
// import { useUserContext } from "../context/user_context";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../context/cart_context";
import { Outlet } from "react-router-dom";

function PrivateRoute() {
  const { user } = useAuth0();

  return <div>{user ? <Outlet /> : <Navigate to="/" replace />}</div>;
}

export default PrivateRoute;
