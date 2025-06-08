import { type FunctionComponent } from "react";
import "./Tecnologias.css"; // Importa el archivo de estilos para este componente

// --- Importa los íconos de react-icons que vas a utilizar ---
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaSass,
  FaAws, FaLinux, FaPython, FaJava, FaFigma
} from 'react-icons/fa';

import {
  SiNextdotjs, SiRedux, SiAngular, SiDotnet, SiExpress, SiNestjs, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiRabbitmq, SiFirebase, SiTypescript,
  SiCplusplus, SiGnubash, SiSharp, SiReactquery,
} from 'react-icons/si';

import { IoLogoJavascript } from 'react-icons/io';


// Definimos las props que Tecnologias espera
interface TecnologiasProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean; // <-- ¡Nueva prop!
}

const Tecnologias: FunctionComponent<TecnologiasProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  // Clase CSS condicional para los elementos interactivos
  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';

  // Define tu stack tecnológico como un array de objetos
  const skills = [
    // Frontend
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Angular", icon: SiAngular },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: IoLogoJavascript }, // O SiJavascript
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Sass", icon: FaSass },
    { name: "React Native", icon: FaReact }, // Reutilizamos FaReact para React Native

    // Backend / Runtime
    { name: ".NET (Windows Forms)", icon: SiDotnet },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Python", icon: FaPython },
    { name: "C++", icon: SiCplusplus },
    { name: "C#", icon: SiSharp },
    { name: "Java", icon: FaJava },

    // Cloud / DevOps / Herramientas
    { name: "AWS", icon: FaAws },
    { name: "GCP", icon: SiGnubash },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "GitHub Actions", icon: FaGithub },
    { name: "Linux", icon: FaLinux },

    // Bases de Datos / APIs / Mensajería
    { name: "REST API", icon: SiReactquery },
    { name: "JWT", icon: SiReactquery },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Firebase", icon: SiFirebase },

    // Diseño
    { name: "Figma", icon: FaFigma },
  ];

  return (
    <section id="tecnologias" className="tecnologias-section">
      <h2 className="tecnologias-title">Mi Stack Tecnológico</h2>
      <ul className="tecnologias-list">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`tecnologia-item ${interactiveClass}`} // Aplica la clase condicional aquí
            onMouseEnter={!isMobile ? onMouseEnter : undefined} // Desactiva en móvil
            onMouseLeave={!isMobile ? onMouseLeave : undefined} // Desactiva en móvil
          >
            {/* Renderiza el componente de ícono directamente */}
            <skill.icon className="tecnologia-icon" size={50} />
            <span className="tecnologia-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologias;