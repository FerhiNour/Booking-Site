import React from "react";
import "./Escursioni.css";

import { BsFillGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Escursioni = () => {
  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    async function fetchExcursion() {
      const response = await axios.get("http://localhost:3700/api/excursions");
      setExcursions(response.data);
    }
    fetchExcursion();
  });
  return (
    <>
      <div className="escursioni text-center">
        <h6>Escursioni</h6>
        <h1>Le nostre escursioni</h1>
      </div>
      <div className="container">
        <div className="row">
          {excursions.map(({ photo, name, point_depart, _id }) => (
            <div className="col-4 my-3">
              <div className="card">
                <div className="card-img-top ">
                  <img src={photo} className="w-100 h-100" alt="excursion" />
                  <div className="card-title pt-3" style={{ color: "#003a7e" }}>
                    <h4>
                      <Link to={`/escursioniinbarcasalento/${_id}`}>
                        {name}
                      </Link>
                    </h4>
                  </div>
                  <div className="card-subtitle ">
                    <span style={{ color: "#003a7e" }}>
                      <BsFillGeoAltFill size={20} />
                    </span>

                    <span className="marina">{point_depart}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Escursioni;
