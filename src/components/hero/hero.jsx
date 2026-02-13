import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HiArrowRight } from "react-icons/hi";
import leftImage from "../../assets/img/alex-knight-2EJCSULRwC8-unsplash-.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Soluciones Tecnológicas",
    "Innovación",
    "Desarrollo a Medida",
    "Inteligencia Artificial",
  ];

  // TYPEWRITER
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(
          currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  // GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-card", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
      relative w-full min-h-[100dvh] text-white overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617]
      flex flex-col items-center justify-center
      py-8 sm:py-0
      "
    >
      {/* ESTRELLAS */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars" />

      {/* CONTENEDOR CENTRAL */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div
          className="
          relative w-full
          max-w-[380px]
          xs:max-w-[420px]
          sm:max-w-[520px]
          md:max-w-[650px]
          lg:max-w-[780px]
          xl:max-w-[900px]

          aspect-[3/4]
          xs:aspect-[4/5]
          sm:aspect-[5/6]
          md:aspect-[16/14]
          lg:aspect-[16/12]
          xl:aspect-[16/10]

          max-h-[70vh]
          sm:max-h-[75vh]
          md:max-h-[80vh]
        "
        >
          {/* IMAGEN */}
          <div className="hero-card absolute inset-0 overflow-hidden">
            <img
              src={leftImage}
              className="w-full h-full object-cover object-[center_35%] brightness-110 contrast-110"
              alt="Hero Visual"
            />
          </div>

          {/* TEXTO */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <h1
              className="
              font-ia
              text-[clamp(1.75rem,5.5vw,6rem)]
              sm:text-[clamp(2rem,6vw,6rem)]
              font-extrabold text-center
              bg-gradient-to-r from-indigo-300 via-white to-indigo-400
              bg-clip-text text-transparent
              min-h-[1.2em]
              tracking-wide 
              md:tracking-[0.12em]
              lg:tracking-[0.15em]
              drop-shadow-[0_0_20px_rgba(129,140,248,0.45)]
              sm:drop-shadow-[0_0_25px_rgba(129,140,248,0.45)]
              transform scale-x-105
              leading-tight
              px-2
            "
            >
              {text}
              <span className="animate-pulse text-indigo-400 ml-1 sm:ml-2">|</span>
            </h1>
          </div>
        </div>
      </div>

      {/* BOTÓN */}
      <div className="relative z-20 w-full flex justify-center mt-8 pb-8 sm:mt-10 sm:pb-10 md:absolute md:bottom-10 md:mt-0 md:pb-0">
        <button
          className="
          bg-indigo-600 hover:bg-indigo-500
          px-5 py-2.5
          sm:px-6 sm:py-3 
          md:px-8 md:py-3.5
          lg:px-10 lg:py-4
          rounded-xl sm:rounded-2xl
          text-sm sm:text-base md:text-lg
          font-bold text-white
          shadow-[0_0_20px_rgba(99,102,241,0.5)]
          sm:shadow-[0_0_25px_rgba(99,102,241,0.5)]
          backdrop-blur-md transition duration-300
          flex items-center gap-2 sm:gap-3 cursor-pointer
          border-none outline-none
          hover:scale-105 active:scale-95
        "
        >
          Contáctanos
          <HiArrowRight className="animate-spin-slow text-lg sm:text-xl md:text-2xl" />
        </button>
      </div>
    </section>
  );
}