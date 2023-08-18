import React from 'react';
import './habilidades.css';

const Habilidad = ({ nombre, descripcion, imagenSrc }) => {
  return (
    <div className="habilidad">
      <div className="imagen-container">
        <img src={imagenSrc} alt={nombre} />
        <div className="info-caja">
          <span>{descripcion}</span>
        </div>
      </div>
      <h3>{nombre}</h3>
    </div>
  );
};

const Habilidades = () => {
  const habilidadesData = [
    {
      nombre: 'HTML',
      descripcion: 'Descripción de HTML...',
      imagenSrc: './imagenes/html.png',
    },
    {
      nombre: 'CSS',
      descripcion: 'Descripción de CSS...',
      imagenSrc: './imagenes/css.png',
    },
    {
      nombre: 'JavaScript',
      descripcion: 'Descripción de JavaScript...',
      imagenSrc: './imagenes/javascript.png',
    },
    {
      nombre: 'React',
      descripcion: 'Descripción de React...',
      imagenSrc: './imagenes/react.png',
    },
    {
      nombre: 'Python',
      descripcion: 'Descripción de Python...',
      imagenSrc: './imagenes/python.png',
    },
    {
      nombre: 'Github',
      descripcion: 'Descripción de Github...',
      imagenSrc: './imagenes/github.png',
    },
    {
      nombre: 'MongoDB',
      descripcion: 'Descripción de MongoDB...',
      imagenSrc: './imagenes/mongodb.png',
    },
    {
      nombre: 'MySQL',
      descripcion: 'Descripción de MySQL...',
      imagenSrc: './imagenes/mysql.png',
    },
    {
      nombre: 'Oracle',
      descripcion: 'Descripción de Oracle...',
      imagenSrc: './imagenes/oracle.png',
    },
  ];

  return (
    <div className="habilidades-container">
      <div className="habilidades-grid">
        {habilidadesData.map((habilidad) => (
          <Habilidad
            key={habilidad.nombre}
            nombre={habilidad.nombre}
            descripcion={habilidad.descripcion}
            imagenSrc={habilidad.imagenSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
