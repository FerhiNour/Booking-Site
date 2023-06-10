import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MdDirectionsBoatFilled,
  MdCheckCircleOutline,
  MdOutlineTravelExplore,
  MdOutlineMessage,
} from "react-icons/md";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Logout } from "../../../redux/actions/authActions";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  };

  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(Logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin">
          <i className="fs-4 bi bi-speedometer"></i>
          <span className="ms-1 fs-3">Admin</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <MdCheckCircleOutline size={25} />
                <span className="ms-2 d-none d-md-inline">Reservation</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/boats" className="nav-link">
                <MdDirectionsBoatFilled size={25} />
                <span className="ms-2 d-none d-md-inline">boats</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/excursions" className="nav-link">
                <MdOutlineTravelExplore size={25} />
                <span className="ms-2 d-none d-md-inline">Excursions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/messages" className="nav-link">
                <MdOutlineMessage size={25} />
                <span className="ms-2 d-none d-md-inline">Messages</span>
              </Link>
            </li>

            {!user.isConnected ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <span className="me-2">
                      <FaUser size={20} />
                    </span>
                    <span>Login</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={LogoutHandler}>
                    <span className="me-2">
                      <FaSignOutAlt size={20} />
                    </span>
                    <span>Logout</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
