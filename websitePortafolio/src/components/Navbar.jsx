import React, { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect desde 'react'
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación
import '../styles/Navbar.css'; // Importa el archivo de estilos CSS para el componente

function Navbar() {
  // Definición de estados usando useState
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para gestionar si el menú está abierto o cerrado
  const [isScrolled, setIsScrolled] = useState(false); // Estado para gestionar el cambio de fondo del navbar al hacer scroll

  // Función para alternar el estado del menú en vista móvil
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Cambia el estado del menú (abierto/cerrado)
  };

  // Función para manejar el evento de scroll y cambiar el color del fondo del navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Si se ha hecho scroll más de 50px, establece el estado como scrolled
    } else {
      setIsScrolled(false); // Si no, establece el estado como no scrolled
    }
  };

  // useEffect para añadir y limpiar el event listener del scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Añade el listener para el evento de scroll
    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpia el listener cuando el componente se desmonte
    };
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar y desmontar el componente

  // Determina las clases CSS a aplicar basándose en el estado
  const navbarClass = isScrolled ? 'NavbarM scrolled' : 'NavbarM'; // Aplica la clase 'scrolled' si se ha hecho scroll
  const navbaryClass = isMenuOpen ? 'navbary open' : 'navbary'; // Aplica la clase 'open' si el menú está abierto

  return (
    <div className={navbarClass}> {/* Contenedor principal del navbar */}
      <div className="th">
        <Link to="/" className="nav-link">FIXBITSCR</Link> {/* Enlace a la página principal */}
      </div>
      <nav>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰ {/* Icono de menú para dispositivos móviles */}
        </button>
        <ul className={navbaryClass}> {/* Lista de enlaces del menú */}
          <Link to="/services" className="nav-link">Services</Link> {/* Enlace a la página de servicios */}
          <Link to="/aboutus" className="nav-link">About Us</Link> {/* Enlace a la página sobre nosotros */}
          <Link to="/contact" className="nav-link">Let's Talk</Link> {/* Enlace a la página de contacto */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar; // Exporta el componente Navbar
