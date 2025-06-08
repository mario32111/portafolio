// Proyectos.tsx
import { type FunctionComponent } from "react";
import "./Proyectos.css";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";


// Definimos las props que Proyectos espera de su padre (App.tsx)
interface ProyectosProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean; // ¡Nueva prop!
}

const Proyectos: FunctionComponent<ProyectosProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  const projects = [
    {
      title: "HydroLink – Sistema de riego inteligente",
      description: "Desarrollo de un sistema automatizado de riego que ajusta los ciclos de riego en función de los datos recolectados por sensores de humedad y temperatura del suelo. Permite una gestión eficiente del agua mediante controladores con conectividad móvil que transmiten la información en tiempo real. Incluye procesamiento y análisis de datos en tiempo real para optimizar el riego, y una arquitectura distribuida con aplicación móvil, llaves inteligentes de campo, y API REST alojada en AWS. Se implementaron flujos de CI/CD.",
      techniques: ["React Native", "Docker", "JWT", "Redux", "MQTT", "TypeScript", "JavaScript", "PostgreSQL", "Express", "Sequelize", "C++", "Docker", "CI/CD", "AWS"],
      imageUrl: p2,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario32111/api-pub-sub" },
        { name: "App Móvil", url: "https://github.com/mario32111/hydro-app" },
        { name: "Dispositivo IoT", url: "https://github.com/mario32111/HydrolinkArduino" },
      ],
      liveUrl: null,
    },
    {
      title: "ProyectoExpotec – Aplicación web de preguntas sobre informática",
      description: "Aplicación web interactiva y llamativa desarrollada para un evento de la universidad, con el objetivo de crear una experiencia divertida para estudiantes de preparatoria. Permite realizar preguntas aleatorias sobre informática y visualizar los resultados en tiempo real. Manejó alrededor de 50 usuarios activos simultáneamente y fue desarrollado en una semana, recibiendo una excelente acogida por su interfaz amigable y dinámica.",
      techniques: ["React", "TypeScript", "PostgreSQL", "Redux", "Express", "Sequelize", "HTML", "CSS", "Render"],
      imageUrl: p1,
      githubUrls: [
        { name: "Pagina web", url: "https://github.com/mario32111/ProyectoExpotec-Api" },
        { name: "API", url: "https://github.com/mario32111/ProyectoExpotec-Api" }
      ],
      liveUrl: "https://pagina-expotec.onrender.com/",
    },
    {
      title: "KapraDesign – Sistema de seguimiento de pedidos y procesos",
      description: "Sistema desarrollado para plataformas móviles con el objetivo de mostrar y controlar el flujo de trabajo de la empresa, ligado directamente a sus pedidos. Fue desarrollado de forma freelance, incluyendo análisis de necesidades e interacción directa con el cliente. El sistema está conformado por una aplicación móvil, una API REST, una base de datos y una aplicación de escritorio. Aunque no fue implementado comercialmente, sirvió como prueba de concepto y tiene alta posibilidad de implementarse en futuro.",
      techniques: ["React Native", "TypeScript", "Expo"],
      imageUrl: p3,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/KapraDesign" },
      ],
      liveUrl: null,
    },
    {
      title: "ArtChallange",
      description: "Aplicación web estilo red social orientada a retos semanales de arte, con una interfaz intuitiva y herramientas avanzadas para artistas. Permite a los usuarios crear, editar y compartir sus obras de arte en una comunidad en línea.",
      techniques: ["Angular", "Firebase", "HTML", "CSS", "TypeScript", "Bootstrap"],
      imageUrl: p5,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/ArtChallange" },
      ],
      liveUrl: "https://art-challange.web.app/",
    },
    {
      title: "Microservices-Superflights",
      description: "API REST para la gestión de vuelos desarrollada a lo largo de un curso, utilizando una arquitectura de microservicios. Permite a los usuarios buscar y reservar vuelos de manera eficiente, con un diseño moderno y funcional.",
      techniques: ["Nest.js", "AWS", "JWT", "Docker", "Swagger", "MongoDB", "Node.js", "GitHub", "Postman"],
      imageUrl: p3,
      githubUrls: [
        { name: "Gateway", url: "https://github.com/mario32111/superFlights-apiGateway" },
        { name: "Users Service", url: "https://github.com/mario32111/superFlights-microserviceUsers" },
        { name: "Flights Service", url: "https://github.com/mario32111/superFlights-microserviceFlights" },
        { name: "Passengers Service", url: "https://github.com/mario32111/superFlights-microserviceFlights" }
      ],
      liveUrl: null,
    },
    {
      title: "MyEconomy",
      description: "Maquetación de una aplicación web para el control de gastos personales, con un diseño atractivo y funcional. La aplicación permite a los usuarios llevar un registro de sus gastos e ingresos, ayudando a gestionar su economía personal de manera eficiente.",
      techniques: ["React Native", "React", "JavaScript", "CSS"],
      imageUrl: p4,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/MyEconomy" },
      ],
      liveUrl: "https://mario32111.github.io/MyEconomy/",
    },
  ];

  // Definimos la clase condicional para aplicar a los elementos interactivos
  // ¡Ahora solo se aplica si NO es móvil Y isInteractive es verdadero!
  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';


  return (
    <section id="proyectos" className="proyectos-section">
      <h2 className="proyectos-title">Mis Proyectos</h2>
      <div className="proyectos-grid">
        {projects.map((project, index) => (
          <article key={index} className="proyecto-card">
            <img src={project.imageUrl} alt={`Imagen del proyecto ${project.title}`} className="proyecto-image" />
            <div className="proyecto-content">
              <h3 className="proyecto-card-title">{project.title}</h3>
              <p className="proyecto-description">{project.description}</p>
              <div className="proyecto-tech-list">
                {project.techniques.map((tech, techIndex) => (
                  <span key={techIndex} className="proyecto-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="proyecto-links">
                {/* Mapea sobre el array de githubUrls para mostrar cada enlace */}
                {project.githubUrls && project.githubUrls.map((repo, repoIndex) => (
                  <a
                    key={repoIndex}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`proyecto-link github ${interactiveClass}`}
                    aria-label={`Ver código de ${repo.name} de ${project.title} en GitHub`}
                    onMouseEnter={!isMobile ? onMouseEnter : undefined} // ¡Desactivamos en móvil!
                    onMouseLeave={!isMobile ? onMouseLeave : undefined} // ¡Desactivamos en móvil!
                  >
                    <FaGithub size={20} />
                    <span>{repo.name}</span>
                  </a>
                ))}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`proyecto-link live ${interactiveClass}`}
                    aria-label={`Ver demo en vivo de ${project.title}`}
                    onMouseEnter={!isMobile ? onMouseEnter : undefined} // ¡Desactivamos en móvil!
                    onMouseLeave={!isMobile ? onMouseLeave : undefined} // ¡Desactivamos en móvil!
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;