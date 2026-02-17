import React from "react";
import amcoLogo from "../../assets/img/Amco.png";

export default function StrategicAllyBadge() {
  return (
    <div className="w-full flex flex-col items-center py-4 bg-[#020617]">
      
      {/* Texto arriba */}
      <h2 className="mb-8 text-2xl md:text-4xl font-extrabold tracking-wide text-white uppercase text-center">
        Aliado Estratégico
      </h2>

      {/* Logo con hover moderno */}
      <a
        href="https://www.constructoraamco.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
      >
        <img
          src={amcoLogo}
          alt="Amco"
          className="w-32 h-auto object-contain cursor-pointer drop-shadow-lg"
        />
      </a>
    </div>
  );
}
