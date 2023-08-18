import React from 'react';

const Proyecto = ({ img, titulo, descripcion, lengProgramacion }) => {
  return (
    <div className="proyecto">
      <div className="imagen">
        <img src={img} alt={titulo} />
      </div>
      <div className="informacion">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <div className="lenguajes">
          {lengProgramacion.map((lenguaje) => (
            <img key={lenguaje} src={`./imagenes/${lenguaje}.png`} alt={lenguaje} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
