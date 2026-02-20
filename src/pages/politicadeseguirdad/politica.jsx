import React from 'react';
import styles from './Politica.module.css';

const PoliticaPrivacidad = () => {
  return (
    <div className={styles.politicaContainer}>
      <div className={styles.politicaWrapper}>
        
        {/* Espacio superior para evitar choque con el navbar */}
        <div className={styles.navbarSpacer}></div>

        <div className={styles.headerSection}>
          <img 
            src="/logo-valcode.png" 
            alt="Valcode Software Logo" 
            className={styles.logo}
          />
          <h1 className={styles.mainTitle}>POLÍTICA DE PRIVACIDAD</h1>
          <p className={styles.subtitle}>Valcode Software Solutions</p>
          <p className={styles.updateDate}>Última actualización: 20 de febrero de 2024</p>
        </div>

        <div className={styles.contentSection}>
          
          <div className={styles.introCard}>
            <p className={styles.introText}>
              En Valcode Software, nos tomamos muy en serio la privacidad de nuestros 
              clientes y visitantes. Esta Política de Privacidad describe cómo 
              recopilamos, utilizamos y protegemos su información personal cuando 
              utiliza nuestros servicios o interactúa con nosotros.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>1. COMPROMISO DE CONFIDENCIALIDAD</h2>
            <p className={styles.sectionText}>
              En Valcode Software, establecemos un compromiso inquebrantable con la 
              confidencialidad de la información que nuestros clientes nos confían. 
              Todos los datos proporcionados a través de nuestros canales de 
              comunicación son tratados con la máxima discreción y protegidos con 
              los más altos estándares de seguridad.
            </p>
            <div className={styles.highlightBox}>
              <strong>NUESTRA PROMESA:</strong> La información de su empresa y sus 
              datos personales NUNCA serán compartidos, vendidos o transferidos a 
              terceros bajo ninguna circunstancia. Todo lo que comparte con 
              Valcode Software permanece estrictamente entre usted y nosotros.
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>2. INFORMACIÓN QUE RECOPILAMOS</h2>
            <p className={styles.sectionText}>
              A través de nuestro formulario de contacto y comunicaciones, 
              recopilamos la siguiente información:
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Información de la empresa:</strong> Nombre de la empresa, sector, tamaño</li>
              <li><strong>Datos de contacto:</strong> Nombre completo, cargo, correo electrónico, número telefónico</li>
              <li><strong>Información de consulta:</strong> Mensaje, requerimientos específicos, necesidades del proyecto</li>
              <li><strong>Comunicaciones:</strong> Conversaciones vía WhatsApp y correo electrónico</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>3. USO DE LA INFORMACIÓN</h2>
            <p className={styles.sectionText}>
              Utilizamos su información exclusivamente para:
            </p>
            <ul className={styles.bulletList}>
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Proporcionar cotizaciones y propuestas de servicios</li>
              <li>Mejorar nuestros servicios y atención al cliente</li>
              <li>Comunicarnos sobre proyectos y colaboraciones</li>
              <li>Enviar información relevante sobre nuestros servicios (solo con su consentimiento)</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>4. PROTECCIÓN DE DATOS</h2>
            <p className={styles.sectionText}>
              Implementamos medidas de seguridad técnicas y organizativas para 
              proteger su información personal contra acceso no autorizado, 
              pérdida, uso indebido o divulgación:
            </p>
            <ul className={styles.bulletList}>
              <li>Cifrado de datos en tránsito y en reposo</li>
              <li>Acceso restringido a personal autorizado</li>
              <li>Monitoreo continuo de sistemas de seguridad</li>
              <li>Copias de seguridad regulares</li>
              <li>Protocolos de seguridad actualizados</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>5. FORMULARIO DE CONTACTO Y WHATSAPP</h2>
            <p className={styles.sectionText}>
              <strong>Formulario de contacto:</strong> La información proporcionada 
              en nuestro formulario se transmite de forma segura y solo es accesible 
              por nuestro equipo autorizado para dar respuesta a su consulta.
            </p>
            <p className={styles.sectionText}>
              <strong>WhatsApp:</strong> Las conversaciones mantenidas a través de 
              nuestro botón de WhatsApp son confidenciales y se utilizan únicamente 
              para atender sus necesidades. No almacenamos sus números de WhatsApp 
              para fines de marketing sin su consentimiento explícito.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>6. NO COMPARTIR CON TERCEROS</h2>
            <p className={styles.sectionText}>
              Valcode Software NO vende, alquila, comercia ni transfiere su 
              información personal a terceros. La única excepción sería cuando 
              sea requerido por ley o autoridad competente, en cuyo caso le 
              notificaremos dentro de lo legalmente permitido.
            </p>
            <div className={styles.securityBadge}>
              <span className={styles.badgeIcon}>🔒</span>
              <span>100% Confidencialidad Garantizada</span>
            </div>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>7. DERECHOS DEL USUARIO</h2>
            <p className={styles.sectionText}>
              Usted tiene derecho a:
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Acceder:</strong> Conocer qué información tenemos sobre usted</li>
              <li><strong>Rectificar:</strong> Solicitar corrección de datos inexactos</li>
              <li><strong>Cancelar:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Oponerse:</strong> Oponerse al procesamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>8. CONSERVACIÓN DE DATOS</h2>
            <p className={styles.sectionText}>
              Conservamos su información personal solo durante el tiempo necesario 
              para cumplir con los fines para los que fue recopilada, a menos que 
              la ley requiera o permita un período de conservación más largo. 
              Una vez cumplido el propósito, sus datos serán eliminados de forma 
              segura de nuestros sistemas.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>9. COOKIES Y TECNOLOGÍAS SIMILARES</h2>
            <p className={styles.sectionText}>
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia 
              del usuario. Estas cookies no almacenan información personal 
              identificable. Puede configurar su navegador para rechazar todas 
              las cookies o para indicar cuándo se está enviando una cookie.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>10. MENORES DE EDAD</h2>
            <p className={styles.sectionText}>
              Nuestros servicios no están dirigidos a menores de 18 años. No 
              recopilamos intencionalmente información personal de menores. Si 
              descubrimos que hemos recopilado información personal de un menor, 
              tomaremos medidas para eliminar dicha información.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>11. CAMBIOS EN LA POLÍTICA DE PRIVACIDAD</h2>
            <p className={styles.sectionText}>
              Podemos actualizar esta Política de Privacidad periódicamente. Le 
              notificaremos cualquier cambio publicando la nueva Política de 
              Privacidad en esta página y actualizando la fecha de "última 
              actualización". Le recomendamos revisar esta política periódicamente.
            </p>
          </div>

          <div className={styles.contactFooter}>
            <h3>EJERCICIO DE DERECHOS Y CONTACTO</h3>
            <p>Para ejercer sus derechos de privacidad o realizar consultas:</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <p><strong>Email:</strong> privacidad@valcodesoftware.com</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <p><strong>Teléfono:</strong> +57 (XXX) XXX-XXXX</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <p><strong>Dirección:</strong> [Dirección de la empresa]</p>
              </div>
            </div>
            <p className={styles.responseTime}>
              Tiempo de respuesta: Máximo 72 horas hábiles
            </p>
          </div>

          <div className={styles.footerNote}>
            <p>
              Al proporcionar su información a través de nuestro sitio web, 
              usted acepta los términos de esta Política de Privacidad.
            </p>
            <p className={styles.confidencePhrase}>
              "En Valcode Software, su confianza es nuestro activo más valioso"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;