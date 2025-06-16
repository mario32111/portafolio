import { type FunctionComponent } from "react";
import "./SobreMi.css"; // Importa el archivo de estilos

// Definimos las props que SobreMi espera
interface SobreMiProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean; // <-- ¡Nueva prop!
}

const SobreMi: FunctionComponent<SobreMiProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  // Clase CSS condicional para los elementos interactivos
  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';

  const softSkills = [
    "Comunicación Efectiva",
    "Trabajo en Equipo",
    "Resolución de Problemas",
    "Pensamiento Crítico",
    "Adaptabilidad",
    "Autonomía",
    "Gestión del Tiempo",
    "Curiosidad y Aprendizaje Continuo",
    "Empatía",
    "Proactividad",
  ];

  const educationTimeline = [
    {
      year: "2022 - Actualidad",
      title: "Ingenieria informática",
      institution: "ITSRLL (Instituto Tecnológico Superior de la Región de los Llanos)",
      description: "Especialidad en inteligencia artificial",
    },
    {
      year: "2018-2021",
      title: "Tecnico en programacion",
      institution: "CBTis #42 (Centro de Bachillerato Tecnológico industrial y de servicios)",
      description: "Primeros pasos en lógica de programación y fundamentos con java",
    },
    // Añade más hitos educativos o certificaciones relevantes aquí
  ];

  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <h2 className="sobre-mi-title">Sobre Mí</h2>
      <div className="sobre-mi-content">
        {/* Sección: Quién Soy */}
        <div
          className={`sobre-mi-section-card who-am-i ${interactiveClass}`} // Aplica la clase condicional aquí
          onMouseEnter={!isMobile ? onMouseEnter : undefined} // Desactiva en móvil
          onMouseLeave={!isMobile ? onMouseLeave : undefined} // Desactiva en móvil
        >
          <h3 className="card-title">¿Quién Soy?</h3>
          <p>
            Soy Mario García, <strong>desarrollador Full Stack</strong> apasionado por construir soluciones web robustas con tecnologías como <strong>React, Next.js, Node.js, Express</strong> y <strong>Nest.js</strong>. Me especializo en el desarrollo de <strong>APIs seguras</strong>, gestión de bases de datos relacionales <strong>(PostgreSQL, MySQL)</strong> y <strong>no relacionales (MongoDB)</strong>, así como en despliegue con herramientas como <strong>Docker</strong> y <strong>AWS</strong>.
          </p>
          <p>
            Mi camino en la programación comenzó con la curiosidad por entender cómo funcionan las cosas en la web, y pronto se transformó en una vocación por crear soluciones innovadoras que impacten positivamente a los usuarios.
          </p>
          <p>
            Me considero proactivo, autodidacta y orientado a resultados, siempre en busca de nuevos aprendizajes y desafíos. Disfruto trabajar en equipo y contribuir al crecimiento colectivo.
          </p>
          <p>
            Fuera del código, me gusta jugar videojuegos, hacer ejercicio y escuchar música, lo que me ayuda a mantener la mente fresca y la creatividad activa.
          </p>
          <p>
            ¡Estoy entusiasmado por seguir creciendo y contribuir a proyectos que marquen la diferencia!
          </p>

        </div>

        {/* Sección: Soft Skills */}
        <div
          className={`sobre-mi-section-card soft-skills ${interactiveClass}`} // Aplica la clase condicional aquí
          onMouseEnter={!isMobile ? onMouseEnter : undefined} // Desactiva en móvil
          onMouseLeave={!isMobile ? onMouseLeave : undefined} // Desactiva en móvil
        >
          <h3 className="card-title">Soft Skills</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index} className="soft-skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Sección: Trayectoria de Estudios (Línea del Tiempo) */}
        <div
          className={`sobre-mi-section-card education-timeline ${interactiveClass}`} // Aplica la clase condicional aquí
          onMouseEnter={!isMobile ? onMouseEnter : undefined} // Desactiva en móvil
          onMouseLeave={!isMobile ? onMouseLeave : undefined} // Desactiva en móvil
        >
          <h3 className="card-title">Trayectoria de Estudios</h3>
          <div className="timeline-container">
            {educationTimeline.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div> {/* Punto en la línea */}
                <div className="timeline-content">
                  <span className="timeline-year">{event.year}</span>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-institution">{event.institution}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;