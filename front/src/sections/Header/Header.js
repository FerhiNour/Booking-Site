import React from "react";
import "./Header.css";
import logo from "../../assets/images/logoondablu.png";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

import IconComponent from "../../components/IconComponent/IconComponent";
import Navbar from "../../components/NavComponent/NavComponent";

const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row align-items-center mt-1">
          <div className="col-4 text-center col-lg-3    ">
            <img src={logo} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-3  d-lg-block     ">
            <IconComponent
              icon={<BsFillGeoAltFill size={30} />}
              title1="Via Scalo delle Barche"
              body="Castro Marina (LE)"
            />
          </div>

          <div className="col-lg-3  d-lg-block  ">
            <IconComponent
              icon={<BsFillEnvelopeFill size={30} />}
              title1="ondablusrl@gmail.com"
              body="Gournadi, 1230 Bariasl"
            />
          </div>

          <div className="col-lg-3  d-lg-block   ">
            <IconComponent
              icon={<BsFillTelephoneFill size={30} />}
              title1="+39 340 472 5317"
              title2="+39 329 313 7519"
              body="MARCO / LUIGI"
            />
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
