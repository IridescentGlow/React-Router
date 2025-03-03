import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/Home" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
