import styles from './Card.module.css';

export default function Card({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'medium'
}) {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    hoverable && styles.hoverable
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
