import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo_Inver from '../assets/logo_Inver.png';

const socialMediaLinks = [
  { href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  { href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { href: 'https://instagram.com', icon: 'fab fa-instagram' },
  { href: 'https://linkedin.com', icon: 'fab fa-linkedin-in' }
];

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo_Inver} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Register">Register</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/Services">Our Services</Link></li>
              <li><Link to="/AboutUs">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-media">
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} <a href="https://fixbitscr.com/" target="_blank" rel="noopener noreferrer">Fixbitscr  </a>- All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
