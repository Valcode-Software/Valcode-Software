import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  Sparkles,
  Brain,
  Route,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Ajusta estas rutas si tu carpeta de assets es diferente
import valdrenVideo from "../../assets/Video/Valdren_AI_Valcode_Software.mp4";
import valdrenPoster from "../../assets/img/valdren-poster.jpg";

// Capítulos del video (segundos exactos de la edición)
const CHAPTERS = [
  { start: 7.0, key: "porque_ch1", label: "Describe tu caso" },
  { start: 18.9, key: "porque_ch2", label: "La IA redacta contigo" },
  { start: 34.9, key: "porque_ch3", label: "Radica en un clic" },
  { start: 51.1, key: "porque_ch4", label: "Clasificación automática" },
  { start: 61.8, key: "porque_ch5", label: "Directo al área correcta" },
  { start: 67.3, key: "porque_ch6", label: "Trazabilidad y control humano" },
];

const formatTime = (s) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};

const PorqueValcode = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const features = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: t("porque_feat1_title") || "Entiende el lenguaje natural",
      desc: t("porque_feat1_desc") || "El ciudadano escribe con sus palabras; la IA estructura la solicitud.",
    },
    {
      icon: <Route className="w-5 h-5" />,
      title: t("porque_feat2_title") || "Clasifica y enruta",
      desc: t("porque_feat2_desc") || "Identifica tipo, prioridad y área responsable de forma automática.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: t("porque_feat3_title") || "Trazabilidad con control humano",
      desc: t("porque_feat3_desc") || "Historial completo y el asesor puede corregir la clasificación.",
    },
  ];

  const activeChapter = CHAPTERS.reduce((acc, ch, i) => (time >= ch.start ? i : acc), -1);

  // Pausa el video cuando sale de la pantalla
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => {});
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) play();
    else v.pause();
  };

  const seekTo = (seconds) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = seconds;
    play();
  };

  const onScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    seekTo(ratio * (duration || 0));
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iOS
  };

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      id="valdren-ai"
      className="relative w-full overflow-hidden bg-[#F5F7FA] py-20 lg:py-28 font-sans border-t border-slate-200/70"
    >
      {/* Fondo corporativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-600/[0.07] blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-cyan-400/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("porque_subtitle") || "Producto destacado · Valdren AI"}</span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08 }}
            className="mb-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
          >
            {t("porque_title") || "El agente de PQRS que "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t("porque_title_highlight") || "clasifica por ti."}
            </span>
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.16 }}
            className="text-base font-light leading-relaxed text-slate-600 sm:text-lg"
          >
            {t("porque_desc") ||
              "Valdren AI recibe peticiones, quejas, reclamos y sugerencias, las entiende con inteligencia artificial y las envía priorizadas al equipo correcto. Mira el flujo completo en menos de dos minutos."}
          </Motion.p>
        </div>

        {/* Reproductor */}
        <Motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Halo */}
          <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-20px_rgba(15,40,80,0.35)]">
            {/* Barra de ventana */}
            <div className="flex items-center gap-3 border-b border-slate-200/80 bg-slate-50/90 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto hidden items-center gap-2 rounded-lg bg-white px-4 py-1 text-xs text-slate-500 ring-1 ring-slate-200 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                valdren.ai / demo
              </div>
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:ml-0">
                <Cpu className="h-3 w-3" /> IA local
              </span>
            </div>

            {/* Video */}
            <div className="group relative aspect-video w-full bg-slate-950">
              <video
                ref={videoRef}
                src={valdrenVideo}
                poster={valdrenPoster}
                preload="metadata"
                playsInline
                className="h-full w-full object-cover"
                onClick={togglePlay}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              />

              {/* Overlay inicial */}
              <AnimatePresence>
                {!started && (
                  <Motion.button
                    key="overlay"
                    type="button"
                    onClick={play}
                    aria-label={t("porque_play") || "Reproducir video"}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pb-8 sm:justify-center sm:pb-0"
                  >
                    <span className="relative flex h-16 w-16 items-center justify-center sm:h-24 sm:w-24">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
                      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-300 group-hover:scale-105">
                        <Play className="ml-1 h-7 w-7 fill-blue-600 text-blue-600 sm:h-9 sm:w-9" />
                      </span>
                    </span>
                    <span className="mt-4 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20 sm:absolute sm:bottom-6">
                      {t("porque_watch") || "Ver demo"} · 1:35
                    </span>
                  </Motion.button>
                )}
              </AnimatePresence>

              {/* Controles */}
              {started && (
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-4 pb-3 pt-10 transition-opacity duration-300 ${
                    playing ? "opacity-0 group-hover:opacity-100 focus-within:opacity-100" : "opacity-100"
                  }`}
                >
                  <div
                    role="slider"
                    tabIndex={0}
                    aria-label="Progreso del video"
                    aria-valuemin={0}
                    aria-valuemax={Math.round(duration)}
                    aria-valuenow={Math.round(time)}
                    onClick={onScrub}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight") seekTo(Math.min(time + 5, duration));
                      if (e.key === "ArrowLeft") seekTo(Math.max(time - 5, 0));
                    }}
                    className="relative mb-3 h-1.5 cursor-pointer rounded-full bg-white/25"
                  >
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: `${progress}%` }}
                    />
                    {duration > 0 &&
                      CHAPTERS.map((ch) => (
                        <span
                          key={ch.key}
                          className="absolute top-1/2 h-2.5 w-0.5 -translate-y-1/2 bg-white/70"
                          style={{ left: `${(ch.start / duration) * 100}%` }}
                        />
                      ))}
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <button type="button" onClick={togglePlay} aria-label={playing ? "Pausar" : "Reproducir"} className="rounded-full p-1.5 hover:bg-white/15">
                      {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                    <button type="button" onClick={toggleMute} aria-label={muted ? "Activar sonido" : "Silenciar"} className="rounded-full p-1.5 hover:bg-white/15">
                      {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <span className="font-mono text-xs text-white/80">
                      {formatTime(time)} / {formatTime(duration)}
                    </span>
                    {activeChapter >= 0 && (
                      <span className="hidden truncate text-xs text-white/80 md:inline">
                        · {t(CHAPTERS[activeChapter].key) || CHAPTERS[activeChapter].label}
                      </span>
                    )}
                    <button type="button" onClick={fullscreen} aria-label="Pantalla completa" className="ml-auto rounded-full p-1.5 hover:bg-white/15">
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Capítulos */}
            <div className="flex gap-2 overflow-x-auto border-t border-slate-200/80 bg-white px-4 py-3 [scrollbar-width:none] sm:grid sm:grid-cols-3 lg:grid-cols-6">
              {CHAPTERS.map((ch, i) => {
                const isActive = i === activeChapter;
                const next = CHAPTERS[i + 1]?.start ?? duration;
                const fill = isActive && next > ch.start ? ((time - ch.start) / (next - ch.start)) * 100 : i < activeChapter ? 100 : 0;
                return (
                  <button
                    key={ch.key}
                    type="button"
                    onClick={() => seekTo(ch.start)}
                    className={`group/ch relative min-w-[170px] shrink-0 overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-all sm:min-w-0 ${
                      isActive ? "border-blue-200 bg-blue-50/70" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`block font-mono text-[10px] font-semibold ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                      {String(i + 1).padStart(2, "0")} · {formatTime(ch.start)}
                    </span>
                    <span className={`mt-0.5 block truncate text-xs font-semibold ${isActive ? "text-slate-950" : "text-slate-700"}`}>
                      {t(ch.key) || ch.label}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-100">
                      <span className="block h-full bg-blue-600 transition-[width] duration-200" style={{ width: `${Math.max(0, Math.min(fill, 100))}%` }} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Motion.div>

        {/* Beneficios + CTA */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <Motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600">{f.icon}</div>
              <h3 className="mb-1.5 text-base font-bold text-slate-900">{f.title}</h3>
              <p className="text-sm font-light leading-relaxed text-slate-600">{f.desc}</p>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-6 flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl bg-slate-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              {t("porque_roadmap_tag") || "Esto es solo el comienzo"}
            </p>
            <p className="mt-1 text-base font-medium text-slate-200 sm:text-lg">
              {t("porque_roadmap_desc") || "Valdren AI crece con cada versión. Llévalo a tu empresa."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.open("https://calendly.com/softwarevalcode/nueva-reunion", "_blank", "noopener,noreferrer")}
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
          >
            {t("porque_cta_button") || "Agendar una demo"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </Motion.div>
      </div>
    </section>
  );
};

export default PorqueValcode;