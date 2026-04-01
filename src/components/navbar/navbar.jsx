import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RiLinkedinFill, RiSearchLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import "./navbar.css";
import logo from "../../assets/img/Logo_Valcode_Software_White.png";

const Navbar = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ES");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setIsLangMenuOpen(false);
  };

  // 🔥 EFECTO HIDE / SHOW NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Evita micro movimientos
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scroll hacia abajo → ocultar
        setShowNavbar(false);
        setIsSearchOpen(false);
      } else {
        // Scroll hacia arriba → mostrar
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "" : "navbar--hidden"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Inicio</li>
        <li>Servicios</li>
        <li onClick={() => navigate("/nosotros")}>Nosotros</li>
        <li onClick={() => navigate("/proyectos")}>Proyectos</li>
        <li onClick={() => navigate("/contacto")}>Contacto</li>
      </ul>

      <div
        className="language-selector"
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
      >
        <div className="selected-lang">{selectedLang}</div>
        {isLangMenuOpen && (
          <ul className="lang-dropdown">
            <li onClick={() => handleLangSelect("ES")}>Español</li>
            <li onClick={() => handleLangSelect("EN")}>English</li>
          </ul>
        )}
      </div>

      <div
        className="search-icon"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <RiSearchLine />
      </div>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <RiLinkedinFill />
      </a>

      {isSearchOpen && (
        <div className="search-dropdown">
          <div className="search-input-wrapper">
            <RiSearchLine className="search-input-icon" />
            <input type="text" placeholder="Buscar..." autoFocus />
          </div>
        </div>
      )}

      {/* ICONO MENU MOBILE */}
      <div
        className="mobile-menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/");
              }}
            >
              Inicio
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/nosotros");
              }}
            >
              Nosotros
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/proyectos");
              }}
            >
              Proyectos
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/servicios");
              }}
            >
              Servicios
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contacto");
              }}
            >
              Contacto
            </li>
          </ul>

          <div className="mobile-separator"></div>

          <div className="mobile-actions">
            <div
              className="mobile-lang-selector"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span className="current-lang">
                {selectedLang} <span style={{ fontSize: "12px" }}>▼</span>
              </span>

              {isLangMenuOpen && (
                <div className="mobile-dropdown">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLangSelect("ES");
                    }}
                  >
                    Español
                  </span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLangSelect("EN");
                    }}
                  >
                    English
                  </span>
                </div>
              )}
            </div>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
