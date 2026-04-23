import { CLIENTS, TESTIMONIALS } from '../../../data/constants';
import { useInView } from '../../../hooks/useInView';
import Card from '../../shared/Card/Card';
import styles from './ClientShowcase.module.css';

export default function ClientShowcase() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.section} id="clientes">
      {/* Client Logos */}
      <div className={styles.logosSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Nuestros Clientes</span>
          <h2 className={styles.sectionTitle}>Empresas que Confían en Nosotros</h2>
        </div>

        <div className={`${styles.logosGrid} ${inView ? 'animate-fadeInUp' : ''}`}>
          {CLIENTS.map((client) => (
            <div key={client.id} className={styles.logoCard}>
              <div className={styles.logoContainer}>
                {/* Placeholder for logo */}
                <div className={styles.logoPlaceholder}>
                  {client.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              <div className={styles.clientName}>{client.name}</div>
              <div className={styles.clientSector}>{client.sector}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Testimonios</span>
          <h2 className={styles.sectionTitle}>Lo Que Dicen Nuestros Clientes</h2>
        </div>

        <div className={`${styles.testimonialsGrid} ${inView ? 'animate-fadeInUp' : ''}`}>
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} variant="elevated" padding="large">
              <div className={styles.testimonialCard}>
                {/* Quote Icon */}
                <div className={styles.quoteIcon}>"</div>

                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={styles.testimonialText}>{testimonial.text}</p>

                {/* Author Info */}
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.client}</div>
                  <div className={styles.authorPosition}>{testimonial.position}</div>
                  <div className={styles.authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
