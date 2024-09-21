import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo_Inver from '../assets/logo_Inver.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Flexbox for two columns: links and logo */}
      <div className="footer-top">
        
        {/* First Column - Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Services">Our Services</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </div>

        {/* Second Column - Logo */}
        <div className="footer-logo">
          <img src={Logo_Inver} alt="Company Logo" />
        </div>

      </div>

      {/* Flexbox for copyright - full-width row underneath */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} <a href="https://fixbitscr.com/" target="_blank" rel="noopener noreferrer">Fixbitscr</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
