import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { AnimatePresence } from "framer-motion";
import imgValco from "../../assets/img/valco.png";

export default function ValcoChatButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { language, t } = useLanguage();
  const calendlyLink = "https://calendly.com/softwarevalcode/nueva-reunion";

  const [messages, setMessages] = useState(() => [
    {
      id: 1,
      sender: "bot",
      text: t("chat_welcome"),
      options: [t("chat_option_services"), t("chat_option_why"), t("chat_option_schedule")],
    },
  ]);
  const listRef = useRef(null);

  const buildBotReply = (userInput) => {
    const text = String(userInput)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const has = (...terms) => terms.some((term) => text.includes(term));
    const createReply = (translationKey, optionKeys = [], includeCalendar = false) => {
      const reply = { id: Date.now(), sender: "bot", text: t(translationKey) };
      if (optionKeys.length) reply.options = optionKeys.map((key) => t(key));
      if (includeCalendar) reply.link = calendlyLink;
      return reply;
    };

    if (has("hola", "buenas", "hello", "hi", "hey")) {
      return createReply("chat_welcome", ["chat_option_services", "chat_option_why", "chat_option_schedule"]);
    }
    if (has("por que elegir", "por que valcode", "ventajas", "beneficios", "why choose", "why valcode")) {
      return createReply("chat_why_text", ["chat_option_services", "chat_option_schedule"]);
    }
    if (has("valcode", "quienes somos", "quien es", "sobre ustedes", "about you", "company")) {
      return createReply("chat_company_text", ["chat_option_services", "chat_option_why", "chat_option_schedule"]);
    }
    if (has("precio", "precios", "costo", "cuanto cuesta", "cotizacion", "presupuesto", "price", "pricing", "cost", "quote")) {
      return createReply("chat_cost_text", ["chat_option_schedule", "chat_option_services"]);
    }
    if (has("agendar", "agenda", "asesoria", "reunion", "cita", "calendario", "schedule", "book", "meeting", "appointment", "contactar", "contact")) {
      return createReply("chat_agree_text", [], true);
    }
    if (has("ecommerce", "e-commerce", "tienda", "comprar en linea", "online store", "shop")) {
      return createReply("chat_mobile_text", ["chat_option_web", "chat_option_design", "chat_option_schedule"]);
    }
    if (has("aplicacion", "aplicaciones", "app", "apps", "movil", "moviles", "mobile")) {
      return createReply("chat_mobile_text", ["chat_option_software", "chat_option_design", "chat_option_schedule"]);
    }
    if (has("pagina web", "sitio", "website", "web development", "desarrollo web", "web")) {
      return createReply("chat_web_text", ["chat_option_software", "chat_option_mobile", "chat_option_schedule"]);
    }
    if (has("automat", "proceso repetitivo", "workflow", "flujo", "automate")) {
      return createReply("chat_automation_text", ["chat_option_ai", "chat_option_software", "chat_option_schedule"]);
    }
    if (has("agente", "asistente virtual", "inteligencia artificial", "chatbot", "artificial intelligence", "ai agent") || /\bia\b/.test(text)) {
      return createReply("chat_ai_text", ["chat_option_automation", "chat_option_software", "chat_option_schedule"]);
    }
    if (has("diseno", "ux", "ui", "interfaz", "experiencia de usuario", "design")) {
      return createReply("chat_design_text", ["chat_option_web", "chat_option_mobile", "chat_option_schedule"]);
    }
    if (has("software", "sistema", "plataforma", "custom", "a medida", "system")) {
      return createReply("chat_software_text", ["chat_option_automation", "chat_option_ai", "chat_option_schedule"]);
    }
    if (has("servicio", "services", "que hacen", "que ofrecen", "soluciones", "solutions", "mas informacion", "more information")) {
      return createReply("chat_services_text", ["chat_option_web", "chat_option_software", "chat_option_mobile", "chat_option_automation", "chat_option_ai", "chat_option_design"]);
    }
    if (text === "si" || text === "yes" || has("me interesa", "interested")) {
      return createReply("chat_agree_text", [], true);
    }

    return createReply("chat_default_text", ["chat_option_services", "chat_option_why", "chat_option_schedule"]);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, open]);
  
  const handleBotLogic = (userInput) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((previous) => [...previous, buildBotReply(userInput)]);
      setIsTyping(false);
    }, 900);
  };

  // Reconstruir respuestas del bot cuando cambia el idioma: conservar mensajes de usuario
  useEffect(() => {
    // extraer sólo los textos de usuario en orden
    const userTexts = messages.filter((m) => m.sender === "user").map((m) => m.text);

    // empezar con el mensaje de bienvenida en el nuevo idioma
    const newMessages = [
      { id: Date.now(), sender: "bot", text: t("chat_welcome"), options: [t("chat_option_services"), t("chat_option_why"), t("chat_option_schedule")].map((key) => t(key)) },
    ];

    // recrear la conversación aplicando generateBotReply a cada mensaje de usuario
    userTexts.forEach((ut, i) => {
      newMessages.push({ id: Date.now() + i + 1, sender: "user", text: ut });
      const reply = buildBotReply(ut);
      newMessages.push({ ...reply, id: Date.now() + i + 100 });
    });

    setMessages(newMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const sendMessage = (customText = null) => {
    const text = typeof customText === "string" ? customText : input.trim();
    if (!text) return;

    setMessages((p) => [...p, { id: Date.now(), sender: "user", text }]);
    setInput("");
    handleBotLogic(text);
  };
  return (
    <>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className={`fixed right-4 z-[10002] cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 ${
          open ? "bottom-10 opacity-0 pointer-events-none" : "bottom-24 opacity-100"
        }`}
        title={t("chat_mensaje")}
      >
        <div className="relative">
          <img src={imgValco} alt="Valco" className="h-20 w-20 sm:h-24 sm:w-24 object-contain" />
          <span className="sr-only">{t("chat_mensaje")}</span>
          <span className="absolute bottom-3 right-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b2152] opacity-40"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0b2152] ring-2 ring-white"></span>
          </span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-x-4 bottom-24 z-[10003] flex flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:right-8 sm:left-auto sm:w-[380px] sm:max-h-[65vh]" style={{ height: "calc(100% - 10rem)" }}>
            
            {/* Header */}
            <div className="flex items-center gap-4 bg-[#0b2152] p-6 text-white">
              <img src={imgValco} alt="Valco" className="h-10 w-10 rounded-xl bg-white p-1" />
              <div className="flex-1 text-sm font-bold uppercase tracking-tight">{t("chat_assistant_name")}</div>
              <button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">✕</button>
            </div>

            {/* Mensajes */}
            <div ref={listRef} className="flex-1 space-y-6 overflow-y-auto p-6 scrollbar-none">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                  <div className={`max-w-[85%] rounded-[1.5rem] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                    m.sender === "user" ? "bg-[#0b2152] text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}>
                    {m.text}
                    {m.link && (
                      <a href={m.link} target="_blank" rel="noreferrer" className="block mt-2 font-bold underline text-blue-600">{t("chat_calendar_link")}</a>
                    )}
                  </div>
                  
                  {/* BOTONES DE OPCIONES */}
                  {m.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => sendMessage(opt)}
                          className="px-4 py-2 rounded-full border border-[#0b2152] text-[#0b2152] text-xs font-semibold hover:bg-[#0b2152] hover:text-white transition-all active:scale-90"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-50/30 border-t border-gray-100">
              <div className="flex items-center gap-2 rounded-2xl bg-white border border-gray-200 p-2 focus-within:ring-2 focus-within:ring-[#0b2152]/10 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                  placeholder={t("chat_input_placeholder")}
                  className="flex-1 resize-none bg-transparent px-3 py-1 text-sm outline-none"
                  rows={1}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#0b2152] text-white hover:bg-[#081a3f] active:scale-90 disabled:opacity-20"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}
              {isTyping && (
                <div className="flex items-start" role="status" aria-label={t("chat_typing")}>
                  <div className="flex gap-1 rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:120ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:240ms]" />
                  </div>
                </div>
              )}
      </AnimatePresence>
    </>
  );
}