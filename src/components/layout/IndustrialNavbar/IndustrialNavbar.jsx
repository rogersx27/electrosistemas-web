import { useScrollProgress } from '../../../hooks/useScrollProgress';
import Button from '../../shared/Button/Button';
import styles from './IndustrialNavbar.module.css';

export default function IndustrialNavbar({ onQuoteClick }) {
  const { scrollProgress, activeSection } = useScrollProgress();

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'productos', label: 'Productos' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getSectionLabel = (id) => {
    const labels = {
      inicio: 'INICIO',
      servicios: 'SERVICIOS',
      productos: 'PRODUCTOS',
      clientes: 'CLIENTES',
      contacto: 'CONTACTO',
      portafolio: 'PORTAFOLIO'
    };
    return labels[id] || id.toUpperCase();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.accentLine}></div>
          <div className={styles.logoText}>
            ELECTRO<span className={styles.logoAccent}>SISTEMAS</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
              {activeSection === link.id && <div className={styles.activeIndicator}></div>}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="primary" size="small" onClick={onQuoteClick}>
          Solicitar Cotización
        </Button>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span className={styles.statusDot}>●</span>
        <span className={styles.breadcrumbLabel}>SECCIÓN ACTIVA:</span>
        <span className={styles.breadcrumbSection}>{getSectionLabel(activeSection)}</span>
        <span className={styles.breadcrumbProgress}>PROGRESO: {Math.round(scrollProgress)}%</span>
      </div>
    </nav>
  );
}
