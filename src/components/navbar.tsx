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

// Nueva interfaz para las propiedades de cada "gota"
interface Ripple {
    id: number;
    x: number;
    y: number;
    color: string;
}

const NavBar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>("INICIO");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number; time: number; color: string }[]>([]);
    const [isInteractive, setIsInteractive] = useState(false);
    // Nuevo estado para almacenar las gotas
    const [ripples, setRipples] = useState<Ripple[]>([]); // <--- AÑADIR ESTA LÍNEA

    // Efecto para controlar la clase 'menu-open' en el body
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    // Efecto para aplicar las clases de tema y guardar en localStorage
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Efecto para cargar la preferencia de tema al inicio
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    // Efecto para el seguimiento del cursor y el rastro
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setCursorPosition({ x: clientX, y: clientY });

            // Añadir el punto actual al rastro
            setTrail(prevTrail => [
                ...prevTrail,
                { x: clientX, y: clientY, time: Date.now(), color: isDarkMode ? '#FFF' : '#000' }
            ]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Ocultar el cursor del sistema
        // document.body.style.cursor = 'none'; // Esto ya lo manejas con `* { cursor: none !important; }` en CSS

        const cleanup = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            // document.body.style.cursor = 'default'; // No es necesario si el cursor se oculta globalmente
        };

        return cleanup;
    }, [isDarkMode]);

    // Efecto para limpiar el rastro
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTrail(prevTrail => prevTrail.filter(p => Date.now() - p.time < 200));
        }, 16);

        return () => clearInterval(intervalId);
    }, []);

    // EFECTO PARA LA ANIMACIÓN DE CLICK (GOTAS) <--- AÑADIR ESTE NUEVO useEffect
    useEffect(() => {
        const handleClickEffect = (event: MouseEvent) => {
            const newRipple: Ripple = {
                id: Date.now(), // Un ID único para cada gota
                x: event.clientX,
                y: event.clientY,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' // Color de la gota según el tema
            };
            setRipples(prevRipples => [...prevRipples, newRipple]);

            // Eliminar la gota del DOM después de que su animación termine
            setTimeout(() => {
                setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== newRipple.id));
            }, 600); // Duración de la animación en CSS
        };

        window.addEventListener('click', handleClickEffect);

        return () => {
            window.removeEventListener('click', handleClickEffect);
        };
    }, [isDarkMode]); // Dependencia para que el color de la gota se actualice con el tema

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

    // Efecto del scroll para la navbar
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

    const handleMouseEnter = () => {
        setIsInteractive(true);
    };

    const handleMouseLeave = () => {
        setIsInteractive(false);
    };

    return (
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
                    width: isInteractive ? '24px' : '8px', // Cambia el tamaño
                    height: isInteractive ? '24px' : '8px',
                    borderRadius: '50%',
                    backgroundColor: isDarkMode ? '#FFF' : '#000',
                    transition: 'transform 0.05s ease-out, width 0.2s ease-out, height 0.2s ease-out', // Añade transiciones
                    boxShadow: isInteractive ? '0 0 15px rgba(255, 255, 255, 0.8)' : 'none', // Añade sombra
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

            {/* Renderizado de las gotas de agua/ondas de click */}
            {/* <--- AÑADIR ESTE BLOQUE */}
            {ripples.map(ripple => (
                <div
                    key={ripple.id}
                    className="click-ripple" // Aplicamos esta clase para los estilos CSS
                    style={{
                        position: 'fixed',
                        top: ripple.y,
                        left: ripple.x,
                        backgroundColor: ripple.color,
                        pointerEvents: 'none', // Crucial para que no bloquee los clics reales
                        zIndex: 998, // Asegúrate de que esté debajo del cursor y el rastro
                        transform: 'translate(-50%, -50%)', // Centra la gota en el punto del click
                    }}
                />
            ))}
            {/* FIN DEL BLOQUE A AÑADIR */}


            <nav className="navbar">
                <div>
                    <img src={isDarkMode ? logo2 : logo1} alt="Logo" />
                </div>

                <button
                    className="hamburger-button"
                    onClick={toggleMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a
                                href={`#${item.href}`}
                                className={activeItem === item.label ? "active" : ""}
                                onClick={(event) => handleClick(item.href, item.label, event)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <div className="theme-switch-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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