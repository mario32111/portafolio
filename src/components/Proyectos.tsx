// Proyectos.tsx
import { type FunctionComponent } from "react";
import "./Proyectos.css";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
// Definimos las props que Proyectos espera de su padre (App.tsx)
interface ProyectosProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean; // ¡Nueva prop!
}

const Proyectos: FunctionComponent<ProyectosProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  // Lista de proyectos destacados con título, descripción, tecnologías, imágenes y enlaces relevantes
  const projects = [
    {
      title: "HydroLink – Sistema de riego inteligente",
      description: "Sistema IoT integral para la gestión automatizada y eficiente del riego agrícola. Utiliza sensores de humedad y temperatura para recopilar datos en tiempo real, optimizando el uso del agua mediante algoritmos inteligentes. Incluye una arquitectura distribuida con dispositivos de campo conectados, backend escalable en AWS, API REST, y una app móvil para monitoreo y control remoto. Implementa flujos CI/CD, comunicación MQTT y seguridad con JWT.",
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
      title: "Microservices-TechShop",
      description: "Plataforma en desarollo de un e-commerce de tecnología basada en microservicios, con backend en Nest.js y frontend en Next.js. Ofrece autenticación segura, gestión de productos, carrito de compras y administración de usuarios. Utiliza Docker para despliegue, Redis para caché y PostgreSQL como base de datos. Incluye documentación Swagger y flujos de integración continua.",
      techniques: ["Nest.js", "Next.js", "JWT", "Docker", "Swagger", "PostgreSQL", "Node.js", "GitHub", "Postman", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redis"],
      imageUrl: p7,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario32111/tech-shop-backend.git" },
        { name: "Frontend", url: "https://github.com/mario32111/tech-shop-frontend.git" }
      ],
      liveUrl: null,
    },
    {
      title: "KapraDesign – Sistema de seguimiento de pedidos y procesos",
      description: "Solución móvil freelance para la gestión y seguimiento de pedidos y procesos internos de una empresa textil. Permite visualizar el flujo de trabajo, controlar estados de pedidos y facilitar la comunicación entre áreas. Incluye app móvil multiplataforma, backend en Supabase y aplicación de escritorio para administración.",
      techniques: ["React Native", "TypeScript", "Expo", "Supabase"],
      imageUrl: p3,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/KapraDesign" },
      ],
      liveUrl: null,
    },
    {
      title: "Crud .Net(Windows Forms)",
      description: "Aplicación de escritorio desarrollada en .NET con Windows Forms y una base de datos en SQL Server  para la gestión de registros mediante operaciones CRUD. Ofrece una interfaz intuitiva para administrar información, búsqueda avanzada y validación de datos, facilitando la gestión eficiente de recursos en entornos empresariales.",
      techniques: ["C#", ".NET", "Windows Forms", "SQL Server"],
      imageUrl: p6,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/ProyectoTBD.git" },
      ],
      liveUrl: null,
    },
    {
      title: "ArtChallange",
      description: "Red social web para artistas, centrada en retos semanales de arte. Permite a los usuarios crear, editar y compartir obras, participar en desafíos, y recibir retroalimentación de la comunidad. Cuenta con autenticación, perfiles personalizados y una interfaz moderna y responsiva.",
      techniques: ["Angular", "Firebase", "HTML", "CSS", "TypeScript", "Bootstrap"],
      imageUrl: p5,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/ArtChallange" },
      ],
      liveUrl: "https://art-challange.web.app/",
    },

    {
      title: "ProyectoExpotec – Aplicación web de preguntas sobre informática",
      description: "Aplicación web interactiva desarrollada para eventos universitarios, enfocada en la gamificación del aprendizaje de informática. Permite a los usuarios responder preguntas aleatorias, visualizar resultados en tiempo real y competir en rankings. Soporta múltiples usuarios simultáneos y destaca por su interfaz dinámica y amigable.",
      techniques: ["React", "TypeScript", "PostgreSQL", "Redux", "Express", "Sequelize", "HTML", "CSS", "Render"],
      imageUrl: p1,
      githubUrls: [
        { name: "Pagina web", url: "https://github.com/mario32111/ProyectoExpotec-Api" },
        { name: "API", url: "https://github.com/mario32111/ProyectoExpotec-Api" }
      ],
      liveUrl: "https://pagina-expotec.onrender.com/",
    },
    {
      title: "MyEconomy",
      description: "Maquetacion de aplicación web para el control y visualización de gastos personales, diseñada con enfoque en usabilidad y experiencia de usuario. Permite registrar ingresos y egresos, visualizar estadísticas y mantener un historial financiero, ayudando a los usuarios a gestionar su economía de forma sencilla.",
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