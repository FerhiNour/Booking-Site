import React from "react";
import "./TestimonianzaComponent.css";
import img from "../../assets/images/avatar-.png";

const TestimonianzaComponent = (props) => {
  return (
    <>
      <div className="container testimonials">
        <div className="heading">
          <h6 className="text-center">Testimonianza</h6>
          <h3 className="text-black text-center">Cosa dicono i clienti...</h3>
        </div>

        <div className="row">
          <div className="col-md-4 text-center">
            <div className="profile">
              <img src={img} className="user" />
              <blockquote>
                Grazie al consiglio di alcuni amici abbiamo effettuato una
                escursione lungo la costa restando incantati dalle meraviglie
                del Salento e dalla cortesia dello staff, in particolare dal
                titolare Marco.
              </blockquote>
              <h3>
                Vincenzo & Laura<span>Rho</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="profile">
              <img src={img} className="user" />
              <blockquote>
                Grazie al consiglio di alcuni amici abbiamo effettuato una
                escursione lungo la costa restando incantati dalle meraviglie
                del Salento e dalla cortesia dello staff, in particolare dal
                titolare Marco.
              </blockquote>
              <h3>
                Vincenzo & Laura<span>Rho</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="profile">
              <img src={img} className="user" />
              <blockquote>
                Grazie al consiglio di alcuni amici abbiamo effettuato una
                escursione lungo la costa restando incantati dalle meraviglie
                del Salento e dalla cortesia dello staff, in particolare dal
                titolare Marco.
              </blockquote>
              <h3>
                Vincenzo & Laura<span>Rho</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonianzaComponent;
