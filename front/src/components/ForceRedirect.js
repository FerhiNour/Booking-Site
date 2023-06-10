import React from "react";
import { Navigate } from "react-router-dom";

const ForceRedirect = ({ user, children }) => {
  if (user.isConnected && user.role === "admin") {
    return <Navigate to="/admin" replace />;
  } else {
    if (user.isConnected && user.role === "manager") {
      return <Navigate to="/manager" replace />;
    }
  }
  return children;
};

export default ForceRedirect;
