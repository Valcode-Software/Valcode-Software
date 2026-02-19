import { HiArrowUpRight } from "react-icons/hi2";
import img1 from "../../assets/img/automatizacion-inteligente.jpg";
import img2 from "../../assets/img/plataformas-digitales.jpg";
import img3 from "../../assets/img/ia-para-negocios.jpg";
import img4 from "../../assets/img/asistentes-virtuales.png";

export default function Services() {
const services = [
  {
    title: "AUTOMATIZACIÓN INTELIGENTE",
    desc: "Elimine tareas repetitivas y ahorre horas de trabajo con flujos automáticos.",
    img: img1,
  },
  {
    title: "PLATAFORMAS DIGITALES A MEDIDA",
    desc: "Creamos sistemas web y apps que se adaptan exactamente a su negocio.",
    img: img2,
  },
  {
    title: "IA APLICADA A NEGOCIOS",
    desc: "Transformamos datos en decisiones inteligentes y oportunidades reales.",
    img: img3,
  },
  {
    title: "AGENTES Y ASISTENTES VIRTUALES",
    desc: "Bots y copilotos que atienden clientes, venden y optimizan procesos 24/7.",
    img: img4,
  },
];

  return (
    <section
      className="
        relative w-full py-20 text-white overflow-hidden
        bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617]
      "
    >
      {/* ESTRELLAS / GALAXIA */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="mb-14">
          <p className="text-white tracking-widest text-sm mb-2">
            Nuestros Principales
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            SERVICIOS
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-2xl
                bg-gradient-to-br from-[#111827] to-[#1f2933]
                border border-white/10
                hover:border-indigo-500/40
                transition duration-300
                hover:scale-[1.02]
                shadow-lg hover:shadow-indigo-500/20
                min-h-[280px]
                flex flex-col justify-between
                overflow-hidden
              "
            >
              {/* IMAGEN DE FONDO (HOVER) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[#020617]/80 z-10" /> {/* Capa oscura para leer texto */}
                <img
                  src={service.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* BOTÓN FLOTANTE */}
              <div
                className="
                  relative z-10 self-end mt-6 w-10 h-10 rounded-lg
                  border border-white/20
                  flex items-center justify-center
                  group-hover:bg-indigo-600
                  group-hover:border-indigo-600
                  transition
                "
              >
                <HiArrowUpRight className="text-lg group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
