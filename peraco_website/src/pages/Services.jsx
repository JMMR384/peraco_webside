import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Asesoría Empresarial', description: 'Ofrecemos soluciones financieras claras y prácticas.' },
    { id: 2, name: 'Fiscal', description: 'Ayudamos a interpretar y cumplir con la legislación tributaria.' },
    { id: 3, name: 'Contable', description: 'Gestionamos tus registros contables de manera eficiente.' },
  ];

  return (
    <section className="services">
      <h2>Nuestros Servicios</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <a href={`/servicios/${service.id}`}>Saber más</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;