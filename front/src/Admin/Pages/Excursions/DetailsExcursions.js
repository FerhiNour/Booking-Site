import React from "react";
import InputGroup from "../../Components/InputGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailsExcursions = (props) => {
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
      .put(`http://localhost:3700/api/excursions/${id}`, form)
      .then((res) => {
        navigate("/admin/excursions");
      })

      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    async function fetchExcursions() {
      const response = await axios.get(
        `http://localhost:3700/api/excursions/${id}`
      );
      setForm(response.data);
    }
    fetchExcursions();
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
          for="point_depart"
          label="point_depart"
          InputType="text"
          InputName="point_depart"
          onChangeHandler={onChangeHandler}
          errors={errors.point_depart}
          value={form.point_depart}
        />
        <InputGroup
          for="duree"
          label="duree"
          InputType="text"
          InputName="duree"
          onChangeHandler={onChangeHandler}
          errors={errors.duree}
          value={form.duree}
        />

        <button className="btn btn-primary" type="submit">
          Update Boat
        </button>
      </form>
    </div>
  );
};

export default DetailsExcursions;
