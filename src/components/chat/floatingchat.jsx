import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  X,
  SendHorizontal,
  Smile,
  MoreVertical,
  RotateCcw,
  CalendarDays,
  Copy,
  Check,
  CheckCheck,
  ArrowRight,
  SmilePlus,
} from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";
import { useLanguage } from "../../context/LanguageContext";
import imgValco from "../../assets/img/valco.png";

// Selector completo de emojis (se carga solo al abrirlo)
const EmojiPicker = lazy(() => import("emoji-picker-react"));

const CALENDLY_LINK = "https://calendly.com/softwarevalcode/nueva-reunion";
const WHATSAPP_LINK = "https://wa.me/573227223032";
const REACTIONS = ["👍", "❤️", "😂", "😮", "🙏"];
const MENU_KEYS = ["chat_option_services", "chat_option_why", "chat_option_schedule"];

/* Emojis que el bot entiende → respuesta + opciones sugeridas.
   Se comparan sin selector de variación (FE0F) ni tono de piel. */
const EMOJI_INTENTS = [
  { emojis: ["👋", "🙋", "🤝", "🖐", "✋"], textKey: "chat_welcome", options: MENU_KEYS },
  { emojis: ["📅", "🗓", "📆", "⏰", "🕐", "☎", "📞"], textKey: "chat_agree_text", options: [], card: true },
  { emojis: ["💰", "💵", "💲", "🤑", "💸", "💳", "🪙", "🏦"], textKey: "chat_cost_text", options: ["chat_option_schedule", "chat_option_services"] },
  { emojis: ["🤖", "🧠", "👾", "🦾"], textKey: "chat_ai_text", options: ["chat_option_automation", "chat_option_software", "chat_option_schedule"] },
  { emojis: ["🛒", "🛍", "🏪", "📦"], textKey: "chat_mobile_text", options: ["chat_option_web", "chat_option_design", "chat_option_schedule"] },
  { emojis: ["📱", "📲"], textKey: "chat_mobile_text", options: ["chat_option_software", "chat_option_design", "chat_option_schedule"] },
  { emojis: ["💻", "🖥", "🌐", "⌨", "🖱", "👨‍💻", "👩‍💻", "🧑‍💻"], textKey: "chat_web_text", options: ["chat_option_software", "chat_option_mobile", "chat_option_schedule"] },
  { emojis: ["⚙", "🔧", "🛠", "⚡", "🔄", "🔁", "🔩"], textKey: "chat_automation_text", options: ["chat_option_ai", "chat_option_software", "chat_option_schedule"] },
  { emojis: ["🎨", "✏", "🖌", "🖍", "📐", "✨"], textKey: "chat_design_text", options: ["chat_option_web", "chat_option_mobile", "chat_option_schedule"] },
  { emojis: ["🚀", "📈", "💼", "🏢", "💡", "🎯", "📊", "🏆"], textKey: "chat_services_text", options: ["chat_option_web", "chat_option_software", "chat_option_mobile", "chat_option_automation", "chat_option_ai", "chat_option_design"] },
  { emojis: ["😢", "😭", "😞", "😔", "😟", "😡", "😠", "🤬", "👎", "💔", "😩", "😫", "😣", "😖"], textKey: "chat_emoji_sad", options: ["chat_option_schedule", "chat_option_services"] },
  { emojis: ["🤔", "❓", "❔", "😕", "🧐", "🤷", "😐", "😶", "🙄"], textKey: "chat_emoji_doubt", options: MENU_KEYS },
  { emojis: ["😂", "🤣", "😄", "😁", "😆", "😅", "😀", "😃", "😹", "😜", "😝", "😛", "😎"], textKey: "chat_emoji_laugh", options: MENU_KEYS },
  { emojis: ["❤", "💙", "💜", "💚", "🧡", "💛", "🤍", "🖤", "💖", "💕", "💗", "😍", "🥰", "😘", "😊", "☺", "🙏", "🤗", "🥹"], textKey: "chat_emoji_thanks", options: MENU_KEYS },
  { emojis: ["👍", "👌", "✅", "🙌", "👏", "💯", "🔥", "💪", "✔", "☑", "🆗", "🤩", "🥳", "🎉"], textKey: "chat_emoji_ok", options: ["chat_option_schedule", "chat_option_services"] },
];
const PICTOGRAPHIC = /\p{Extended_Pictographic}/u;
const cleanEmoji = (str) => str.replace(/\uFE0F|\u{1F3FB}|\u{1F3FC}|\u{1F3FD}|\u{1F3FE}|\u{1F3FF}/gu, "");
const TEASER_KEY = "valco-teaser-seen";

