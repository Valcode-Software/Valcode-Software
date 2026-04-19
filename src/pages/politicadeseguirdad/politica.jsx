import React from 'react';
import styles from './politica.module.css';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/img/valcode_white_cleaned_logo.png';

const PoliticaPrivacidad = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.politicaContainer}>
      <div className={styles.politicaWrapper}>
        
        {/* Espacio superior para evitar choque con el navbar */}
        <div className={styles.navbarSpacer}></div>

        <div className={styles.headerSection}>

          <h1 className={styles.mainTitle}>{t('pol_title')}</h1>
          <p className={styles.subtitle}>{t('pol_subtitle')}</p>
          <p className={styles.updateDate}>{t('pol_updated')}</p>
        </div>

        <div className={styles.contentSection}>
          
          <div className={styles.introCard}>
            <p className={styles.introText}>
              {t('pol_intro')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec1_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec1_p1')}
            </p>
            <div className={styles.highlightBox}>
              <strong>{t('pol_sec1_promise')}</strong>{t('pol_sec1_promise_text')}
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec2_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec2_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li><strong>{t('pol_sec2_li1_title')}</strong>{t('pol_sec2_li1_text')}</li>
              <li><strong>{t('pol_sec2_li2_title')}</strong>{t('pol_sec2_li2_text')}</li>
              <li><strong>{t('pol_sec2_li3_title')}</strong>{t('pol_sec2_li3_text')}</li>
              <li><strong>{t('pol_sec2_li4_title')}</strong>{t('pol_sec2_li4_text')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec3_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec3_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li>{t('pol_sec3_li1')}</li>
              <li>{t('pol_sec3_li2')}</li>
              <li>{t('pol_sec3_li3')}</li>
              <li>{t('pol_sec3_li4')}</li>
              <li>{t('pol_sec3_li5')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec4_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec4_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li>{t('pol_sec4_li1')}</li>
              <li>{t('pol_sec4_li2')}</li>
              <li>{t('pol_sec4_li3')}</li>
              <li>{t('pol_sec4_li4')}</li>
              <li>{t('pol_sec4_li5')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec5_title')}</h2>
            <p className={styles.sectionText}>
              <strong>{t('pol_sec5_form')}</strong>{t('pol_sec5_form_text')}
            </p>
            <p className={styles.sectionText}>
              <strong>{t('pol_sec5_wpp')}</strong>{t('pol_sec5_wpp_text')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec6_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec6_p1')}
            </p>
            <div className={styles.securityBadge}>
              <span className={styles.badgeIcon}>🔒</span>
              <span>{t('pol_sec6_badge')}</span>
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec7_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec7_p1')}
            </p>
            <ul className={styles.bulletList}>
              <li><strong>{t('pol_sec7_li1_title')}</strong>{t('pol_sec7_li1_text')}</li>
              <li><strong>{t('pol_sec7_li2_title')}</strong>{t('pol_sec7_li2_text')}</li>
              <li><strong>{t('pol_sec7_li3_title')}</strong>{t('pol_sec7_li3_text')}</li>
              <li><strong>{t('pol_sec7_li4_title')}</strong>{t('pol_sec7_li4_text')}</li>
              <li><strong>{t('pol_sec7_li5_title')}</strong>{t('pol_sec7_li5_text')}</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec8_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec8_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec9_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec9_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec10_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec10_p1')}
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{t('pol_sec11_title')}</h2>
            <p className={styles.sectionText}>
              {t('pol_sec11_p1')}
            </p>
          </div>


          <div className={styles.footerNote}>
            <p>
              {t('pol_note1')}
            </p>
            <p className={styles.confidencePhrase}>
              {t('pol_note2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;