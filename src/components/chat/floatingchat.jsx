import Imgwat from "../../assets/img/WhatsApp_icon.png";
import { useLanguage } from "../../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const phoneNumber = "573001234567"; // sin +
  const message = t("chat_mensaje");
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full 
                 bg-green-500 
                 flex items-center justify-center 
                 shadow-lg shadow-green-400/50
                 hover:scale-110 hover:shadow-green-400/70
                 transition-all duration-300 
           z-50"
           
    >
      <img 
        src={Imgwat} 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
    </button>
  );
}
