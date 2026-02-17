import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/hero";
import Estadisticas from "../components/estadisticas/Estadisticas";
import Tecnologias from "../components/tecnologias/Tecnologias";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <>
              <Hero />
              <Estadisticas />
              <Tecnologias />
            </>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
