import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Nosotros = lazy(() => import("../pages/nosotros"));
const ContactPage = lazy(() => import("../pages/contacto"));
const Proyectos = lazy(() => import("../pages/proyectos"));
const Terminos = lazy(() => import("../pages/tyc/tyc"));
const Politica = lazy(() => import("../pages/politicadeseguirdad/politica"));
const Servicios = lazy(() => import("../pages/servicios"));
const Error404 = lazy(() => import("../pages/Error404"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/inicios" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Politica />} />

            {/* 👇 ESTA ES LA CLAVE */}
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;