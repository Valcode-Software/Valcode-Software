const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-white">Valcode Software</h2>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Inicio
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Servicios
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Proyectos
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;