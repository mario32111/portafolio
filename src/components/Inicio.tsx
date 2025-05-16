import { useState, useEffect, type FunctionComponent } from "react";
import "./Inicio.css";
import foto from '../assets/yo.jpg';

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
        setCurrentIndex(0);
        setDisplayedText("");
      }
    }, 150);

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
          <button className="cv-button">
            <span>Descargar CV</span>
            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;