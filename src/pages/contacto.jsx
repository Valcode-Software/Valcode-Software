import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiSmartphoneLine, RiMailLine, RiCheckLine, RiErrorWarningLine, RiCloseLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    acceptedTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Configuración de EmailJS
  const EMAILJS_CONFIG = {
    serviceId: 'valcode_contact',
    templateId: 'template_93i6ml8',
    userId: '8r9u0XFzuB7KHwW_s'
  };

  // Validaciones profesionales
  const validators = {
    empresa: (value) => {
      if (!value.trim()) return "El nombre de la empresa es obligatorio.";
      if (value.trim().length < 2) return "Debe tener al menos 2 caracteres.";
      if (value.trim().length > 100) return "No puede exceder 100 caracteres.";
      return "";
    },
    nombre: (value) => {
      if (!value.trim()) return "Tu nombre es obligatorio.";
      if (value.trim().length < 2) return "Debe tener al menos 2 caracteres.";
      if (value.trim().length > 50) return "No puede exceder 50 caracteres.";
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return "Solo se permiten letras y espacios.";
      return "";
    },
    email: (value) => {
      if (!value.trim()) return "El email es obligatorio.";
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) return "El formato del email no es válido.";
      const domain = value.split('@')[1];
      if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) {
        return "El dominio del email no es válido.";
      }
      const tld = domain.split('.').pop();
      if (tld.length < 2) return "El email debe tener un dominio válido (ej: .com, .es)";
      return "";
    },
    telefono: (value) => {
      if (!value.trim()) return "El teléfono es obligatorio.";
      const cleanNumber = value.replace(/\D/g, '');
      if (cleanNumber.length !== 10) return "El teléfono debe tener exactamente 10 dígitos.";
      return "";
    },
    mensaje: (value) => {
      if (!value.trim()) return "El mensaje es obligatorio.";
      if (value.trim().length > 1000) return "El mensaje no puede exceder 1000 caracteres.";
      return "";
    },
    acceptedTerms: (value) => {
      if (!value) return "Debes aceptar los términos y condiciones para continuar.";
      return "";
    }
  };

  const validateField = (name, value) => {
    if (validators[name]) {
      return validators[name](value);
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = type === 'checkbox' ? checked : value;
    if (type !== 'checkbox') {
      if (name === 'telefono') {
        processedValue = value.replace(/\D/g, '');
      } else if (name === 'nombre') {
        processedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      }
    }
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    if (touched[name]) {
      const error = validateField(name, processedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const val = type === 'checkbox' ? checked : (name === 'telefono' ? value.replace(/\D/g, '') : value);
    const error = validateField(name, val);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      const value = key === 'telefono' ? formData[key].replace(/\D/g, '') : formData[key];
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    setErrors(newErrors);
    setTouched({
      empresa: true,
      nombre: true,
      email: true,
      telefono: true,
      mensaje: true,
      acceptedTerms: true
    });
    return isValid;
  };

  const getNextRequestId = () => {
    const lastId = localStorage.getItem('lastRequestId');
    const nextId = lastId ? parseInt(lastId) + 1 : 1;
    localStorage.setItem('lastRequestId', nextId.toString());
    return `VAL-${String(nextId).padStart(2, '0')}`;
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showNotification('Por favor, corrige los errores para continuar.', 'error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: '' });

    try {
      const requestId = getNextRequestId();
      emailjs.init(EMAILJS_CONFIG.userId);
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          empresa: formData.empresa,
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          fecha: new Date().toLocaleString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          requestId: requestId,
        }
      );

      setSubmitStatus({
        show: true,
        success: true,
        message: `¡Solicitud ${requestId} enviada con éxito! Te contactaremos pronto.`
      });
      showNotification(`Solicitud ${requestId} enviada. ¡Gracias por contactarnos!`, 'success');
      setFormData({
        empresa: "",
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
        acceptedTerms: false,
      });
      setTouched({});
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Hubo un error al enviar la solicitud. Por favor intenta de nuevo.'
      });
      showNotification('No se pudo enviar la solicitud. Por favor, inténtalo de nuevo.', 'error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ show: false, success: false, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden px-6 pt-36 pb-24 font-sans">

      {/* Fondo técnico con cuadrícula sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      {/* NOTIFICACIÓN FLOTANTE MODERNA */}
      {notification.show && (
        <div className="fixed top-32 right-5 z-50 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transform transition-all duration-500 animate-slide-in">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <RiCheckLine className="h-6 w-6 text-emerald-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 rounded-full">
                    <RiErrorWarningLine className="h-6 w-6 text-red-600" />
                  </div>
                )}
              </div>
              <div className="ml-4 w-0 flex-1">
                <p className="text-base font-semibold text-slate-900">
                  {notification.type === 'success' ? 'Solicitud Enviada' : 'Ocurrió un Error'}
                </p>
                <p className="mt-1 text-sm text-slate-600 font-light">{notification.message}</p>
              </div>
              <div className="ml-4 flex flex-shrink-0">
                <button
                  onClick={() => setNotification({ show: false, message: '', type: '' })}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <RiCloseLine className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className={`h-1.5 ${notification.type === 'success' ? 'bg-blue-600' : 'bg-red-500'} animate-timer`}></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header de la página */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Contacto Profesional</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">
            {t("contact_req") || "Inicia tu próximo proyecto"}
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            {t("contact_desc") || "Cuéntanos sobre tus requerimientos y nuestro equipo técnico se pondrá en contacto contigo de inmediato."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* FORMULARIO (Lado Izquierdo - 7 columnas) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5" noValidate>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de tu empresa o startup"
                  value={formData.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3.5 bg-slate-50 rounded-2xl border ${
                    errors.empresa && touched.empresa
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : formData.empresa && !errors.empresa && touched.empresa
                      ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  } outline-none transition-all text-slate-900 text-sm font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {errors.empresa && touched.empresa && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.empresa}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3.5 bg-slate-50 rounded-2xl border ${
                    errors.nombre && touched.nombre
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : formData.nombre && !errors.nombre && touched.nombre
                      ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  } outline-none transition-all text-slate-900 text-sm font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {errors.nombre && touched.nombre && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.nombre}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="correo@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3.5 bg-slate-50 rounded-2xl border ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : formData.email && !errors.email && touched.email
                      ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  } outline-none transition-all text-slate-900 text-sm font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">Teléfono / Celular</label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="3227223032"
                  value={formData.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  maxLength={10}
                  className={`w-full px-4 py-3.5 bg-slate-50 rounded-2xl border ${
                    errors.telefono && touched.telefono
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : formData.telefono && !errors.telefono && touched.telefono
                      ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  } outline-none transition-all text-slate-900 text-sm font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {errors.telefono && touched.telefono && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.telefono}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">Mensaje o Requerimiento</label>
                <textarea
                  rows="4"
                  name="mensaje"
                  placeholder="Describe brevemente el sistema, plataforma o agente de IA que necesitas..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  maxLength={1000}
                  className={`w-full px-4 py-3.5 bg-slate-50 rounded-2xl border ${
                    errors.mensaje && touched.mensaje
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : formData.mensaje && !errors.mensaje && touched.mensaje
                      ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  } outline-none transition-all text-slate-900 text-sm font-medium resize-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                ></textarea>
                {formData.mensaje && (
                  <p className="text-[11px] text-slate-400 mt-1 text-right font-mono">
                    {formData.mensaje.length}/1000 caracteres
                  </p>
                )}
                {errors.mensaje && touched.mensaje && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.mensaje}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    id="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="acceptedTerms" className="text-xs text-slate-600 cursor-pointer select-none leading-relaxed">
                    {t("contact_terms1") || "He leído y acepto los "}
                    <Link to="/terminos" target="_blank" className="text-blue-600 hover:underline font-semibold">{t("footer_terminos") || "Términos"}</Link>
                    {t("contact_terms2") || " y la "}
                    <Link to="/privacidad" target="_blank" className="text-blue-600 hover:underline font-semibold">{t("footer_privacidad") || "Política de Privacidad"}</Link>
                    {t("contact_terms3") || "."}
                  </label>
                </div>
                {errors.acceptedTerms && touched.acceptedTerms && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <RiErrorWarningLine className="flex-shrink-0" /> {errors.acceptedTerms}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-slate-950 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/10 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t("contact_submitting") || "Enviando solicitud..."}
                  </span>
                ) : (
                  <>
                    <span>{t("contact_submit") || "Enviar Solicitud"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO (Lado Derecho - 5 columnas) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-slate-50 border border-slate-200/80 p-8 sm:p-10 rounded-3xl h-full">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-950 tracking-tight">
                {t("contact_info_title_1") || "Conectemos con"} <br />
                <span className="text-blue-600">{t("contact_info_title_2") || "alta tecnología"}</span>
              </h2>
              <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                {t("contact_info_desc") || "Estamos listos para analizar tu arquitectura actual, escalar tu infraestructura o integrar flujos de trabajo inteligentes."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm group hover:border-slate-300 transition-all">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 border border-blue-100">
                  <RiSmartphoneLine size={22} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-0.5">{t("contact_info_celular") || "Teléfono Directo"}</h4>
                  <p className="text-slate-900 text-base font-bold">+57 322 722 3032</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm group hover:border-slate-300 transition-all">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 border border-blue-100">
                  <RiMailLine size={22} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-0.5">{t("contact_info_email") || "Correo Electrónico"}</h4>
                  <p className="text-slate-900 text-base font-bold">softwarevalcode@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>{t("contact_info_secure") || "Comunicaciones cifradas y protegidas bajo NDA"}</span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes timer {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-timer {
          animation: timer 5s linear forwards;
        }
      `}</style>
    </div>
  );
}