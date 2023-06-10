import React from "react";
import "./Servizi.css";

import Header from "../../sections/Header/Header";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../sections/Footer/Footer";
import Advantages from "../../components/Advantages/Advantages";
import ServiziCard from "../../components/ServiziCard/ServiziCard";
import TestimonianzaComponent from "../../components/TestimonianzaComponent/TestimonianzaComponent";

import img1 from "../../assets/images/servizi1.jpg";
import img2 from "../../assets/images/servizi2.jpg";
import img3 from "../../assets/images/servizi3.jpg";
import { Link } from "react-router-dom";

const Servizi = () => {
  return (
    <>
      <Header />
      <div className="servizi">
        <div className="text-center">
          <h1>About OndaBlu</h1>
          <p>
            The company is now present, for over 20 years, in various sectors
            concerning services for tourism in Salento and beyond.
          </p>
          <Link className="btn" to="/contatti">
            Contact
          </Link>
        </div>
      </div>
      <Advantages />
      <div className="serviziSection text-center">
        <h6>Servizi</h6>
        <h2>Services for tourism in Salento</h2>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-4">
            <ServiziCard
              img={img1}
              title="Noleggio auto, bus e scooter"
              text="Noleggio auto, minibus, pullman e scooter nel Salento
            Servizio noleggio auto, minibus 9 posti e furgoni Lecce e servizio taxi a condizioni e prezzi vantaggiosi"
            />
          </div>
          <div className="col-4">
            <ServiziCard
              img={img2}
              title="Barca e trasporti eccezionali, noleggio gru"
              text="Effettuiamo qualsiasi tipo di trasporto nautico eccezionale.
            Possibilit� concessa grazie ai veicoli attrezzato in questo settore che Onda Blu pu� vantare di possedere e, grazie al quale, � in grado di soddisfare un ampio target di clientela: dagli utenti privati ??agli operatori del settore, fino ai cantieri navali."
            />
          </div>
          <div className="col-4">
            <ServiziCard
              img={img3}
              title="Escursioni in barca costa salentina"
              text="Organizziamo meravigliose escursioni lungo la costa salentina da Castro offrendo la possibilit� di fare un tuffo nelle sue acque cristalline.
            Scegli una delle nostre gite in mare in barca, potrai scoprire le pi� rinomate Grotte del Salento, alcuni dei borghi salentini pi� affascinanti (Otranto, Santa Maria di Leuca, ...) oppure puoi decidere tu il percorso."
            />
          </div>
        </div>
      </div>
      <TestimonianzaComponent />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Servizi;
