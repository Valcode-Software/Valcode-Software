import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import img1 from "../assets/img/somos-nosotros.png";
import imgJho from "../assets/img/jesus.jpg";
import imgJesu from "../assets/img/jhonatan.jpg";
import { useLanguage } from "../context/LanguageContext";


const Card = ({ year, title, desc, t }) => {
  return (
    <div
      className="
        w-full max-w-[320px] min-h-[260px] flex flex-col p-6 rounded-xl
        bg-[#020617]
        border border-pink-500/30
        hover:rotate-2
        transition-all duration-500
        shadow-lg shadow-pink-500/10
        cursor-pointer
      "
    >
      <div className="flex-1">
        <span className="text-white text-sm">{year}</span>

        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>

        <p className="text-gray-400 text-sm mb-4">{desc}</p>
      </div>

      <div className="text-gray-500 mt-4 text-xs">{t("us_team")}</div>
    </div>
  );
};

const FounderCard = ({ img, name, role, linkedin }) => {
  return (
    <div className="flex flex-col items-center bg-[#020617] border border-pink-500/20 rounded-xl p-6 w-full max-w-[300px] hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-pink-500/5">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-pink-500 mb-4">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{role}</p>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors bg-gray-800 p-2 rounded-full"
      >
        <RiLinkedinFill size={20} />
      </a>
    </div>
  );
};

const Nosotros = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] text-white min-h-screen py-12 md:py-20 relative overflow-hidden">
      {/* ESTRELLAS / GALAXIA */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
<br /><br />
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 md:mb-32">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("us_title")}
            </h1>

            <p className="text-white mb-4">
              {t("us_purpose")}
            </p>

            <p className="text-gray-400">
{t("us_desc1")}

{t("us_desc2")}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Glow/Sombra animada detrás */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-full blur-lg opacity-75 animate-pulse transition duration-500 group-hover:opacity-100"></div>
              
              {/* Contenedor con borde gradiente */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-900">
                  <img
                    src={img1}
                    alt="team"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Línea central */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-800 -translate-x-1/2"></div>

          {/* ITEM 1 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-10 items-center relative">
            <div className="flex justify-center md:justify-end md:pr-10 w-full">
              <Card
                year="2024"
                title={t("us_card1_title")}
                desc={t("us_card1_desc")}
                t={t}
              />
            </div>

            <div className="hidden md:block"></div>

            {/* Punto */}
            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-white rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-10 items-center relative">
            <div className="hidden md:block"></div>

            <div className="flex justify-center md:justify-start md:pl-10 w-full">
              <Card
                year="2025"
                title={t("us_card2_title")}
                desc={t("us_card2_desc")}
                t={t}
              />
            </div>

            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-white rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-10 items-center relative">
            <div className="flex justify-center md:justify-end md:pr-10 w-full">
              <Card
                year="2026"
                title={t("us_card3_title")}
                desc={t("us_card3_desc")}
                t={t}
              />
            </div>

            <div className="hidden md:block"></div>

            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-white rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

        </div>

        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("us_today")}</h3>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            {t("us_today_desc")}
          </p>
        </div>

        {/* Línea separadora punteada con espacios laterales */}
        <div className="w-full px-8 md:px-16 mt-20 mb-16">
          <div className="border-t-4 border-dotted border-gray-700/60 w-full"></div>
        </div>

        {/* Sección de Fundadores (CTOs) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
          <FounderCard 
            img={imgJho} 
            name="Jesus Santiago Castillo" 
            role="CTO & Co-Founder" 
            linkedin="https://www.linkedin.com/in/jes%C3%BAs-santiago-castillo-moyano-97183033a/"
          />
          <FounderCard 
            img={imgJesu} 
            name="Jhonatan Julian Moreno" 
            role="CTO & Co-Founder" 
            linkedin="https://www.linkedin.com/in/jhonatan-juli%C3%A1n-moreno-sabogal-a0b055286/"
          />
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
