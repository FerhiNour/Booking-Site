import React from "react";

const ServiziCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="card" style={{ width: "20rem", height: "30rem" }}>
            <img
              className="card-img-top"
              src={props.img}
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title" style={{color:"#003a7e"}}>{props.title}</h5>
              <p className="card-text text-secondary">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiziCard;
