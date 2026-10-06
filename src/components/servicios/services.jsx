import { HiArrowUpRight } from "react-icons/hi2";
import img1 from "../../assets/img/automatizacion-inteligente.jpg";
import img2 from "../../assets/img/plataformas-digitales.jpg";
import img3 from "../../assets/img/ia-para-negocios.jpg";
import img4 from "../../assets/img/asistentes-virtuales.png";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, TrendingUp, Award, Clock } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t("servicios_serv1_title") || "Automatización",
      desc: t("servicios_serv1_desc") || "Optimizamos procesos clave con herramientas inteligentes.",
      img: img1,
      tag: "Automatización"
    },
    {
      title: t("servicios_serv2_title") || "Plataformas Web",
      desc: t("servicios_serv2_desc") || "Desarrollo de ecosistemas digitales a medida.",
      img: img2,
      tag: "Plataformas Web"
    },
    {
      title: t("servicios_serv3_title") || "Inteligencia Artificial",
      desc: t("servicios_serv3_desc") || "Modelos de machine learning que potencian tu negocio.",
      img: img3,
      tag: "Inteligencia Artificial"
    },
    {
      title: t("servicios_serv4_title") || "Asistentes Virtuales",
      desc: t("servicios_serv4_desc") || "Bots conversacionales para atención ininterrumpida.",
      img: img4,
      tag: "Asistentes & Bots"
    },
  ];

  // Métricas corporativas orientadas a resultados
  const corporateStats = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      value: "+2",
      label: "Proyectos ejecutados con éxito"
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      value: "1 Año",
      label: "De experiencia en el mercado"
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      value: "100%",
      label: "Enfoque en escalabilidad y tecnología"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      value: "24/7",
      label: "Sistemas automatizados y activos"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-28 bg-white overflow-hidden font-sans border-t border-slate-100">
      
      {/* Patrón de puntos minimalista de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* TÍTULO Y HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("servicios_subtitle") || "Soluciones Tecnológicas de Vanguardia"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 sm:mb-6 tracking-tight"
          >
            {t("servicios_title") || "Nuestros Servicios"}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-light leading-relaxed"
          >
            {t("servicios_desc") || "Impulsamos la transformación digital de tu empresa mediante software a la medida, automatización inteligente y agentes de IA avanzados."}
          </motion.p>
        </div>

        {/* BLOQUE DE ESTADÍSTICAS CORPORATIVAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20">
          {corporateStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-slate-300 transition-colors"
            >
              <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100 shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950">{stat.value}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="
                group relative p-6 sm:p-8 lg:p-10 rounded-3xl
                bg-white border border-slate-200/80
                hover:border-slate-400/60
                transition-all duration-500
                hover:shadow-xl md:hover:-translate-y-1
                min-h-[280px] sm:min-h-[320px]
                flex flex-col justify-between
                overflow-hidden
              "
            >
              {/* IMAGEN DE FONDO EN HOVER (Con un filtro oscuro elegante) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-slate-950/85 z-10 backdrop-blur-[2px]" />
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Contenido Superior (Tag y Título/Desc) */}
              <div className="relative z-10">
                <span className="inline-block text-[10px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-white/10 group-hover:text-white transition-colors mb-3 sm:mb-4">
                  {service.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-slate-900 group-hover:text-white transition-colors mb-2 sm:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Botón Flotante Inferior */}
              <div className="relative z-10 flex justify-between items-center mt-6 sm:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/10 transition-colors">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-400 group-hover:text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 group-hover:text-blue-400" /> 
                  <span className="hidden sm:inline">Solución Empresarial</span>
                  <span className="sm:hidden">Empresarial</span>
                </span>

                <Link
                  to="/servicios"
                  className="
                    w-10 h-10 sm:w-11 sm:h-11 rounded-full
                    bg-slate-100 text-slate-900 border border-slate-200
                    flex items-center justify-center
                    group-hover:bg-white group-hover:text-blue-600 group-hover:border-white
                    transition-all duration-300 shadow-sm
                  "
                >
                  <HiArrowUpRight className="text-base sm:text-lg" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}