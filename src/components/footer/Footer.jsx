import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Shield,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react';
import WhatsAppButton from '../whatsapp/whatsappbutton';
import img from '../../assets/img/logovalcode.png';
import { useLanguage } from '../../context/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/573227223032';
const EMAIL = 'softwarevalcode@gmail.com';
const PHONE = '+57 322 722 3032';

// Iconos de marca personalizados
const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const TiktokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsappIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const socialLinks = [
  { icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/valcode-software/', label: 'LinkedIn' },
  { icon: <Instagram size={16} />, url: 'https://www.instagram.com/valcode.software/', label: 'Instagram' },
  { icon: <Facebook size={16} />, url: 'https://www.facebook.com/profile.php?id=61580736153444', label: 'Facebook' },
  { icon: <TiktokIcon />, url: 'https://www.tiktok.com/@valcodesoftware?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
  { icon: <XIcon />, url: 'https://x.com/valcodesoftware', label: 'X' },
  { icon: <WhatsappIcon />, url: WHATSAPP_URL, label: 'WhatsApp' },
];

const FooterHeading = ({ children }) => (
  <h4 className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
    <span className="h-3 w-0.5 rounded-full bg-blue-500" />
    {children}
  </h4>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  </li>
);

const Footer = () => {
  const { t } = useLanguage();

  const services = [
    t('footer_servicios_web'),
    t('footer_servicios_apps'),
    t('footer_servicios_software'),
    t('footer_servicios_uiux'),
    t('footer_servicios_cloud'),
    t('footer_servicios_consultoria'),
  ];

  const navLinks = [
    { to: '/', label: t('nav_inicio') },
    { to: '/servicios', label: t('nav_servicios') },
    { to: '/proyectos', label: t('nav_proyectos') },
    { to: '/nosotros', label: t('nav_nosotros') },
    { to: '/contacto', label: t('nav_contacto') },
  ];

  const legalLinks = [
    { icon: <FileText size={14} />, title: t('footer_terminos'), path: '/terminos' },
    { icon: <Shield size={14} />, title: t('footer_privacidad'), path: '/privacidad' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      data-keep-light
      className="relative z-10 mt-auto w-full shrink-0 overflow-hidden bg-[#020617] font-sans text-slate-300"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-12 pb-14 pt-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-20">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={img} alt="Valcode Software" className="h-10 w-10 object-contain" />
              <div className="leading-none">
                <span className="block text-lg font-bold tracking-tight text-white">Valcode Software</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                  {t('footer_slogan')}
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-slate-400">
              {t('footer_desc')}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-slate-950"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3">
            <FooterHeading>{t('footer_servicios')}</FooterHeading>
            <ul className="space-y-3">
              {services.map((s) => (
                <FooterLink key={s} to="/servicios">{s}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-2">
            <FooterHeading>{t('footer_navegacion')}</FooterHeading>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <FooterHeading>{t('footer_contacto')}</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}?subject=Consulta%20desde%20sitio%20web`}
                  className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-400 transition-colors group-hover:border-blue-500/50">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all pt-1.5">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573227223032"
                  className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-400 transition-colors group-hover:border-blue-500/50">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">{PHONE}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-blue-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5">{t('footer_ubicacion')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-white/10 py-6 md:flex-row">
          <p className="text-center text-xs text-slate-500 md:text-left">{t('footer_derechos')}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white"
              >
                {link.icon}
                {link.title}
              </Link>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t('footer_top')}
              title={t('footer_top')}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-slate-950"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
