import React from 'react';
import { FaBriefcase, FaBalanceScale, FaFileInvoiceDollar } from 'react-icons/fa';

const Services = () => {
  const services = [
    { id: 1, name: 'Asesoría Empresarial', description: 'Ofrecemos soluciones financieras claras y prácticas.', icon: <FaBriefcase size={40} color="#1B8F31" /> },
    { id: 2, name: 'Fiscal', description: 'Ayudamos a interpretar y cumplir con la legislación tributaria.', icon: <FaBalanceScale size={40} color="#1B8F31" /> },
    { id: 3, name: 'Contable', description: 'Gestionamos tus registros contables de manera eficiente.', icon: <FaFileInvoiceDollar size={40} color="#1B8F31" /> },
  ];

  return (
    <section className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            {service.icon} {/* Aquí se renderiza el icono */}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <a href={`/servicios/${service.id}`} className="service-link">Saber más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
