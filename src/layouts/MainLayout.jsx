
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
