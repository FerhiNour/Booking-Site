import React from "react";
import axios from "axios";
import { useState } from "react";

const RowDetailsReservationsBoats = (props) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  // delete
  const onDelete = (id__) => {
    if (window.confirm("are you sure to delete this reservationBoats? ")) {
      axios
        .delete(`http://localhost:3700/api/reservationsBoats/${id__}`)
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
      <td>{props.nbre_person} </td>
      <td>{props.name_client} </td>
      <td>{props.email_client} </td>
      <td>{props.tel_client} </td>
      <td>{props.note_client} </td>
      <td>{props.name_boat} </td>
      <td className="gap__actions">
        <span className="badge bg-danger" onClick={() => onDelete(props.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetailsReservationsBoats;
