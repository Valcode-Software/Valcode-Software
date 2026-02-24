import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

// Lazy Loading de Componentes y Páginas
const Hero = lazy(() => import("../components/hero/hero"));
const Estadisticas = lazy(() => import("../components/estadisticas/Estadisticas"));
const Tecnologias = lazy(() => import("../components/tecnologias/Tecnologias"));
const Services = lazy(() => import("../components/servicios/services"));
const Aliados = lazy(() => import("../components/aliados/strategicallybadge"));
const Nosotros = lazy(() => import("../pages/nosotros"));
const ContactPage = lazy(() => import("../pages/contacto"));
const Terminos = lazy(() => import("../pages/tyc/tyc"));
const Politica = lazy(() => import("../pages/politicadeseguirdad/politica"));

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
            <Suspense fallback={<Loading />}>
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
            </Suspense>
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
