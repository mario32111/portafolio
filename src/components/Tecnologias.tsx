import { type FunctionComponent } from "react";
import "./Tecnologias.css"; // Importa el archivo de estilos para este componente

// --- Importa los íconos de react-icons que vas a utilizar ---
// Puedes consultar la documentación de react-icons para encontrar los íconos específicos:
// https://react-icons.github.io/react-icons/

// Íconos de Font Awesome (fa)
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaSass,
  FaAws, FaLinux, FaPython, FaJava, FaFigma
} from 'react-icons/fa';

// Íconos de Simple Icons (si) - Muy buenos para marcas de tecnología
import {
  SiNextdotjs, SiRedux, SiAngular, SiDotnet, SiExpress, SiNestjs, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiRabbitmq, SiFirebase, SiTypescript,
  SiCplusplus, SiGnubash, SiSharp, SiReactquery,  // Si no hay un ícono de Jest, ReactQuery es un ejemplo de librería relacionada con React
} from 'react-icons/si';

// Íconos de Ionicons (io)
import { IoLogoJavascript } from 'react-icons/io';


interface TecnologiasProps { }

const Tecnologias: FunctionComponent<TecnologiasProps> = () => {
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
    { name: ".NET (Windows Forms)", icon: SiDotnet }, // Si necesitas un ícono más específico para WinForms, busca en otras librerías o crea uno
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Python", icon: FaPython },
    { name: "C++", icon: SiCplusplus },
    { name: "C#", icon: SiSharp },
    { name: "Java", icon: FaJava },

    // Cloud / DevOps / Herramientas
    { name: "AWS", icon: FaAws },
    { name: "GCP", icon: SiGnubash }, // No hay un ícono directo de GCP en Simple Icons, SiGnubash puede ser un placeholder o buscar otro.
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "GitHub Actions", icon: FaGithub }, // Reutilizamos GitHub por asociación
    { name: "Linux", icon: FaLinux },

    // Bases de Datos / APIs / Mensajería
    { name: "REST API", icon: SiReactquery }, // Si no hay un ícono específico para REST API, un ícono de request/response o de librería de API podría servir. SiReactQuery es un placeholder.
    { name: "JWT", icon: SiReactquery }, // Similar al anterior, buscar un ícono genérico si no hay uno directo
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
          <li key={skill.name} className="tecnologia-item">
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