import React from "react";

const PersonTeam = (props) => {
  return (
    <div>
      <div className="person">
        <figure>
          <img src={props.img} />
        </figure>
        <div className="social">
          <a href="#">
            <span className="facbook">{props.fc}</span>
          </a>
          <a href="#">
            <span className="twitter">{props.tw}</span>
          </a>
          <a href="#">
            <span className="linkedin">{props.li}</span>
          </a>
        </div>
        <div className="info text-center">
          <h3>{props.name}</h3>
          <span>{props.position}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonTeam;
