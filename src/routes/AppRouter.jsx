import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Nosotros = lazy(() => import("../pages/nosotros"));
const ContactPage = lazy(() => import("../pages/contacto"));
const Proyectos = lazy(() => import("../pages/proyectos"));
const Terminos = lazy(() => import("../pages/tyc/tyc"));
const Politica = lazy(() => import("../pages/politicadeseguirdad/politica"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Politica />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
