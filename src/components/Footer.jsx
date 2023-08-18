import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Sígueme en redes sociales:</p>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          {/* Agrega más enlaces a tus redes sociales */}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Derechos de autor &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
