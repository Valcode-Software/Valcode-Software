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
      icon: RiRobot2Line,
      title: "Automatización de Procesos",
      desc: "Haz más en menos tiempo. Creamos herramientas inteligentes que automatizan las tareas repetitivas de tu día a día, reduciendo errores humanos y bajando los costos operativos de tu empresa.",
      delay: 0.1
    },
    {
      icon: RiComputerLine,
      title: "Desarrollo de Páginas Web",
      desc: "Creamos sitios web rápidos, seguros y diseñados para destacar tu marca. Convertimos visitantes en clientes con plataformas atractivas que funcionan perfectamente en cualquier celular o computadora.",
      delay: 0.2
    },
    {
      icon: RiSmartphoneLine,
      title: "Aplicaciones Móviles",
      desc: "Lleva tu negocio al bolsillo de tus clientes. Desarrollamos apps para iOS y Android que son intuitivas, rápidas y pensadas para facilitar la vida de tus usuarios, aumentando su fidelidad.",
      delay: 0.3
    },
    {
      icon: RiStore3Line,
      title: "Tiendas en Línea (E-commerce)",
      desc: "Vende tus productos las 24 horas del día. Diseñamos tiendas online seguras, fáciles de administrar y con métodos de pago integrados para que tu única preocupación sea enviar los pedidos.",
      delay: 0.4
    },
    {
      icon: RiSettings4Line,
      title: "Sistemas y Software a Medida",
      desc: "Desarrollamos la herramienta exacta que tu negocio necesita. Desde sistemas de inventario y facturación hasta plataformas completas para gestionar toda la información de tu empresa en un solo lugar.",
      delay: 0.5
    },
    {
      icon: RiMagicLine,
      title: "Diseño de Experiencia",
      desc: "Hacemos que la tecnología sea fácil de usar. Diseñamos plataformas modernas y agradables que guían a tus clientes de manera natural hacia lo que buscan, garantizando que no se frustren ni abandonen.",
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
            Soluciones Tecnológicas Reales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            No solo escribimos código; construimos herramientas que hacen crecer tu empresa, optimizan tu tiempo y aumentan tus ventas en el mundo digital.
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
      <section className="py-24 bg-slate-900/60 relative z-10 border-y border-blue-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué vale la pena <span className="text-[#1E90FF]">trabajar con nosotros?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No somos una agencia más. Nos convertimos en tu socio tecnológico para asegurarnos de que cada peso que inviertas se traduzca en resultados medibles para tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-500/20 hover:border-[#1E90FF]/50 transition-colors duration-300">
              <RiMoneyDollarCircleLine className="text-[#1E90FF] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Retorno de Inversión (ROI)</h3>
              <p className="text-gray-400 leading-relaxed">
                Cada sistema, app o página que creamos tiene un objetivo claro: ahorrarte tiempo, reducir tus gastos operativos o ayudarte a vender más. La tecnología debe pagar por sí sola.
              </p>
            </div>
            
            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-500/20 hover:border-[#1E90FF]/50 transition-colors duration-300">
              <RiTeamLine className="text-[#1E90FF] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Hablamos tu idioma</h3>
              <p className="text-gray-400 leading-relaxed">
                Olvídate de términos técnicos y excusas informáticas. Te explicamos todo de forma clara y transparente, enfocándonos siempre en cómo solucionar tus problemas comerciales.
              </p>
            </div>

            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-500/20 hover:border-[#1E90FF]/50 transition-colors duration-300">
              <RiShieldCheckLine className="text-[#1E90FF] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Seguridad y Sin ataduras</h3>
              <p className="text-gray-400 leading-relaxed">
                Te entregamos soluciones completas sin costos sorpresa ni letras pequeñas. Entregamos proyectos seguros, estables y te acompañamos en el crecimiento de tu empresa.
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
                <span className="text-[#1E90FF] tracking-wider uppercase text-sm font-semibold">Cómo trabajamos</span>
                <br /> <span className="text-white">Un proceso simple y transparente</span>
              </h2>
              <div className="space-y-8">
                <Step 
                  number="01" 
                  title="Descubrimiento y Estrategia" 
                  desc="Escuchamos tus problemas comerciales y trazamos el mejor plan tecnológico para resolverlos sin gastos innecesarios."
                />
                <Step 
                  number="02" 
                  title="Diseño Visual" 
                  desc="Te mostramos exactamente cómo se verá y funcionará todo antes de empezar a programar, para que no haya sorpresas."
                />
                <Step 
                  number="03" 
                  title="Desarrollo y Lanzamiento" 
                  desc="Construimos tu solución mostrándote avances constantes, asegurando que el producto final sea exactamente lo que tu empresa necesita."
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

      {/* Call to Action - Tarjeta Blanca Corregida */}
      <section className="py-24 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl overflow-hidden relative border-4 border-blue-50">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              ¿Listo para modernizar tu empresa y aumentar tus ventas?
            </h2>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(30,144,255,0.4)] hover:scale-105"
            >
              Habla con un experto gratis
              <RiArrowRightLine />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
};

export default Servicios;