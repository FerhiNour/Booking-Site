import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RowDetailsReservationsExcursions = (props) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onDelete = (id__) => {
    if (window.confirm("are you sure to delete this reservationExcursions? ")) {
      axios
        .delete(`http://localhost:3700/api/reservationsExcursions/${id__}`)
        .then((res) => {
          setMessage(res.data.message);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        });
    }
  };
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.hours} </td>
      <td>{props.nbre_enfant} </td>
      <td>{props.nbre_adulte} </td>
      <td>{props.name_client} </td>
      <td>{props.email_client} </td>
      <td>{props.tel_client} </td>
      <td>{props.note_client} </td>
      <td>{props.name_excursion} </td>
      <td className="gap__actions">
        <span className="badge bg-danger" onClick={() => onDelete(props.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetailsReservationsExcursions;
