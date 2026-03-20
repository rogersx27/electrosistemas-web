import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, index }) {
  const isElectronica = index === 0;
  const accent = isElectronica ? "#0F3460" : "#1A7A5C";

  return (
    <div className={styles.serviceCard} style={{ borderTopColor: accent }}>
      <div className={styles.serviceIcon} style={{ background: `${accent}0D` }}>
        {isElectronica ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M24.5 7.5L21.7 10.3M10.3 21.7L7.5 24.5" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="6" stroke={accent} strokeWidth="2"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="24" rx="3" stroke={accent} strokeWidth="2"/>
            <path d="M12 12H20M12 16H18M12 20H16" stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="22" cy="22" r="6" fill="white" stroke={accent} strokeWidth="2"/>
            <path d="M20 22H24M22 20V24" stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      <h3 className={styles.serviceTitle} style={{ color: accent }}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <ul className={styles.featureList}>
        {service.features.map((f, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.featureDot} style={{ backgroundColor: accent }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
