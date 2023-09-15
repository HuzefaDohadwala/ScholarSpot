import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src="path_to_your_logo.png" alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Link to="/resource" className="navbar-link">RESOURCE</Link>
          <Link to="/login">
          <button className="navbar-button">LogIn</button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar;
