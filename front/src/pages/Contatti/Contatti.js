import React from "react";
import "./Contatti.css";
import axios from "axios";
import { useState } from "react";

import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import { BsFillGeoAltFill } from "react-icons/bs";

import InputGroup from "../../Admin/Components/InputGroup";
import Alert from "../../Admin/Components/Alert";

const Contatti = () => {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});

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
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-between mt-5">
        <div className="Contattaci">
          <h6 style={{ color: "#003a7e" }}>Contattaci</h6>
          <h3>Lasciaci un messaggio</h3>

          <form onSubmit={onSubmitHandler} className="mt-5">
            <InputGroup
              for="name"
              label="Nome"
              InputType="text"
              InputName="name"
              onChangeHandler={onChangeHandler}
              errors={errors.name}
            />
            <InputGroup
              for="email"
              label="Indirizzo email"
              InputType="email"
              InputName="email"
              onChangeHandler={onChangeHandler}
              errors={errors.email}
            />
            <InputGroup
              for="tel"
              label="Numero di telefono"
              InputType="number"
              InputName="tel"
              onChangeHandler={onChangeHandler}
              errors={errors.tel}
            />
            <InputGroup
              for="content"
              label="Messaggio"
              InputType="text"
              InputName="content"
              onChangeHandler={onChangeHandler}
              errors={errors.content}
            />

            {/* <form className="mt-5">
            <div className="row mb-2">
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Nome</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="Nome"
                    name="name"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="exampleInputPassword1">Nome</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="Nome1"
                  />
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-6">
                <div className="form-group">
                  <label for="email">Indirizzo email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="number">Numero di telefono</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="number"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Messaggio</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                  ></textarea>
                </div>
              </div>
            </div>
          </form> */}
            <button
              type="submit"
              className="btn mt-3"
              style={{ backgroundColor: "#003a7e", color: "white" }}
            >
              Send Message
            </button>
          </form>
          <Alert message={message} show={show} />
        </div>
        <div className="trovaci">
          <h6 style={{ color: "#003a7e" }}>trovaci</h6>
          <h3>I nostri indirizzi. Dove siamo</h3>
          <div className="container mt-5">
            <div className="row">
              <div className="col d-flex ">
                <span className="bs">
                  <BsFillGeoAltFill
                    size={20}
                    color="#003a7e"
                    className="mx-3"
                  />
                </span>
                <p>
                  Via Scalo delle barche (zona porto vecchio).
                  <br />
                  73030 Castro (Lecce)
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex ">
                <span className="bs">
                  <BsFillGeoAltFill
                    size={20}
                    color="#003a7e"
                    className="mx-3"
                  />
                </span>
                <p>
                  Via Cicerone 6/int.B
                  <br />
                  73020 Cavallino – rione Castromediano (Lecce)
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex ">
                <span className="bs">
                  <BsFillGeoAltFill
                    size={20}
                    color="#003a7e"
                    className="mx-3"
                  />
                </span>
                <p>
                  Viale Europa (zona portuale)
                  <br />
                  73032 Andrano Marina (Lecce)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contatti;
