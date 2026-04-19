
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import "./MainLayout.css";
import { useEffect } from "react";


const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onKey = (e) => {
      if (!e.key || e.key.length !== 1) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const tag = (e.target && e.target.tagName) || "";
      const isEditable =
        tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable;
      if (isEditable) return; // permitir escribir en formularios

      if (location.pathname !== "/inicios") {
        navigate("/inicios");
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, location]);
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
