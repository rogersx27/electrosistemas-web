import { SERVICES } from '../../data/constants';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Lo que hacemos</span>
        <h2 className={styles.sectionTitle}>Servicios</h2>
      </div>
      <div className={styles.servicesGrid}>
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
