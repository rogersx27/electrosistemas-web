import { SERVICES, SERVICE_STATS } from '../../data/constants';
import { useInView } from '../../hooks/useInView';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.section} id="servicios">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Lo que hacemos</span>
        <h2 className={styles.sectionTitle}>Servicios</h2>
      </div>
      <div className={`${styles.servicesGrid} ${inView ? 'animate-fadeInUp' : ''}`}>
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            stats={SERVICE_STATS[service.id]}
          />
        ))}
      </div>
    </section>
  );
}
