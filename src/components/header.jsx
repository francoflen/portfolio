import React from 'react';
import './Header.css';

const Header = () => {
  const cvUrl = 'https://example.com/mi-cv.pdf';

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="images/logo.png" alt="Logo Personal" />
      </div>

      {/* Nombre */}
      <h1>Franco Cea</h1>

      {/* Navegación */}
      <nav className="navigation">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Descargar CV */}
      <div className="download-cv">
        <a href={cvUrl} download="Franco_Cea_CV.pdf" className="download-btn">
          Descargar CV
        </a>
      </div>
    </header>
  );
};

export default Header;
