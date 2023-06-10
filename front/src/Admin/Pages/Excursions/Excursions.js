import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/Navbar/Navbar";
import InputGroup from "../../Components/InputGroup";
import Alert from "../../Components/Alert";
import RowDetailsExcursions from "./RowDetailsExcursions";

const Excursion = () => {
  const [excursion, setExcursion] = useState([]);
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
      .post("http://localhost:3700/api/excursions", form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => setErrors(err.response.data));
  };
  // delete
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

  // find all boats
  useEffect(() => {
    async function fetchExcursions() {
      const response = await axios.get("http://localhost:3700/api/excursions");
      setExcursion(response.data);
    }
    fetchExcursions();
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
        <div className="row text-center ">
          <h1>Excursions</h1>
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
                for="point_depart"
                label="point_depart"
                InputType="text"
                InputName="point_depart"
                onChangeHandler={onChangeHandler}
                errors={errors.point_depart}
              />
              <InputGroup
                for="duree"
                label="duree"
                InputType="text"
                InputName="duree"
                onChangeHandler={onChangeHandler}
                errors={errors.duree}
              />

              <button className="btn btn-primary" type="submit">
                Add Excursion
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
                  <th scope="col">point_depart</th>
                  <th scope="col">duree</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {excursion.map(
                  ({ photo, name, description, point_depart, duree, _id }) => (
                    <RowDetailsExcursions
                      photo={photo}
                      name={name}
                      description={description}
                      point_depart={point_depart}
                      duree={duree}
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

export default Excursion;
