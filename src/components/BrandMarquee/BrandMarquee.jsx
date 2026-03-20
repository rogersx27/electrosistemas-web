import { BRANDS } from '../../data/constants';
import styles from './BrandMarquee.module.css';

export default function BrandMarquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className={styles.brandsSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {doubled.map((brand, i) => (
            <div key={i} className={styles.brandItem}>
              <div className={styles.brandLogo}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="6" stroke="#0F3460" strokeWidth="1.5" opacity="0.35" />
                  <circle cx="14" cy="14" r="6" stroke="#0F3460" strokeWidth="1.5" opacity="0.25" />
                </svg>
              </div>
              <span className={styles.brandName}>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