let nextId = 1;
const newId = () => nextId++;

/* Los mensajes del bot guardan claves de traducción: al cambiar de idioma se traducen solos */
const buildBotReply = (userInput) => {
  const text = String(userInput)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  const has = (...terms) => terms.some((term) => text.includes(term));
  const reply = (textKey, optionKeys = [], card = false) => ({
    id: newId(),
    sender: "bot",
    textKey,
    optionKeys,
    card,
    time: new Date(),
  });

  if (has("hola", "buenas", "hello", "hi", "hey")) return reply("chat_welcome", MENU_KEYS);
  if (has("por que elegir", "por que valcode", "ventajas", "beneficios", "why choose", "why valcode"))
    return reply("chat_why_text", ["chat_option_services", "chat_option_schedule"]);
  if (has("valcode", "quienes somos", "quien es", "sobre ustedes", "about you", "company"))
    return reply("chat_company_text", MENU_KEYS);
  if (has("precio", "precios", "costo", "cuanto cuesta", "cotizacion", "presupuesto", "price", "pricing", "cost", "quote"))
    return reply("chat_cost_text", ["chat_option_schedule", "chat_option_services"]);
  if (has("agendar", "agenda", "asesoria", "reunion", "cita", "calendario", "schedule", "book", "meeting", "appointment", "consultation", "contactar", "contact"))
    return reply("chat_agree_text", [], true);
  if (has("ecommerce", "e-commerce", "tienda", "comprar en linea", "online store", "shop"))
    return reply("chat_mobile_text", ["chat_option_web", "chat_option_design", "chat_option_schedule"]);
  if (has("aplicacion", "aplicaciones", "app", "apps", "movil", "moviles", "mobile"))
    return reply("chat_mobile_text", ["chat_option_software", "chat_option_design", "chat_option_schedule"]);
  if (has("pagina web", "sitio", "website", "web development", "desarrollo web", "web"))
    return reply("chat_web_text", ["chat_option_software", "chat_option_mobile", "chat_option_schedule"]);
  if (has("automat", "proceso repetitivo", "workflow", "flujo", "automate"))
    return reply("chat_automation_text", ["chat_option_ai", "chat_option_software", "chat_option_schedule"]);
  if (has("agente", "asistente virtual", "inteligencia artificial", "chatbot", "artificial intelligence", "ai agent") || /\b(ia|ai)\b/.test(text))
    return reply("chat_ai_text", ["chat_option_automation", "chat_option_software", "chat_option_schedule"]);
  if (has("diseno", "ux", "ui", "interfaz", "experiencia de usuario", "design"))
    return reply("chat_design_text", ["chat_option_web", "chat_option_mobile", "chat_option_schedule"]);
  if (has("software", "sistema", "plataforma", "custom", "a medida", "system"))
    return reply("chat_software_text", ["chat_option_automation", "chat_option_ai", "chat_option_schedule"]);
  if (has("servicio", "services", "que hacen", "que ofrecen", "soluciones", "solutions", "mas informacion", "more information"))
    return reply("chat_services_text", ["chat_option_web", "chat_option_software", "chat_option_mobile", "chat_option_automation", "chat_option_ai", "chat_option_design"]);
  if (text === "si" || text === "yes" || has("me interesa", "interested")) return reply("chat_agree_text", [], true);

  if (has("gracias", "thank", "thx")) return reply("chat_emoji_thanks", MENU_KEYS);

  if (PICTOGRAPHIC.test(userInput)) {
    const raw = cleanEmoji(String(userInput));
    const intent = EMOJI_INTENTS.find((it) => it.emojis.some((e) => raw.includes(cleanEmoji(e))));
    if (intent) return reply(intent.textKey, intent.options, Boolean(intent.card));
    // Solo emojis sin intención conocida
    if (!/[\p{L}\p{N}]/u.test(raw)) return reply("chat_emoji_other", MENU_KEYS);
  }

  return reply("chat_default_text", MENU_KEYS);
};

