import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div>
    <footer className="footer">
    <p className='copyright'>
      {currentYear} &copy;<a href="https://fixbitscr.com/" target="_blank" rel="noopener noreferrer">Fixbitscr</a>-  All rights reserved -
      </p>
</footer>  
      
      </div>
  );
};

export default Footer;
