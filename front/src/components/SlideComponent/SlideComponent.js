import React from "react";
import "./SlideComponent.css";
import slide1 from "../../assets/images/sea1.jpg";
import slide2 from "../../assets/images/sea2.jpg";
import slide3 from "../../assets/images/sea3.jpg";
import { Link } from "react-router-dom";

const SlideComponent = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item c-item active ">
            <img src={slide1} className="d-block w-100 c-img" alt="slide1" />
            <div className="carousel-caption  d-none d-md-block">
              <h1>Noleggio barche e passione per il mare</h1>
              <p>
                Abbiamo barche esclusive per clienti esclusivi con Offerte
                Charter
              </p>
              <p>
                <Link
                  to="/escursioniinbarcasalento"
                  className="btn btn-primary"
                >
                  Prenota le escursioni
                </Link>
                <Link to="/noleggiodibarche" className="btn btn-info">
                  Prenota barche
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={slide2} className="d-block w-100 c-img" alt="slide2" />
            <div className="carousel-caption  d-none d-md-block">
              <h1>Esplora, Scopri </h1>
              <p>
                Offriamo una lussuosa esperienza di divertimento e avventura
              </p>
              <p>
                <Link
                  to="/escursioniinbarcasalento"
                  className="btn btn-primary"
                >
                  Prenota le escursioni
                </Link>
                <Link to="/noleggiodibarche" className="btn btn-info">
                  Prenota barche
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={slide3} className="d-block w-100 c-img" alt="slide3" />
            <div className="carousel-caption  d-none d-md-block">
              <h1>Goditi le nostre destinazioni con la tua famiglia </h1>
              <p>Migliore collezione di barche con ritiro di lusso gratuito</p>
              <p>
                <Link
                  to="/escursioniinbarcasalento"
                  className="btn btn-primary"
                >
                  Prenota le escursioni
                </Link>
                <Link to="/noleggiodibarche" className="btn btn-info">
                  Prenota barche
                </Link>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SlideComponent;
