import React from "react";

const IconComponent = (props) => {
  return (
    <>
      <div className="d-flex align-items-center m-4">
        <div className="icon m-2" style={{ color: "#003a7e" }}>
          {props.icon}
        </div>

        <div className="d-flex flex-column align-items-center ">
          <h6>
            {props.title1} <br />
            {props.title2}
          </h6>
          <p className="text-secondary">{props.body}</p>
        </div>
      </div>
    </>
  );
};

export default IconComponent;
