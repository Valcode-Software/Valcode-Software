import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img/side2.jpg";
import img2 from "../../assets/img/slide5.jpg";
import img3 from "../../assets/img/side4.jpg";
import img4 from "../../assets/img/side6.jpg";
import img5 from "../../assets/img/side3.jpg";
import img6 from "../../assets/img/side1.jpg";

const slides = [
  {
    img: img1,
    title: "Nuestras Soluciones en Colombia",
    desc: "Facilitamos procesos más ágiles y transparentes con soluciones tecnológicas innovadoras.",
  },
  {
    img: img2,
    title: "Soluciones digitales estratégicas para tu organización",
    desc: "Desarrollamos tecnología alineada con los objetivos de tu empresa.",
  },
  {
    img: img3,
    title: "Innovamos contigo",
    desc: "Impulsamos tu negocio con soluciones tecnológicas modernas, eficientes y a la medida.",
  },
  {
    img: img4,
    title: "Automatizamos procesos para hacer crecer tu negocio",
    desc: "Desarrollamos soluciones de software que optimizan tu productividad y reducen costos.",
  },
  {
    img: img5,
    title: "Revoluciona tu negocio con inteligencia artificial",
    desc: "Integramos IA para automatizar, optimizar y escalar tus procesos con soluciones inteligentes.",
  },
  {
    img: img6,
    title: "Más productividad, menos esfuerzo",
    desc: "Optimizamos tus procesos para que tu equipo logre más en menos tiempo.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
  key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
  className="absolute inset-0"
>


          <img
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Texto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-10">
  <motion.h2
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="
      text-white
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
      font-extrabold
      tracking-tight
      leading-tight
      drop-shadow-2xl
      mb-6
      max-w-5xl
      bg-gradient-to-r from-white via-gray-200 to-gray-400
      bg-clip-text
      text-transparent
    "
  >
    {slides[index].title}
  </motion.h2>

  <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="
      text-gray-100
                text-lg sm:text-xl md:text-2xl lg:text-3xl
      font-light
      leading-relaxed
      max-w-3xl
      drop-shadow-md
    "
  >
    {slides[index].desc}
  </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
