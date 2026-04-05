import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./industriessection.css";
import {
  Car, Landmark, GraduationCap, Film,
  Utensils, Building2, HeartPulse, Hotel
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IndustriesSection = () => {
  const { t } = useLanguage();

  const industries = useMemo(() => [
    { id: "auto", title: t("industries_automotriz"), icon: <Car size={28} /> },
    { id: "fin", title: t("industries_finanzas"), icon: <Landmark size={28} /> },
    { id: "edu", title: t("industries_educacion"), icon: <GraduationCap size={28} /> },
    { id: "med", title: t("industries_medios"), icon: <Film size={28} /> },
    { id: "ali", title: t("industries_alimentos"), icon: <Utensils size={28} /> },
    { id: "gob", title: t("industries_gobierno"), icon: <Building2 size={28} /> },
    { id: "sal", title: t("industries_salud"), icon: <HeartPulse size={28} /> },
    { id: "hot", title: t("industries_hotelera"), icon: <Hotel size={28} /> },
  ], [t]);

  return (
    <section className="industries">
      <div className="industries-container">
        <header>
          <h2 className="industries-title">{t("industries_title")}</h2>
          <p className="industries-subtitle">{t("industries_subtitle")}</p>
        </header>

        <div className="industries-grid">
          {industries.map((item) => (
            <div className="industry-card" key={item.id}>
              <div className="industry-icon">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="industries-cta">
          <Link to="/contacto" className="cta-button">
            {t("industries_contactanos")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;