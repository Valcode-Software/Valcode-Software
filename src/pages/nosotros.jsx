import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { SiN8N, SiDocker, SiFastapi, SiPostgresql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import img1 from "../assets/img/somos-nosotros.png";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

const Card = ({ year, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full max-w-[340px] sm:min-h-[260px] flex flex-col p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-1.5"
    >
      <div className="flex-1">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-mono font-semibold mb-3 sm:mb-4">
          AÑO {year}
        </span>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">{title}</h3>

        <p className="text-slate-600 text-sm leading-relaxed font-light">{desc}</p>
      </div>

      <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-500">
        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
        <span>Hito Valcode Software</span>
      </div>
    </motion.div>
  );
};

const Nosotros = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-slate-900 min-h-screen py-16 lg:py-28 relative overflow-hidden font-sans border-t border-slate-100">
      
      {/* Fondo técnico con sutil cuadrícula */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* ================= HERO / SOBRE NOSOTROS ================= */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 lg:mb-28">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-5 sm:mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t("us_subtitle") || "Nuestra Esencia & Visión"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 sm:mb-6 tracking-tight leading-[1.15]">
              {t("us_title") || "Transformamos el futuro digital de las empresas."}
            </h1>

            <p className="text-slate-700 text-sm sm:text-base mb-4 sm:mb-6 font-medium leading-relaxed">
              {t("us_purpose") || "Somos una firma de ingeniería de software y desarrollo de agentes de IA enfocada en construir soluciones escalables, robustas y de alto impacto global."}
            </p>

            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8">
              {t("us_desc1") || "Ayudamos a las organizaciones a automatizar sus operaciones y escalar su tecnología mediante arquitecturas limpias y metodologías de vanguardia."}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Código Limpio y Escalable
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Cpu className="w-4 h-4 text-blue-600" /> Agentes IA Integrados
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center order-first lg:order-last mb-8 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
              
              <div className="relative w-full h-full rounded-full p-2 bg-white border border-slate-200 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={img1}
                    alt="Equipo Valcode Software"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>


        {/* ================= TIMELINE DE EVOLUCIÓN ================= */}
        <div className="mb-16 lg:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 mb-3 tracking-tight">
              Nuestra Trayectoria
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light px-4">
              Evolución constante consolidando proyectos de alto rendimiento tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            <Card
              year="2024"
              title={t("us_card1_title") || "Fundación e Innovación"}
              desc={t("us_card1_desc") || "Inicios enfocados en el desarrollo de software a la medida y restructuración de plataformas empresariales."}
            />
            <Card
              year="2025"
              title={t("us_card2_title") || "Expansión Cloud & APIs"}
              desc={t("us_card2_desc") || "Consolidación de alianzas estratégicas e integración de arquitecturas robustas en AWS y Azure."}
            />
            <Card
              year="2026"
              title={t("us_card3_title") || "Era de Agentes IA & Workflows"}
              desc={t("us_card3_desc") || "Lanzamiento de flujos autónomos avanzados y plataformas globales de inversión y matchmaking."}
            />
          </div>
        </div>


        {/* ================= TECH STACK / ECOSISTEMA ================= */}
        <div className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 border-t border-slate-200">
          
          <span className="text-[10px] sm:text-xs font-mono text-blue-600 uppercase tracking-widest block mb-3">
            ECOSISTEMA DE INGENIERÍA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 mb-3 tracking-tight">
            {t("us_tech_title") || "Tecnologías que utilizamos"}
          </h2>
          <p className="text-slate-600 font-light text-sm sm:text-base mb-10 sm:mb-12 px-4">
            {t("us_tech_subtitle") || "Nuestras herramientas para el éxito y la escalabilidad empresarial."}
          </p>

          {/* Grid adaptativo: 1 col móvil pequeño, 2 tablets, 4 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { Icon: SiN8N, name: "n8n Workflows", color: "text-[#FF6D5A]" },
              { Icon: SiFastapi, name: "FastAPI Python", color: "text-[#009688]" },
              { Icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" },
              { Icon: FaReact, name: "React Frontend", color: "text-[#61DAFB]" },
              { Icon: FaNodeJs, name: "Node.js Core", color: "text-[#339933]" },
              { Icon: SiDocker, name: "Docker Containers", color: "text-[#2496ED]" },
              { Icon: FaAws, name: "AWS Cloud", color: "text-[#FF9900]" },
              { Icon: VscAzure, name: "Azure DevOps", color: "text-[#0078D4]" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-left"
              >
                <div className={`p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0 ${tech.color}`}>
                  <tech.Icon size={24} className="sm:w-[26px] sm:h-[26px]" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{tech.name}</h4>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono block truncate">Production Ready</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Nosotros;