import { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ items, accentColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className={styles.carouselWrapper}>
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={styles.carouselBtn}
        style={{
          opacity: currentIndex === 0 ? 0.3 : 1,
          borderColor: accentColor
        }}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={styles.carouselTrack}>
        {visibleItems.map((item) => (
          <div key={item.id} className={styles.carouselCard} style={{ borderTopColor: accentColor }}>
            <div className={styles.cardImagePlaceholder} style={{ background: `linear-gradient(135deg, ${accentColor}12, ${accentColor}06)` }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.4 }}>
                <rect x="4" y="4" width="32" height="32" rx="4" stroke={accentColor} strokeWidth="1.5"/>
                <circle cx="14" cy="14" r="3" stroke={accentColor} strokeWidth="1.5"/>
                <path d="M4 28L14 20L22 26L36 16" stroke={accentColor} strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory} style={{ color: accentColor }}>{item.category}</span>
              <h4 className={styles.cardTitle}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        className={styles.carouselBtn}
        style={{
          opacity: currentIndex >= maxIndex ? 0.3 : 1,
          borderColor: accentColor
        }}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
