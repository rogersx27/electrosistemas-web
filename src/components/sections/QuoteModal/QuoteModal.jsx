import { useState, useEffect } from 'react';
import { PRODUCTS } from '../../../data/products';
import { useForm } from '../../../hooks/useForm';
import Modal from '../../shared/Modal/Modal';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import styles from './QuoteModal.module.css';

export default function QuoteModal({ isOpen, onClose, preSelectedProduct = null }) {
  const [submitted, setSubmitted] = useState(false);

  const validationRules = {
    nombre: (value) => {
      if (!value || value.trim() === '') return 'El nombre es requerido';
      if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
      return null;
    },
    empresa: (value) => {
      if (!value || value.trim() === '') return 'La empresa es requerida';
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
    producto: (value) => {
      if (!value || value === '') return 'Selecciona un producto';
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
    empresa: '',
    email: '',
    telefono: '',
    producto: preSelectedProduct?.id || '',
    mensaje: ''
  }, validationRules);

  // Update product when preSelectedProduct changes
  useEffect(() => {
    if (preSelectedProduct) {
      handleChange('producto', preSelectedProduct.id);
    }
  }, [preSelectedProduct]);

  const onSubmit = (formValues) => {
    const selectedProduct = PRODUCTS.find(p => p.id === formValues.producto);
    console.log('Quote form submitted:', {
      ...formValues,
      productDetails: selectedProduct
    });
    setSubmitted(true);

    // Reset and close after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      resetForm();
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!submitted) {
      resetForm();
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} maxWidth="600px">
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Solicitar Cotización</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            ✕
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
              label="Empresa"
              type="text"
              placeholder="Nombre de tu empresa"
              value={values.empresa}
              onChange={(value) => handleChange('empresa', value)}
              onBlur={() => handleBlur('empresa')}
              error={touched.empresa ? errors.empresa : null}
              required
            />

            <div className={styles.rowFields}>
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
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Producto <span className={styles.required}>*</span>
              </label>
              <select
                className={`${styles.select} ${touched.producto && errors.producto ? styles.selectError : ''}`}
                value={values.producto}
                onChange={(e) => handleChange('producto', e.target.value)}
                onBlur={() => handleBlur('producto')}
              >
                <option value="">Selecciona un producto...</option>
                {PRODUCTS.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.code} - {product.name}
                  </option>
                ))}
              </select>
              {touched.producto && errors.producto && (
                <div className={styles.errorMessage}>{errors.producto}</div>
              )}
            </div>

            <Input
              label="Mensaje"
              type="textarea"
              placeholder="Describe tu requerimiento..."
              value={values.mensaje}
              onChange={(value) => handleChange('mensaje', value)}
              onBlur={() => handleBlur('mensaje')}
              error={touched.mensaje ? errors.mensaje : null}
              required
              rows={4}
            />

            <div className={styles.formActions}>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Enviar Cotización
              </Button>
            </div>
          </form>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>¡Cotización Enviada!</h3>
            <p className={styles.successMessage}>
              Hemos recibido tu solicitud. Te contactaremos pronto para discutir los detalles.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
