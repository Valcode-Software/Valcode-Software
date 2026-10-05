import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
          {desc}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
        <span>Conocer solución</span>
        <span>→</span>
      </div>
    </motion.div>
  );
};

const Step = ({ number, title, desc }) => (
  <div className="flex gap-6 items-start bg-slate-50/80 border border-slate-200/60 p-6 rounded-2xl">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold text-lg flex items-center justify-center shadow-md">
      {number}
    </div>
    <div>
      <h4 className="text-slate-900 font-bold text-lg mb-1.5 tracking-tight">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed font-light">{desc}</p>
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
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* Fondo técnico con sutil cuadrícula */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Soluciones de Ingeniería & IA</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-950 tracking-tight leading-tight"
        >
          {t("pages_servicios_hero_title") || "Potenciamos tu empresa con tecnología de vanguardia"}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          {t("pages_servicios_hero_desc") || "Diseñamos y desarrollamos plataformas digitales escalables y agentes de inteligencia artificial orientados a maximizar la eficiencia y el crecimiento."}
        </motion.p>
      </section>

      {/* Grid de Servicios */}
      <section className="py-16 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* SECCIÓN: Valor Comercial (Por qué vale la pena) */}
      <section className="py-24 bg-slate-50/60 relative z-10 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-950 tracking-tight">
              {t("pages_servicios_worth_title_1") || "Diseñado para generar"} <span className="text-blue-600">{t("pages_servicios_worth_title_2") || "impacto real"}</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light">
              {t("pages_servicios_worth_desc") || "Nuestra metodología combina ingeniería de software de alto nivel con un enfoque estricto en el retorno de inversión."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-all">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6 border border-blue-100">
                <RiMoneyDollarCircleLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{t("pages_servicios_val1_title")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("pages_servicios_val1_desc")}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-all">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6 border border-blue-100">
                <RiTeamLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{t("pages_servicios_val2_title")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("pages_servicios_val2_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-all">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6 border border-blue-100">
                <RiShieldCheckLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{t("pages_servicios_val3_title")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("pages_servicios_val3_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología / Proceso */}
      <section className="py-28 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-4">
              {t("pages_servicios_process_mini") || "Proceso Ágil"}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-slate-950 tracking-tight">
              {t("pages_servicios_process_title") || "Nuestra metodología de trabajo"}
            </h2>
            
            <div className="space-y-4">
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
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Working methodology" 
                className="rounded-2xl opacity-90 object-cover aspect-video w-full"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono">Workflow activo y optimizado</span>
                </div>
                <span className="text-xs font-semibold text-blue-400">Valcode Core</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Empresarial */}
      <section className="py-20 px-6 relative z-10 max-w-5xl mx-auto text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-12 sm:p-16 shadow-2xl overflow-hidden relative border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">
              {t("pages_servicios_cta_title") || "¿Listo para llevar tu proyecto al siguiente nivel?"}
            </h2>
            <p className="text-slate-400 text-base font-light mb-8">
              Conversemos sobre cómo nuestras soluciones de software y agentes de IA pueden escalar tu operación desde hoy.
            </p>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-100 transition-all duration-300 shadow-xl group"
            >
              <span>{t("pages_servicios_cta_btn") || "Iniciar Proyecto"}</span>
              <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Servicios;