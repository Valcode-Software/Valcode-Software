import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

/* Iconos inline (sin dependencias externas) */
const IconHome = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </svg>
);

const IconArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

const IconCompass = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const IconChevron = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/* Ajusta estas rutas a las de tu aplicación */
const QUICK_LINKS = [
  { to: "/", label: "error404_link_home", description: "error404_link_home_desc" },
  { to: "/servicios", label: "error404_link_services", description: "error404_link_services_desc" },
  { to: "/contacto", label: "error404_link_support", description: "error404_link_support_desc" },
];

const Error404 = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useLanguage();

  const handleBack = () => {
    // Si no hay historial (entrada directa por URL), redirige al inicio
    if (window.history.length > 1) navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden bg-slate-950 text-slate-100"
      aria-labelledby="error-title"
    >
      {/* Fondo galaxia (mismo que el resto de páginas) */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />
      <div className="absolute top-[20%] left-[-200px] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-blue-500 shadow-lg animate-comet-1 z-10" />
      <div className="absolute top-[70%] right-[-200px] w-[200px] h-[2px] bg-gradient-to-l from-transparent via-purple-300 to-purple-500 shadow-lg animate-comet-2 z-10" />

      {/* Halos de luz */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none z-0" />

      {/* Rejilla sutil */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <section className="relative z-20 w-full max-w-2xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          {t("error404_badge")}
        </span>

        {/* Número principal */}
        <h1
          id="error-title"
          className="mt-6 select-none bg-gradient-to-b from-white via-blue-100 to-blue-500/40 bg-clip-text text-[7rem] sm:text-[10rem] font-extrabold leading-none tracking-tighter text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]"
        >
          404
        </h1>

        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          {t("error404_title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-400 leading-relaxed">
          {t("error404_desc")}
        </p>

        {/* Ruta solicitada */}
        <div className="mx-auto mt-6 inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-slate-300 backdrop-blur-sm">
          <span className="text-slate-500">GET</span>
          <span className="truncate" title={pathname}>{pathname}</span>
        </div>

        {/* Acciones */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:shadow-blue-500/50 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <IconHome className="h-4 w-4" />
            {t("error404_home")}
          </Link>
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <IconArrowLeft className="h-4 w-4" />
            {t("error404_back")}
          </button>
        </div>

        {/* Enlaces rápidos */}
        <nav aria-label={t("error404_links_aria")} className="mt-12">
          <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-slate-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <IconCompass className="h-4 w-4" />
            {t("error404_maybe")}
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {QUICK_LINKS.map(({ to, label, description }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/40 hover:bg-blue-500/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>
                    <span className="block text-sm font-semibold text-slate-100">{t(label)}</span>
                    <span className="mt-0.5 block text-xs text-slate-400">{t(description)}</span>
                  </span>
                  <IconChevron className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-xs text-slate-500">
          {t("error404_report_q")}{" "}
          <Link to="/contacto" className="text-blue-400 underline-offset-4 hover:underline">
            {t("error404_report_link")}
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Error404;