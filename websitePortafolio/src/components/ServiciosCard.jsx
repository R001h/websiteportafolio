import React from 'react'; // Importa React
import '../styles/ServiciosCard.css'; // Importa el archivo de estilos CSS para el componente

function ServiciosCard() {
  return (
    <div> {/* Contenedor principal */}
      <div className="services-container"> {/* Contenedor para las tarjetas de servicios */}
        {/* Tarjeta de servicio para "Research" */}
        <div className="service-card">
          <div className="service-title">Research</div> {/* Título del servicio */}
          <div className="service-description"> {/* Descripción del servicio */}
            <p>Understanding your prospects, the competitive environment, and current website analytics are the base for a good improvement.</p>
            <ul className="service-items"> {/* Lista de elementos del servicio */}
              <li>Website/Persona fit and alignment</li>
              <li>Website lead conversion analysis</li>
              <li>Scroll Map analysis</li>
              <li>Keyword</li>
              <li>Create reference</li>
            </ul>
            <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> {/* Texto adicional */}
          </div>
        </div>
        {/* Tarjeta de servicio para "Website Design" */}
        <div className="service-card">
          <div className="service-title">Website Design</div> {/* Título del servicio */}
          <div className="service-description"> {/* Descripción del servicio */}
            <p>Understanding your view of goals, technical capabilities to design a website gives like result a great launch at scale.</p>
            <ul className="service-items"> {/* Lista de elementos del servicio */}
              <li>Journey Mapping</li>
              <li>Web Design</li>
              <li>Content Production</li>
              <li>Frontend & Backend Development</li>
              <li>Create reference</li>
              <li>Recreate any website/ not matter the technology</li>
              <li>CMS Implementation</li>
            </ul>
            <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> {/* Texto adicional */}
          </div>
        </div>
        {/* Tarjeta de servicio para "Technology" */}
        <div className="service-card">
          <div className="service-title">Technology</div> {/* Título del servicio */}
          <div className="service-description"> {/* Descripción del servicio */}
            <p>From front-end to back-end, Our technical teams are gonna guarantee you have the foundation for the best in class website from seed to scale.</p>
            <ul className="service-items"> {/* Lista de elementos del servicio */}
              <li>Webs Technology Consulting</li>
              <li>Web Architecture planning</li>
              <li>Mobile App Development, iOS & Android</li>
              <li>Frontend Web Development</li>
              <li>Backend Development & API Integration</li>
            </ul>
          </div>
        </div>
        {/* Tarjeta de servicio para "Visual Design" */}
        <div className="service-card">
          <div className="service-title">Visual Design</div> {/* Título del servicio */}
          <div className="service-description"> {/* Descripción del servicio */}
            <p>Digital design expertise adds the science of usability to ensure an intuitive and seamless experience to your prospects.</p>
            <ul className="service-items"> {/* Lista de elementos del servicio */}
              <li>User Research & Testing</li>
              <li>CX, UX & Interaction Design</li>
              <li>UI Design</li>
              <li>Motion Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
        </div>
        {/* Tarjeta de servicio para "Marketing" */}
        <div className="service-card">
          <div className="service-title">Marketing</div> {/* Título del servicio */}
          <div className="service-description"> {/* Descripción del servicio */}
            <p>Planner for your campaign.</p>
            <ul className="service-items"> {/* Lista de elementos del servicio */}
              <li>SEO</li>
              <li>SEM</li>
              <li>Google Ads</li>
              <li>Meta-Business</li>
              <li>TripAdvisor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosCard; // Exporta el componente ServiciosCard
