import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Shield,
  Cookie,
  Scale,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import styles from './Footer.module.css';
import WhatsAppButton from '../whatsapp/whatsappbutton';
import img from '../../assets/img/logovalcode.png';
import { useLanguage } from '../../context/LanguageContext';

// Iconos personalizados para marcas específicas
const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const TiktokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Icono de WhatsApp corregido (icono real)
const WhatsappIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  const legalLinks = [
    { icon: <FileText size={16} />, title: t("footer_terminos"), path: '/terminos' },
    { icon: <Shield size={16} />, title: t("footer_privacidad"), path: '/privacidad' },
    { icon: <Cookie size={16} />, title: t("footer_cookies"), path: '/cookies' },
    { icon: <Scale size={16} />, title: t("footer_aviso"), path: '/aviso-legal' }
  ];

  // Redes sociales separadas en dos filas (4 arriba, 4 abajo)
  const socialLinksTop = [
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/valcode-software/', label: 'LinkedIn' },
    { icon: <Github size={18} />, url: '#', label: 'GitHub' },
    { icon: <TiktokIcon size={18} />, url: '#', label: 'TikTok' },
    { icon: <Youtube size={18} />, url: '#', label: 'YouTube' }

  ];

  const socialLinksBottom = [
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/valcode.software/', label: 'Instagram' },
    { icon: <Facebook size={18} />, url: 'https://www.facebook.com/profile.php?id=61580736153444', label: 'Facebook' },
    { icon: <XIcon size={18} />, url: 'https://x.com/valcodesoftware', label: 'X' },
    { icon: <WhatsappIcon size={18} />, url: '#', label: 'WhatsApp' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <img src={img} alt="Valcode Logo" className={styles.logoImg} />
              <span className={styles.brandName}>Valcode Software</span>
            </div>
            <p className={styles.slogan}>
              {t("footer_slogan")}
            </p>
            <div className={styles.socialWrapper}>
              <div className={styles.socialRow}>
                {socialLinksTop.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className={styles.socialRow}>
                {socialLinksBottom.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className={styles.legalSection}>
            <h4 className={styles.sectionTitle}>{t("footer_legal")}</h4>
            <div className={styles.legalLinks}>
              {legalLinks.map((link, index) => (
                <Link key={index} to={link.path} className={styles.legalLink}>
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>{t("footer_contacto")}</h4>
            <div className={styles.contactInfo}>
              <p>softwarevalcode@gmail.com</p>
              <p>+57 3227223032</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>{t("footer_servicios")}</h4>
            <div className={styles.contactInfo}>
              <p>{t("footer_servicios_web")}</p>
              <p>{t("footer_servicios_apps")}</p>
              <p>{t("footer_servicios_software")}</p>
              <p>{t("footer_servicios_uiux")}</p>
              <p>{t("footer_servicios_cloud")}</p>
              <p>{t("footer_servicios_consultoria")}</p>
            </div>
          </div>

          <div className={styles.navSection}>
            <h4 className={styles.sectionTitle}>{t("footer_navegacion")}</h4>
            <div className={styles.navLinks}>
              <p>{t("nav_servicios")}</p>
              <p>{t("nav_proyectos")}</p>
              <p>{t("nav_nosotros")}</p>
              <p>{t("nav_contacto")}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            {t("footer_derechos")}
          </p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;