import { useState, useEffect } from 'react';
import { FEATURED_PROJECTS } from '../../data/projects';
import Button from '../shared/Button/Button';
import styles from './Hero.module.css';

export default function Hero({ onQuoteClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  };

  const currentProject = FEATURED_PROJECTS[currentSlide];

  return (
    <header className={styles.hero} id="inicio">
      <div className={styles.heroInner}>
        {/* Left Column - Content */}
        <div className={styles.heroContent}>
          {/* Animated Badge */}
          <div className={styles.badge}>
            <span className={styles.statusDot}></span>
            INGENIERÍA & TECNOLOGÍA
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            ELECTRO<span className={styles.heroTitleAccent}>SISTEMAS</span>
          </h1>

          {/* Accent Line */}
          <div className={styles.accentLine}></div>

          {/* Tagline */}
          <p className={styles.heroTagline}>
            Soluciones integrales en <strong>electrónica industrial</strong> y <strong>desarrollo de software</strong> para la automatización inteligente de su operación.
          </p>

          {/* Metrics Grid */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={`${styles.metricNumber} ${styles.metricBlue}`}>150+</div>
              <div className={styles.metricLabel}>PROYECTOS</div>
            </div>
            <div className={styles.metricCard}>
              <div className={`${styles.metricNumber} ${styles.metricGreen}`}>50+</div>
              <div className={styles.metricLabel}>CLIENTES</div>
            </div>
            <div className={styles.metricCard}>
              <div className={`${styles.metricNumber} ${styles.metricAmber}`}>10+</div>
              <div className={styles.metricLabel}>AÑOS</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroCTAs}>
            <Button variant="primary" onClick={onQuoteClick}>
              Solicitar Cotización
            </Button>
            <Button variant="outline" onClick={() => {
              const element = document.getElementById('servicios');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver Servicios
            </Button>
          </div>
        </div>

        {/* Right Column - Project Carousel */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Header */}
          <div className={styles.carouselHeader}>
            <div>
              <div className={styles.carouselLabel}>NUESTROS PROYECTOS</div>
              <div className={styles.carouselTitle}>Trabajos Destacados</div>
            </div>
            <div className={styles.carouselNav}>
              <button
                className={styles.navButton}
                onClick={prevSlide}
                aria-label="Proyecto anterior"
              >
                ←
              </button>
              <button
                className={styles.navButton}
                onClick={nextSlide}
                aria-label="Siguiente proyecto"
              >
                →
              </button>
            </div>
          </div>

          {/* Carousel Slide */}
          <div className={styles.carouselSlide}>
            {/* Project Image */}
            <div className={styles.projectImage}>
              {/* Category Badge */}
              <div className={styles.categoryBadge}>
                {currentProject.category === 'electronica' ? 'ELECTRÓNICA' : 'SOFTWARE'}
              </div>

              {/* Slide Indicators */}
              <div className={styles.slideIndicators}>
                {FEATURED_PROJECTS.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className={styles.projectInfo}>
              <div>
                <div className={styles.projectClient}>{currentProject.client}</div>
                <div className={styles.projectSector}>{currentProject.sector}</div>
              </div>
              <div className={styles.projectResult}>
                <div className={styles.resultLabel}>Resultado</div>
                <div className={styles.resultMetric}>{currentProject.result.metric} {currentProject.result.label}</div>
              </div>
            </div>

            {/* Project Tags */}
            <div className={styles.projectTags}>
              {currentProject.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroGradient} />
    </header>
  );
}
