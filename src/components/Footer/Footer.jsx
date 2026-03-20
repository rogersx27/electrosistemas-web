import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <h3 className={styles.footerLogo}>
            ELECTRO<span className={styles.footerLogoAccent}>SISTEMAS</span>
          </h3>
          <p className={styles.footerDesc}>
            Ingeniería electrónica y soluciones de software para la industria colombiana.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Servicios</h4>
            <a href="#" className={styles.footerLink}>Electrónica</a>
            <a href="#" className={styles.footerLink}>Software</a>
            <a href="#" className={styles.footerLink}>Consultoría</a>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Empresa</h4>
            <a href="#" className={styles.footerLink}>Sobre nosotros</a>
            <a href="#" className={styles.footerLink}>Portafolio</a>
            <a href="#" className={styles.footerLink}>Contacto</a>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Contacto</h4>
            <span className={styles.footerLink}>info@electrosistemas.co</span>
            <span className={styles.footerLink}>+57 (604) 000 0000</span>
            <span className={styles.footerLink}>Medellín, Colombia</span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Electrosistemas. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
