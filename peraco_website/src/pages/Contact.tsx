import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contáctanos</h1>
      <div className="contact-container">
        <div className="contact-image">
          <img src="https://i.pinimg.com/736x/af/18/6c/af186ca7186d86d00327b50e8c155840.jpg" alt="Imagen de Contacto" />
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;