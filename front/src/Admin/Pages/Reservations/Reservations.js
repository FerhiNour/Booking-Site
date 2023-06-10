import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ReservationBoats from "./ReservationBoats/ReservationBoats";
import ReservationExcursions from "./ReservationExcursions/ReservationExcursions";

const Reservations = () => {
  return (
    <div>
      <div className="row">
        <div>
          <Navbar />
        </div>
      </div>

      <ReservationBoats />
      <ReservationExcursions />
    </div>
  );
};

export default Reservations;
