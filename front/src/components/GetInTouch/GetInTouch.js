import React from "react";
import { Link } from "react-router-dom";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <>
      <div className="container touch text-center">
        <h1>Get In Touch With Us</h1>
        <p>
          Find out about all the different boat trips departing from Castro
          Marina, Salento.
        </p>
        <Link className="btn" to="/contatti">
          CONTACT US
        </Link>
      </div>
    </>
  );
};

export default GetInTouch;
