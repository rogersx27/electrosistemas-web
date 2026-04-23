import { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../../data/products';
import { useInView } from '../../../hooks/useInView';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';
import styles from './ProductShowcase.module.css';

export default function ProductShowcase({ onQuoteClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({ threshold: 0.2 });

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleQuoteClick = (product) => {
    if (onQuoteClick) {
      onQuoteClick(product);
    }
  };

  return (
    <section ref={ref} className={styles.section} id="productos">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Nuestros Productos</span>
        <h2 className={styles.sectionTitle}>Catálogo de Soluciones</h2>
      </div>

      {/* Category Filters */}
      <div className={styles.filterButtons}>
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${activeCategory === category.id ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className={`${styles.productsGrid} ${inView ? 'animate-fadeInUp' : ''}`}>
        {filteredProducts.map((product) => (
          <Card key={product.id} hoverable padding="medium">
            <div className={styles.productCard}>
              {/* Icon */}
              <div className={styles.productIcon}>{product.icon}</div>

              {/* Product Code */}
              <div className={styles.productCode}>{product.code}</div>

              {/* Product Name */}
              <h3 className={styles.productName}>{product.name}</h3>

              {/* Description */}
              <p className={styles.productDescription}>{product.description}</p>

              {/* Tags */}
              <div className={styles.productTags}>
                {product.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {/* Status Badge */}
              {product.status && (
                <div className={`${styles.statusBadge} ${styles[product.status]}`}>
                  {product.status === 'available' ? 'Disponible' : ''}
                  {product.status === 'popular' ? 'Popular' : ''}
                </div>
              )}

              {/* CTA Button */}
              <Button
                variant="primary"
                size="small"
                fullWidth
                onClick={() => handleQuoteClick(product)}
                disabled={!product.available}
              >
                {product.available ? 'Solicitar Cotización' : 'No Disponible'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className={styles.emptyState}>
          <p>No hay productos disponibles en esta categoría.</p>
        </div>
      )}
    </section>
  );
}
