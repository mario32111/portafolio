import React, { useState, useEffect, useRef } from 'react';
import "./NavBar.css";
import logo1 from "../assets/LOGO.png";
import logo2 from "../assets/LOGO2.png";
import { FaSun, FaMoon } from 'react-icons/fa';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "INICIO", href: "inicio" },
    { label: "SOBRE MI", href: "sobre-mi" },
    { label: "TECNOLOGIAS", href: "tecnologias" },
    { label: "PROYECTOS", href: "proyectos" },
    { label: "CONTACTO", href: "contacto" }
];

interface Ripple {
    id: number;
    x: number;
    y: number;
    color: string;
}

// Definimos las props que NavBar espera de su padre (App.tsx)
interface NavBarProps {
    isInteractive: boolean; // Recibimos el estado global del cursor
    onMouseEnterGlobal: () => void; // Función para notificar a App.tsx de un mouseEnter
    onMouseLeaveGlobal: () => void; // Función para notificar a App.tsx de un mouseLeave
    isMobile: boolean; // Prop para saber si es móvil
}

const NavBar: React.FC<NavBarProps> = ({ isInteractive, onMouseEnterGlobal, onMouseLeaveGlobal, isMobile }) => {
    const [activeItem, setActiveItem] = useState<string>("INICIO");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // --- CAMBIO CLAVE AQUÍ: Inicializar isDarkMode directamente desde localStorage ---
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark'; // Devuelve true si el tema guardado es 'dark', de lo contrario false
    });
    // --- FIN DEL CAMBIO CLAVE ---

    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number; time: number; color: string }[]>([]);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    // Efecto para controlar la clase 'menu-open' en el body (sin cambios)
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    // --- CAMBIO CLAVE AQUÍ: Este efecto ahora maneja tanto la aplicación de clases como el guardado en localStorage ---
    // Se ejecutará en el montaje inicial (usando el valor de isDarkMode inicializado) y cada vez que isDarkMode cambie.
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Guarda el estado actual en localStorage
    }, [isDarkMode]);
    // --- ELIMINAMOS EL useEffect ANTERIOR DE CARGA INICIAL (el que tenía dependencias vacías []) ---
    // (Este estaba después del `useEffect` de `isMenuOpen`, ahora está unificado con el de `isDarkMode`.)


    // Efecto para el seguimiento del cursor y el rastro (sin cambios en la lógica de mobile)
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setCursorPosition({ x: clientX, y: clientY });

            setTrail(prevTrail => [
                ...prevTrail,
                { x: clientX, y: clientY, time: Date.now(), color: isDarkMode ? '#FFF' : '#000' }
            ]);
        };

        if (isMobile) {
            window.removeEventListener('mousemove', handleMouseMove);
            setTrail([]);
            return;
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDarkMode, isMobile]);

    // Efecto para limpiar el rastro (sin cambios en la lógica de mobile)
    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (!isMobile) {
            intervalId = setInterval(() => {
                setTrail(prevTrail => prevTrail.filter(p => Date.now() - p.time < 200));
            }, 16);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isMobile]);

    // Efecto para la animación de click (gotas) (sin cambios)
    useEffect(() => {
        const handleClickEffect = (event: MouseEvent) => {
            const newRipple: Ripple = {
                id: Date.now(),
                x: event.clientX,
                y: event.clientY,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
            };
            setRipples(prevRipples => [...prevRipples, newRipple]);

            setTimeout(() => {
                setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== newRipple.id));
            }, 600);
        };

        window.addEventListener('click', handleClickEffect);
        return () => {
            window.removeEventListener('click', handleClickEffect);
        };
    }, [isDarkMode]);

    const handleClick = (href: string, label: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setActiveItem(label);
        const sectionElement = document.getElementById(href.toLowerCase());
        sectionElement?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Efecto del scroll para la navbar (sin cambios)
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 10) {
                navbar?.classList.add("scrolled");
            } else {
                navbar?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // La clase CSS condicional para los elementos interactivos que dependen de isInteractive
    // Ahora solo se aplica si NO es móvil.
    return (
        <>
            {/* Solo renderiza el cursor personalizado y el rastro si NO es un dispositivo móvil */}
            {!isMobile && (
                <>
                    {/* Elemento del cursor principal */}
                    <div
                        ref={cursorRef}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                            pointerEvents: 'none',
                            zIndex: 1000,
                            width: isInteractive ? '24px' : '8px',
                            height: isInteractive ? '24px' : '8px',
                            borderRadius: '50%',
                            backgroundColor: isDarkMode ? '#FFF' : '#000',
                            transition: 'transform 0.05s ease-out, width 0.2s ease-out, height 0.2s ease-out, box-shadow 0.2s ease-out',
                            boxShadow: isInteractive ? `0 0 15px ${isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.4)'}` : 'none',
                        }}
                    />
                    {/* Elementos del rastro */}
                    {trail.map((point, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                transform: `translate(${point.x}px, ${point.y}px)`,
                                pointerEvents: 'none',
                                zIndex: 999,
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: point.color,
                                opacity: 1 - (Date.now() - point.time) / 200,
                                transition: 'opacity 0.1s ease-out',
                            }}
                        />
                    ))}
                </>
            )}

            {/* Renderizado de las gotas de agua/ondas de click (siempre se renderizan) */}
            {ripples.map(ripple => (
                <div
                    key={ripple.id}
                    className="click-ripple"
                    style={{
                        position: 'fixed',
                        top: ripple.y,
                        left: ripple.x,
                        backgroundColor: ripple.color,
                        pointerEvents: 'none',
                        zIndex: 998,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}

            <nav className="navbar">
                <div>
                    <img src={isDarkMode ? logo2 : logo1} alt="Logo" />
                </div>

                <button
                    className="hamburger-button"
                    onClick={toggleMenu}
                    onMouseEnter={!isMobile ? onMouseEnterGlobal : undefined}
                    onMouseLeave={!isMobile ? onMouseLeaveGlobal : undefined}
                >
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            onMouseEnter={!isMobile ? onMouseEnterGlobal : undefined}
                            onMouseLeave={!isMobile ? onMouseLeaveGlobal : undefined}
                        >
                            <a
                                href={`#${item.href}`}
                                className={activeItem === item.label ? "active" : ""}
                                onClick={(event) => handleClick(item.href, item.label, event)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <div
                        className="theme-switch-container"
                        onMouseEnter={!isMobile ? onMouseEnterGlobal : undefined}
                        onMouseLeave={!isMobile ? onMouseLeaveGlobal : undefined}
                    >
                        {isDarkMode ? <FaSun className="theme-icon sun-icon" /> : <FaMoon className="theme-icon moon-icon" />}
                        <label className="theme-switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                            <span className="slider round"></span>
                        </label>
                        {isDarkMode ? <FaMoon className="theme-icon moon-icon" /> : <FaSun className="theme-icon sun-icon" />}
                    </div>
                </ul>
            </nav>

            {isMenuOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default NavBar;