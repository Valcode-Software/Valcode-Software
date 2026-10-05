import { createElement, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  Bot, 
  Terminal, 
  ArrowRight, 
  Workflow, 
  RefreshCw
} from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext";
import { FaPython, FaReact, FaAws } from "react-icons/fa";
import { SiPostgresql, SiFastapi, SiTailwindcss, SiN8N } from "react-icons/si";

const Tecnologias = () => {
  const { t } = useLanguage();
  // Nodo activo en el workflow interactivo
  const [activeStep, setActiveStep] = useState(0);

  // Pasos del workflow estilo n8n / automatización real
  const workflowSteps = [
    {
      id: "01",
      title: t("tech_step1_title"),
      subtitle: t("tech_step1_subtitle"),
      description: t("tech_step1_desc"),
      techIcon: <Bot className="w-6 h-6 text-blue-600" />,
      techName: "OpenAI / Claude API & LangChain",
      codeSnippet: "agent.listen({ trigger: 'user_request', intent: 'generate_backend_logic' })",
      dataFlow: t("tech_step1_flow")
    },
    {
      id: "02",
      title: t("tech_step2_title"),
      subtitle: t("tech_step2_subtitle"),
      description: t("tech_step2_desc"),
      techIcon: <SiPostgresql className="w-6 h-6 text-blue-600" />,
      techName: "PostgreSQL & Vector DB",
      codeSnippet: "db.createSchema({ tables: ['users', 'transactions', 'ai_logs'], optimize: true })",
      dataFlow: t("tech_step2_flow")
    },
    {
      id: "03",
      title: t("tech_step3_title"),
      subtitle: t("tech_step3_subtitle"),
      description: t("tech_step3_desc"),
      techIcon: <SiFastapi className="w-6 h-6 text-blue-600" />,
      techName: "Python & FastAPI Server",
      codeSnippet: "@app.post('/api/v1/orchestrate')\nasync def run_ai_workflow(payload: AgentPayload):",
      dataFlow: t("tech_step3_flow")
    },
    {
      id: "04",
      title: t("tech_step4_title"),
      subtitle: t("tech_step4_subtitle"),
      description: t("tech_step4_desc"),
      techIcon: <FaReact className="w-6 h-6 text-blue-600" />,
      techName: "React, Tailwind & AWS",
      codeSnippet: "export default function AIClientView() { return <Dashboard data={syncState} />; }",
      dataFlow: t("tech_step4_flow")
    }
  ];

  return (
    <section className="relative w-full py-28 bg-white overflow-hidden font-sans border-t border-slate-100">
      
      {/* Fondo técnico limpio tipo canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm"
          >
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("tech_subtitle") || "Workflow de Agentes & Ecosistema Real"}</span>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight"
          >
            {t("tech_title") || "De la idea al código: Flujos automatizados reales."}
          </Motion.h2>
          
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-light leading-relaxed"
          >
            {t("tech_desc") || "Visualiza cómo nuestros agentes conectan bases de datos, lógica en Python y interfaces modernas en un flujo continuo sin fricción."}
          </Motion.p>
        </div>

        {/* SIMULADOR DE WORKFLOW INTERACTIVO (Estilo Nodos Conectados) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Lado Izquierdo: Los Nodos del Workflow en Cadena */}
          <div className="relative flex flex-col gap-3 lg:col-span-5">
            <div aria-hidden="true" className="absolute bottom-5 left-[19px] top-5 w-px bg-slate-200" />
            <Motion.div
              aria-hidden="true"
              className="absolute left-[19px] top-5 w-px origin-top bg-blue-600"
              initial={false}
              animate={{ height: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <Motion.button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-pressed={isActive}
                  className="group relative z-10 flex w-full items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-colors ${
                    isActive ? "border-blue-600 text-blue-700" : "border-slate-300 text-slate-500 group-hover:border-blue-400"
                  }`}>
                    {step.techIcon}
                    {isActive && (
                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-blue-600">
                        <span className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-60" />
                      </span>
                    )}
                  </div>

                  <div className={`flex min-h-[100px] flex-1 items-center justify-between gap-3 rounded-xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                      : "border-slate-200 bg-white text-slate-800 group-hover:border-slate-300 group-hover:bg-slate-50"
                  }`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className={`rounded px-2 py-0.5 text-[10px] font-mono ${isActive ? "bg-blue-500/20 text-blue-300" : "bg-slate-100 text-slate-500"}`}>
                          {t("tech_step_label")} {step.id}
                        </span>
                        <span className={`text-xs font-semibold ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                          {step.subtitle}
                        </span>
                      </div>
                      <h4 className="mt-1 text-sm font-bold sm:text-base">{step.title}</h4>
                      <p className={`mt-1 line-clamp-2 text-xs leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {step.description}
                      </p>
                    </div>
                    {isActive ? (
                      <Motion.span
                        className="shrink-0 text-blue-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.6, ease: "linear", repeat: Infinity }}
                        title={t("tech_flow_running")}
                        aria-label={t("tech_flow_running")}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Motion.span>
                    ) : (
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </Motion.button>
              );
            })}
          </div>

          {/* Lado Derecho: Consola de Inspección del Nodo Activo (Simulación de IA y Código) */}
          <div className="lg:col-span-7">
            <Motion.div 
              key={activeStep}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col justify-between"
            >
              {/* Brillo decorativo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none"></div>

              <div>
                {/* Header del nodo inspector */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                      {workflowSteps[activeStep].techIcon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{t("tech_flow_active")}: {workflowSteps[activeStep].dataFlow}</span>
                      <h3 className="text-xl font-extrabold text-white mt-0.5">{workflowSteps[activeStep].title}</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {t("tech_flow_synced")}
                  </span>
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {workflowSteps[activeStep].description}
                </p>

                {/* Consola de Código en Tiempo Real */}
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 mb-6 shadow-inner">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800 text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" /> {workflowSteps[activeStep].techName}
                    </span>
                    <span className="text-[10px] text-blue-400">{t("tech_flow_status")}</span>
                  </div>
                  <pre className="text-blue-300 whitespace-pre-wrap"><code>{workflowSteps[activeStep].codeSnippet}</code></pre>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{t("tech_flow_interaction")}</span>
                <span className="font-mono text-blue-400">VALCODE AI ENGINE</span>
              </div>

            </Motion.div>
          </div>

        </div>

        {/* BARRA INFERIOR CON LAS HERRAMIENTAS REALES (Tus tecnologías integradas) */}
        <div className="pt-10 border-t border-slate-200">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
            {t("tech_tools_title")}
          </p>
          
          <div className="overflow-x-auto pb-3 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]">
            <ul className="flex min-w-full w-max items-start text-slate-700">
              {[
                { name: "React / Next.js", Icon: FaReact, color: "text-blue-500" },
                { name: "FastAPI (Python)", Icon: SiFastapi, color: "text-teal-600" },
                { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-700" },
                { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
                { name: "AWS Cloud", Icon: FaAws, color: "text-amber-600" },
                { name: "n8n / Workflows", Icon: SiN8N, color: "text-red-500" },
              ].map(({ name, Icon, color }, index, technologies) => (
                <li key={name} className="relative flex min-w-[168px] flex-1 flex-col items-center px-2 text-center">
                  {index < technologies.length - 1 && (
                    <span aria-hidden="true" className="absolute left-1/2 top-5 z-0 h-px w-full bg-slate-200">
                      <Motion.span
                        className="absolute left-0 top-[-2px] h-1 w-1 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.65)]"
                        animate={{ x: [0, 168] }}
                        transition={{ duration: 2.4, ease: "linear", repeat: Infinity, delay: index * 0.22 }}
                      />
                    </span>
                  )}
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                    {createElement(Icon, { className: `text-xl ${color}` })}
                  </span>
                  <span className="mt-3 flex min-h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-semibold shadow-sm">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tecnologias;