import { HiArrowUpRight } from "react-icons/hi2";
import img1 from "../../assets/img/automatizacion-inteligente.jpg";
import img2 from "../../assets/img/plataformas-digitales.jpg";
import img3 from "../../assets/img/ia-para-negocios.jpg";
import img4 from "../../assets/img/asistentes-virtuales.png";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: t("servicios_serv1_title"),
      desc: t("servicios_serv1_desc"),
      img: img1,
    },
    {
      title: t("servicios_serv2_title"),
      desc: t("servicios_serv2_desc"),
      img: img2,
    },
    {
      title: t("servicios_serv3_title"),
      desc: t("servicios_serv3_desc"),
      img: img3,
    },
    {
      title: t("servicios_serv4_title"),
      desc: t("servicios_serv4_desc"),
      img: img4,
    },
  ];

  return (
    <section
      className="
        relative w-full py-24 text-white overflow-hidden
        bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617]
      "
    >
      {/* ESTRELLAS / GALAXIA */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("servicios_title")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("servicios_subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-2xl
                bg-slate-900/50 backdrop-blur-md
                border border-pink-500/20
                hover:border-pink-500/50
                transition duration-500
                hover:scale-[1.02]
                shadow-2xl hover:shadow-pink-500/10
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
                <h3 className="text-2xl font-bold tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* BOTÓN FLOTANTE */}
              <div
                className="
                  relative z-10 self-end mt-6 w-10 h-10 rounded-lg
                  border border-white/20
                  flex items-center justify-center
                  group-hover:bg-pink-600
                  group-hover:border-pink-600
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
