import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RowDetailsExcursions = (props) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onDelete = (id__) => {
    if (window.confirm("are you sure to delete this excursion? ")) {
      axios
        .delete(`http://localhost:3700/api/excursions/${id__}`)
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
      <td>{props.photo}</td>
      <td>{props.name} </td>
      <td>{props.description} </td>
      <td>{props.point_depart} </td>
      <td>{props.duree} </td>
      <td className="gap__actions">
        <span className="badge bg-info">
          <Link to={`/admin/excursions/${props.id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </Link>
        </span>

        <span className="badge bg-danger" onClick={() => onDelete(props.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetailsExcursions;
