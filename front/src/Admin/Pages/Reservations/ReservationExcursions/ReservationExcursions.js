import React, { useEffect, useState } from "react";
import axios from "axios";

import InputGroup from "../../../Components/InputGroup";
import Alert from "../../../Components/Alert";
import RowDetailsReservationsExcursions from "./RowDetailsReservationsExcursions";

const ReservationExcursions = () => {
  const [reservationExcursions, setReservationExcursions] = useState([]);
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
      .post("http://localhost:3700/api/reservationsExcursions", form)
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
        "http://localhost:3700/api/reservationsExcursions"
      );
      setReservationExcursions(response.data);
    }
    fetchBoats();
  });
  return (
    <div>
      <div className="row"></div>
      <Alert message={message} show={show} />
      <div className="container">
        <div className="row usersContent text-center ">
          <h1>ReservationExcursions</h1>

          <div className="col-12 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">date</th>
                  <th scope="col">hours</th>
                  <th scope="col">nbre_enfant</th>
                  <th scope="col">nbre_adulte</th>
                  <th scope="col">name_client</th>
                  <th scope="col">email_client</th>
                  <th scope="col">tel_client</th>
                  <th scope="col">note_client</th>
                  <th scope="col">name_excursion</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservationExcursions.map(
                  ({
                    date,
                    hours,
                    nbre_enfant,
                    nbre_adulte,
                    name_client,
                    email_client,
                    tel_client,
                    note_client,
                    name_excursion,
                    _id,
                  }) => (
                    <RowDetailsReservationsExcursions
                      date={date}
                      hours={hours}
                      nbre_enfant={nbre_enfant}
                      nbre_adulte={nbre_adulte}
                      name_client={name_client}
                      email_client={email_client}
                      tel_client={tel_client}
                      note_client={note_client}
                      name_excursion={name_excursion}
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

export default ReservationExcursions;
