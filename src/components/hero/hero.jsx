import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import heroImg from "../../assets/img/bussines.png"; // Asegúrate de que la ruta sea correcta

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const title = t("hero_main_title") || "Agentes de IA que impulsan tu empresa";
  const description = t("hero_main_desc") || "Creamos software a medida y agentes inteligentes que automatizan procesos, mejoran la atención y convierten oportunidades en crecimiento para tu negocio.";
  
  // En lugar de guardar el string completo, guardamos el índice de la letra actual
  const [titleIndex, setTitleIndex] = useState(0);
  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    setTitleIndex(0);
    setDescIndex(0);

    let tIndex = 0;
    let dIndex = 0;
    let descriptionTimer;

    const titleTimer = window.setInterval(() => {
      tIndex += 1;
      setTitleIndex(tIndex);

      if (tIndex >= title.length) {
        window.clearInterval(titleTimer);
      }
    }, 42);

    const descriptionStartTimer = window.setTimeout(() => {
      descriptionTimer = window.setInterval(() => {
        dIndex += 1;
        setDescIndex(dIndex);

        if (dIndex >= description.length) {
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

  // Dividimos el texto en "visible" (lo que ya se tipeó) e "invisible" (lo que falta)
  // Esto soluciona por completo el bug de responsive de los textos sobrepuestos.
  const visibleTitle = title.slice(0, titleIndex);
  const invisibleTitle = title.slice(titleIndex);

  const visibleDesc = description.slice(0, descIndex);
  const invisibleDesc = description.slice(descIndex);

  return (
    // Agregamos min-h-[600px] para asegurar que en pantallas muy cortas no se colapse todo
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-black flex flex-col justify-end">
      
      {/* Fondo con animación sutil */}
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
          className="w-full h-full object-cover object-top opacity-80"
        />
      </motion.div>

      {/* Overlay oscuro invertido (Ajustado para mejor contraste en móvil) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />

      {/* Contenido: Agregamos pt-28 para que nunca choque con el Navbar fijo arriba */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-left px-6 sm:px-12 md:px-20 pb-16 sm:pb-28 pt-28">
        
        {/* Título Principal - Escalado de texto más suave para móviles */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          aria-label={title}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] drop-shadow-2xl mb-4 max-w-4xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent break-words w-full"
        >
          <span>{visibleTitle}</span>
          {/* El texto invisible mantiene la estructura intacta para evitar saltos en la pantalla */}
          <span aria-hidden="true" className="opacity-0">{invisibleTitle}</span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          aria-label={description}
          className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-md mb-8 break-words w-full"
        >
          <span>{visibleDesc}</span>
          <span aria-hidden="true" className="opacity-0">{invisibleDesc}</span>
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-[15px] transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 flex items-center justify-center"
          >
            {t("btn_servicios") || "Explorar soluciones"}
          </button>

          <button
            onClick={() => navigate('/contacto')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/80 text-white font-semibold text-[15px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 backdrop-blur-sm flex items-center justify-center"
          >
            {t("btn_contacto") || "Hablemos de tu proyecto"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}