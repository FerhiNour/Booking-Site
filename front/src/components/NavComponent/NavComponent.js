import React from "react";
import "./NavComponent.css";
import { Link, NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md justify-content-end mt-3 py-3">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink to="/" activeClassName="active" className="nav-link ">
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/chisiamo"
                  activeClassName="active"
                  className="nav-link"
                >
                  Chi Siamo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/noleggiodibarche"
                  activeClassName="active"
                  className="nav-link"
                >
                  Noleggio di Barche
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/escursioniinbarcasalento"
                  activeClassName="active"
                  className="nav-link"
                >
                  Escursioni in Barca Salento
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/servizi"
                  activeClassName="active"
                  className="nav-link"
                >
                  Servizi
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/contatti"
                  activeClassName="active"
                  className="nav-link "
                >
                  Contatti
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/promotions"
                  activeClassName="active"
                  className="nav-link "
                >
                  Promotions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComponent;
