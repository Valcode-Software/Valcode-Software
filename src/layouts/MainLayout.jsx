
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import "./MainLayout.css";


const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
