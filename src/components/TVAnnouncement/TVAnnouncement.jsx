import styles from './TVAnnouncement.module.css';

export default function TVAnnouncement({ speed = 40 }) {
  const text = "Trabajamos con marcas reconocidas a nivel nacional e internacional, garantizando respaldo, calidad y seguridad en todos nuestros proyectos.";

  return (
    <section className={styles.tvAnnouncementSection}>
      <div className={styles.tvAnnouncementBg}>
        <div
          className={styles.tvAnnouncementTrack}
          style={{ animation: `tvScroll ${speed}s linear infinite` }}
        >
          {/* Duplicar contenido para loop infinito seamless */}
          <span className={styles.tvAnnouncementText}>{text} •</span>
          <span className={styles.tvAnnouncementText}>{text} •</span>
        </div>
        {/* Fade overlay for smooth edges */}
        <div className={styles.tvAnnouncementFade} />
      </div>
    </section>
  );
}
