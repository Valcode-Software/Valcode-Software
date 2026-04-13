import React, { useEffect, useState } from "react";

// Imagen local del proyecto AMCO
import amcoImg from "../assets/img/proyecto amco.jpeg";
import { useLanguage } from "../context/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  // Forzar que la página inicie desde arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen pt-32 pb-24 px-6 bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] text-white overflow-hidden"
      aria-label="Sección de proyectos"
    >
      {/* ESTRELLAS / GALAXIA (opcional, para mantener consistencia con Nosotros) */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("proj_title")}
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            {t("proj_subtitle")}
          </p>
        </div>

        {/* Card */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 backdrop-blur-md border border-[#1E90FF]/20 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition duration-500">
          
          {/* Imagen */}
          <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800 aspect-video flex items-center justify-center">
            <img
              src={amcoImg}
              alt="Proyecto AMCO"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>

          {/* Contenido */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t("proj_card1")}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
{t("proj_card1_desc")}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/40 text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-900/40 text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full text-sm">
                Tailwind
              </span>
              <span className="bg-blue-900/40 text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full text-sm">
                UI/UX
              </span>
            </div>

            {/* Botones */}
            <div className="flex gap-4">
              <a
                href="https://www.amcoltda.com/"
                role="button"
                aria-label="Ver proyecto Plataforma Web Empresarial"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                {t("proj_btn_view")}
              </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              className="px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-white/10 transition"
            >
              {t("proj_btn_more")}
            </a>
            </div>
          </div>
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

    {/* Overlay: oscuro y blur fuerte */}
    <div
      className="absolute inset-0 bg-[#020617]/95 backdrop-blur-[18px]"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />

    {/* Modal responsivo: full-screen en móvil, centrado y limitado en pantallas grandes */}
    <div className="relative z-20 w-full h-full sm:h-auto max-w-full sm:max-w-lg md:max-w-xl">

      <div className="relative w-full h-full sm:h-auto">

        <div className="bg-[#020617]/95 border border-[#1E90FF]/30 rounded-none sm:rounded-2xl p-6 sm:p-8 max-h-[96vh] overflow-auto shadow-2xl">

          {/* Cerrar */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-200 hover:text-white text-2xl z-30"
            aria-label="Cerrar información del proyecto"
          >
            ✕
          </button>

          {/* Contenido */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t("proj_modal_title")}</h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {t("proj_modal_p1")}
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {t("proj_modal_p2")}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {t("proj_modal_p3")}
          </p>

        </div>

      </div>

    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;  