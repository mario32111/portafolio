import './App.css';
import NavBar from './components/navbar';
import Inicio from './components/Inicio';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import { useCallback, useState, useEffect } from 'react';

function App() {
  const [isInteractiveGlobal, setIsInteractiveGlobal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleMouseEnterGlobal = useCallback(() => {
    setIsInteractiveGlobal(true);
  }, []);

  const handleMouseLeaveGlobal = useCallback(() => {
    setIsInteractiveGlobal(false);
  }, []);

  return (
    <>
      <NavBar
        isInteractive={isInteractiveGlobal}
        onMouseEnterGlobal={handleMouseEnterGlobal}
        onMouseLeaveGlobal={handleMouseLeaveGlobal}
        isMobile={isMobile}
      />
      <main className="content">
        <div>
          <Inicio
            isInteractive={isInteractiveGlobal}
            onMouseEnter={handleMouseEnterGlobal}
            onMouseLeave={handleMouseLeaveGlobal}
            isMobile={isMobile}
          />
          {/* Aquí pasamos las props a SobreMi */}
          <SobreMi
            isInteractive={isInteractiveGlobal}
            onMouseEnter={handleMouseEnterGlobal}
            onMouseLeave={handleMouseLeaveGlobal}
            isMobile={isMobile}
          />
          {/* Aquí pasamos las props a Tecnologias */}
          <Tecnologias
            isInteractive={isInteractiveGlobal}
            onMouseEnter={handleMouseEnterGlobal}
            onMouseLeave={handleMouseLeaveGlobal}
            isMobile={isMobile}
          />
          <Proyectos
            isInteractive={isInteractiveGlobal}
            onMouseEnter={handleMouseEnterGlobal}
            onMouseLeave={handleMouseLeaveGlobal}
            isMobile={isMobile}
          />
          <Contacto
            isInteractive={isInteractiveGlobal}
            onMouseEnter={handleMouseEnterGlobal}
            onMouseLeave={handleMouseLeaveGlobal}
            isMobile={isMobile}
          />
        </div>
      </main>
    </>
  );
}

export default App;