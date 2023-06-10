import React from "react";
import InputGroup from "../../../Admin/Components/InputGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailsManagerPromotions = () => {
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
      .put(`http://localhost:3700/api/promotions/${id}`, form)
      .then((res) => {
        navigate("/manager/promotions");
      })

      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    async function fetchPromotions() {
      const response = await axios.get(
        `http://localhost:3700/api/promotions/${id}`
      );
      setForm(response.data);
    }
    fetchPromotions();
  }, []);
  return (
    <div className="container col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
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
          for="date_debut"
          label="date_debut"
          InputType="text"
          InputName="date_debut"
          onChangeHandler={onChangeHandler}
          errors={errors.date_debut}
          value={form.date_debut}
        />
        <InputGroup
          for="date_fin"
          label="date_fin"
          InputType="text"
          InputName="date_fin"
          onChangeHandler={onChangeHandler}
          errors={errors.date_fin}
          value={form.date_fin}
        />
        <InputGroup
          for="adulte"
          label="adulte"
          InputType="text"
          InputName="adulte"
          onChangeHandler={onChangeHandler}
          errors={errors.adulte}
          value={form.adulte}
        />
        <InputGroup
          for="enfant"
          label="enfant"
          InputType="text"
          InputName="enfant"
          onChangeHandler={onChangeHandler}
          errors={errors.enfant}
          value={form.enfant}
        />

        <button className="btn btn-primary" type="submit">
          update Promotion
        </button>
      </form>
    </div>
  );
};

export default DetailsManagerPromotions;
