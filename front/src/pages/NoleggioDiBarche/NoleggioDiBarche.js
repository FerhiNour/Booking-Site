import React from "react";
import "./NoleggioDiBarche.css";
import Header from "../../sections/Header/Header";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../sections/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

import NoleggioDiBarcheCard from "../../components/NoleggioDiBarcheCard/NoleggioDiBarcheCard";

const NoleggioDiBarche = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    async function fetchBoats() {
      const response = await axios.get("http://localhost:3700/api/boats");
      setBoats(response.data);
    }
    fetchBoats();
  });
  return (
    <>
      <Header />
      <div className="NoleggioDiBarche mb-5">
        <div className="text-center">
          <h1>Scopri la costa salentina</h1>
          <h5>Noleggio barche al miglior prezzo</h5>
          <p>
            Vi sveleremo i meravigliosi paesaggi del Salento, il mare
            cristallino e l'affascinante costa di questa zona
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row header text-center">
          <p style={{ color: "#003a7e" }}>Noleggio barche</p>
          <h3>Noleggio barche e gommoni a Castro/Salento</h3>
        </div>
        <div className="row">
          {/* <div className="col-4"> */}
          {boats.map(({ photo, name, description, nbre_person, _id }) => (
            <div className="col-4">
              <NoleggioDiBarcheCard
                img={photo}
                title={name}
                text={description}
                number={nbre_person}
                id={_id}
              />
            </div>
          ))}
        </div>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
};

export default NoleggioDiBarche;
