import React from "react";
import "./YellowCpmponent.css";
import bg from "../../assets/images/chisiamoComponent.jpg";

const YellowCpmponent = () => {
  return (
    <>
      <div className="container yl mb-5">
        <div
          className="row d-flex justify-content-around align-items-center text-light"
          style={{ height: 220 }}
        >
          <div className="col text-center">
            <h2>25</h2>
            <p>Anni di attivit�</p>
          </div>
          <div className="col text-center">
            <h2>45</h2>
            <p>barche marine</p>
          </div>
          <div className="col text-center">
            <h2>25</h2>
            <p>Rental Car</p>
          </div>
          <div className="col text-center">
            <h2>75</h2>
            <p>Pedal�</p>
          </div>
          <div className="col text-center">
            <h2>14</h2>
            <p>Acquascooter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YellowCpmponent;
