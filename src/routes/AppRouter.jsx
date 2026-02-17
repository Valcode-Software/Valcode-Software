import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/hero";
import Estadisticas from "../components/estadisticas/Estadisticas";   
import Tecnologias from "../components/tecnologias/Tecnologias";
import Services from "../components/servicios/services";
import Aliados from "../components/aliados/strategicallybadge";
import Nosotros from "../pages/Nosotros";

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
                <Tecnologias />
              </ScrollReveal>
              <Services />
              <ScrollReveal>
                <Aliados />
              </ScrollReveal>
            </div>
          } />
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
