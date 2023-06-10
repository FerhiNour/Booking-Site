import React from "react";
import "./NoleggioDiBarcheCard.css";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

const NoleggioDiBarcheCard = ({ img, title, text, number, id }) => {
  return (
    <>
      <div className="container mt-5 NoleggioDiBarcheCard">
        <div className="row mb-3">
          <div className="col-4">
            <div className="card" style={{ width: "20rem", height: "30rem" }}>
              <img
                className="card-img-top"
                src={img}
                alt="Card"
                style={{ height: "50%" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/noleggiodibarche/${id}`}>{title}</Link>
                </h5>
                <p className="card-text text-secondary">{text}</p>
                <p>
                  <AiOutlineTeam size={25} color="#003a7e" />{" "}
                  <span className="text-secondary">{number} persons</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoleggioDiBarcheCard;
