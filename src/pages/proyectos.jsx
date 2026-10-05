import React, { useEffect, useState } from "react";
import amcoImg from "../assets/img/proyecto amco.jpeg";
import ispoweringImg from "../assets/img/ispoweirn1.png";
import { useLanguage } from "../context/LanguageContext";
import { HiArrowUpRight } from "react-icons/hi2";
import { Sparkles, Clock, Rocket, ShieldCheck } from "lucide-react";
import { motion as Motion } from "framer-motion";

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  // Forzar que la página inicie desde arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <section
      className="relative min-h-screen pt-32 pb-24 px-6 bg-white overflow-hidden font-sans border-t border-slate-100"
      aria-label="Sección de proyectos"
    >
      {/* Fondo técnico con sutil cuadrícula */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("proj_subtitle") || "Nuestra Innovación & Portafolio"}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight">
            {t("proj_title") || "Proyectos Destacados"}
          </h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {t("proj_desc") || "Explora las plataformas de software de alto impacto y las soluciones basadas en inteligencia artificial que estamos construyendo."}
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* ================= PROYECTO 1: AMCO ================= */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Imagen del proyecto */}
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 aspect-video flex items-center justify-center mb-6 relative">
                <img
                  src={amcoImg}
                  alt="Proyecto AMCO"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                  Plataforma Web
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {t("proj_card1") || "Plataforma Web Empresarial - AMCO"}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed font-light">
                {t("proj_card1_desc") || "Modernización y reestructuración completa de la presencia digital para optimizar procesos y recursos técnicos."}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  React
                </span>
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  Tailwind CSS
                </span>
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  UI/UX Architecture
                </span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 items-center justify-between">
              <a
                href="https://www.amcoltda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition shadow-md flex items-center gap-2"
              >
                {t("proj_btn_view") || "Visitar Sitio"} <HiArrowUpRight />
              </a>

              <button
                onClick={() => setOpenModal1(true)}
                className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
              >
                {t("proj_btn_more") || "Ver Detalles"}
              </button>
            </div>
          </Motion.div>


          {/* ================= PROYECTO 2: PLATAFORMA DE INVERSIÓN (PRÓXIMAMENTE) ================= */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Vista de la plataforma */}
              <div className="relative mb-6 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <img
                  src={ispoweringImg}
                  alt={t("proj_card2_image_alt")}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  {t("proj_card2_status")}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {t("proj_card2_title")}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed font-light">
                {t("proj_card2_desc")}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  FastAPI (Python)
                </span>
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  React & Tailwind
                </span>
                <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold">
                  PostgreSQL
                </span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 items-center justify-between">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200/60 px-4 py-2 rounded-full flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {t("proj_card2_launch")}
              </span>

              <button
                onClick={() => setOpenModal2(true)}
                className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition shadow-md"
              >
                {t("proj_card2_more")}
              </button>
            </div>
          </Motion.div>

        </div>


        {/* ================= MODAL PROYECTO 1 ================= */}
        {openModal1 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setOpenModal1(false)}
              aria-hidden="true"
            />
            <div className="relative z-20 w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl overflow-auto max-h-[90vh]">
              <button
                onClick={() => setOpenModal1(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-xl font-bold"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t("proj_modal_title") || "Detalles del Proyecto AMCO"}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed font-light">{t("proj_modal_p1") || "Restructuración integral de los recursos web y optimización de rendimiento."}</p>
              <p className="text-slate-600 mb-4 leading-relaxed font-light">{t("proj_modal_p2") || "Implementación de interfaces modernas adaptadas a dispositivos móviles y escritorio."}</p>
              <p className="text-slate-600 leading-relaxed font-light">{t("proj_modal_p3") || "Entrega exitosa cumpliendo con los más altos estándares de calidad técnica."}</p>
            </div>
          </div>
        )}


        {/* ================= MODAL PROYECTO 2 (INVERSIÓN) ================= */}
        {openModal2 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setOpenModal2(false)}
              aria-hidden="true"
            />
            <div className="relative z-20 w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl overflow-auto max-h-[90vh]">
              <button
                onClick={() => setOpenModal2(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-xl font-bold"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
                {t("proj_card2_modal_badge")}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t("proj_card2_modal_title")}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed font-light">
                {t("proj_card2_modal_p1")}
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed font-light">
                {t("proj_card2_modal_p2")}
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                {t("proj_card2_modal_p3")}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;