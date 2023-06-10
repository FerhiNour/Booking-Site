import React from "react";
import ManagerNavbar from "../../Components/ManagerNavbar/ManagerNavbar";
import InputGroup from "../../../Admin/Components/InputGroup";
import Alert from "../../../Admin/Components/Alert";
import { useState, useEffect } from "react";
import axios from "axios";
import RowDetailsManagerPromotions from "./RowDetailsManagerPromotions";

const ManagerPromotions = () => {
  const [promotions, setPromotions] = useState([]);
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
      .post("http://localhost:3700/api/promotions", form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => setErrors(err.response.data));
  };

  // find all promotions
  useEffect(() => {
    async function fetchPromotions() {
      const response = await axios.get("http://localhost:3700/api/promotions");
      setPromotions(response.data);
    }
    fetchPromotions();
  });
  return (
    <div>
      <div className="row">
        <div>
          <ManagerNavbar />
        </div>
      </div>
      <div>
        <Alert message={message} show={show} />
        <div className="container">
          <div className="row text-center ">
            <h1>Promotions</h1>
            <div className="col-12 col-lg-4">
              <form onSubmit={onSubmitHandler}>
                <InputGroup
                  for="name"
                  label="Name"
                  InputType="text"
                  InputName="name"
                  onChangeHandler={onChangeHandler}
                  errors={errors.name}
                />
                <InputGroup
                  for="date_debut"
                  label="date_debut"
                  InputType="text"
                  InputName="date_debut"
                  onChangeHandler={onChangeHandler}
                  errors={errors.date_debut}
                />
                <InputGroup
                  for="date_fin"
                  label="date_fin"
                  InputType="text"
                  InputName="date_fin"
                  onChangeHandler={onChangeHandler}
                  errors={errors.date_fin}
                />
                <InputGroup
                  for="adulte"
                  label="adulte"
                  InputType="number"
                  InputName="adulte"
                  onChangeHandler={onChangeHandler}
                  errors={errors.adulte}
                />
                <InputGroup
                  for="enfant"
                  label="enfant"
                  InputType="number"
                  InputName="enfant"
                  onChangeHandler={onChangeHandler}
                  errors={errors.enfant}
                />

                <button className="btn btn-primary" type="submit">
                  Add Promotion
                </button>
              </form>
            </div>
            <div className="col-12 col-lg-7">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">date_debut</th>
                    <th scope="col">date_fin</th>
                    <th scope="col">adulte</th>
                    <th scope="col">enfant</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {promotions.map(
                    ({ name, date_debut, date_fin, adulte, enfant, _id }) => (
                      <RowDetailsManagerPromotions
                        name={name}
                        date_debut={date_debut}
                        date_fin={date_fin}
                        adulte={adulte}
                        enfant={enfant}
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
    </div>
  );
};
export default ManagerPromotions;
