import React, { useState } from "react";
import axios from "axios";
import "./BoatCompoenentForm.css";
import InputGroup from "../../Admin/Components/InputGroup";
import Alert from "../../Admin/Components/Alert";

const BoatCompoenentForm = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      name_boat: props.boat,
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
  return (
    <>
      <div className="col-4 boatComponentForm">
        <div className=" col">
          <form onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <InputGroup
                    for="date"
                    label="date"
                    InputType="text"
                    InputName="date"
                    onChangeHandler={onChangeHandler}
                    errors={errors.date}
                    placeholder="1999-07-15"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <InputGroup
                    for="hours"
                    label="hours"
                    InputType="text"
                    InputName="hours"
                    onChangeHandler={onChangeHandler}
                    errors={errors.hours}
                    placeholder="19:10"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <InputGroup
                    for="nbre_person"
                    label="nbre_person"
                    InputType="number"
                    InputName="nbre_person"
                    onChangeHandler={onChangeHandler}
                    errors={errors.nbre_person}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <InputGroup
                for="name_client"
                label="name_client"
                InputType="text"
                InputName="name_client"
                onChangeHandler={onChangeHandler}
                errors={errors.name_client}
              />
            </div>
            <div className="form-group">
              <InputGroup
                for="email_client"
                label="email_client"
                InputType="email"
                InputName="email_client"
                onChangeHandler={onChangeHandler}
                errors={errors.email_client}
              />
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <InputGroup
                    for="tel_client"
                    label="tel_client"
                    InputType="text"
                    InputName="tel_client"
                    onChangeHandler={onChangeHandler}
                    errors={errors.tel_client}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <InputGroup
                    for="note_client"
                    label="note_client"
                    InputType="text"
                    InputName="note_client"
                    onChangeHandler={onChangeHandler}
                    errors={errors.note_client}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#003a7e", color: "white" }}
            >
              Prenota Ora
            </button>
          </form>
          <Alert message={message} show={show} />
        </div>
      </div>
    </>
  );
};

export default BoatCompoenentForm;
