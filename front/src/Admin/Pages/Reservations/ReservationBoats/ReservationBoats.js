import React, { useEffect, useState } from "react";
import axios from "axios";

import RowDetailsReservationsBoats from "./RowDetailsReservationsBoats";

const ReservationBoats = () => {
  const [reservationBoats, setReservationBoats] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3700/api/reservationsBoats", form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => setErrors(err.response.data));
  };

  // find all boats
  useEffect(() => {
    async function fetchBoats() {
      const response = await axios.get(
        "http://localhost:3700/api/reservationsBoats"
      );
      setReservationBoats(response.data);
    }
    fetchBoats();
  });
  return (
    <div>
      <div className="row"></div>

      <div className="container">
        <div className="row usersContent text-center ">
          <h1>ReservationBoats</h1>

          <div className="col-12 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">date</th>
                  <th scope="col">hours</th>
                  <th scope="col">nbre_person</th>
                  <th scope="col">name_client</th>
                  <th scope="col">email_client</th>
                  <th scope="col">tel_client</th>
                  <th scope="col">note_client</th>
                  <th scope="col">name_boat</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservationBoats.map(
                  ({
                    date,
                    hours,
                    nbre_person,
                    name_client,
                    email_client,
                    tel_client,
                    note_client,
                    name_boat,
                    _id,
                  }) => (
                    <RowDetailsReservationsBoats
                      date={date}
                      hours={hours}
                      nbre_person={nbre_person}
                      name_client={name_client}
                      email_client={email_client}
                      tel_client={tel_client}
                      note_client={note_client}
                      name_boat={name_boat}
                      id={_id}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBoats;
