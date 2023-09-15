import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ScholarSpot from "../Images/ScholarSpot.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={ScholarSpot} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <Link to="/resource" className="navbar-link">
          RESOURCE
        </Link>
        <Link to="/login">
          <button className="navbar-button">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
