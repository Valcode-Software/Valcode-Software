import React from "react";
import { Link } from "react-router-dom";
import "./industriessection.css";
import {
  Car,
  Landmark,
  GraduationCap,
  Film,
  Utensils,
  Building2,
  HeartPulse,
  Hotel,
} from "lucide-react";

const industries = [
  {
    title: "Software Automotriz",
    icon: <Car size={28} />,
  },
  {
    title: "Software para banca y finanzas",
    icon: <Landmark size={28} />,
  },
  {
    title: "Educación",
    icon: <GraduationCap size={28} />,
  },
  {
    title: "Medios | Entretenimiento | Ticketing",
    icon: <Film size={28} />,
  },
  {
    title: "Bebidas y alimentos",
    icon: <Utensils size={28} />,
  },
  {
    title: "Gobierno",
    icon: <Building2 size={28} />,
  },
  {
    title: "Sector Salud",
    icon: <HeartPulse size={28} />,
  },
  {
    title: "Gestión Hotelera",
    icon: <Hotel size={28} />,
  },
];

const IndustriesSection = () => {
  return (
    <section className="industries">
      <div className="industries-container">
        <h2 className="industries-title">
          Industrias en las que nos especializamos
        </h2>

        <p className="industries-subtitle">
          Soluciones digitales diseñadas para diferentes sectores empresariales
        </p>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        {/* 🔥 BOTÓN IA */}
        <div className="industries-cta">
          <Link to="/contacto" className="cta-button"> 
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;