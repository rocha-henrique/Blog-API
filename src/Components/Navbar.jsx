import React from "react";
import '../Css/Navbar.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <Link to='/' className="navbar-logo">
        <h1>Blog-API</h1>
      </Link>
    </nav>
  );
}

export default Navbar;