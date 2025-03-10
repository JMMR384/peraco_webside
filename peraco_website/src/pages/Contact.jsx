import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>O llámanos al: (47) 3084-5500</p>
    </section>
  );
};

export default ContactForm;