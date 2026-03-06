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

const PorqueValcode = () => {
  const beneficios = [
    {
      icon: <Rocket className="w-8 h-8" />,
      titulo: "Time-to-Market Acelerado",
      descripcion: "Reducimos los tiempos de desarrollo hasta en un 40% mediante metodologías ágiles y equipos especializados."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titulo: "Calidad Garantizada",
      descripcion: "Código robusto y escalable con pruebas automatizadas y code review en cada etapa del desarrollo."
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Equipo Senior",
      descripcion: "Desarrolladores con 5+ años de experiencia en tecnologías de vanguardia y arquitectura de software."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      titulo: "Tecnología Moderna",
      descripcion: "Implementamos las últimas tecnologías y mejores prácticas del mercado para garantizar tu éxito."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      titulo: "Soporte Continuo",
      descripcion: "Acompañamiento post-lanzamiento y mantenimiento proactivo de tu solución."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titulo: "Escalabilidad",
      descripcion: "Arquitecturas preparadas para crecer junto a tu negocio sin perder rendimiento."
    }
  ];

  const stats = [
    { numero: "50+", label: "Proyectos exitosos" },
    { numero: "5+", label: "Años de experiencia" },
    { numero: "15+", label: "Expertos en tecnología" },
    { numero: "100%", label: "Satisfacción cliente" }
  ];

  return (
    <section className={styles['porque-valcode']}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>¿POR QUÉ ELEGIRNOS?</span>
          <h2 className={styles.title}>
            Tu socio tecnológico de confianza
          </h2>
          <p className={styles.description}>
            En Valcode Software no solo escribimos código, creamos soluciones que transforman negocios. 
            Combinamos experiencia técnica con entendimiento del negocio para entregar valor real.
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
                <span>Incluido en todos nuestros proyectos</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonio breve */}
        <div className={styles.testimonio}>
          <div className={styles['testimonio-content']}>
            <Star className={styles['star-icon']} />
            <p className={styles['testimonio-texto']}>
              "Valcode Software no solo desarrolló nuestra plataforma, se convirtieron en partners estratégicos 
              que entendieron nuestra visión y la hicieron realidad superando expectativas."
            </p>
            <div className={styles['testimonio-autor']}>
              <strong>Carlos Rodríguez</strong>
              <span>CEO, TechInnovate</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles['cta-section']}>
          <h3 className={styles['cta-title']}>¿Listo para transformar tu idea en realidad?</h3>
          <p className={styles['cta-description']}>
            Agendemos una reunión sin compromiso para analizar tu proyecto y descubrir cómo podemos ayudarte.
          </p>
          <button className={styles['cta-button']}>
            Agendar reunión estratégica
          </button>
        </div>
      </div>
    </section>
  );
};

export default PorqueValcode;