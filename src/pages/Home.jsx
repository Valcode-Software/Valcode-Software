import { motion } from "framer-motion";
import Hero from "../components/hero/hero";
import Estadisticas from "../components/estadisticas/Estadisticas";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Services from "../components/servicios/services";
import Aliados from "../components/aliados/strategicallybadge";
import PorqueValcode from "../components/porque/porque";
import IndustriesSection from "../components/industrias/industriessection";

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

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ScrollReveal>
                <Estadisticas />
            </ScrollReveal>
            <ScrollReveal>
                <PorqueValcode />
            </ScrollReveal>
            <ScrollReveal>
                <Tecnologias />
            </ScrollReveal>
            <Services />
            <ScrollReveal>
                <Aliados />
            </ScrollReveal>
            <ScrollReveal>
                <IndustriesSection />
            </ScrollReveal>
        </div>
    );
};

export default Home;