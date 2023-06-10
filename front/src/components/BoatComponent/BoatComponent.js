import React from "react";
import "./BoatComponent.css";

import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";

import BoatCompoenentForm from "../BoatCompoenentForm/BoatCompoenentForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BoatComponent = () => {
  const [boats, setBoats] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBoats() {
      const response = await axios.get(`http://localhost:3700/api/boats/${id}`);
      setBoats(response.data);
    }
    fetchBoats();
  }, []);

  return (
    <>
      <Header />
      <div
        className="boatComponentbg"
        style={{
          backgroundImage: `url(${boats.photo})`,
        }}
      >
        <div className="text-center">
          <h1> {boats.name} </h1>
        </div>
      </div>
      <div className="container text-center">
        <div className="header">
          <h1>{boats.name}</h1>
        </div>
      </div>

      <div className="container boatComponent  mt-5 mb-5 ">
        <div className="row">
          <div className="col-6">
            <div className=" boatComponentCard  ">
              <div
                className="card d-flex flex-column "
                style={{ width: "35rem" }}
              >
                <img className="card-img-top" src={boats.photo} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">{boats.name}</h4>
                  <h6 className="card-subtitle text-secondary">
                    {boats.nbre_person}
                  </h6>
                  <h6 className="card-hours text-secondary ">{boats.moteur}</h6>
                  <p className="card-text mb-5">{boats.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* boatComponentForm */}
          <BoatCompoenentForm boat={boats.name} />
        </div>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
};

export default BoatComponent;
