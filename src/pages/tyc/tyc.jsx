import React from 'react';
import styles from './tyc.module.css';
import { useLanguage } from '../../context/LanguageContext';

const TerminosYCondiciones = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.terminosContainer}>
      <div className={styles.terminosWrapper}>
        
        {/* Espacio superior para evitar choque con el navbar */}
        <div className={styles.navbarSpacer}></div>

        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>{t('tyc_title')}</h1>
          <p className={styles.subtitle}>{t('tyc_subtitle')}</p>
          <p className={styles.updateDate}>{t('tyc_updated')}</p>
        </div>

        <div className={styles.contentSection}>
          
          <div className={styles.introCard}>
            <p className={styles.introText}>
              {t('tyc_intro')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec1_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec1_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec2_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec2_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li>{t('tyc_sec2_li1')}</li>
              <li>{t('tyc_sec2_li2')}</li>
              <li>{t('tyc_sec2_li3')}</li>
              <li>{t('tyc_sec2_li4')}</li>
              <li>{t('tyc_sec2_li5')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec3_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec3_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec4_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec4_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li>{t('tyc_sec4_li1')}</li>
              <li>{t('tyc_sec4_li2')}</li>
              <li>{t('tyc_sec4_li3')}</li>
              <li>{t('tyc_sec4_li4')}</li>
            </ul>
            <div className={styles.highlightBox}>
              <strong>{t('tyc_sec4_important')}</strong>{t('tyc_sec4_important_text')}
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec5_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec5_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec6_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec6_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li>{t('tyc_sec6_li1')}</li>
              <li>{t('tyc_sec6_li2')}</li>
              <li>{t('tyc_sec6_li3')}</li>
              <li>{t('tyc_sec6_li4')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec7_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec7_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec8_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec8_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('tyc_sec9_title')}</h2>
            <p className={styles.sectionText}>
              {t('tyc_sec9_p1')}
            </p>
          </div>



          <div className={styles.acceptanceSection}>
            <p className={styles.acceptanceText}>
              {t('tyc_acceptance')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosYCondiciones;