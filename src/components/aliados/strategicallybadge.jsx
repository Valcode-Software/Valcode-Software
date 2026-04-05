import React from "react";
import amcoLogo from "../../assets/img/Amco.png";
import { useLanguage } from "../../context/LanguageContext";

export default function StrategicAllyBadge() {
  const { t } = useLanguage();
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      <div className="flex flex-col items-center text-center max-w-xl">

        {/* Título */}
        <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-2">
          {t("aliados_nuestro")}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {t("aliados_titulo")}
        </h2>

        {/* Tarjeta del aliado */}
        <a
          href="https://www.constructoraamco.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex items-center justify-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
            <img
              src={amcoLogo}
              alt="Amco"
              className="w-40 h-auto object-contain grayscale group-hover:grayscale-0 transition duration-300"
            />
          </div>
        </a>

        {/* Texto opcional */}
        <p className="mt-6 text-gray-600 text-sm max-w-md">
          {t("aliados_texto")}
        </p>
      </div>
    </section>
  );
}