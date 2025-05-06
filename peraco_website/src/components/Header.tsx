import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { FaBars, FaTimes } from 'react-icons/fa'; // Íconos de hamburguesa y cerrar
const logo= require ('../assests/images/logo_horizontal.png');

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/peraco_website">
        <img src={logo as string} alt="Logo de Peraco" className="logo" />
      </Link>

      {/* Ícono de hamburguesa (solo en móviles) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú de navegación */}
      <nav className={isMenuOpen ? 'nav-active' : ''}>
        <Link to="/peraco_website" onClick={toggleMenu}><h3>Inicio</h3></Link>
        <Link to="/about" onClick={toggleMenu}><h3>Sobre Nosotros</h3></Link>
        <Link to="/services" onClick={toggleMenu}><h3>Servicios</h3></Link>
        <Link to="/news" onClick={toggleMenu}><h3>Noticias</h3></Link>
        <Link to="/contact" onClick={toggleMenu}><h3>Contacto</h3></Link>
      </nav>
    </header>
  );
};


export default Header;