import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { RiLinkedinFill, RiSearchLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import "./navbar.css";
import logo from "../../assets/img/valcode_logo_all_white.png";

const Navbar = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const selectedLang = language === 'en' ? 'EN' : 'ES';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const handleLangSelect = (lang) => {
    changeLanguage(lang.toLowerCase());
    setIsLangMenuOpen(false);
  };

  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const navItems = [
    { id: "inicio", label: t("nav_inicio"), path: "/" },
    { id: "servicios", label: t("nav_servicios"), path: "/servicios" },
    { id: "nosotros", label: t("nav_nosotros"), path: "/nosotros" },
    { id: "proyectos", label: t("nav_proyectos"), path: "/proyectos" },
    { id: "contacto", label: t("nav_contacto"), path: "/contacto" },
  ];

  useEffect(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) {
      setFilteredResults([]);
      return;
    }

    const results = navItems.filter((item) => {
      return (
        item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)
      );
    });

    setFilteredResults(results.slice(0, 6));
  }, [searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSelect = (path) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchValue("");
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filteredResults.length > 0) {
        handleSearchSelect(filteredResults[0].path);
      } else if (searchValue.trim()) {
        const q = searchValue.trim().toLowerCase();
        const exact = navItems.find((it) => it.id === q);
        if (exact) handleSearchSelect(exact.path);
      }
    }
  };

  // EFECTO HIDE / SHOW NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
        setIsSearchOpen(false);
      } else {
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
        <li onClick={() => navigate("/")}>{t("nav_inicio")}</li>
        <li onClick={() => navigate("/servicios")}>{t("nav_servicios")}</li>
        <li onClick={() => navigate("/nosotros")}>{t("nav_nosotros")}</li>
        <li onClick={() => navigate("/proyectos")}>{t("nav_proyectos")}</li>
        <li onClick={() => navigate("/contacto")}>{t("nav_contacto")}</li>
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
            <input
              type="text"
              placeholder={t("nav_buscar")}
              autoFocus
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
          </div>

          {filteredResults.length > 0 && (
            <ul className="search-results">
              {filteredResults.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSearchSelect(item.path)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
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
              {t("nav_inicio")}
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/nosotros");
              }}
            >
              {t("nav_nosotros")}
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/proyectos");
              }}
            >
              {t("nav_proyectos")}
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/servicios");
              }}
            >
              {t("nav_servicios")}
            </li>
            <li
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contacto");
              }}
            >
              {t("nav_contacto")}
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
              href="https://www.linkedin.com/in/valcode-software/"
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
