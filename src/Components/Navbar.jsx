import React from "react";
import '../Css/Navbar.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <Link to='/'>
        <h1 className="navbar-logo">Blog-API</h1>
      </Link>
    </nav>
  );
}

export default Navbar;