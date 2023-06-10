import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/Navbar/Navbar";
import InputGroup from "../../Components/InputGroup";
import Alert from "../../Components/Alert";
import RowDetailsBoats from "./RowDetailsBoats";

const Boats = () => {
  const [boats, setBoats] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3700/api/boats", form)
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
      const response = await axios.get("http://localhost:3700/api/boats");
      setBoats(response.data);
    }
    fetchBoats();
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
          <h1>Boats</h1>
          <div className="col-12 col-lg-4">
            <form onSubmit={onSubmitHandler}>
              <InputGroup
                for="photo"
                label="Photo"
                InputType="text"
                InputName="photo"
                onChangeHandler={onChangeHandler}
                errors={errors.photo}
              />
              <InputGroup
                for="name"
                label="Name"
                InputType="text"
                InputName="name"
                onChangeHandler={onChangeHandler}
                errors={errors.name}
              />
              <InputGroup
                for="description"
                label="Description"
                InputType="text"
                InputName="description"
                onChangeHandler={onChangeHandler}
                errors={errors.description}
              />
              <InputGroup
                for="nbre_person"
                label="Number of Person"
                InputType="number"
                InputName="nbre_person"
                onChangeHandler={onChangeHandler}
                errors={errors.nbre_person}
              />
              <InputGroup
                for="moteur"
                label="Moteur"
                InputType="text"
                InputName="moteur"
                onChangeHandler={onChangeHandler}
                errors={errors.moteur}
              />

              <button className="btn btn-primary" type="submit">
                Add Boat
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Number of Person</th>
                  <th scope="col">Moteur</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {boats.map(
                  ({ photo, name, description, nbre_person, moteur, _id }) => (
                    <RowDetailsBoats
                      photo={photo}
                      name={name}
                      description={description}
                      nbre_person={nbre_person}
                      moteur={moteur}
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

export default Boats;
