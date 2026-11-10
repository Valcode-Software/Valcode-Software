import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react";
import './index.css'
import App from './App.jsx'
// Debe ir después de App para cargarse tras las utilidades de Tailwind
import './theme-dark.css'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <LanguageProvider>
      <App />
      <SpeedInsights />
      <Analytics />
    </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
