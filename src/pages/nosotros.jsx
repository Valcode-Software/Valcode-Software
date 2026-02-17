import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import img1 from "../assets/img/somos-nosotros.png";
import imgJho from "../assets/img/jesus.jpg";
import imgJesu from "../assets/img/jhonatan.jpg";


const Card = ({ year, title, desc }) => {
  return (
    <div
      className="
        w-full max-w-[320px] min-h-[260px] flex flex-col p-6 rounded-xl
        bg-gray-900
        border border-pink-500/30
        hover:rotate-2
        transition-all duration-500
        shadow-lg shadow-pink-500/10
        cursor-pointer
      "
    >
      <div className="flex-1">
        <span className="text-gray-500 text-sm">{year}</span>

        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>

        <p className="text-gray-400 text-sm mb-4">{desc}</p>
      </div>

      <div className="text-gray-500 mt-4 text-xs">Equipo</div>
    </div>
  );
};

const FounderCard = ({ img, name, role, linkedin }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 border border-pink-500/20 rounded-xl p-6 w-full max-w-[300px] hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-pink-500/5">
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
  return (
    <section className="bg-gray-950 text-white min-h-screen py-12 md:py-20 relative overflow-hidden">
      {/* Iluminaciones de fondo (Glow Effects) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
<br /><br />
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 md:mb-32">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Somos TuEmpresa
            </h1>

            <p className="text-pink-500 mb-4">
              Misión & Visión
            </p>

            <p className="text-gray-400">
En Valcode trabajamos con el firme propósito de ofrecer soluciones digitales innovadoras que impulsen la transformación tecnológica de negocios pequeños. Nuestro objetivo es convertir la tecnología en un aliado estratégico que genere valor, optimice procesos y potencie la competitividad en un mercado en constante evolución.

Nuestra misión es simplificar procesos y potenciar negocios con herramientas digitales avanzadas, brindando soluciones personalizadas para cada necesidad.
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
                title="Nacimiento"
                desc="Valcode Software nació creando contenido en redes sociales para enseñar programación y ayudar a otros a dar sus primeros pasos en el desarrollo web; con el tiempo, esa pasión evolucionó hacia la creación de proyectos y portafolios digitales propios, hasta convertirse en la visión de construir una startup impulsada por inteligencia artificial enfocada en ayudar a microempresas y negocios a automatizar procesos y crecer mediante soluciones tecnológicas accesibles."
              />
            </div>

            <div className="hidden md:block"></div>

            {/* Punto */}
            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-pink-600 rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-10 items-center relative">
            <div className="hidden md:block"></div>

            <div className="flex justify-center md:justify-start md:pl-10 w-full">
              <Card
                year="2025"
                title="Expansión"
                desc="Nuestro primer cliente llegó con la necesidad de remodelar su sitio web, ya que presentaba una estructura deficiente. Trabajamos en su rediseño e implementamos soluciones apoyadas en inteligencia artificial para optimizar el proceso de forma rápida y eficiente, logrando una plataforma más adaptable al mercado. Cumplimos nuestro propósito y el resultado fue un sitio web funcional, moderno y alineado con sus objetivos."
              />
            </div>

            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-pink-600 rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-10 items-center relative">
            <div className="flex justify-center md:justify-end md:pr-10 w-full">
              <Card
                year="2026"
                title="Consolidación"
                desc="Un año donde la visión se convierte en estructura, la experiencia en confianza y la comunidad en parte del proyecto"
              />
            </div>

            <div className="hidden md:block"></div>

            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-pink-600 rounded-full -translate-x-1/2 border-4 border-gray-950"></div>
          </div>

        </div>

        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">Hoy</h3>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            Hoy seguimos generando negocios poco a poco, transformando el futuro de las empresas en Colombia con innovación y pasión por la evolución digital.
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
