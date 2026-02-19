import { useState } from "react";
import { RiSmartphoneLine, RiMailLine } from "react-icons/ri";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.empresa.trim())
      newErrors.empresa = "El nombre de la empresa es obligatorio.";
    else if (formData.empresa.trim().length < 2)
      newErrors.empresa =
        "El nombre de la empresa debe tener al menos 2 caracteres.";

    if (!formData.nombre.trim()) newErrors.nombre = "Tu nombre es obligatorio.";
    else if (formData.nombre.trim().length < 2)
      newErrors.nombre = "Tu nombre debe tener al menos 2 caracteres.";

    if (!formData.email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "El formato del email no es válido.";

    if (!formData.telefono.trim())
      newErrors.telefono = "El teléfono es obligatorio.";
    else if (!/^\d{10}$/.test(formData.telefono.trim()))
      newErrors.telefono = "El teléfono debe contener 10 dígitos.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const phoneNumber = "573114672067";
    
    const message = `
Hola 👋 quiero solicitar una cotización:

🏢 Empresa: ${formData.empresa}
👤 Nombre: ${formData.nombre}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}

📝 Mensaje:
${formData.mensaje}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* ESTRELLAS / GALAXIA */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full relative z-10">

        {/* FORMULARIO */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-900/20">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#020617]">Solicita tu</span><br />
            <span className="text-gray-800">Cotización</span>
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
            <div>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa *"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-100 rounded-xl border ${
                  errors.empresa ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 ${
                  errors.empresa ? "focus:ring-red-500" : "focus:ring-blue-800"
                } transition`}
              />
              {errors.empresa && (
                <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre *"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-100 rounded-xl border ${
                  errors.nombre ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 ${
                  errors.nombre ? "focus:ring-red-500" : "focus:ring-blue-800"
                } transition`}
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-100 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-blue-800"
                } transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono *"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-100 rounded-xl border ${
                  errors.telefono ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 ${
                  errors.telefono ? "focus:ring-red-500" : "focus:ring-blue-800"
                } transition`}
              />
              {errors.telefono && (
                <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
              )}
            </div>

            <div>
              <textarea
                rows="3"
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#020617] text-white py-3 rounded-xl font-semibold hover:bg-[#172554] transition duration-300 shadow-lg"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>

        {/* INFORMACIÓN DERECHA */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-blue-400">Impulsar el</span><br />
            Crecimiento Empresarial
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            En Valcode, somos el socio tecnológico ideal para impulsar
            el crecimiento continuo de su empresa. Complete el formulario
            y recibirá una respuesta pronta de nuestro equipo.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <RiSmartphoneLine className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-white">Celular</h4>
                <p className="text-gray-300">+57 311 467 2067</p>
              </div>
            </div>

            <div className="flex items-start">
              <RiMailLine className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-white">E-mail</h4>
                <p className="text-gray-300">softwarevalcode@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
