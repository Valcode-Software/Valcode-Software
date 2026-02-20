import React from 'react';
import styles from './tyc.module.css';

const TerminosYCondiciones = () => {
  return (
    <div className={styles.terminosContainer}>
      <div className={styles.terminosWrapper}>
        
        {/* Espacio superior para evitar choque con el navbar */}
        <div className={styles.navbarSpacer}></div>

        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>TÉRMINOS Y CONDICIONES</h1>
          <p className={styles.subtitle}>Valcode Software</p>
          <p className={styles.updateDate}>Última actualización: 20 de febrero de 2026</p>
        </div>

        <div className={styles.contentSection}>
          
          <div className={styles.introCard}>
            <p className={styles.introText}>
              Bienvenido a Valcode Software. Al acceder y utilizar nuestros servicios, 
              usted acepta estar sujeto a los siguientes términos y condiciones. 
              Le recomendamos leer detenidamente este documento antes de utilizar 
              cualquiera de nuestros servicios.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>1. ACEPTACIÓN DE LOS TÉRMINOS</h2>
            <p className={styles.sectionText}>
              Al acceder, navegar o utilizar los servicios de Valcode Software, 
              usted reconoce haber leído, entendido y aceptado quedar vinculado 
              por estos Términos y Condiciones. Si no está de acuerdo con alguna 
              parte de estos términos, no podrá acceder a nuestros servicios.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>2. SERVICIOS OFRECIDOS</h2>
            <p className={styles.sectionText}>
              Valcode Software es una empresa dedicada al desarrollo de soluciones 
              tecnológicas innovadoras, incluyendo pero no limitándose a:
            </p>
            <ul className={styles.bulletList}>
              <li>Desarrollo de software a medida</li>
              <li>Aplicaciones web y móviles</li>
              <li>Consultoría tecnológica</li>
              <li>Integración de sistemas empresariales</li>
              <li>Soporte y mantenimiento de aplicaciones</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>3. PROPIEDAD INTELECTUAL</h2>
            <p className={styles.sectionText}>
              Todo el contenido presente en nuestra plataforma, incluyendo pero 
              no limitado a textos, logotipos, gráficos, imágenes, código fuente 
              y software, es propiedad exclusiva de Valcode Software y está 
              protegido por las leyes de propiedad intelectual. Queda prohibida 
              la reproducción, distribución o modificación sin autorización expresa.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>4. USO DEL FORMULARIO DE CONTACTO</h2>
            <p className={styles.sectionText}>
              Al completar nuestro formulario de contacto, usted proporciona 
              voluntariamente información de su empresa y datos personales. 
              Valcode Software se compromete a:
            </p>
            <ul className={styles.bulletList}>
              <li>Utilizar sus datos exclusivamente para fines de contacto y cotización</li>
              <li>Mantener la más estricta confidencialidad de la información proporcionada</li>
              <li>No compartir sus datos con terceros bajo ninguna circunstancia</li>
              <li>Proteger su información con los más altos estándares de seguridad</li>
            </ul>
            <div className={styles.highlightBox}>
              <strong>IMPORTANTE:</strong> Toda la información que usted comparte con 
              Valcode Software a través de nuestro formulario o WhatsApp queda 
              estrictamente entre usted y nosotros. Garantizamos la confidencialidad 
              absoluta de sus datos comerciales y personales.
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>5. COMUNICACIÓN VÍA WHATSAPP</h2>
            <p className={styles.sectionText}>
              Nuestro botón de WhatsApp permite una comunicación directa con 
              nuestro equipo. Esta vía de comunicación es confidencial y las 
              conversaciones mantenidas serán tratadas con la máxima privacidad, 
              utilizándose únicamente para atender sus consultas y requerimientos.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>6. OBLIGACIONES DEL USUARIO</h2>
            <p className={styles.sectionText}>
              El usuario se compromete a:
            </p>
            <ul className={styles.bulletList}>
              <li>Proporcionar información veraz y actualizada en el formulario</li>
              <li>No utilizar nuestros servicios para fines ilegales</li>
              <li>Respetar los derechos de propiedad intelectual de Valcode Software</li>
              <li>Mantener la confidencialidad de cualquier información recibida</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>7. LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p className={styles.sectionText}>
              Valcode Software no será responsable por daños directos, indirectos, 
              incidentales o consecuentes que resulten del uso o la imposibilidad 
              de uso de nuestros servicios. No garantizamos que el servicio sea 
              ininterrumpido o libre de errores.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>8. MODIFICACIONES DE LOS TÉRMINOS</h2>
            <p className={styles.sectionText}>
              Valcode Software se reserva el derecho de modificar estos términos 
              en cualquier momento. Las modificaciones entrarán en vigor inmediatamente 
              después de su publicación en nuestro sitio web. El uso continuado de 
              nuestros servicios constituye la aceptación de los términos modificados.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>9. LEY APLICABLE Y JURISDICCIÓN</h2>
            <p className={styles.sectionText}>
              Estos términos se regirán e interpretarán de acuerdo con las leyes 
              de la República, y cualquier disputa relacionada con estos términos 
              estará sujeta a la jurisdicción exclusiva de los tribunales competentes.
            </p>
          </div>

          <div className={styles.contactFooter}>
            <h3>CONTÁCTENOS</h3>
            <p>Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> legal@valcodesoftware.com</p>
              <p><strong>Teléfono:</strong> +57 (XXX) XXX-XXXX</p>
              <p><strong>Dirección:</strong> [Dirección de la empresa]</p>
            </div>
          </div>

          <div className={styles.acceptanceSection}>
            <p className={styles.acceptanceText}>
              Al utilizar nuestros servicios, usted confirma que ha leído, 
              entendido y aceptado estos Términos y Condiciones en su totalidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosYCondiciones;