import React from "react";
import "./EscursioneComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";
import InputGroup from "../../Admin/Components/InputGroup";
import Alert from "../../Admin/Components/Alert";
import { useParams } from "react-router-dom";

const EscursioneComponent = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [excursions, setExcursions] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBoats() {
      const response = await axios.get(
        `http://localhost:3700/api/excursions/${id}`
      );
      setExcursions(response.data);
    }
    fetchBoats();
  }, []);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      name_excursion: excursions.name,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3700/api/reservationsExcursions", form)
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
      <Header />
      <div
        className="escursioneComponentbg"
        style={{
          backgroundImage: `url(${excursions.photo})`,
        }}
      >
        <div className="text-center">
          <h1> {excursions.name} </h1>
        </div>
      </div>
      <div className="container text-center ">
        <div className="header my-5">
          <h1>{excursions.name}</h1>
        </div>
      </div>

      <div className="container escursioneComponent d-flex mt-5 mb-5 justify-content-between">
        <div className="row">
          <div className="col">
            <div className=" escursioneComponentCard  ">
              <div
                className="card d-flex flex-column "
                style={{ width: "35rem" }}
              >
                <img
                  className="card-img-top"
                  src={excursions.photo}
                  alt="Card "
                />
                <div className="card-body">
                  <h4 className="card-title">{excursions.name}</h4>
                  <h6 className="card-subtitle text-secondary">
                    {excursions.point_depart}
                  </h6>
                  <h6 className="card-hours text-secondary ">
                    {excursions.duree}
                  </h6>
                  <p className="card-text mb-5">{excursions.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* escursioneComponentForm */}

          <div className="escursioneComponentForm col">
            <form onSubmit={onSubmitHandler}>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
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
                  <div className="col-6">
                    <div class="form-group">
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
                  <div className="col-6">
                    <div class="form-group">
                      <InputGroup
                        for="nbre_enfant"
                        label="nbre_enfant"
                        InputType="number"
                        InputName="nbre_enfant"
                        onChangeHandler={onChangeHandler}
                        errors={errors.nbre_enfant}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
                      <InputGroup
                        for="nbre_adulte"
                        label="nbre_adulte"
                        InputType="number"
                        InputName="nbre_adulte"
                        onChangeHandler={onChangeHandler}
                        errors={errors.nbre_adulte}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <InputGroup
                        for="name_client"
                        label="name_client"
                        InputType="text"
                        InputName="name_client"
                        onChangeHandler={onChangeHandler}
                        errors={errors.name_client}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
                      <InputGroup
                        for="email_client"
                        label="email_client"
                        InputType="text"
                        InputName="email_client"
                        onChangeHandler={onChangeHandler}
                        errors={errors.email_client}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
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
                  <div class="form-group">
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

                <button
                  type="submit"
                  class="btn"
                  style={{ backgroundColor: "#003a7e", color: "white" }}
                >
                  Prenota Ora
                </button>
              </div>
            </form>
            <Alert message={message} show={show} />
          </div>
        </div>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
};

export default EscursioneComponent;
