import React from "react";

const Alert = (props) => {
  return (
    <div
      className="alert alert-success"
      role="alert"
      style={{ display: props.show ? "block" : "none" }}
    >
      {props.message}
    </div>
  );
};

export default Alert;
