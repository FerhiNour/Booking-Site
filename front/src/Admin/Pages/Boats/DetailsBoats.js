import React from "react";
import InputGroup from "../../Components/InputGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailsBoats = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3700/api/boats/${id}`, form)
      .then((res) => {
        navigate("/admin/boats");
      })

      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    async function fetchBoats() {
      const response = await axios.get(`http://localhost:3700/api/boats/${id}`);
      setForm(response.data);
    }
    fetchBoats();
  }, []);
  return (
    <div className="container mt-5 col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          for="photo"
          label="Photo"
          InputType="text"
          InputName="photo"
          onChangeHandler={onChangeHandler}
          errors={errors.photo}
          value={form.photo}
        />
        <InputGroup
          for="name"
          label="Name"
          InputType="text"
          InputName="name"
          onChangeHandler={onChangeHandler}
          errors={errors.name}
          value={form.name}
        />
        <InputGroup
          for="description"
          label="Description"
          InputType="text"
          InputName="description"
          onChangeHandler={onChangeHandler}
          errors={errors.description}
          value={form.description}
        />
        <InputGroup
          for="nbre_person"
          label="Number of Person"
          InputType="number"
          InputName="nbre_person"
          onChangeHandler={onChangeHandler}
          errors={errors.nbre_person}
          value={form.nbre_person}
        />
        <InputGroup
          for="moteur"
          label="Moteur"
          InputType="text"
          InputName="moteur"
          onChangeHandler={onChangeHandler}
          errors={errors.moteur}
          value={form.moteur}
        />

        <button className="btn btn-primary" type="submit">
          Update Boat
        </button>
      </form>
    </div>
  );
};

export default DetailsBoats;
