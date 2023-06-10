import React from "react";
import axios from "axios";
import { useState } from "react";

const RowDetailsMessages = (props) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onDelete = (id__) => {
    if (window.confirm("are you sure to delete this message? ")) {
      axios.delete(`http://localhost:3700/api/messages/${id__}`).then((res) => {
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
      <td>{props.name} </td>
      <td>{props.email} </td>
      <td>{props.tel} </td>
      <td>{props.content} </td>
      <td className="gap__actions">
        <span className="badge bg-danger" onClick={() => onDelete(props.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetailsMessages;
