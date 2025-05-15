import { useEffect, useState, type FunctionComponent } from "react";
import "./NavBar.css";
import logo1 from "../assets/LOGO.png";
import logo2 from "../assets/LOGO2.png";
import { FaSun, FaMoon } from 'react-icons/fa'; // Importa los iconos de react-icons

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  onNavigate: (section: string) => void;
}

const navItems: NavItem[] = [
  { label: "INICIO", href: "inicio" },
  { label: "PROYECTOS", href: "proyectos" },
  { label: "SOBRE MI", href: "sobremi" },
  { label: "CONTACTO", href: "contacto" }
];

const NavBar: FunctionComponent<NavBarProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState<string>("INICIO");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Nuevo estado para el modo oscuro

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  const handleClick = (label: string, href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveItem(label);
    onNavigate(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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

  return (
    <>
      <nav className="navbar">
        <div>
          <img src={isDarkMode ? logo2 : logo1} alt="Logo" />
        </div>



        <button className="hamburger-button" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></div>
        </button>

        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.href}`}
                className={activeItem === item.label ? "active" : ""}
                onClick={(event) => handleClick(item.label, item.href, event)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="theme-switch-container">
            {isDarkMode ? <FaMoon className="theme-icon moon-icon" /> : <FaSun className="theme-icon sun-icon" />}            <label className="theme-switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider round"></span>
            </label>
          </div>
        </ul>

      </nav>

      {isMenuOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}

      <main className="content">
        <div>
        </div>
      </main>
    </>
  );
};

export default NavBar;