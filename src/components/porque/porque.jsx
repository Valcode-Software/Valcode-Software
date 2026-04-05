import React from 'react';
import { 
  Shield, 
  Rocket, 
  Users, 
  Code2, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';
import styles from './porque.module.css';
import { useLanguage } from "../../context/LanguageContext";

const PorqueValcode = () => {
  const { t } = useLanguage();
  const beneficios = [
    {
      icon: <Rocket className="w-8 h-8" />,
      titulo: t("porque_ben1_title"),
      descripcion: t("porque_ben1_desc")
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titulo: t("porque_ben2_title"),
      descripcion: t("porque_ben2_desc")
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: t("porque_ben3_title"),
      descripcion: t("porque_ben3_desc")
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      titulo: t("porque_ben4_title"),
      descripcion: t("porque_ben4_desc")
    },
    {
      icon: <Clock className="w-8 h-8" />,
      titulo: t("porque_ben5_title"),
      descripcion: t("porque_ben5_desc")
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titulo: t("porque_ben6_title"),
      descripcion: t("porque_ben6_desc")
    }
  ];

  const stats = [
    { numero: "50+", label: t("porque_stats_proyectos") },
    { numero: "5+", label: t("porque_stats_experiencia") },
    { numero: "15+", label: t("porque_stats_expertos") },
    { numero: "100%", label: t("porque_stats_satisfaccion") }
  ];

  return (
    <section className={styles['porque-valcode']}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>{t("porque_subtitle")}</span>
          <h2 className={styles.title}>
            {t("porque_title")}
          </h2>
          <p className={styles.description}>
            {t("porque_desc")}
          </p>
        </div>

        {/* Stats */}
        <div className={styles['stats-grid']}>
          {stats.map((stat, index) => (
            <div key={index} className={styles['stat-item']}>
              <div className={styles['stat-number']}>{stat.numero}</div>
              <div className={styles['stat-label']}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Beneficios Grid */}
        <div className={styles['beneficios-grid']}>
          {beneficios.map((beneficio, index) => (
            <div key={index} className={styles['beneficio-card']}>
              <div className={styles['icon-wrapper']}>
                {beneficio.icon}
              </div>
              <h3 className={styles['beneficio-titulo']}>{beneficio.titulo}</h3>
              <p className={styles['beneficio-descripcion']}>{beneficio.descripcion}</p>
              <div className={styles['card-footer']}>
                <CheckCircle className="w-5 h-5" />
                <span>{t("porque_ben_incluido")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonio breve */}
        <div className={styles.testimonio}>
          <div className={styles['testimonio-content']}>
            <Star className={styles['star-icon']} />
            <p className={styles['testimonio-texto']}>
              {t("porque_testimonial")}
            </p>
            <div className={styles['testimonio-autor']}>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles['cta-section']}>
          <h3 className={styles['cta-title']}>{t("porque_cta_title")}</h3>
          <p className={styles['cta-description']}>
            {t("porque_cta_desc")}
          </p>
          <button className={styles['cta-button']}>
            {t("porque_cta_button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PorqueValcode;