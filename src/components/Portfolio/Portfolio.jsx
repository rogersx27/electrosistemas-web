import { PORTFOLIO_ITEMS } from '../../data/constants';
import Carousel from '../shared/Carousel';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <>
      {/* Portafolio Electrónica */}
      <section className={styles.section} style={{ background: "#F7F8FA" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 className={styles.sectionTitle}>Portafolio</h2>
          <p className={styles.sectionSubtitle}>Electrónica</p>
        </div>
        <Carousel items={PORTFOLIO_ITEMS.electronica} accentColor="#0F3460" />
      </section>

      {/* Portafolio Software */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 className={styles.sectionTitle}>Portafolio</h2>
          <p className={styles.sectionSubtitle}>Software</p>
        </div>
        <Carousel items={PORTFOLIO_ITEMS.software} accentColor="#1A7A5C" />
      </section>
    </>
  );
}
