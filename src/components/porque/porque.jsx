import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Workflow, 
  Network, 
  Bot, 
  Database,
  ArrowRight,
  Cpu,
  Sparkles,
  Terminal
} from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext";

const PorqueValcode = () => {
  const { t } = useLanguage();
  // Estado para controlar qué nodo está activo (interactivo por clic o automático)
  const [activeNode, setActiveNode] = useState(0);

  // Nodos del workflow con detalles más ricos para la interacción
  const workflowNodes = [
    {
      id: 1,
      icon: <Bot className="w-5 h-5" />,
      title: t("porque_workflow_node1_title"),
      desc: t("porque_workflow_node1_desc"),
      codePreview: "ai.ingress.listen({ source: 'client_input', autoAnalyze: true })",
    },
    {
      id: 2,
      icon: <Network className="w-5 h-5" />,
      title: t("porque_workflow_node2_title"),
      desc: t("porque_workflow_node2_desc"),
      codePreview: "workflow.orchestrate({ nodes: ['api', 'auth', 'db'], latency: '0ms' })",
    },
    {
      id: 3,
      icon: <Database className="w-5 h-5" />,
      title: t("porque_workflow_node3_title"),
      desc: t("porque_workflow_node3_desc"),
      codePreview: "db.provision({ engine: 'postgres', scaling: 'auto', security: 'max' })",
    },
    {
      id: 4,
      icon: <Workflow className="w-5 h-5" />,
      title: t("porque_workflow_node4_title"),
      desc: t("porque_workflow_node4_desc"),
      codePreview: "pipeline.deploy({ target: 'production', status: 'ready_to_launch' })",
    }
  ];

  // Rotación automática suave (se detiene o se alterna si el usuario interactúa, pero sigue vivo)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev < workflowNodes.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [workflowNodes.length]);

  return (
    <section className="relative w-full py-28 bg-white overflow-hidden font-sans border-t border-slate-100">
      
      {/* Fondo limpio con patrón de puntos minimalista profesional */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("porque_subtitle") || "Workflows Autónomos de IA"}</span>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight"
          >
            {t("porque_title") || "Sistemas que se construyen solos."}
          </Motion.h2>
          
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-light leading-relaxed"
          >
            {t("porque_desc") || "Nuestros agentes coordinan flujos de trabajo inteligentes que automatizan el desarrollo de principio a fin, conectando lógica, datos y despliegue sin fricción."}
          </Motion.p>
        </div>

        {/* CONTENEDOR INTERACTIVO DEL WORKFLOW (Estilo Canvas Blanco con Sutiles Sombras) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Los Nodos Interactivos (Clicables) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workflowNodes.map((node, index) => {
              const isSelected = index === activeNode;

              return (
                <Motion.div
                  key={node.id}
                  onClick={() => setActiveNode(index)} // ¡Interactividad por clic!
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isSelected 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]' 
                      : 'bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl transition-colors ${
                        isSelected 
                          ? 'bg-white/10 text-white' 
                          : 'bg-slate-100 text-blue-600'
                      }`}>
                        {node.icon}
                      </div>
                      <span className={`text-xs font-mono tracking-wider ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                        NODE_0{node.id}
                      </span>
                    </div>

                    <h3 className={`text-base font-bold mb-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {node.title}
                    </h3>
                    
                    <p className={`text-xs font-light leading-relaxed line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {node.desc}
                    </p>
                  </div>

                  <div className={`mt-6 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                    isSelected ? 'border-slate-800 text-blue-400' : 'border-slate-100 text-blue-600'
                  }`}>
                    <span>{isSelected ? t("porque_workflow_active") : t("porque_workflow_explore")}</span>
                    <span>→</span>
                  </div>
                </Motion.div>
              );
            })}
          </div>

          {/* Columna Derecha: Panel de Inspección Interactiva del Nodo Activo */}
          <div className="lg:col-span-6">
            <Motion.div 
              key={activeNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden border border-slate-800"
            >
              {/* Resplandor decorativo interno */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                    {workflowNodes[activeNode].icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400">{t("porque_workflow_live_status")}</span>
                    <h4 className="text-lg font-bold text-white">{workflowNodes[activeNode].title}</h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t("porque_workflow_synced")}
                </span>
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {workflowNodes[activeNode].desc}
              </p>

              {/* Simulación de consola de código interactiva para el nodo seleccionado */}
              <div className="rounded-xl bg-slate-950 border border-slate-800/80 p-4 font-mono text-xs text-slate-300 mb-8 shadow-inner">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800/60 text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> workflow_executor.ts
                  </span>
                  <span>NODE ID: 0{workflowNodes[activeNode].id}</span>
                </div>
                <code>{workflowNodes[activeNode].codePreview}</code>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-400">
                  {t("porque_workflow_interaction")}
                </div>
                <button
                  onClick={() => window.open("https://calendly.com/softwarevalcode/nueva-reunion", "_blank")}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs transition-all hover:bg-slate-100 active:scale-95 shadow-md flex items-center gap-1.5"
                >
                  {t("porque_cta_button") || "Automatizar mi negocio"}
                  <span>→</span>
                </button>
              </div>
            </Motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PorqueValcode;