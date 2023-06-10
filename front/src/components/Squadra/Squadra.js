import React from "react";
import "./Squadra.css";
import PersonTeam from "../PersonTeam/PersonTeam";
import img from "../../assets/images/avatar-.png";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Squadra = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <h6>Squadra</h6>
          <h2 className="squadra">Il nostro equipaggio</h2>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 team ">
            <PersonTeam
              img={img}
              fc={<BsFacebook size={30} />}
              tw={<BsTwitter size={30} />}
              li={<BsLinkedin size={30} />}
              name="Marco"
              position="Ingegnere"
            />
          </div>
          <div className="col-lg-3 col-md-6 team ">
            <PersonTeam
              img={img}
              fc={<BsFacebook size={30} />}
              tw={<BsTwitter size={30} />}
              li={<BsLinkedin size={30} />}
              name="LUIGI"
              position="Ingegnere"
            />
          </div>
          <div className="col-lg-3 col-md-6 team ">
            <PersonTeam
              img={img}
              fc={<BsFacebook size={30} />}
              tw={<BsTwitter size={30} />}
              li={<BsLinkedin size={30} />}
              name="Craig Daniel"
              position="Ingegnere"
            />
          </div>
          <div className="col-lg-3 col-md-6 team ">
            <PersonTeam
              img={img}
              fc={<BsFacebook size={30} />}
              tw={<BsTwitter size={30} />}
              li={<BsLinkedin size={30} />}
              name="Craig Daniel"
              position="Ingegnere"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Squadra;
