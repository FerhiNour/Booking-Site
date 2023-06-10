import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/Navbar/Navbar";
import InputGroup from "../../Components/InputGroup";
import Alert from "../../Components/Alert";
import { Link } from "react-router-dom";
import RowDetailsMessages from "./RowDetailsMessages";

const Messages = () => {
  const [messages, setMessages] = useState([]);
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
      .post("http://localhost:3700/api/messages", form)
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
    async function fetchMessages() {
      const response = await axios.get("http://localhost:3700/api/messages");
      setMessages(response.data);
    }
    fetchMessages();
  });
  return (
    <div>
      <div className="row">
        <div>
          <NavBar />
        </div>
      </div>
      <Alert message={message} show={show} />
      <div className="container">
        <div className="row usersContent text-center ">
          <h1>Messages</h1>

          <div className="container col-12 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tel</th>
                  <th scope="col">Content</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(({ name, email, tel, content, _id }) => (
                  <RowDetailsMessages
                    name={name}
                    email={email}
                    tel={tel}
                    content={content}
                    id={_id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
