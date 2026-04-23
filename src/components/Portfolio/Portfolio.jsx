import { PORTFOLIO_ITEMS } from '../../data/constants';
import { useInView } from '../../hooks/useInView';
import Carousel from '../shared/Carousel';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} id="portafolio">
      {/* Portafolio Electrónica */}
      <section className={styles.section} style={{ background: "#F7F8FA" }}>
        <div className={`${styles.sectionHeader} ${inView ? 'animate-fadeInUp' : ''}`}>
          <span className={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 className={styles.sectionTitle}>Portafolio</h2>
          <p className={styles.sectionSubtitle}>Electrónica</p>
        </div>
        <div className={inView ? 'animate-fadeInUp' : ''}>
          <Carousel items={PORTFOLIO_ITEMS.electronica} accentColor="#0F3460" />
        </div>
      </section>

      {/* Portafolio Software */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${inView ? 'animate-fadeInUp' : ''}`}>
          <span className={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 className={styles.sectionTitle}>Portafolio</h2>
          <p className={styles.sectionSubtitle}>Software</p>
        </div>
        <div className={inView ? 'animate-fadeInUp' : ''}>
          <Carousel items={PORTFOLIO_ITEMS.software} accentColor="#1A7A5C" />
        </div>
      </section>
    </div>
  );
}
