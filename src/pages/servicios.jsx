import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Mantenemos tu import del contexto por si lo usas en el navbar/footer, 
// pero ya no dependeremos de él para los textos de esta página.
import { useLanguage } from "../context/LanguageContext";
import { 
  RiComputerLine, 
  RiSmartphoneLine, 
  RiMagicLine, 
  RiRobot2Line, 
  RiStore3Line,
  RiSettings4Line,
  RiArrowRightLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiTeamLine
} from "react-icons/ri";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-[#172554]/20 p-8 rounded-2xl shadow-lg"
    >
      <div className="bg-[#172554]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
        <Icon className="text-[#172554] text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#172554]">{title}</h3>
      <p className="text-[#172554]/80 leading-relaxed mb-6">
        {desc}
      </p>
    </motion.div>
  );
};

const Step = ({ number, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white font-bold text-xl bg-white/5">
      {number}
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
      <p className="text-white text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Servicios = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: RiRobot2Line,
      title: t("pages_servicios_serv1_title"),
      desc: t("pages_servicios_serv1_desc"),
      delay: 0.1
    },
    {
      icon: RiComputerLine,
      title: t("pages_servicios_serv2_title"),
      desc: t("pages_servicios_serv2_desc"),
      delay: 0.2
    },
    {
      icon: RiSmartphoneLine,
      title: t("pages_servicios_serv3_title"),
      desc: t("pages_servicios_serv3_desc"),
      delay: 0.3
    },
    {
      icon: RiStore3Line,
      title: t("pages_servicios_serv4_title"),
      desc: t("pages_servicios_serv4_desc"),
      delay: 0.4
    },
    {
      icon: RiSettings4Line,
      title: t("pages_servicios_serv5_title"),
      desc: t("pages_servicios_serv5_desc"),
      delay: 0.5
    },
    {
      icon: RiMagicLine,
      title: t("pages_servicios_serv6_title"),
      desc: t("pages_servicios_serv6_desc"),
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] text-white overflow-hidden">
      {/* Fondo de Estrellas Animado */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#FFFFFF]"
          >
            {t("pages_servicios_hero_title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t("pages_servicios_hero_desc")}
          </motion.p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* NUEVA SECCIÓN: Por qué vale la pena (Valor Comercial) */}
      <section className="py-24 bg-white relative z-10 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#172554]">
              {t("pages_servicios_worth_title_1")} <span className="text-[#1E90FF]">{t("pages_servicios_worth_title_2")}</span>
            </h2>
            <p className="text-[#172554]/80 text-lg max-w-2xl mx-auto">
              {t("pages_servicios_worth_desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#172554] p-8 rounded-2xl shadow-xl">
              <RiMoneyDollarCircleLine className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{t("pages_servicios_val1_title")}</h3>
              <p className="text-white/90 leading-relaxed">
                {t("pages_servicios_val1_desc")}
              </p>
            </div>
            
            <div className="bg-[#172554] p-8 rounded-2xl shadow-xl">
              <RiTeamLine className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{t("pages_servicios_val2_title")}</h3>
              <p className="text-white/90 leading-relaxed">
                {t("pages_servicios_val2_desc")}
              </p>
            </div>

            <div className="bg-[#172554] p-8 rounded-2xl shadow-xl">
              <RiShieldCheckLine className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{t("pages_servicios_val3_title")}</h3>
              <p className="text-white/90 leading-relaxed">
                {t("pages_servicios_val3_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología / Proceso */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10">
                <span className="text-white tracking-wider uppercase text-sm font-semibold">{t("pages_servicios_process_mini")}</span>
                <br /> <span className="text-white">{t("pages_servicios_process_title")}</span>
              </h2>
              <div className="space-y-8">
                <Step 
                  number="01" 
                  title={t("pages_servicios_step1_title")} 
                  desc={t("pages_servicios_step1_desc")}
                />
                <Step 
                  number="02" 
                  title={t("pages_servicios_step2_title")} 
                  desc={t("pages_servicios_step2_desc")}
                />
                <Step 
                  number="03" 
                  title={t("pages_servicios_step3_title")} 
                  desc={t("pages_servicios_step3_desc")}
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-white/20 p-4 rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Working methodology" 
                  className="rounded-xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Tarjeta Blanca Corregida */}
      <section className="py-24 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl overflow-hidden relative border border-blue-100">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1E90FF]">
              {t("pages_servicios_cta_title")}
            </h2>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(30,144,255,0.4)]"
            >
              {t("pages_servicios_cta_btn")}
              <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;