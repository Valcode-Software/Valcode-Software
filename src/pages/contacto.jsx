import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiSmartphoneLine, RiMailLine, RiCheckLine, RiErrorWarningLine, RiCloseLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../context/LanguageContext";

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

  // Configuración de EmailJS - Reemplaza con tus credenciales
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

      // Validación más estricta de email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) return "El formato del email no es válido.";

      // Validar que el dominio tenga al menos un punto y no sea solo números
      const domain = value.split('@')[1];
      if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) {
        return "El dominio del email no es válido.";
      }

      // Validar TLD (última parte después del último punto)
      const tld = domain.split('.').pop();
      if (tld.length < 2) return "El email debe tener un dominio válido (ej: .com, .es)";

      return "";
    },
    telefono: (value) => {
      if (!value.trim()) return "El teléfono es obligatorio.";

      // Eliminar espacios, guiones y otros caracteres no numéricos
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

      const result = await emailjs.send(
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

      console.log('Email enviado exitosamente:', result.text);

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
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] relative overflow-hidden px-4 pt-36 pb-24">

      {/* NOTIFICACIÓN FLOTANTE MODERNA */}
      {notification.show && (
        <div className={`fixed top-32 right-5 z-50 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transform transition-all duration-500 animate-slide-in`}>
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <div className="p-2 bg-green-100 rounded-full">
                    <RiCheckLine className="h-6 w-6 text-green-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 rounded-full">
                    <RiErrorWarningLine className="h-6 w-6 text-red-600" />
                  </div>
                )}
              </div>
              <div className="ml-4 w-0 flex-1">
                <p className="text-base font-medium text-gray-900">
                  {notification.type === 'success' ? 'Solicitud Enviada' : 'Ocurrió un Error'}
                </p>
                <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
              </div>
              <div className="ml-4 flex flex-shrink-0">
                <button
                  onClick={() => setNotification({ show: false, message: '', type: '' })}
                  className="inline-flex rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Cerrar</span>
                  <RiCloseLine className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className={`h-1.5 ${notification.type === 'success' ? 'bg-blue-500' : 'bg-red-500'} animate-timer`}></div>
        </div>
      )}

      {/* ESTRELLAS / GALAXIA */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full mx-auto relative z-10">

        {/* FORMULARIO */}
        <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-900/20">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#020617]">{t("contact_req")}</span>
          </h1>

          <p className="text-gray-600 mb-6 text-sm">
            {t("contact_desc")}
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-4" noValidate>
            <div>
              <input
                type="text"
                name="empresa"
                placeholder={t("contact_empresa")}
                value={formData.empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${errors.empresa && touched.empresa
                    ? "border-red-500 focus:ring-red-500"
                    : formData.empresa && !errors.empresa && touched.empresa
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-200 focus:ring-blue-800"
                  } focus:outline-none focus:ring-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              />
              {errors.empresa && touched.empresa && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.empresa}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="nombre"
                placeholder={t("contact_nombre")}
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${errors.nombre && touched.nombre
                    ? "border-red-500 focus:ring-red-500"
                    : formData.nombre && !errors.nombre && touched.nombre
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-200 focus:ring-blue-800"
                  } focus:outline-none focus:ring-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              />
              {errors.nombre && touched.nombre && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.nombre}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder={t("contact_email")}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${errors.email && touched.email
                    ? "border-red-500 focus:ring-red-500"
                    : formData.email && !errors.email && touched.email
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-200 focus:ring-blue-800"
                  } focus:outline-none focus:ring-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="telefono"
                placeholder={t("contact_telefono")}
                value={formData.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                maxLength={10}
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${errors.telefono && touched.telefono
                    ? "border-red-500 focus:ring-red-500"
                    : formData.telefono && !errors.telefono && touched.telefono
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-200 focus:ring-blue-800"
                  } focus:outline-none focus:ring-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              />
              {errors.telefono && touched.telefono && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.telefono}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="3"
                name="mensaje"
                placeholder={t("contact_mensaje")}
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                maxLength={1000}
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${errors.mensaje && touched.mensaje
                    ? "border-red-500 focus:ring-red-500"
                    : formData.mensaje && !errors.mensaje && touched.mensaje
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-200 focus:ring-blue-800"
                  } focus:outline-none focus:ring-2 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              ></textarea>
              {formData.mensaje && (
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {formData.mensaje.length}/1000 caracteres
                </p>
              )}
              {errors.mensaje && touched.mensaje && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.mensaje}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  id="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="acceptedTerms" className="text-sm text-gray-600 cursor-pointer select-none">
                  {t("contact_terms1")}<Link to="/terminos" target="_blank" className="text-blue-600 hover:underline font-medium">{t("footer_terminos")}</Link>{t("contact_terms2")}<Link to="/privacidad" target="_blank" className="text-blue-600 hover:underline font-medium">{t("footer_privacidad")}</Link>{t("contact_terms3")}
                </label>
              </div>
              {errors.acceptedTerms && touched.acceptedTerms && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <RiErrorWarningLine className="flex-shrink-0" />
                  {errors.acceptedTerms}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[#020617] to-[#172554] text-white py-3 rounded-xl font-semibold hover:from-[#020617] hover:to-[#020617] transition-all duration-300 shadow-lg transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t("contact_submitting")}
                </span>
              ) : (
                t("contact_submit")
              )}
            </button>
          </form>
        </div>

        {/* INFORMACIÓN DERECHA */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span style={{ color: '#1E90FF' }}>{t("contact_info_title_1")}</span><br />
              {t("contact_info_title_2")}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t("contact_info_desc")}
            </p>
          </div>

          <div>
            <div className="flex items-start group hover:bg-white/10 transition-all duration-300 p-3 rounded-xl">
              <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300">
                <RiSmartphoneLine style={{ color: '#1E90FF' }} size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-400">{t("contact_info_celular")}</h4>
                <p className="text-white text-lg font-semibold">+57 322 722 3032</p>
              </div>
            </div>

            <div className="flex items-start group hover:bg-white/10 transition-all duration-300 p-3 rounded-xl">
              <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300">
                <RiMailLine style={{ color: '#1E90FF' }} size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-400">{t("contact_info_email")}</h4>
                <p className="text-white text-lg font-semibold">softwarevalcode@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <RiCheckLine style={{ color: '#1E90FF' }} size={18} />
            <span>{t("contact_info_secure")}</span>
          </div>
        </div>

      </div>

      <style jsx>{`
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
          animation: slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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