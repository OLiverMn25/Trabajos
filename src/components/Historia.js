import React from 'react';
import Oliver from '../img/Oliver.png'
import './Historia.css'; // Importa tu archivo de estilos CSS

const Historia = () => {
  return (
    <div>
      <h1 className="titulo">Mi primera pagina web</h1>

      <div className="container">
        <hr className="linea" />

        <div className="img-container">
          <img src={Oliver} className="img-thumbnail" alt="Yop" width="285" />
          <blockquote className="blockquote">
            <p>"Lo tengo todo aunque no tenga nada".</p>
          </blockquote>
          <figcaption className="blockquote-footer">Oliver Bermeo <cite title="Source Title"></cite></figcaption>
        </div>

        <div className="blockquote-container education-section">
          <h3>Perfil</h3>
          <p>Mi nombre es Oliver Bermeo, tengo 21 años de edad y vivo en la provincia de "El Oro", exactamente en el cantón El Guabo, un cantón muy bonito y tranquilo caracterizado por gente amable y tranquila, tratando más de mí, me considero un chico tranquilo, tímido, amable y sobre todo respetuoso, me gusta pasar tiempo en lo que me apasiona en tocar batería, guitarra en el bajo eléctrico, piano y también cantar, en mi vida como estudiante pues actualmente estudiante de la carrera de Tecnologías de la Información con experiencia en el campo de mantenimiento de ordenadores y familiarizado con programas de ofimática. Me considero una persona que se adapta en cualquier situación con los valores apropiados y destrezas necesarias para dar solución o brindar apoyo.</p>
          <hr className="linea" />
          <p>Algunos datos interesantes de mí, son mis estudios culminados y muchas cosas, así que las dejaré aquí abajo, para que sepan que también he tenido logros.</p>

          <h3><span>Educación</span></h3>
          <div className="block-with-border">
            <h4>Escuela General Manuel Serrano Renda 2007-2014</h4>
          </div>
          <div className="block-with-border">
            <h4>Universidad Técnica de Machala 2020- Actualidad</h4>
          </div>
          <div className="block-with-border">
            <h4>Colegio de Bachillerato EL ORO 2014-2020</h4>
          </div>

          <h3><span>Experiencia Laboral</span></h3>
          <div className="block-with-border">
            <h4>Taller Automotriz Bermeo (2020-2022)</h4>
            <p>Mantenimiento y reparación vehicular</p>
          </div>
        </div>
      </div>

      <footer>© 2023 Mi Sitio Web | Todos los derechos reservados a Oliver Bermeo</footer>
    </div>
  );
}

export default Historia;
