import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import heroImg from "../../assets/img/bussines.png"; // Asegúrate de que la ruta sea correcta

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const title = t("hero_main_title") || "Agentes de IA";
  const description = t("hero_main_desc") || "Impulsamos tu negocio con soluciones tecnológicas de vanguardia, diseñadas para destacar y escalar en la era de la Inteligencia Artificial.";
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");

  useEffect(() => {
    setTypedTitle("");
    setTypedDescription("");

    let titleIndex = 0;
    let descriptionIndex = 0;
    let descriptionTimer;

    const titleTimer = window.setInterval(() => {
      titleIndex += 1;
      setTypedTitle(title.slice(0, titleIndex));

      if (titleIndex >= title.length) {
        window.clearInterval(titleTimer);
      }
    }, 42);

    const descriptionStartTimer = window.setTimeout(() => {
      descriptionTimer = window.setInterval(() => {
        descriptionIndex += 1;
        setTypedDescription(description.slice(0, descriptionIndex));

        if (descriptionIndex >= description.length) {
          window.clearInterval(descriptionTimer);
        }
      }, 12);
    }, title.length * 42 + 200);

    return () => {
      window.clearInterval(titleTimer);
      window.clearTimeout(descriptionStartTimer);
      window.clearInterval(descriptionTimer);
    };
  }, [title, description]);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      
      {/* Fondo con animación más sutil (se ve "más atrás") */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 15, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Agentes de IA Hero"
          // object-top asegura que la cabeza del robot siempre esté visible
          className="w-full h-full object-cover object-top opacity-90"
        />
      </motion.div>

      {/* Overlay oscuro invertido: Más oscuro abajo para el texto, transparente arriba para la cara del robot */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      {/* Contenido: Movido a la izquierda y hacia abajo */}
      <div className="absolute inset-0 flex flex-col justify-end items-start text-left px-8 sm:px-12 md:px-20 pb-28 sm:pb-36 z-10 max-w-7xl mx-auto">
        
        {/* Título Principal */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          aria-label={title}
          className="relative text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-2xl mb-4 max-w-3xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          <span aria-hidden="true" className="invisible block">{title}</span>
          <span aria-hidden="true" className="absolute inset-0">{typedTitle}</span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          aria-label={description}
          className="relative text-gray-200 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-md mb-8"
        >
          <span aria-hidden="true" className="invisible block">{description}</span>
          <span aria-hidden="true" className="absolute inset-0">{typedDescription}</span>
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => navigate('/servicios')}
            className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-[15px] transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            {t("btn_servicios") || "Nuestros Servicios"}
          </button>

          <button
            onClick={() => navigate('/contacto')}
            className="px-8 py-3.5 rounded-full bg-transparent border border-white/80 text-white font-semibold text-[15px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            {t("btn_contacto") || "Empezar Proyecto"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}