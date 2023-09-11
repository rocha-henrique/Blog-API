import React from "react";
import '../Css/Navbar.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar () {
  return (
    <nav className="navbar">
      <Link to='/'> Home </Link>
      <Link> Comments </Link>
      <Link> Albums </Link>
      <Link> Photos </Link>
      <Link> Todos </Link>
      <Link> Users </Link>
    </nav>
  );
}

export default Navbar;
