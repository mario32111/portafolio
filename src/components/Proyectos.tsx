// Proyectos.tsx
import { type FunctionComponent, useRef, useState, useEffect } from "react";
import "./Proyectos.css";

import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.png";
import p7 from "../assets/p7.png";

// Definimos las props que Proyectos espera de su padre (App.tsx)
interface ProyectosProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean;
}

const Proyectos: FunctionComponent<ProyectosProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lista de proyectos destacados
  const projects = [
    {
      title: "CosturasChuy – Sistema POS offline first",
      description: "Sistema punto de venta, diseñado para un taller de costuras, automatización de notificaciones vía whatsapp, Optimización de la cadena de suministro y producción mediante un ecosistema híbrido (Escritorio/Móvil)",
      techniques: ["React", "Electron", "Android Studio", "Kotlin", "Node.js", "Firebase", "TwilioAPI"],
      imageUrl: p1,
      githubUrls: [
        { name: "Aplicacion movil", url: "https://github.com/mario32111/CosturasChuyDesktopApp.git" },
        { name: "Aplicacion de escritorio", url: "https://github.com/mario32111/CosturasChuyApp.git" },

      ],
      liveUrl: null,
    },
    {
      title: "KapraDesign – Seguimiento de pedidos y  de tareas",
      description: "Solución móvil diseñada para la digitalización de la cadena de producción textil. Optimiza la comunicación entre áreas mediante un sistema de estados en tiempo real, permitiendo la trazabilidad completa de los pedidos desde la recepción hasta la entrega. Utiliza una arquitectura serverless con Supabase para garantizar la sincronización inmediata de datos. Aplicacion disponible en la AppStore",
      techniques: ["React Native", "TypeScript", "Expo", "Supabase"],
      imageUrl: p3,
      githubUrls: [
        { name: "Aplicacion movil", url: "https://github.com/mario32111/KapraDesign.git" },
        { name: "Dashboard", url: "https://github.com/mario32111/KapraDesign.git" },

      ],
      liveUrl: null,
    },
    {
      title: "AgroControlPro – Monitoreo y trazabilidad ganadera",
      description: "Proyecto ganador de mención honorífica en el galardón DuranIA 2026. Sistema integral de monitoreo y trazabilidad ganadera mediante sensores IoT y Computer Vision. Implementación de modelos para el conteo automatizado de ganado y análisis de postura (detección de ejemplares en pie o echados) para evaluar el bienestar animal. Incluye algoritmos de Machine Learning para detección de fiebre/celo y un Agente de IA para la automatización de procesos administrativos y analisis de documentos.",
      techniques: ["React", "TypeScript", "PostgreSQL", "Express", "Sequelize"],
      imageUrl: p4,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/ProyectoGalardonDurania.git" },
      ],
      liveUrl: null,
    },
    {
      title: "FocusTrack - Monitoreo de habitos al conducir",
      description: "Deteccion de fatiga, somnolencia y posibles distracciones al conducir, notificaciones a contactos de confianza, agenda de viajes. Transmision de datos en tiempo real mediante MQTT a un broker en la nube",
      techniques: ["Flutter", "Dart", "Nest.js", "Next.js", "Docker", "PostgreSQL", "Redis", "TypeScript", "Azure", "MQTT", "Python"],
      imageUrl: p2,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/FocusTrackBackend.git" }
      ],
      liveUrl: null,
    },
    {
      title: "HydroLink – Sistema de riego inteligente",
      description: "Sistema IoT integral para la gestión automatizada y eficiente del riego agrícola. Monitorizacion en tiempo real mediante sensores de humedad y temperatura para recopilar datos en tiempo real, optimizando el uso del agua mediante algoritmos inteligentes. Backend escalable en AWS, API REST, y app móvil para monitoreo.",
      techniques: ["React Native", "Docker", "MQTT", "PostgreSQL", "Express", "C++", "AWS"],
      imageUrl: p2,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario32111/api-pub-sub" },
        { name: "App", url: "https://github.com/mario32111/hydro-app" },
        { name: "IoT", url: "https://github.com/mario32111/HydrolinkArduino" },
      ],
      liveUrl: null,
    },
    {
      title: "Microservices-TechShop",
      description: "E-commerce de tecnología basado en microservicios con Nest.js y Next.js. Autenticación segura, gestión de productos, carrito de compras y administración. Docker para despliegue y Redis para caché.",
      techniques: ["Nest.js", "Next.js", "Docker", "PostgreSQL", "Redis", "TypeScript"],
      imageUrl: p7,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario32111/tech-shop-backend.git" },
        { name: "Frontend", url: "https://github.com/mario32111/tech-shop-frontend.git" }
      ],
      liveUrl: null,
    },
    {
      title: "ArtChallange – Red para Artistas",
      description: "Red social para artistas centrada en retos semanales. Creación y edición de obras, desafíos y retroalimentación comunitaria. Autenticación y perfiles.",
      techniques: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
      imageUrl: p5,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario32111/ArtChallange" },
      ],
      liveUrl: "https://art-challange.web.app/",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.proyecto-card');
      const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
      const step = card ? card.clientWidth + gap : 648;
      const scrollAmount = direction === 'left' ? -step : step;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.proyecto-card');
      const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
      const step = card ? card.clientWidth + gap : 648;
      const index = Math.round(sliderRef.current.scrollLeft / step);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';

  return (
    <section id="proyectos" className="proyectos-section">
      <h2 className="proyectos-title">Proyectos Destacados</h2>

      <div className="proyectos-slider-container">
        {!isMobile && (
          <button
            className="slider-nav-btn prev"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <FaChevronLeft size={24} />
          </button>
        )}

        <div className="proyectos-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <article 
              key={index} 
              className={`proyecto-card ${activeIndex === index ? 'active' : 'inactive'} ${interactiveClass}`}
              onMouseEnter={!isMobile ? onMouseEnter : undefined}
              onMouseLeave={!isMobile ? onMouseLeave : undefined}
            >
              <img src={project.imageUrl} alt={project.title} className="proyecto-image" />
              <div className="proyecto-content">
                <h3 className="proyecto-card-title">{project.title}</h3>
                <p className="proyecto-description">{project.description}</p>
                <div className="proyecto-tech-list">
                  {project.techniques.map((tech, techIndex) => (
                    <span key={techIndex} className="proyecto-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  {project.githubUrls.map((repo, repoIndex) => (
                    <a
                      key={repoIndex}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`proyecto-link github ${interactiveClass}`}
                      onMouseEnter={!isMobile ? onMouseEnter : undefined}
                      onMouseLeave={!isMobile ? onMouseLeave : undefined}
                    >
                      <FaGithub size={18} />
                      <span>{repo.name}</span>
                    </a>
                  ))}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`proyecto-link live ${interactiveClass}`}
                      onMouseEnter={!isMobile ? onMouseEnter : undefined}
                      onMouseLeave={!isMobile ? onMouseLeave : undefined}
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!isMobile && (
          <button
            className="slider-nav-btn next"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
          >
            <FaChevronRight size={24} />
          </button>
        )}
      </div>

      <div className="slider-dots">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (sliderRef.current) {
                const card = sliderRef.current.querySelector('.proyecto-card');
                const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
                const step = card ? card.clientWidth + gap : 648;
                sliderRef.current.scrollTo({ left: index * step, behavior: 'smooth' });
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;