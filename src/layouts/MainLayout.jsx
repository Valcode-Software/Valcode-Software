import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />   {/* AQUI VA */}

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
