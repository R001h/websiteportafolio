
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
