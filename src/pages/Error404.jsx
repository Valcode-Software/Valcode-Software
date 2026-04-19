import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo galaxia similar al resto de páginas */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-stars opacity-40" />
      <div className="absolute top-[20%] left-[-200px] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-blue-500 shadow-lg animate-comet-1 z-10"></div>
      <div className="absolute top-[70%] right-[-200px] w-[200px] h-[2px] bg-gradient-to-l from-transparent via-purple-300 to-purple-500 shadow-lg animate-comet-2 z-10"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="mb-6">Página no encontrada.</p>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Error404;
