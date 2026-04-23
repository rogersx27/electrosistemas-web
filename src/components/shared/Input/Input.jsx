import styles from './Input.module.css';

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  ...props
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          className={`${styles.input} ${error ? styles.error : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={`${styles.input} ${error ? styles.error : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
      )}

      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
