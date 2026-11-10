import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "valcode-theme";
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {}, setTheme: () => {} });

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* almacenamiento bloqueado */
  }
  return "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    // Desactiva transiciones un instante para que el cambio sea limpio
    root.classList.add("theme-switching");
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    const id = window.setTimeout(() => root.classList.remove("theme-switching"), 60);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* almacenamiento bloqueado */
    }
    return () => window.clearTimeout(id);
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
