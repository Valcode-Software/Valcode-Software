import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import styles from './Estadisticas.module.css';

const StatItem = ({ targetValue, label, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, targetValue, count]);

  return (
    <div className={styles.statCard} ref={ref}>
      <h3 className={styles.number}>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </h3>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

const StatsModule = () => {
  const [yearsOfExp, setYearsOfExp] = useState(0);

  useEffect(() => {
    const calculateYears = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      // Fecha de fundación: 11 de Abril de [Año de inicio]
      const startDate = new Date(currentYear, 3, 11); 
      
      let years = currentYear - 2025; 
      if (today < startDate) {
        years--;
      }
      setYearsOfExp(years);
    };

    calculateYears();
  }, []);

  return (
    <section className={styles.statsContainer}>
      <div className={styles.grid}>
        <StatItem targetValue={yearsOfExp} label="Años de Experiencia" suffix="+" />
        <StatItem targetValue={1} label="Proyectos Creados" suffix="+" />
        <StatItem targetValue={1} label="Empresas Aliadas" />
        <StatItem targetValue={1} label="Países Alcanzados" suffix="" />
      </div>
    </section>
  );
};

export default StatsModule;