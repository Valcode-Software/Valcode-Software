import React from "react";
import amcoLogo from "../../assets/img/Amco.png";
import bussines from "../../assets/img/ispowering.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { motion as Motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function StrategicAllyBadge() {
  const { t } = useLanguage();
  
  const allies = [
    {
      name: "Constructora Amco",
      logo: amcoLogo,
      url: "https://www.constructoraamco.com/",
      tag: t("aliados_tag_estrategico")
    },
    {
      name: "Ispowering",
      logo: bussines,
      url: "https://www.ispoweringbusiness.com/",
      tag: t("aliados_tag_tecnologico")
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden font-sans border-t border-slate-100">
      
      {/* Patrón de puntos técnico de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Badge superior */}
        <Motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t("aliados_nuestro") || "Nuestros Aliados"}</span>
        </Motion.div>

        {/* Título */}
        <Motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight"
        >
          {t("aliados_titulo") || "Empresas que confían en nuestra innovación"}
        </Motion.h2>

        {/* Texto opcional descriptivo */}
        <Motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base font-light max-w-xl mb-12"
        >
          {t("aliados_texto") || "Construimos relaciones de largo plazo impulsando el crecimiento tecnológico de nuestros socios estratégicos."}
        </Motion.p>

        {/* Tarjetas de los Aliados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl justify-center items-center">
          {allies.map((ally, index) => (
            <Motion.a
              key={index}
              href={ally.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative flex flex-col items-center justify-center bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Resplandor decorativo en hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className="relative z-10 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-6 group-hover:text-blue-600 transition-colors">
                {ally.tag}
              </span>

              <div className="relative z-10 h-16 flex items-center justify-center w-full">
                <img
                  src={ally.logo}
                  alt={ally.name}
                  className="max-h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{t("aliados_ver_sitio")} →</span>
              </div>
            </Motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}