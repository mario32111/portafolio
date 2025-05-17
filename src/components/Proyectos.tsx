import { type FunctionComponent } from "react";
import "./Proyectos.css"; // Importa el archivo de estilos para este componente

// Importa los íconos necesarios
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

interface ProyectosProps {}

const Proyectos: FunctionComponent<ProyectosProps> = () => {
  const projects = [
    {
      title: "HydroLink – Sistema de riego inteligente",
      description: "Desarrollo de un sistema automatizado de riego que ajusta los ciclos de riego en función de los datos recolectados por sensores de humedad y temperatura del suelo. Permite una gestión eficiente del agua mediante controladores con conectividad móvil que transmiten la información en tiempo real. Incluye procesamiento y análisis de datos en tiempo real para optimizar el riego, y una arquitectura distribuida con aplicación móvil, llaves inteligentes de campo, y API REST alojada en AWS. Se implementaron flujos de CI/CD.",
      technologies: ["React Native", "MQTT", "TypeScript", "JavaScript", "PostgreSQL", "Express", "Sequelize", "C++", "Docker", "CI/CD", "AWS"],
      imageUrl: p2,
      // Múltiples repositorios de GitHub
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario32111/backend-hydrolink" },
        { name: "App Móvil", url: "https://github.com/mario32111/Hydrolink-App" },
        { name: "Dispositivo IoT", url: "https://github.com/mario32111/hydrolink-IoT-Firmware" },
      ],
      liveUrl: null,
    },
    {
      title: "ProyectoExpotec – Aplicación web de preguntas sobre informática",
      description: "Aplicación web interactiva y llamativa desarrollada para la Expotec, con el objetivo de crear una experiencia divertida para estudiantes de preparatoria. Permite realizar preguntas aleatorias sobre informática y visualizar los resultados en tiempo real. Manejó alrededor de 50 usuarios activos simultáneamente y fue desarrollado en una semana, recibiendo una excelente acogida por su interfaz amigable y dinámica.",
      technologies: ["React", "TypeScript", "PostgreSQL", "Redux", "Express", "Sequelize", "HTML", "CSS", "Render"],
      imageUrl: p1,
      // Un solo repositorio, pero sigue siendo un array
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/expotec-app" },
      ],
      liveUrl: "https://expotec.onrender.com/", // Reemplaza con la URL real de tu proyecto desplegado
    },
    {
      title: "KapraDesign – Sistema de seguimiento de pedidos y procesos",
      description: "Sistema desarrollado para plataformas móviles y PC con el objetivo de mostrar y controlar el flujo de trabajo de la empresa, ligado directamente a sus pedidos. Fue desarrollado de forma freelance, incluyendo análisis de necesidades e interacción directa con el cliente. El sistema está conformado por una aplicación móvil, una API REST, una base de datos y una aplicación de escritorio. Aunque no fue implementado comercialmente, sirvió como prueba de concepto y tiene alta posibilidad de implementarse en futuro.",
      technologies: ["React Native", "TypeScript", "PostgreSQL", "Sequelize", "Express", "Electron", "Docker"],
      imageUrl: p3,
      githubUrls: [
        { name: "API REST", url: "https://github.com/mario32111/kapra-design-api" },
        { name: "App Escritorio", url: "https://github.com/mario32111/kapra-design-desktop" },
        { name: "App Móvil", url: "https://github.com/mario32111/kapra-design-mobile" },
      ],
      liveUrl: null,
    },
    {
      title: "Microservices-Superflights",
      description: "API REST para la gestión de vuelos, utilizando una arquitectura de microservicios. Permite a los usuarios buscar y reservar vuelos de manera eficiente, con un diseño moderno y funcional.",
      technologies: ["Nest.js", "AWS", "JWT", "Docker", "Swagger", "MongoDB", "Node.js", "GitHub", "Postman"],
      imageUrl: p3,
      githubUrls: [
        { name: "Gateway", url: "https://github.com/mario32111/nest-superflights-api-gateway" },
        { name: "Auth Service", url: "https://github.com/mario32111/nest-superflights-auth-service" },
        { name: "Flights Service", url: "https://github.com/mario32111/nest-superflights-flights-service" },
      ],
      liveUrl: null,
    },
    {
      title: "MyEconomy",
      description: "Maquetación de una aplicación móvil para el control de gastos personales, con un diseño atractivo y funcional. La aplicación permite a los usuarios llevar un registro de sus gastos e ingresos, ayudando a gestionar su economía personal de manera eficiente.",
      technologies: ["React Native", "React", "JavaScript", "CSS"],
      imageUrl: p3,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/my-economy-app" },
      ],
      liveUrl: null,
    },
    {
      title: "ArtChallange",
      description: "Aplicación web para la creación de arte digital, con una interfaz intuitiva y herramientas avanzadas para artistas. Permite a los usuarios crear, editar y compartir sus obras de arte en una comunidad en línea.",
      technologies: ["Angular", "Firebase", "HTML", "CSS", "TypeScript"],
      imageUrl: p3,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/art-challenge-angular" },
      ],
      liveUrl: null,
    },
  ];

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
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="proyecto-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="proyecto-links">
                {/* Mapea sobre el array de githubUrls para mostrar cada enlace */}
                {project.githubUrls && project.githubUrls.map((repo, repoIndex) => (
                  <a
                    key={repoIndex} // Usar un key único para cada enlace del repositorio
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-link github"
                    aria-label={`Ver código de ${repo.name} de ${project.title} en GitHub`}
                  >
                    <FaGithub size={20} />
                    <span>{repo.name}</span> {/* Muestra el nombre específico del repositorio */}
                  </a>
                ))}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-link live"
                    aria-label={`Ver demo en vivo de ${project.title}`}
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