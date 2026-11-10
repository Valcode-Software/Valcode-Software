import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const getSafeLanguage = (lang) => {
  return translations[lang] ? lang : 'es';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('valcodeLanguage') : null;
    return getSafeLanguage(savedLanguage || 'es');
  });

  // Recupera el idioma del almacenamiento local si existe
  useEffect(() => {
    const savedLanguage = localStorage.getItem('valcodeLanguage');
    if (savedLanguage) {
      setLanguage(getSafeLanguage(savedLanguage));
    }
  }, []);

  const changeLanguage = (lang) => {
    const nextLanguage = getSafeLanguage(lang);
    setLanguage(nextLanguage);
    localStorage.setItem('valcodeLanguage', nextLanguage);
  };

  const t = (key) => {
    const currentLang = translations[language] ? language : 'es';
    const currentTranslations = translations[currentLang] || translations.es || {};
    return currentTranslations[key] || translations.es[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
