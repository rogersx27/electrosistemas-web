import { useState, useEffect, useRef } from "react";

// ─── Data Constants ───
const BRANDS = [
  "Siemens", "Schneider", "ABB", "Allen-Bradley", "Omron", "Mitsubishi"
];

const SERVICES = [
  {
    id: "electronica",
    title: "Electrónica",
    description:
      "Diseño, montaje, mantenimiento y reparación de sistemas en seguridad electrónica",
    features: [
      "Alarmas De Intrusión",
      "Detección De Incendio",
      "CCTV",
      "Video Porteros",
      "Control De Acceso",
      "Citofonía",
      "Radio Enlaces",
      "Montajes de redes eléctricas",
      "Ampliaciones de redes eléctricas",
      "Automatización",
      "Cercos Eléctricos",
      "Soporte y venta de equipos de computadores",
      "Venta de perifericos",
    ]
  },
  {
    id: "software",
    title: "Software",
    description:
      "Desarrollo de soluciones de software para monitoreo, control y gestión de sistemas electrónicos. Interfaces intuitivas y arquitecturas escalables.",
    features: [
      "Sistemas a la medida",
      "Sistemas automatizados",
      "Integraciones con Inteligencia Artificial"
    ]
  }
];

const PORTFOLIO_ITEMS = {
  electronica: [
    { id: 1, title: "PLC Automatización Línea 3", category: "Automatización" },
    { id: 2, title: "Tablero de Control 480V", category: "Potencia" },
    { id: 3, title: "Retrofit Sensor Array", category: "Instrumentación" },
    { id: 4, title: "Sistema de Telemetría", category: "Monitoreo" },
    { id: 5, title: "Variador de Frecuencia", category: "Control" }
  ],
  software: [
    { id: 1, title: "Dashboard Energético", category: "Monitoreo" },
    { id: 2, title: "App Control Remoto", category: "IoT" },
    { id: 3, title: "Sistema MES Producción", category: "Gestión" },
    { id: 4, title: "SCADA Planta Norte", category: "Control" },
    { id: 5, title: "Portal de Reportes", category: "Analítica" }
  ]
};

