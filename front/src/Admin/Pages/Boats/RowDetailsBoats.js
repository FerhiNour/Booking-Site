import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RowDetailsBoats = ({
  photo,
  name,
  description,
  nbre_person,
  moteur,
  id,
}) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onDelete = (id__) => {
    if (window.confirm("are you sure to delete this boat? ")) {
      axios.delete(`http://localhost:3700/api/boats/${id__}`).then((res) => {
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
      <td>{photo}</td>
      <td>{name} </td>
      <td>{description} </td>
      <td>{nbre_person} </td>
      <td>{moteur} </td>
      <td className="gap__actions">
        <span className="badge bg-info">
          <Link to={`/admin/boats/${id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </Link>
        </span>

        <span className="badge bg-danger" onClick={() => onDelete(id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetailsBoats;
