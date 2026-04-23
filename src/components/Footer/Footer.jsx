import { CONTACT_INFO } from '../../data/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Company Info */}
        <div className={styles.footerBrand}>
          <h3 className={styles.footerLogo}>
            ELECTRO<span className={styles.footerLogoAccent}>SISTEMAS</span>
          </h3>
          <p className={styles.footerDesc}>
            Ingeniería electrónica y soluciones de software para la industria moderna.
          </p>
          <div className={styles.socialLinks}>
            <a
              href={CONTACT_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <span className={styles.socialIcon}>in</span>
            </a>
            <a
              href={CONTACT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <span className={styles.socialIcon}>f</span>
            </a>
            <a
              href={CONTACT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <span className={styles.socialIcon}>ig</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={styles.footerLinks}>
          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Navegación</h4>
            <a href="#inicio" className={styles.footerLink}>Inicio</a>
            <a href="#servicios" className={styles.footerLink}>Servicios</a>
            <a href="#productos" className={styles.footerLink}>Productos</a>
            <a href="#portafolio" className={styles.footerLink}>Portafolio</a>
            <a href="#clientes" className={styles.footerLink}>Clientes</a>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Servicios</h4>
            <a href="#servicios" className={styles.footerLink}>Electrónica Industrial</a>
            <a href="#servicios" className={styles.footerLink}>Desarrollo de Software</a>
            <a href="#servicios" className={styles.footerLink}>Automatización</a>
            <a href="#servicios" className={styles.footerLink}>Consultoría Técnica</a>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Contacto</h4>
            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.footerLink}>
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className={styles.footerLink}>
              {CONTACT_INFO.phone}
            </a>
            <span className={styles.footerText}>{CONTACT_INFO.address}</span>
            <span className={styles.footerText}>{CONTACT_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <span className={styles.copyright}>
            © {currentYear} Electrosistemas. Todos los derechos reservados.
          </span>
          <div className={styles.legalLinks}>
            <a href="#privacidad" className={styles.legalLink}>Privacidad</a>
            <span className={styles.separator}>•</span>
            <a href="#terminos" className={styles.legalLink}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
