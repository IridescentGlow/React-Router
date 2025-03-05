import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import "./styles/Navbar.module.css";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState("#333");
  const [textColor, setTextColor] = useState("#fff");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "green" : "dark");
    setBgColor(bgColor === "#333" ? "#228B22" : "#333");
    setTextColor(textColor === "#fff" ? "#000" : "#fff");
  };

  return (
    <>
      <div className="nav-bar" style={{ backgroundColor: bgColor, background: bgColor, fontColor: textColor }}>
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
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button>
          <br />
          <h1>Current Theme: {theme}</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
