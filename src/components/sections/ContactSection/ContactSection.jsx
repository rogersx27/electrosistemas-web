import { useState } from 'react';
import { CONTACT_INFO } from '../../../data/constants';
import { useForm } from '../../../hooks/useForm';
import { useInView } from '../../../hooks/useInView';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);

  const validationRules = {
    nombre: (value) => {
      if (!value || value.trim() === '') return 'El nombre es requerido';
      if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
      return null;
    },
    email: (value) => {
      if (!value || value.trim() === '') return 'El email es requerido';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Email inválido';
      return null;
    },
    telefono: (value) => {
      if (!value || value.trim() === '') return 'El teléfono es requerido';
      return null;
    },
    mensaje: (value) => {
      if (!value || value.trim() === '') return 'El mensaje es requerido';
      if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
      return null;
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }, validationRules);

  const onSubmit = (formValues) => {
    console.log('Contact form submitted:', formValues);
    setSubmitted(true);
    resetForm();

    // Reset submitted message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section ref={ref} className={styles.section} id="contacto">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Contacto</span>
        <h2 className={styles.sectionTitle}>Hablemos de Tu Proyecto</h2>
      </div>

      <div className={`${styles.contactContainer} ${inView ? 'animate-fadeInUp' : ''}`}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Información de Contacto</h3>
          <p className={styles.infoDescription}>
            Estamos listos para ayudarte con tus proyectos de automatización industrial y desarrollo de software.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>{CONTACT_INFO.email}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <div className={styles.infoLabel}>Teléfono</div>
                <div className={styles.infoValue}>{CONTACT_INFO.phone}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <div className={styles.infoLabel}>Dirección</div>
                <div className={styles.infoValue}>{CONTACT_INFO.address}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🕐</div>
              <div>
                <div className={styles.infoLabel}>Horario</div>
                <div className={styles.infoValue}>{CONTACT_INFO.hours}</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Facebook
            </a>
            <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nombre"
              type="text"
              placeholder="Tu nombre completo"
              value={values.nombre}
              onChange={(value) => handleChange('nombre', value)}
              onBlur={() => handleBlur('nombre')}
              error={touched.nombre ? errors.nombre : null}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              value={values.email}
              onChange={(value) => handleChange('email', value)}
              onBlur={() => handleBlur('email')}
              error={touched.email ? errors.email : null}
              required
            />

            <Input
              label="Teléfono"
              type="tel"
              placeholder="+1 234 567 8900"
              value={values.telefono}
              onChange={(value) => handleChange('telefono', value)}
              onBlur={() => handleBlur('telefono')}
              error={touched.telefono ? errors.telefono : null}
              required
            />

            <Input
              label="Mensaje"
              type="textarea"
              placeholder="Cuéntanos sobre tu proyecto..."
              value={values.mensaje}
              onChange={(value) => handleChange('mensaje', value)}
              onBlur={() => handleBlur('mensaje')}
              error={touched.mensaje ? errors.mensaje : null}
              required
              rows={5}
            />

            <Button type="submit" variant="primary" fullWidth>
              Enviar Mensaje
            </Button>

            {submitted && (
              <div className={styles.successMessage}>
                ✓ Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
