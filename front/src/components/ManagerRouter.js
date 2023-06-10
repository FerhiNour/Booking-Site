import React from "react";
import { Navigate } from "react-router-dom";

const ManagerRouter = ({ user, children }) => {
  if (!user.isConnected) {
    return <Navigate to="/login" replace />;
  } else {
    if (user.role !== "manager") {
      return <Navigate to="/noaccess" replace />;
    }
  }
  return children;
};

export default ManagerRouter;
