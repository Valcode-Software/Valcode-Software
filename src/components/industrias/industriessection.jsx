import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car, Landmark, GraduationCap, Film,
  Utensils, Building2, HeartPulse, Hotel,
  Globe2, ArrowRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IndustriesSection = () => {
  const { t } = useLanguage();

  const industries = useMemo(() => [
    { id: "auto", title: t("industries_automotriz") || "Automotriz", icon: <Car strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "fin", title: t("industries_finanzas") || "Finanzas", icon: <Landmark strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "edu", title: t("industries_educacion") || "Educación", icon: <GraduationCap strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "med", title: t("industries_medios") || "Medios", icon: <Film strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "ali", title: t("industries_alimentos") || "Alimentos", icon: <Utensils strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "gob", title: t("industries_gobierno") || "Gobierno", icon: <Building2 strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "sal", title: t("industries_salud") || "Salud", icon: <HeartPulse strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { id: "hot", title: t("industries_hotelera") || "Hotelería", icon: <Hotel strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" /> },
  ], [t]);

  return (
    <section className="relative w-full py-16 lg:py-28 bg-slate-50 overflow-hidden font-sans border-t border-slate-100">
      
      {/* Fondo técnico minimalista (Patrón de puntos) */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm"
          >
            <Globe2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("industries_tag") || "Impacto Transversal"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 sm:mb-6 tracking-tight"
          >
            {t("industries_title") || "Industrias que Transformamos"}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-light leading-relaxed"
          >
            {t("industries_subtitle") || "Llevamos innovación y eficiencia a múltiples sectores, adaptando nuestras soluciones de software e inteligencia artificial a los retos únicos de cada negocio."}
          </motion.p>
        </div>

        {/* Grid de Industrias (Responsive: 2 columnas en móvil, 4 en desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:hover:-translate-y-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-slate-50 text-slate-500 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-blue-600">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Botón Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-[15px] sm:text-base transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            {t("industries_contactanos") || "Impulsar mi industria"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesSection;