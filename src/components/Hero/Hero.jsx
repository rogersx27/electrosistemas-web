import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Ingeniería & Tecnología</p>
          <h1 className={styles.heroTitle}>
            ELECTRO<span className={styles.heroTitleAccent}>SISTEMAS</span>
          </h1>
          <p className={styles.heroTagline}>
            Soluciones integrales en electrónica industrial y desarrollo de software para la automatización inteligente de su operación.
          </p>
          <div className={styles.heroCTAs}>
            <button className={styles.btnPrimary}>Conozca nuestros servicios</button>
            <button className={styles.btnSecondary}>Contáctenos</button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.logoPlaceholder}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="4" y="4" width="72" height="72" rx="16" stroke="#0F3460" strokeWidth="2" />
              <path d="M24 40H56M40 24V56" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="40" cy="40" r="12" stroke="#1A7A5C" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
            <span className={styles.logoText}>LOGO</span>
          </div>
        </div>
      </div>
      <div className={styles.heroGradient} />
    </header>
  );
}
