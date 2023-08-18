import React from 'react';
import Proyecto from './proyectos';
import './body.css';
import Habilidades from './habilidades';
import Contacto from './contacto';

const proyectosData = [
  {
    id: 1,
    img: 'ruta-de-imagen-1.png',
    titulo: 'Portafolio WEB',
    descripcion: 'El proyecto LO ESTAMOS VIENDO... Esta pagina web esta creada con React',
    lengProgramacion: ['JavaScript', 'React', 'HTML', 'CSS'],
  },
  {
    id: 2,
    img: 'ruta-de-imagen-2.png',
    titulo: 'Proyecto 2',
    descripcion: 'Descripción del Proyecto 2...',
    lengProgramacion: ['Python', 'Django', 'PostgreSQL'],
  },
  // Agrega más proyectos aquí...
];

const Body = () => {
  return (
    <div className="body-container">
      <section className="about-me-section">
        <h2>Sobre mí</h2>
        <p>
          Hola, mi nombre es Franco Cea. Soy estudiante de Ingeniería Informática y me especializo en el desarrollo web.
          Mi objetivo es sumergirme en el sector Tech para adquirir conocimientos y crecer profesionalmente.
        </p>
        <p>
          Soy una persona sociable, amigable y un buen líder en el trabajo en equipo. Ante los problemas, busco la solución óptima para superar los contratiempos.
        </p>
      </section>

      <section className="projects-section">
        <h2>Proyectos</h2>
        <div className="projects-container">
          {proyectosData.map((proyecto) => (
            <Proyecto
              key={proyecto.id}
              img={proyecto.img}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              lengProgramacion={proyecto.lengProgramacion}
            />
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2>Experiencia</h2>
        <p>
          Actualmente, no tengo experiencia laboral como desarrollador o DevOps, pero quiero destacar mi dedicación y pasión por la tecnología. Soy estudiante de Ingeniería Informática en la Universidad INACAP con sede en Osorno, una institución que se destaca por su enfoque práctico y lógico del desarrollo.
        </p>
        <div className="university-logo">
          <img src=".\imagenes\inacap.png" alt="Logo Universidad" />
          <p>
            Durante mis estudios, he adquirido habilidades en diversas áreas de la informática, incluyendo programación, desarrollo web y conceptos fundamentales de la tecnología. He trabajado en proyectos académicos desafiantes que me han permitido aplicar mis conocimientos en la práctica y trabajar en equipo con otros estudiantes.
          </p>
        </div>
        <p>
          Mi enfoque principal es seguir creciendo como profesional y aplicar mis habilidades y conocimientos en proyectos futuros. Estoy emocionado por las oportunidades que me esperan en el campo de la tecnología y estoy comprometido a seguir aprendiendo y mejorando mis habilidades para contribuir al desarrollo de soluciones innovadoras.
        </p>
        <p>
          Agradezco la oportunidad de compartir mi pasión por la informática y estoy ansioso por embarcarme en una carrera en la industria tecnológica.
        </p>
      </section>

      <section className="skills-section">
        <h2>Habilidades</h2>
        <Habilidades />
      </section>

      <section className="contact-section">
        <Contacto />
      </section>
    </div>
  );
};

export default Body;
