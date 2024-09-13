
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'; 

function Navbar() {
  return (
  <div>
  <div>
    <div className="th"> <h2>FIXBITSCR  </h2></div>
  <div/>
    <div><nav>
      <br /> 
        <ul className="navbarx">
          <br />
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Let's Talk</Link>
        </ul>
      </nav>
    </div>
    </div>
  </div>
  );
}

export default Navbar;
