import React from "react";
import ManagerNavbar from "../../Components/ManagerNavbar/ManagerNavbar";
import ReservationBoats from "../../../Admin/Pages/Reservations/ReservationBoats/ReservationBoats";
import ReservationExcursions from "../../../Admin/Pages/Reservations/ReservationExcursions/ReservationExcursions";

const ManagerReservations = () => {
  return (
    <div className="usersPage ">
      <div className="row">
        <div>
          <ManagerNavbar />
        </div>
      </div>

      <ReservationBoats />
      <ReservationExcursions />
    </div>
  );
};

export default ManagerReservations;
