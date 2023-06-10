import React from "react";
import "./Promotions.css";
import { Header } from "../../sections";
import axios from "axios";
import { useEffect, useState } from "react";
import RowDetailsManagerPromotions from "../../Manager/Pages/managerPromotions/RowDetailsManagerPromotions";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function fetchPromotions() {
      const response = await axios.get("http://localhost:3700/api/promotions");
      setPromotions(response.data);
    }
    fetchPromotions();
  });
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date Debut</th>
                <th scope="col">Date Fin</th>
                <th scope="col">Adulte Promotion </th>
                <th scope="col">Enfant Promotion </th>
              </tr>
            </thead>
            <tbody>
              {promotions.map(
                ({ name, date_debut, date_fin, adulte, enfant, _id }) => (
                  <tr>
                    <td>{name}</td>
                    <td>{date_debut} </td>
                    <td>{date_fin} </td>
                    <td>{adulte} </td>
                    <td>{enfant} </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Promotions;
