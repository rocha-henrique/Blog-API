import React from "react";
import '../Css/Navbar.css';
import logo from "../images/triibo-logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <img src={logo} alt="logo" />
      <Link to='/'>
        <button type="button" className="btn btn-primary">Home</button>
      </Link>
    </nav>
  );
}

export default Navbar;