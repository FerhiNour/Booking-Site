import React from "react";
import "./Chisiamo.css";
import Header from "../../sections/Header/Header";
import ChisiamoComponent from "../../components/ChisiamoComponent/ChisiamoComponent";
import YellowComponent from "../../components/YellowComponent/YellowCpmponent";
import Squadra from "../../components/Squadra/Squadra";
import TestimonianzaComponent from "../../components/TestimonianzaComponent/TestimonianzaComponent";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../sections/Footer/Footer";
import { Link } from "react-router-dom";

const Chisiamo = () => {
  return (
    <>
      <Header />
      <div className="chi ">
        <div className="text-center text-white mb-5">
          <h1>A proposito di OndaBlu</h1>
          <p>
            L'azienda � oggi presente, da oltre 20 anni, in diversi settori
            riguardanti i <br /> servizi per il turismo nel Salento e non solo.
          </p>
          <Link className="btn" to="/contatti">
            CONTATTI
          </Link>
        </div>
      </div>
      <ChisiamoComponent />
      <YellowComponent />
      <Squadra />
      <TestimonianzaComponent />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Chisiamo;
