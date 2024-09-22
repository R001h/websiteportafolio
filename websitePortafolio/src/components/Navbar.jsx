import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Handle scroll event to change navbar background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine CSS classes based on state
  const navbarClass = isScrolled ? 'NavbarM scrolled' : 'NavbarM';
  const navbaryClass = isMenuOpen ? 'navbary open' : 'navbary';

  return (
    <div className={navbarClass}>
      <div className="th">
        <Link to="/" className="nav-link">FIXBITSCR</Link>
      </div>
      <nav>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={navbaryClass}>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Let's Talk</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
