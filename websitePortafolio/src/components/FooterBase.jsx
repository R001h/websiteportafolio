import React from 'react';
import '../styles/Footer.css';
import Logo_Inver from '../assets/logo_Inver.png';

const FooterBase = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo_Inver} alt="Logo" />
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} <a href="https://fixbitscr.com/" target="_blank" rel="noopener noreferrer">Fixbitscr <br></br> </a> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterBase;
