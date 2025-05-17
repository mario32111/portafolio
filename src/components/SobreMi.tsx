import { type FunctionComponent } from "react";
import "./SobreMi.css"; // Importa el archivo de estilos

interface SobreMiProps {}

const SobreMi: FunctionComponent<SobreMiProps> = () => {
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
        <div className="sobre-mi-section-card who-am-i">
          <h3 className="card-title">¿Quién Soy?</h3>
          <p>
            Me llamo Mario Garcia, un apasionado desarrollador Full Stack con experiencia en construir aplicaciones web robustas y escalables. Mi viaje en la programación comenzó con la curiosidad de entender cómo funcionan las cosas en la web, y pronto se transformó en una vocación por crear soluciones innovadoras que impacten positivamente a los usuarios.
          </p>
          <p>
            He trabajado extensamente con tecnologías del ecosistema React.js y Node.js, dominando tanto el frontend con librerías como Next.js y Redux, así como el backend con Express.js y Nest.js. Soy un firme creyente en las buenas prácticas de desarrollo, la limpieza del código y la importancia de un diseño responsivo y centrado en el usuario.
          </p>
          <p>
            Mi experiencia abarca desde el diseño de bases de datos relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB), hasta la implementación de APIs RESTful seguras con JWT. También tengo conocimientos en despliegue y CI/CD con Docker, AWS, GCP y GitHub Actions, lo que me permite llevar proyectos desde la concepción hasta la producción.
          </p>
          <p>
            Me considero una persona proactiva, autodidacta y orientada a resultados, siempre buscando aprender nuevas tecnologías y enfrentar nuevos desafíos. Disfruto colaborar en equipos y contribuir al crecimiento colectivo.
          </p>
          <p>
            Fuera del código, me gusta jugar videojuegos, hacer ejercicio, escuchar musica, lo que me ayuda a mantener la mente fresca y la creatividad activa.
          </p>
          <p>
            ¡Estoy emocionado por las oportunidades de seguir creciendo y contribuir a proyectos que marquen la diferencia!
          </p>
        </div>

        {/* Sección: Soft Skills */}
        <div className="sobre-mi-section-card soft-skills">
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
        <div className="sobre-mi-section-card education-timeline">
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