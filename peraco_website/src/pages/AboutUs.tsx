import React from 'react';
 // Importa los estilos específicos para AboutUs

const AboutUs = () => {
  return (
    <section className="about-us">
      <h1>Sobre Nosotros</h1>

      {/* Misión */}
      <div className="about-section mission">
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/87/ee/3f/87ee3fc9c55da51904018b91e045df75.jpg" alt="Misión" />
        </div>
        <div className="about-text">
          <h2>Misión</h2>
          <p>
            Nuestra misión es ofrecer productos frescos y locales, cultivados con técnicas sostenibles y respetuosas con el medio ambiente. Trabajamos con agricultores locales para garantizar la calidad y frescura de nuestros productos.
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="about-section vision">
        <div className="about-text">
          <h2>Visión</h2>
          <p>
            Queremos ser líderes en la promoción de la agricultura sostenible, ofreciendo productos de alta calidad que beneficien tanto a nuestros clientes como a nuestras comunidades.
          </p>
        </div>
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/e8/66/be/e866be44aba547b45282ec38ca9ebaf6.jpg" alt="Visión" />
        </div>
      </div>

      {/* Valores */}
      <div className="about-section values">
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/5f/87/0e/5f870e1a1c3aefc3dbb591eb26de1e31.jpg" alt="Valores" />
        </div>
        <div className="about-text">
          <h2>Valores</h2>
          <p>
            Nuestros valores incluyen la sostenibilidad, la calidad, la transparencia y el compromiso con nuestras comunidades. Creemos en un enfoque ético y responsable en todo lo que hacemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;