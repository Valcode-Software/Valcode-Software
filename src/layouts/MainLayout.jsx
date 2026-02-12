
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";



const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-1 flex flex-col w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
