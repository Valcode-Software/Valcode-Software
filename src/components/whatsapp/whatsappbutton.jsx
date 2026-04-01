import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import './whatsapp.css';

const WhatsAppButton = ({ isFloating = true }) => {
  const phoneNumber = "+57 322 7223032"; // Reemplaza con tu número real
  const message = "Hola Valcode Software! Me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={isFloating ? "whatsapp-float" : "whatsapp-hero-btn"} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <RiWhatsappLine className="whatsapp-icon" />
      {!isFloating && <span>Contactar por WhatsApp</span>}
    </a>
  );
};

export default WhatsAppButton;