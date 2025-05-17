import { useState, useEffect, type FunctionComponent } from "react";
import "./Inicio.css";
import foto from '../assets/yo.jpg'; // Asegúrate de que esta ruta sea correcta
import cvFile from '../assets/CV_Spanish.pdf';
// Importa los íconos de Font Awesome y Material Design Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface InicioProps { }

const Inicio: FunctionComponent<InicioProps> = () => {
  const text = "<Full Stack Developer />";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reiniciar la animación una vez que termina
        setCurrentIndex(0);
        setDisplayedText("");
      }
    }, 150); // Velocidad de escritura

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return (
    <div id="inicio" className="inicio-wrapper">
      <div className="binary-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="binary-digit"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1,
              fontSize: `${Math.random() * 0.5 + 0.5}em`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="container-inicio">
        <div className="foto-container">
          <div className="marco-foto">
          </div>
          <img className="inicio-foto" src={foto} alt="Mario Garcia" />
        </div>

        <div className="typing-animation-container">
          <h1 className="greeting">Hola a todos, soy</h1>
          <h1 className="name">Mario Garcia</h1>
          <h1 className="typing-animation">
            {displayedText}<span className="blinking-cursor">|</span>
          </h1>

          {/* Sección de enlaces a redes sociales */}
          <div className="social-links-inicio">
            {/* Enlace a GitHub */}
            <a
              href="https://github.com/mario32111" // ¡REEMPLAZA ESTO CON TU LINK REAL DE GITHUB!
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link-inicio"
              aria-label="Mi perfil de GitHub"
            >
              <FaGithub size={30} />
            </a>
            {/* Enlace a LinkedIn */}
            <a
              href="https://www.linkedin.com/in/garc%C3%ADa-estevan%C3%A9-mario-alberto-5025b929b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // ¡REEMPLAZA ESTO CON TU LINK REAL DE LINKEDIN!
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link-inicio"
              aria-label="Mi perfil de LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            {/* Enlace de Correo Electrónico */}
            <a
              href="mailto:marioge44@gmail.com" // ¡REEMPLAZA ESTO CON TU CORREO REAL!
              className="social-icon-link-inicio"
              aria-label="Enviar un correo electrónico"
            >
              <MdEmail size={30} />
            </a>
          </div>

          <a
            href={cvFile} // Ajusta esta ruta si tu CV está en otro lugar (ej. '/assets/Mario-Garcia-CV.pdf')
            download="CV_Spanish.pdf" // Este atributo sugiere al navegador que descargue el archivo y proporciona un nombre de archivo predeterminado
            className="cv-button"
          >
            <span>Descargar CV</span>
            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;