import React from 'react';
import './contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <h2>Contacto</h2>
        <ul>
          <li>
            <img src="./imagenes/whatsapp.jpeg" alt="WhatsApp" />
            <a href="https://api.whatsapp.com/send?phone=+56961457967" target="_blank" rel="noopener noreferrer">
              +569 6145 7967
            </a>
          </li>
          <li>
            <img src="./imagenes/gmail.png" alt="Gmail" />
            <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a>
          </li>
          <li>
            <img src="./imagenes/linkedin.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/tuperfil
            </a>
          </li>
        </ul>
      </div>

      <div className="contacto-formulario">
        <h2>Envíanos un mensaje</h2>
        <form>
          <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="campo">
            <label htmlFor="email">Correo de contacto:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="campo">
            <label htmlFor="comentario">Mensaje:</label>
            <textarea id="comentario" name="comentario" required></textarea>
          </div>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
