import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  RiCodeSSlashLine, 
  RiSmartphoneLine, 
  RiLayoutLine, 
  RiCloudLine, 
  RiSettings4Line, 
  RiShoppingCartLine,
  RiArrowRightLine
} from "react-icons/ri";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-900/50 backdrop-blur-md border border-blue-500/10 p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group"
    >
      <div className="bg-blue-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-blue-500 text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {desc}
      </p>
      <div className="h-1 w-12 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

const Step = ({ number, title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#1E90FF]/30 flex items-center justify-center text-[#1E90FF] font-bold text-xl bg-blue-500/5 group-hover:bg-[#1E90FF] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(30,144,255,0.2)]">
      {number}
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
      icon: RiCodeSSlashLine,
      title: t("serv_web_titles") || "Desarrollo Web de Alto Rendimiento",
      desc: t("serv_web_desc") || "Construimos ecosistemas digitales utilizando React y Next.js. Nos enfocamos en la velocidad de carga, el SEO técnico y arquitecturas escalables que soportan el crecimiento de tu negocio sin degradar la experiencia.",
      delay: 0.1
    },
    {
      icon: RiSmartphoneLine,
      title: t("serv_mobile_title") || "Experiencias Móviles Nativas e Híbridas",
      desc: t("serv_mobile_desc") || "Diseñamos y desarrollamos apps para iOS y Android con React Native. Priorizamos la fluidez táctil, el consumo eficiente de batería y una integración perfecta con las funcionalidades del hardware.",
      delay: 0.2
    },
    {
      icon: RiLayoutLine,
      title: t("serv_uiux_title") || "Diseño de Producto UX/UI",
      desc: t("serv_uiux_desc") || "Transformamos la complejidad en simplicidad. Creamos interfaces intuitivas basadas en datos y comportamiento del usuario, asegurando que cada clic tenga un propósito y cada pantalla genere valor.",
      delay: 0.3
    },
    {
      icon: RiCloudLine,
      title: t("serv_cloud_title") || "Soluciones Cloud & DevOps",
      desc: t("serv_cloud_desc") || "Maximizamos la disponibilidad de tus servicios mediante AWS y Azure. Implementamos CI/CD y monitoreo en tiempo real para que tu software sea resiliente, seguro y siempre esté disponible.",
      delay: 0.4
    },
    {
      icon: RiShoppingCartLine,
      title: t("serv_ecommerce_title") || "E-commerce Escalable",
      desc: t("serv_ecommerce_desc") || "Desarrollamos tiendas online preparadas para eventos de alto tráfico. Integramos pasarelas de pago globales, sistemas de logística y paneles de administración que facilitan tu operación diaria.",
      delay: 0.5
    },
    {
      icon: RiSettings4Line,
      title: t("serv_custom_title") || "Sistemas y Software a Medida",
      desc: t("serv_custom_desc") || "Desarrollamos la pieza de software que tu empresa necesita para ser competitiva. Desde CRMs especializados hasta sistemas core de facturación o gestión, diseñados a tu medida.",
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#1E90FF]"
          >
            {t("serv_title") || "Nuestros Servicios"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t("serv_subtitle") || "En Valcode Software, no solo escribimos código; construimos los cimientos tecnológicos de tu próximo éxito empresarial. Soluciones robustas para desafíos modernos."}
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

      {/* Metodología / Proceso */}
      <section className="py-24 bg-slate-900/30 relative z-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10">
                <span className="text-[#1E90FF] tracking-wider uppercase text-sm font-semibold">{t("serv_method_highlight") || "Cómo trabajamos"}</span>
                <br /> <span className="text-white">{t("serv_method_title") || "Nuestra Metodología"}</span>
              </h2>
              <div className="space-y-8">
                <Step 
                  number="01" 
                  title={t("serv_step1_title") || "Descubrimiento"} 
                  desc={t("serv_step1_desc") || "Entendemos a fondo tus necesidades y objetivos comerciales para trazar el mejor camino tecnológico."}
                />
                <Step 
                  number="02" 
                  title={t("serv_step2_title") || "Diseño & Prototipado"} 
                  desc={t("serv_step2_desc") || "Creamos interfaces visuales y flujos de usuario antes de escribir una sola línea de código."}
                />
                <Step 
                  number="03" 
                  title={t("serv_step3_title") || "Desarrollo Ágil"} 
                  desc={t("serv_step3_desc") || "Construimos tu solución con entregas incrementales, asegurando calidad y transparencia constante."}
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#1E90FF]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-[#1E90FF]/20 p-4 rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Working methodology" 
                  className="rounded-xl opacity-80 hover:opacity-100 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#020617] to-[#172554] border border-[#1E90FF]/30 rounded-3xl p-12 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("serv_cta_title") || "¿Listo para iniciar tu próximo gran proyecto?"}
            </h2>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white text-[#020617] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              {t("serv_cta_btn") || "Contáctanos ahora"}
              <RiArrowRightLine />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Servicios;