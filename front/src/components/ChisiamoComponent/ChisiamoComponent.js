import React from "react";
import "./ChisiamoComponent.css";
import img from "../../assets/images/chisiamoComponent.jpg";

const Chisiamo = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row  ">
          <div className="col-md-6 ">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-md-6 ">
            <span>Chi siamo</span>
            <h1 className="mb-5 chisiamo">
              Siamo Servizi Turistici e Noleggio Barche
            </h1>
            <p>
              Dal 1994 Ondablu fornisce ad aziende e privati ????una vasta gamma
              di servizi con la massima professionalit� e affidabilit , noleggio
              barche, gite in barca, noleggio veicoli o anche trasporto via
              acqua, ondablu e il tuo perfetto contatto. Mettiamo a tua
              disposizione un'ampia variet� di barche e gommoni in affitto per
              tutti i tipi di attivit . Ci ha trovato a Castro Marina. Puoi
              decidere di fare escursioni lungo la costa salentina, dedicarti a
              diving, visite alle grotte salentine o semplici mini-crociere. In
              breve, sarai tu a decidere come utilizzare al meglio le nostre
              barche.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chisiamo;
