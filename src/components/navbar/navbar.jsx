import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { RiLinkedinFill, RiSearchLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

import { US, ES } from "country-flag-icons/react/3x2";
import logo from "../../assets/img/valcode_logo_all_white.png";

const Navbar = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const selectedLang = language === "en" ? "EN" : "ES";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);

  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const handleLangSelect = (lang) => {
    changeLanguage(lang.toLowerCase());
    setIsLangMenuOpen(false);
  };

  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleCloseTopBar = () => {
    setShowTopBar(false);
    setShowNavbar(true);
  };

  const mainNavItems = [
    { id: "inicio", label: t("nav_inicio"), path: "/" },
    { id: "servicios", label: t("nav_servicios"), path: "/servicios" },
    { id: "nosotros", label: t("nav_nosotros"), path: "/nosotros" },
    { id: "proyectos", label: t("nav_proyectos"), path: "/proyectos" },
  ];
  const contactItem = { id: "contacto", label: t("nav_contacto"), path: "/contacto" };
  const allNavItems = [...mainNavItems, contactItem];

  useEffect(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) {
      setFilteredResults([]);
      return;
    }

    const results = allNavItems.filter((item) => {
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
    setIsMobileMenuOpen(false);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filteredResults.length > 0) {
        handleSearchSelect(filteredResults[0].path);
      } else if (searchValue.trim()) {
        const q = searchValue.trim().toLowerCase();
        const exact = allNavItems.find((it) => it.id === q);
        if (exact) handleSearchSelect(exact.path);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowTopBar(false);
        setShowNavbar(false);
        setIsSearchOpen(false);
        setIsLangMenuOpen(false);
      } else {
        setShowTopBar(true);
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP BAR ULTRA MINIMALISTA */}
      <div
        className={`hidden md:flex fixed top-0 left-0 w-full h-10 bg-slate-950 items-center border-b border-white/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[60] ${
          showTopBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-end items-center gap-4 text-slate-300 text-xs font-medium tracking-wider">
          <a
            href="https://www.linkedin.com/in/valcode-software/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-slate-200 transition-colors duration-300 group"
          >
            <RiLinkedinFill className="text-[15px] group-hover:scale-110 transition-transform duration-300" />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={handleCloseTopBar}
            className="flex items-center justify-center text-white/80 transition-all duration-300 hover:text-white hover:rotate-90 ml-1"
            aria-label="Cerrar barra superior"
          >
            <HiX className="text-lg leading-none" />
          </button>
        </div>
      </div>

      {/* 2. BARRA PRINCIPAL */}
      <nav
        className={`fixed ${
          showTopBar ? "top-0 md:top-10" : "top-0"
        } left-0 w-full z-50 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] font-sans ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Contenedor centralizado para monitores grandes */}
        <div className="w-full h-[90px] max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* LOGO */}
          <div className="flex-1 flex justify-start">
            <div 
              className="cursor-pointer flex items-center transition-transform duration-500 hover:scale-105" 
              onClick={() => navigate("/")}
            >
              <img 
                src={logo} 
                alt="Logo Valcode" 
                className="h-16 md:h-28 w-auto object-contain invert opacity-90 transition-all hover:opacity-100" 
              />
            </div>
          </div>

          {/* ENLACES DESKTOP */}
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-2 list-none m-0 p-0">
            {mainNavItems.map((item) => (
              <li
                key={item.id}
                onClick={() => navigate(item.path)}
                className="relative px-5 py-2 cursor-pointer text-[0.95rem] font-semibold text-slate-800 transition-all duration-300 hover:text-blue-600 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-blue-50/0 rounded-full group-hover:bg-blue-50 transition-all duration-300 -z-10 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
              </li>
            ))}
          </ul>

          {/* ACCIONES DESKTOP */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            {/* Selector de Idioma */}
            <div
              className="relative cursor-pointer group"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 text-sm font-semibold text-slate-700 hover:text-slate-950">
                <div className="w-4 h-3 flex items-center justify-center rounded-[2px] overflow-hidden shadow-sm">
                  {selectedLang === "EN" ? <US /> : <ES />}
                </div>
                <span>{selectedLang}</span>
                <span className="text-[9px] ml-0.5 text-slate-400 group-hover:text-slate-600 transition-colors">▼</span>
              </div>
              
              <div
                className={`absolute top-[130%] right-0 bg-white ring-1 ring-black/5 rounded-xl min-w-[140px] shadow-xl p-1.5 transition-all duration-400 origin-top-right ${
                  isLangMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div
                  className="px-3 py-2.5 text-sm text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center gap-3"
                  onClick={(e) => { e.stopPropagation(); handleLangSelect("ES"); }}
                >
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm"><ES /></div> Español
                </div>
                <div
                  className="px-3 py-2.5 text-sm text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center gap-3"
                  onClick={(e) => { e.stopPropagation(); handleLangSelect("EN"); }}
                >
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm"><US /></div> English
                </div>
              </div>
            </div>

            {/* Buscador Circular */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 shadow-sm ${
                isSearchOpen ? "border-blue-600 text-blue-600 bg-blue-50" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <RiSearchLine className="text-[17px]" />
            </div>

            {/* Botón de Contacto */}
            <button
              onClick={() => navigate(contactItem.path)}
              className="ml-2 px-6 py-2.5 rounded-full border border-slate-800 text-slate-800 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-[1.02] active:scale-95"
            >
              {contactItem.label}
            </button>
          </div>

          {/* BOTÓN MENÚ MÓVIL (Reubicado dentro del flex en lugar de absolute) */}
          <div
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-2xl text-slate-800 cursor-pointer transition-transform duration-300 active:scale-90 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* DROPDOWN BUSCADOR DESKTOP */}
        <div
          className={`absolute top-[90px] right-6 xl:right-[15%] w-[340px] bg-white ring-1 ring-black/5 rounded-2xl shadow-xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top-right ${
            isSearchOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex items-center px-4 py-4 border-b border-slate-100 bg-slate-50/50">
            <RiSearchLine className="text-blue-600 text-xl mr-3" />
            <input
              type="text"
              placeholder={t("nav_buscar")}
              autoFocus={isSearchOpen}
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              className="bg-transparent border-none text-slate-800 text-[15px] w-full outline-none placeholder:text-slate-400 font-medium"
            />
            {searchValue && (
              <button onClick={() => setSearchValue("")} className="text-slate-400 hover:text-slate-600 transition-colors">
                <HiX />
              </button>
            )}
          </div>

          <div className="p-2">
            {filteredResults.length > 0 ? (
              <ul className="max-h-[250px] overflow-y-auto m-0 list-none custom-scrollbar">
                {filteredResults.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSearchSelect(item.path)}
                    className="px-4 py-3 my-0.5 text-sm font-medium text-slate-600 rounded-xl cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                    {item.label}
                  </li>
                ))}
              </ul>
            ) : searchValue ? (
              <div className="px-4 py-8 text-center text-sm text-slate-500 font-medium">
                No hay resultados
              </div>
            ) : null}
          </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL */}
        <div
          className={`absolute top-[90px] left-4 right-4 bg-white ring-1 ring-black/5 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100 scale-100 translate-y-0" : "max-h-0 opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col list-none m-0 p-4 gap-1">
            {allNavItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate(item.path);
                }}
                className="px-6 py-4 text-base font-semibold text-slate-700 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 rounded-2xl flex justify-between items-center group border-l-4 border-transparent hover:border-blue-600"
              >
                {item.label}
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-blue-600">
                  →
                </span>
              </li>
            ))}
          </ul>

          <div className="h-[1px] bg-slate-100 mx-6"></div>

          {/* Footer Móvil */}
          <div className="flex justify-between items-center p-6 bg-slate-50/50">
            <div className="relative font-bold text-[14px]">
              <div 
                className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <div className="w-5 h-3.5 flex items-center justify-center rounded-[2px] overflow-hidden shadow-sm">
                  {selectedLang === "EN" ? <US /> : <ES />}
                </div>
                {selectedLang}
                <span className="text-[10px]">▼</span>
              </div>

              {/* Selector idioma móvil */}
              <div
                className={`absolute bottom-[120%] left-0 bg-white ring-1 ring-black/5 rounded-xl min-w-[140px] shadow-xl p-1.5 transition-all duration-300 ${
                  isLangMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                }`}
              >
                <div
                  className="px-3 py-2.5 text-sm text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center gap-3"
                  onClick={() => handleLangSelect("ES")}
                >
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden"><ES /></div> Español
                </div>
                <div
                  className="px-3 py-2.5 text-sm text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center gap-3"
                  onClick={() => handleLangSelect("EN")}
                >
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden"><US /></div> English
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/valcode-software/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-md"
            >
              <RiLinkedinFill className="text-lg" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;