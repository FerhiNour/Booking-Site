import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logoondablu.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer mt-5">
        <div className="row">
          <div className="col">
            <img src={logo} />
            <address className="text-secondary">
              Rione Castromediano, Lecce via Cicerone 6 int. B 73020 - Cavallino
              Lecce - Italie
            </address>
          </div>
          <div className="col">
            <h3>OUR COMPANY</h3>
            <a href="#">Chi siamo</a>
            <a href="#">Notizia</a>
            <a href="#">Servizi</a>
            <a href="#">La nostra squadra</a>
          </div>
          <div className="col">
            <h3>BECOME OUR FAN</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Youtube</a>
          </div>
          <div className="col">
            <h3>CONTACT</h3>
            <a href="#">Politica sulla privacy</a>
            <a href="#">Politica ddei biscotti</a>
            <a href="#">Premere</a>
            <a href="#">FAQ</a>
            <a href="#">I nostri partner</a>
          </div>
        </div>

        <div className="row mt-5">
          <p className="text-center text-secondary">
            Copyright &copy;2023 - Onda Blu Srl - CF / P. IVA 03322360755 - All
            rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
