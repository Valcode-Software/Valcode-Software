import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/hero";
import Estadisticas from "../components/estadisticas/Estadisticas"; 
import Tecnologias from "../components/tecnologias/Tecnologias";
import Services from "../components/servicios/services";
import Aliados from "../components/aliados/strategicallybadge";
import Nosotros from "../pages/nosotros";
import ContactPage from "../pages/contacto";
import Terminos from "../pages/tyc/tyc";
import Politica from "../pages/politicadeseguirdad/politica";

// Componente de Carga (Loader)
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#020617]">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <div className="flex flex-col w-full">
              <Hero />
              <ScrollReveal>
                <Estadisticas />
              </ScrollReveal>
              <ScrollReveal>
                <Tecnologias />
              </ScrollReveal>
              <Services />
              <ScrollReveal>
                <Aliados />
              </ScrollReveal>
            </div>
          } />
          <Route path="/nosotros" element={
            <Suspense fallback={<Loading />}>
              <Nosotros />
            </Suspense>
          } />
          <Route path="/contacto" element={
            <Suspense fallback={<Loading />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="/terminos" element={
            <Suspense fallback={<Loading />}>
              <Terminos />
            </Suspense>
          } />
          <Route path="/privacidad" element={
            <Suspense fallback={<Loading />}>
              <Politica />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