// ─── Reusable Carousel Component ───
function Carousel({ items, accentColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const handlePrev = () =>
    setCurrentIndex((prev) => Math.max(0, prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div style={styles.carouselWrapper}>
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        style={{
          ...styles.carouselBtn,
          opacity: currentIndex === 0 ? 0.3 : 1,
          borderColor: accentColor
        }}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div style={styles.carouselTrack}>
        {visibleItems.map((item) => (
          <div key={item.id} style={{ ...styles.carouselCard, borderTopColor: accentColor }}>
            <div style={{ ...styles.cardImagePlaceholder, background: `linear-gradient(135deg, ${accentColor}12, ${accentColor}06)` }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.4 }}>
                <rect x="4" y="4" width="32" height="32" rx="4" stroke={accentColor} strokeWidth="1.5" />
                <circle cx="14" cy="14" r="3" stroke={accentColor} strokeWidth="1.5" />
                <path d="M4 28L14 20L22 26L36 16" stroke={accentColor} strokeWidth="1.5" />
              </svg>
            </div>
            <div style={styles.cardContent}>
              <span style={{ ...styles.cardCategory, color: accentColor }}>{item.category}</span>
              <h4 style={styles.cardTitle}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        style={{
          ...styles.carouselBtn,
          opacity: currentIndex >= maxIndex ? 0.3 : 1,
          borderColor: accentColor
        }}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

// ─── Infinite Brand Marquee ───
function BrandMarquee() {
  // Duplicar marcas para efecto infinito
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section style={styles.brandsSection}>
      <div style={styles.marqueeContainer}>
        <div style={styles.marqueeTrack}>
          {doubled.map((brand, i) => (
            <div key={i} style={styles.brandItem}>
              <div style={styles.brandLogo}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="6" stroke="#0F3460" strokeWidth="1.5" opacity="0.35" />
                  <circle cx="14" cy="14" r="6" stroke="#0F3460" strokeWidth="1.5" opacity="0.25" />
                </svg>
              </div>
              <span style={styles.brandName}>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Card Component ───
function ServiceCard({ service, index }) {
  const isElectronica = index === 0;
  const accent = isElectronica ? "#0F3460" : "#1A7A5C";

  return (
    <div style={{ ...styles.serviceCard, borderTopColor: accent }}>
      <div style={{ ...styles.serviceIcon, background: `${accent}0D` }}>
        {isElectronica ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M24.5 7.5L21.7 10.3M10.3 21.7L7.5 24.5" stroke={accent} strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="6" stroke={accent} strokeWidth="2" />
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="24" rx="3" stroke={accent} strokeWidth="2" />
            <path d="M12 12H20M12 16H18M12 20H16" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="22" cy="22" r="6" fill="white" stroke={accent} strokeWidth="2" />
            <path d="M20 22H24M22 20V24" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <h3 style={{ ...styles.serviceTitle, color: accent }}>{service.title}</h3>
      <p style={styles.serviceDescription}>{service.description}</p>
      <ul style={styles.featureList}>
        {service.features.map((f, i) => (
          <li key={i} style={styles.featureItem}>
            <span style={{ ...styles.featureDot, backgroundColor: accent }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Landing Component ───
export default function ElectrosistemasLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.page}>
      <style>{globalCSS}</style>

      {/* ── Hero ── */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>ELECTRO<span style={styles.heroTitleAccent}>SISTEMAS</span></h1>
            <p style={styles.heroLabel}>Soluciones tecnologicas y seguridad electronica</p>
            <p style={styles.heroTagline}>
              Somos una empresa donde brindamos soluciones integrales en seguridad electrónica. Ofrecemos tecnología de vanguardia y un equipo humano altamente calificado, garantizando confianza, respaldo y continuidad en cada proyecto.
            </p>
            <div style={styles.heroCTAs}>
              <button style={styles.btnPrimary}>Conozca nuestros servicios</button>
              <button style={styles.btnSecondary}>Contáctenos</button>
            </div>
          </div>
          <div style={styles.heroVisual}>
            <div style={styles.logoPlaceholder}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="4" y="4" width="72" height="72" rx="16" stroke="#0F3460" strokeWidth="2" />
                <path d="M24 40H56M40 24V56" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="40" cy="40" r="12" stroke="#1A7A5C" strokeWidth="2" strokeDasharray="4 3" />
              </svg>
              <span style={styles.logoText}>LOGO</span>
            </div>
          </div>
        </div>
        <div style={styles.heroGradient} />
      </header>

      {/* ── Marcas ── */}
      <BrandMarquee />

      {/* ── Servicios ── */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          {/* TODO: idea de hacer que se unan */}
          <span style={styles.sectionLabel}>Lo que hacemos</span>
          <h2 style={styles.sectionTitle}>Servicios</h2>
        </div>
        <div style={styles.servicesGrid}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── Portafolio Electrónica ── */}
      <section style={{ ...styles.section, background: "#F7F8FA" }}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 style={styles.sectionTitle}>Portafolio</h2>
          <p style={styles.sectionSubtitle}>Electrónica</p>
        </div>
        <Carousel items={PORTFOLIO_ITEMS.electronica} accentColor="#0F3460" />
      </section>

      {/* ── Portafolio Software ── */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>Nuestro trabajo</span>
          <h2 style={styles.sectionTitle}>Portafolio</h2>
          <p style={styles.sectionSubtitle}>Software</p>
        </div>
        <Carousel items={PORTFOLIO_ITEMS.software} accentColor="#1A7A5C" />
      </section>


      {/* ── Footer ── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            <h3 style={styles.footerLogo}>ELECTRO<span style={{ color: "#1A7A5C" }}>SISTEMAS</span></h3>
            <p style={styles.footerDesc}>Ingeniería electrónica y soluciones de software para la industria colombiana.</p>
          </div>
          <div style={styles.footerLinks}>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Servicios</h4>
              <a href="#" style={styles.footerLink}>Electrónica</a>
              <a href="#" style={styles.footerLink}>Software</a>
              <a href="#" style={styles.footerLink}>Consultoría</a>
            </div>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Empresa</h4>
              <a href="#" style={styles.footerLink}>Sobre nosotros</a>
              <a href="#" style={styles.footerLink}>Portafolio</a>
              <a href="#" style={styles.footerLink}>Contacto</a>
            </div>
            <div style={styles.footerCol}>
              <h4 style={styles.footerColTitle}>Contacto</h4>
              <span style={styles.footerLink}>info@electrosistemas.co</span>
              <span style={styles.footerLink}>+57 (604) 000 0000</span>
              <span style={styles.footerLink}>Medellín, Colombia</span>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <span>© 2026 Electrosistemas. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

// ─── Global CSS (animations) ───
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Sora:wght@400;600;700;800&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  button { cursor: pointer; }
  a { text-decoration: none; }
`;

// ─── Style Definitions ───
const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    color: "#1A1D23",
    background: "#FFFFFF",
    minHeight: "100vh",
    overflowX: "hidden"
  },

  // Hero
  hero: {
    position: "relative",
    padding: "80px 48px 64px",
    background: "linear-gradient(165deg, #FFFFFF 0%, #EEF1F6 50%, #E4EBF5 100%)",
    overflow: "hidden"
  },
  heroInner: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 64,
    animation: "fadeInUp 0.8s ease-out"
  },
  heroContent: {
    flex: 1,
    maxWidth: 560
  },
  heroLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#1A7A5C",
    marginBottom: 16
  },
  heroTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 52,
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#0F3460",
    marginBottom: 20
  },
  heroTitleAccent: {
    color: "#1A7A5C"
  },
  heroTagline: {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#4A5568",
    marginBottom: 32,
    maxWidth: 480
  },
  heroCTAs: {
    display: "flex",
    gap: 16
  },
  btnPrimary: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    padding: "14px 28px",
    background: "#0F3460",
    color: "#FFFFFF",
    border: "none",
    borderRadius: 8,
    transition: "all 0.2s ease"
  },
  btnSecondary: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    padding: "14px 28px",
    background: "transparent",
    color: "#0F3460",
    border: "2px solid #0F346025",
    borderRadius: 8,
    transition: "all 0.2s ease"
  },
  heroVisual: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logoPlaceholder: {
    width: 220,
    height: 220,
    borderRadius: 24,
    background: "white",
    border: "2px dashed #0F346020",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  logoText: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "#0F346060",
    letterSpacing: "0.15em"
  },
  heroGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    background: "linear-gradient(90deg, transparent, #0F346015, #1A7A5C15, transparent)"
  },

  // Brands
  brandsSection: {
    padding: "28px 0",
    borderTop: "1px solid #E8ECF1",
    borderBottom: "1px solid #E8ECF1",
    background: "#FAFBFC",
    overflow: "hidden"
  },
  marqueeContainer: {
    overflow: "hidden",
    width: "100%"
  },
  marqueeTrack: {
    display: "flex",
    gap: 56,
    animation: "marquee 20s linear infinite",
    width: "max-content"
  },
  brandItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexShrink: 0
  },
  brandLogo: {
    opacity: 0.6
  },
  brandName: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: "#0F3460",
    opacity: 0.45,
    letterSpacing: "0.04em",
    whiteSpace: "nowrap"
  },

  // Section
  section: {
    padding: "72px 48px",
    maxWidth: 1220,
    margin: "0 auto"
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: 48
  },
  sectionLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#1A7A5C",
    marginBottom: 8,
    display: "block"
  },
  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 36,
    fontWeight: 700,
    color: "#0F3460"
  },
  sectionSubtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: "#4A5568",
    marginTop: 6
  },

  // Services
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 32
  },
  serviceCard: {
    background: "#FAFBFC",
    borderRadius: 16,
    padding: 36,
    borderTop: "3px solid",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  serviceTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 12
  },
  serviceDescription: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#4A5568",
    marginBottom: 20
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  featureItem: {
    fontSize: 14,
    color: "#374151",
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    flexShrink: 0
  },

  // Carousel
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    maxWidth: 900,
    margin: "0 auto"
  },
  carouselBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "2px solid",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.2s ease"
  },
  carouselTrack: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    flex: 1
  },
  carouselCard: {
    background: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    borderTop: "3px solid",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
  },
  cardImagePlaceholder: {
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    padding: "16px 18px 20px"
  },
  cardCategory: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  },
  cardTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: "#1A1D23",
    marginTop: 6,
    lineHeight: 1.4
  },

  // Footer
  footer: {
    background: "#0C1222",
    padding: "56px 48px 0",
    color: "#C4CCD8"
  },
  footerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 64,
    paddingBottom: 48,
    borderBottom: "1px solid #1E2A3F"
  },
  footerBrand: {
    maxWidth: 300
  },
  footerLogo: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 22,
    fontWeight: 800,
    color: "#FFFFFF",
    marginBottom: 12
  },
  footerDesc: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#7B8AA0"
  },
  footerLinks: {
    display: "flex",
    gap: 56
  },
  footerCol: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  footerColTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 4,
    letterSpacing: "0.03em"
  },
  footerLink: {
    fontSize: 14,
    color: "#7B8AA0",
    transition: "color 0.2s ease",
    display: "block"
  },
  footerBottom: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "20px 0",
    fontSize: 13,
    color: "#4A5568",
    textAlign: "center"
  }
};
