import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import './whatsapp.css';
import { useLanguage } from "../../context/LanguageContext";

const WhatsAppButton = ({ isFloating = true }) => {
  const { t } = useLanguage();
  const phoneNumber = "+57 322 7223032"; // Reemplaza con tu número real
  const message = t("wpp_mensaje");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={isFloating ? "whatsapp-float" : "whatsapp-hero-btn"} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <RiWhatsappLine className="whatsapp-icon" />
      {!isFloating && <span>{t("wpp_contactar")}</span>}
    </a>
  );
};

export default WhatsAppButton;