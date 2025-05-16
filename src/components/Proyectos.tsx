import { type FunctionComponent } from "react";
import "./Proyectos.css"; // Importa el archivo de estilos para este componente

// Importa los íconos necesarios para los enlaces y tecnologías específicas si no las tienes ya
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// Puedes importar iconos de tecnologías si quieres mostrarlos en cada tarjeta de proyecto,
// o simplemente listarlos como texto. Si ya los tienes importados en Tecnologias.tsx,
// y no los necesitas visualmente aquí, no es estrictamente necesario re-importarlos.
// Por ejemplo:
// import { FaReact, FaNodeJs, SiMongodb } from 'react-icons/fa';


interface ProyectosProps {}

const Proyectos: FunctionComponent<ProyectosProps> = () => {
  // Define tus proyectos como un array de objetos
  const projects = [
    {
      title: "Nombre del Proyecto 1",
      description: "Una descripción concisa y atractiva de tu primer proyecto. Destaca sus características principales y qué problema resuelve.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST API"],
      imageUrl: "https://via.placeholder.com/600x400?text=Proyecto+1", // Reemplaza con la URL real de tu imagen/GIF
      githubUrl: "https://github.com/tu-usuario/proyecto-1", // Reemplaza con tu URL de GitHub
      liveUrl: "https://proyecto1.netlify.app", // Reemplaza con la URL de tu proyecto desplegado (si existe)
    },
    {
      title: "Nombre del Proyecto 2",
      description: "Segundo proyecto. Puedes mencionar aquí si fue un proyecto personal, de bootcamp, o para un cliente.",
      technologies: ["Angular", "Python", "PostgreSQL", "Docker", "AWS"],
      imageUrl: "https://via.placeholder.com/600x400?text=Proyecto+2",
      githubUrl: "https://github.com/tu-usuario/proyecto-2",
      liveUrl: null, // Si no hay un demo desplegado, déjalo como null
    },
    {
      title: "Nombre del Proyecto 3 (Destacado)",
      description: "Tu proyecto más importante o complejo. Detalla las tecnologías avanzadas que usaste y los desafíos que superaste.",
      technologies: ["Next.js", "TypeScript", "Nest.js", "MongoDB", "Tailwind CSS", "JWT"],
      imageUrl: "https://via.placeholder.com/600x400?text=Proyecto+3",
      githubUrl: "https://github.com/tu-usuario/proyecto-3",
      liveUrl: "https://proyecto3.vercel.app",
    },
    // Añade más proyectos aquí siguiendo el mismo formato
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
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-link github"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                )}
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