const welcomeMessage = () => ({
  id: newId(),
  sender: "bot",
  textKey: "chat_welcome",
  optionKeys: MENU_KEYS,
  card: false,
  time: new Date(),
});

const Avatar = ({ size = "h-7 w-7", online = false }) => (
  <span className={`relative inline-flex shrink-0 ${size}`}>
    <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-white ring-1 ring-black/5">
      <img src={imgValco} alt="" className="h-[85%] w-[85%] object-contain" />
    </span>
    {online && (
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0f2a66]" />
    )}
  </span>
);

export default function ValcoChatButton() {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(() => [welcomeMessage()]);
  const [reactions, setReactions] = useState({});
  const [pickerFor, setPickerFor] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [unread, setUnread] = useState(1);
  const [teaser, setTeaser] = useState(false);

  const listRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);

  const textOf = useCallback((m) => (m.sender === "bot" ? t(m.textKey) : m.text), [t]);
  const formatTime = (d) => d.toLocaleTimeString(language === "en" ? "en-US" : "es-CO", { hour: "numeric", minute: "2-digit" });

  // Burbuja de saludo tras unos segundos (una vez por sesión)
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {
      /* sin almacenamiento */
    }
    if (seen) return;
    const id = setTimeout(() => setTeaser(true), 4000);
    return () => clearTimeout(id);
  }, []);

  const dismissTeaser = () => {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {
      /* sin almacenamiento */
    }
  };

  // Scroll al último mensaje
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, open]);

  // Escape cierra paneles / chat
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (showEmoji || menuOpen || pickerFor) {
        setShowEmoji(false);
        setMenuOpen(false);
        setPickerFor(null);
      } else setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, showEmoji, menuOpen, pickerFor]);

  useEffect(() => () => clearTimeout(typingTimer.current), []);

  const openChat = () => {
    setOpen(true);
    setUnread(0);
    dismissTeaser();
    setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 350);
  };

  const sendMessage = (customText) => {
    const text = (typeof customText === "string" ? customText : input).trim();
    if (!text || isTyping) return;
    setMessages((prev) => [...prev, { id: newId(), sender: "user", text, time: new Date() }]);
    setInput("");
    setShowEmoji(false);
    if (inputRef.current) inputRef.current.style.height = "auto";
    setIsTyping(true);
    typingTimer.current = setTimeout(() => {
      setMessages((prev) => [...prev, buildBotReply(text)]);
      setIsTyping(false);
    }, 650 + Math.min(text.length * 12, 700));
  };

  const restart = () => {
    clearTimeout(typingTimer.current);
    setIsTyping(false);
    setMessages([welcomeMessage()]);
    setReactions({});
    setMenuOpen(false);
  };

  const react = (id, emoji) => {
    setReactions((prev) => {
      const next = { ...prev };
      if (next[id] === emoji) delete next[id];
      else next[id] = emoji;
      return next;
    });
    setPickerFor(null);
  };

  const copy = async (m) => {
    try {
      await navigator.clipboard.writeText(textOf(m));
      setCopiedId(m.id);
      setTimeout(() => setCopiedId(null), 1400);
    } catch {
      /* portapapeles no disponible */
    }
    setPickerFor(null);
  };

  const insertEmoji = (emoji) => {
    const el = inputRef.current;
    const start = el?.selectionStart ?? input.length;
    const end = el?.selectionEnd ?? input.length;
    const next = input.slice(0, start) + emoji + input.slice(end);
    setInput(next);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      el.setSelectionRange(start + emoji.length, start + emoji.length);
      autoGrow(el);
    });
  };

  const emojiCategories = [
    { category: "suggested", name: t("chat_cat_recent") },
    { category: "smileys_people", name: t("chat_cat_smileys") },
    { category: "animals_nature", name: t("chat_cat_animals") },
    { category: "food_drink", name: t("chat_cat_food") },
    { category: "travel_places", name: t("chat_cat_travel") },
    { category: "activities", name: t("chat_cat_activities") },
    { category: "objects", name: t("chat_cat_objects") },
    { category: "symbols", name: t("chat_cat_symbols") },
    { category: "flags", name: t("chat_cat_flags") },
  ];

  const autoGrow = (el) => {
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
  };

  const last = messages[messages.length - 1];
  const quickReplies = !isTyping && last?.sender === "bot" ? last.optionKeys : [];
  // Último mensaje del usuario que ya recibió respuesta → "Visto"
  const lastUserIdx = messages.map((m) => m.sender).lastIndexOf("user");
  const seen = lastUserIdx >= 0 && lastUserIdx < messages.length - 1;

  return (
    <div data-keep-light>
      {/* ---------- Lanzador ---------- */}
      <div
        className={`fixed bottom-24 right-4 z-[10002] flex items-end gap-2 transition-all duration-500 ${open ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"}`}
      >
        <AnimatePresence>
          {teaser && !open && (
            <Motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="relative mb-2 hidden w-60 origin-bottom-right cursor-pointer rounded-2xl rounded-br-md bg-white p-3.5 pr-8 text-[13px] leading-snug text-slate-700 shadow-[0_12px_40px_-8px_rgba(11,33,82,0.35)] ring-1 ring-black/5 sm:block"
              onClick={openChat}
            >
              <span className="mb-1 block text-[11px] font-semibold text-blue-600">Valco</span>
              {t("chat_teaser")}
              <button
                type="button"
                aria-label={t("chat_close")}
                onClick={(e) => {
                  e.stopPropagation();
                  dismissTeaser();
                }}
                className="absolute right-2 top-2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </Motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={openChat}
          aria-label={t("chat_open")}
          title={t("chat_mensaje")}
          className="relative shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <img src={imgValco} alt="Valco" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
          <span className="absolute bottom-3 right-3 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0b2152] opacity-40" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#0b2152] ring-2 ring-white" />
          </span>
          {unread > 0 && (
            <span className="absolute right-1 top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[11px] font-bold text-white ring-2 ring-white">
              {unread}
            </span>
          )}
        </button>
      </div>

      {/* ---------- Ventana ---------- */}
      <AnimatePresence>
        {open && (
          <Motion.section
            role="dialog"
            aria-label={t("chat_assistant_name")}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="fixed inset-0 z-[10003] flex origin-bottom-right flex-col overflow-hidden bg-white sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100vh-8rem))] sm:w-[400px] sm:rounded-[28px] sm:shadow-[0_30px_80px_-20px_rgba(11,33,82,0.45)] sm:ring-1 sm:ring-black/5"
          >
            {/* Header */}
            <header className="relative z-30 shrink-0 bg-gradient-to-br from-[#0b2152] via-[#0f2a66] to-[#1d4ed8] px-4 pb-4 pt-4 text-white sm:rounded-t-[28px]">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
              </div>
              <div className="relative flex items-center gap-3">
                <Avatar size="h-11 w-11" online />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-bold leading-tight">Valco</p>
                  <p className="flex items-center gap-1.5 truncate text-xs text-blue-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {t("chat_status")}
                  </p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t("chat_human")}
                  aria-label={t("chat_human")}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg transition-colors hover:bg-[#25d366]"
                >
                  <RiWhatsappLine />
                </a>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={t("chat_menu")}
                    aria-expanded={menuOpen}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  >
                    <MoreVertical className="h-[18px] w-[18px]" />
                  </button>
                  <AnimatePresence>
                    {menuOpen && (
                      <Motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-11 z-20 w-56 origin-top-right rounded-2xl bg-white p-1.5 text-sm text-slate-700 shadow-xl ring-1 ring-black/5"
                      >
                        <button type="button" onClick={restart} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-slate-100">
                          <RotateCcw className="h-4 w-4 text-slate-400" /> {t("chat_restart")}
                        </button>
                        <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-100">
                          <CalendarDays className="h-4 w-4 text-blue-500" /> {t("chat_option_schedule")}
                        </a>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-100">
                          <RiWhatsappLine className="h-4 w-4 text-[#25d366]" /> {t("chat_human")}
                        </a>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("chat_close")}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>
            </header>

            {/* Mensajes */}
            <div
              ref={listRef}
              onClick={() => {
                setMenuOpen(false);
                setShowEmoji(false);
              }}
              className="relative flex-1 overflow-y-auto overscroll-contain bg-slate-50 bg-[radial-gradient(rgba(11,33,82,0.07)_1px,transparent_1px)] bg-[size:18px_18px] px-4 py-5 [scrollbar-width:thin]"
            >
              {/* Presentación */}
              <div className="mb-5 flex flex-col items-center text-center">
                <Avatar size="h-16 w-16" />
                <p className="mt-2 text-sm font-bold text-slate-900">Valco</p>
                <p className="text-xs text-slate-500">{t("chat_intro")}</p>
                <span className="mt-4 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 shadow-sm ring-1 ring-black/5">
                  {t("chat_today")}
                </span>
              </div>

              <div className="space-y-1">
                {messages.map((m, i) => {
                  const isBot = m.sender === "bot";
                  const nextSame = messages[i + 1]?.sender === m.sender;
                  const prevSame = messages[i - 1]?.sender === m.sender;
                  const reaction = reactions[m.id];
                  return (
                    <Motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className={`flex flex-col ${isBot ? "items-start" : "items-end"} ${prevSame ? "" : "pt-2"}`}
                    >
                     <div className={`flex w-full items-end gap-2 ${isBot ? "justify-start" : "justify-end"} ${reaction ? "pb-3" : ""}`}>
                      {isBot && (nextSame ? <span className="w-7 shrink-0" /> : <Avatar />)}

                      <div className={`group/msg relative flex max-w-[80%] flex-col ${isBot ? "items-start" : "items-end"}`}>
                        {/* Barra de reacciones */}
                        <div
                          className={`absolute -top-10 z-10 flex items-center gap-0.5 rounded-full bg-white px-1.5 py-1 shadow-lg ring-1 ring-black/5 transition-all duration-200 ${
                            isBot ? "left-0" : "right-0"
                          } ${
                            pickerFor === m.id
                              ? "visible translate-y-0 opacity-100"
                              : "invisible translate-y-1 opacity-0 sm:group-hover/msg:visible sm:group-hover/msg:translate-y-0 sm:group-hover/msg:opacity-100"
                          }`}
                        >
                          {REACTIONS.map((r) => (
                            <button
                              key={r}
                              type="button"
                              aria-label={`${t("chat_react")} ${r}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                react(m.id, r);
                              }}
                              className={`flex h-7 w-7 items-center justify-center rounded-full text-base transition-transform hover:scale-125 ${reaction === r ? "bg-blue-50" : ""}`}
                            >
                              {r}
                            </button>
                          ))}
                          <span className="mx-0.5 h-4 w-px bg-slate-200" />
                          <button
                            type="button"
                            aria-label={t("chat_copy")}
                            title={copiedId === m.id ? t("chat_copied") : t("chat_copy")}
                            onClick={(e) => {
                              e.stopPropagation();
                              copy(m);
                            }}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          >
                            {copiedId === m.id ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                          </button>
                        </div>

                        {/* Burbuja */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setPickerFor((p) => (p === m.id ? null : m.id));
                          }}
                          className={`relative cursor-default whitespace-pre-wrap break-words px-4 py-2.5 text-[14px] leading-relaxed ${
                            isBot
                              ? `rounded-[20px] bg-white text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] ${nextSame ? "rounded-bl-md" : "rounded-bl-[6px]"} ${prevSame ? "rounded-tl-md" : ""}`
                              : `rounded-[20px] bg-gradient-to-br from-[#2563eb] to-[#0b2152] text-white shadow-[0_6px_16px_-6px_rgba(29,78,216,0.6)] ${nextSame ? "rounded-br-md" : "rounded-br-[6px]"} ${prevSame ? "rounded-tr-md" : ""}`
                          }`}
                        >
                          {textOf(m)}

                          {/* Tarjeta de agenda */}
                          {m.card && (
                            <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-blue-100">
                              <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-white p-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                                  <CalendarDays className="h-5 w-5" />
                                </span>
                                <div className="min-w-0">
                                  <p className="text-[13px] font-bold text-slate-900">{t("chat_card_title")}</p>
                                  <p className="text-xs text-slate-500">{t("chat_card_desc")}</p>
                                </div>
                              </div>
                              <a
                                href={CALENDLY_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center justify-center gap-2 bg-blue-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700"
                              >
                                {t("chat_card_btn")} <ArrowRight className="h-4 w-4" />
                              </a>
                            </div>
                          )}

                          {/* Reacción elegida */}
                          {reaction && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                react(m.id, reaction);
                              }}
                              className={`absolute -bottom-3.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-[13px] shadow-md ring-1 ring-black/5 ${isBot ? "right-2" : "left-2"}`}
                            >
                              {reaction}
                            </button>
                          )}
                        </div>

                      </div>
                     </div>

                      {/* Hora + estado */}
                      {!nextSame && (
                        <span className={`mt-1 flex items-center gap-1 px-1 text-[10px] text-slate-400 ${isBot ? "pl-10" : ""} ${reaction ? "mt-2" : ""}`}>
                          {formatTime(m.time)}
                          {!isBot && i === lastUserIdx && (
                            seen ? (
                              <span className="flex items-center gap-0.5 text-blue-500">
                                <CheckCheck className="h-3.5 w-3.5" /> {t("chat_seen")}
                              </span>
                            ) : (
                              <Check className="h-3.5 w-3.5" />
                            )
                          )}
                        </span>
                      )}
                    </Motion.div>
                  );
                })}

                {/* Escribiendo… */}
                <AnimatePresence>
                  {isTyping && (
                    <Motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-end gap-2 pt-2"
                      role="status"
                      aria-label={t("chat_typing")}
                    >
                      <Avatar />
                      <div className="flex items-center gap-1 rounded-[20px] rounded-bl-[6px] bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04]">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:150ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]" />
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Respuestas rápidas */}
            <AnimatePresence initial={false}>
              {quickReplies.length > 0 && (
                <Motion.div
                  key={last.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="shrink-0 border-t border-slate-100 bg-white px-3 pt-3"
                >
                  <div className="flex flex-wrap gap-2 pb-1">
                    {quickReplies.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => sendMessage(t(key))}
                        className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        {key === "chat_option_schedule" && <CalendarDays className="mr-1.5 h-3.5 w-3.5" />}
                        {t(key)}
                      </button>
                    ))}
                  </div>
                </Motion.div>
              )}
            </AnimatePresence>

            {/* Entrada */}
            <div className={`relative shrink-0 bg-white px-3 pb-3 ${quickReplies.length ? "pt-2" : "border-t border-slate-100 pt-3"}`}>
              <AnimatePresence>
                {showEmoji && (
                  <Motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="valco-emoji absolute bottom-full left-3 right-3 z-20 mb-2 overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-12px_rgba(11,33,82,0.35)] ring-1 ring-black/5"
                  >
                    <Suspense
                      fallback={
                        <div className="flex h-[340px] items-center justify-center">
                          <span className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                        </div>
                      }
                    >
                      <EmojiPicker
                        onEmojiClick={(data) => insertEmoji(data.emoji)}
                        emojiStyle="native"
                        theme="light"
                        width="100%"
                        height={340}
                        lazyLoadEmojis
                        autoFocusSearch={false}
                        searchPlaceholder={t("chat_emoji_search")}
                        previewConfig={{ showPreview: false }}
                        categories={emojiCategories}
                        suggestedEmojisMode="recent"
                      />
                    </Suspense>
                  </Motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-end gap-2 rounded-[22px] bg-slate-100 p-1.5 ring-1 ring-transparent transition-all focus-within:bg-white focus-within:ring-blue-500/40">
                <button
                  type="button"
                  onClick={() => setShowEmoji((v) => !v)}
                  aria-label={t("chat_emoji")}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${showEmoji ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                >
                  <Smile className="h-5 w-5" />
                </button>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    autoGrow(e.target);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder={t("chat_input_placeholder")}
                  rows={1}
                  className="max-h-28 flex-1 resize-none self-center bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                <Motion.button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isTyping}
                  aria-label={t("chat_send")}
                  whileTap={{ scale: 0.85 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#0b2152] text-white shadow-md shadow-blue-600/30 transition-all disabled:bg-none disabled:bg-slate-300 disabled:shadow-none"
                >
                  <SendHorizontal className="h-4 w-4" />
                </Motion.button>
              </div>

              <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <SmilePlus className="h-3 w-3" /> {t("chat_powered")}
              </p>
            </div>
          </Motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
