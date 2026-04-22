# Industrial-Modern Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Electrosistemas landing page into an industrial-modern hybrid interface with quotable products, project showcase, and interactive forms.

**Architecture:** Hybrid pragmatic approach - maintain working components (TVAnnouncement, BrandMarquee, Carousel), improve key sections (Hero, Services, Portfolio, Footer), and add new components (IndustrialNavbar, ProductShowcase, ClientShowcase, ContactSection, QuoteModal) with modern React patterns. Design token system using CSS variables for consistency. Custom hooks for scroll tracking, viewport detection, and form validation. No heavy frameworks - vanilla React + CSS for performance.

**Tech Stack:** React 19, Vite 8, CSS Modules, Intersection Observer API, CSS Variables, custom hooks (useScrollProgress, useInView, useForm)

---

## File Structure Overview

**New Files to Create:**
```
src/
├── styles/
│   ├── tokens.css                          # Design system variables
│   └── animations.css                      # Shared keyframe animations
├── hooks/
│   ├── useScrollProgress.js                # Scroll tracking for navbar
│   ├── useInView.js                        # Viewport detection for animations
│   └── useForm.js                          # Form state and validation
├── components/
│   ├── shared/
│   │   ├── Button/
│   │   │   ├── Button.jsx                  # Reusable button component
│   │   │   └── Button.module.css
│   │   ├── Card/
│   │   │   ├── Card.jsx                    # Reusable card container
│   │   │   └── Card.module.css
│   │   ├── Input/
│   │   │   ├── Input.jsx                   # Reusable form input
│   │   │   └── Input.module.css
│   │   └── Modal/
│   │       ├── Modal.jsx                   # Reusable modal overlay
│   │       └── Modal.module.css
│   ├── layout/
│   │   └── IndustrialNavbar/
│   │       ├── IndustrialNavbar.jsx        # Sticky nav with progress
│   │       └── IndustrialNavbar.module.css
│   ├── sections/
│   │   ├── ProductShowcase/
│   │   │   ├── ProductShowcase.jsx         # Product grid with filters
│   │   │   ├── ProductShowcase.module.css
│   │   │   ├── ProductCard.jsx             # Individual product card
│   │   │   └── ProductCard.module.css
│   │   ├── ClientShowcase/
│   │   │   ├── ClientShowcase.jsx          # Client logos and testimonials
│   │   │   └── ClientShowcase.module.css
│   │   └── ContactSection/
│   │       ├── ContactSection.jsx          # Contact form and info
│   │       ├── ContactSection.module.css
│   │       ├── ContactForm.jsx             # Form component
│   │       └── ContactForm.module.css
│   └── forms/
│       └── QuoteForm/
│           ├── QuoteModal.jsx              # Quote request modal
│           └── QuoteModal.module.css
├── data/
│   ├── products.js                         # Product catalog data
│   └── projects.js                         # Featured projects data
└── App.jsx                                 # Update with new structure

**Files to Modify:**
- src/components/Hero/Hero.jsx              # Add carousel and metrics
- src/components/Hero/Hero.module.css       # Update styles
- src/components/Services/Services.jsx      # Add stats and animations
- src/components/Services/Services.module.css # Update styles
- src/components/Services/ServiceCard.jsx   # Enhance card design
- src/components/Services/ServiceCard.module.css
- src/components/Portfolio/Portfolio.jsx    # Add images and metrics
- src/components/Portfolio/Portfolio.module.css
- src/components/Footer/Footer.jsx          # 4-column layout
- src/components/Footer/Footer.module.css   # Update styles
- src/data/constants.js                     # Expand with clients, testimonials, contact
- src/index.css                             # Import tokens and animations
```

---

## Phase 1: Foundation Setup

### Task 1: Design Tokens System

**Files:**
- Create: `src/styles/tokens.css`
- Modify: `src/index.css`

- [ ] **Step 1: Create design tokens file**

Create `src/styles/tokens.css`:

```css
:root {
  /* Colors - Primary */
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-primary-light: #3b82f6;

  /* Colors - Industrial */
  --color-industrial-dark: #1e293b;
  --color-industrial-medium: #334155;
  --color-industrial-light: #475569;

  /* Colors - Accents */
  --color-accent-amber: #f59e0b;
  --color-accent-green: #10b981;

  /* Colors - Text */
  --color-text-primary: #1e293b;
  --color-text-secondary: #475569;
  --color-text-muted: #64748b;
  --color-text-light: #94a3b8;

  /* Colors - Backgrounds */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8f9fc;
  --color-bg-tertiary: #f1f5f9;

  /* Colors - Borders */
  --color-border-light: #e5e7eb;
  --color-border-medium: #cbd5e1;

  /* Colors - Status */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* Typography */
  --font-primary: 'DM Sans', sans-serif;
  --font-display: 'Sora', sans-serif;
  --font-mono: monospace;

  /* Font Sizes */
  --text-xs: 11px;
  --text-sm: 13px;
  --text-base: 14px;
  --text-lg: 15px;
  --text-xl: 17px;
  --text-2xl: 20px;
  --text-3xl: 24px;
  --text-4xl: 36px;
  --text-5xl: 48px;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* Line Heights */
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  /* Container */
  --container-max-width: 1120px;
  --container-padding: 48px;
}

@media (max-width: 768px) {
  :root {
    --container-padding: 24px;
    --text-5xl: 40px;
    --text-4xl: 28px;
  }
}
```

- [ ] **Step 2: Import tokens in index.css**

Add to top of `src/index.css`:

```css
@import './styles/tokens.css';
```

- [ ] **Step 3: Verify tokens loaded**

Run: `npm run dev`
Open browser console, check: `getComputedStyle(document.documentElement).getPropertyValue('--color-primary')`
Expected: `#2563eb` or similar

- [ ] **Step 4: Commit**

```bash
git add src/styles/tokens.css src/index.css
git commit -m "feat: add design token system

- Create CSS custom properties for colors, spacing, typography
- Add responsive breakpoints for mobile
- Import tokens in index.css"
```

---

### Task 2: Animation Keyframes

**Files:**
- Create: `src/styles/animations.css`
- Modify: `src/index.css`

- [ ] **Step 1: Create animations file**

Create `src/styles/animations.css`:

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse (for status indicators) */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Spin (for loading spinners) */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Utility Classes */
.animate-fadeIn {
  animation: fadeIn 0.5s var(--transition-base);
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s var(--transition-base);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

- [ ] **Step 2: Import animations in index.css**

Add after tokens import in `src/index.css`:

```css
@import './styles/animations.css';
```

- [ ] **Step 3: Verify animations loaded**

Run: `npm run dev`
Open browser dev tools, check stylesheet includes animation keyframes
Expected: @keyframes fadeIn, fadeInUp, etc. present

- [ ] **Step 4: Commit**

```bash
git add src/styles/animations.css src/index.css
git commit -m "feat: add animation keyframes

- Create fade, slide, pulse, spin animations
- Add utility classes for common animations
- Import in index.css"
```

---

### Task 3: Data Files - Products

**Files:**
- Create: `src/data/products.js`

- [ ] **Step 1: Create products data file**

Create `src/data/products.js`:

```javascript
export const PRODUCTS = [
  {
    id: 'plc-ctrl-01',
    code: 'PLC-CTRL-01',
    name: 'Sistema PLC Siemens S7-1200',
    description: 'Control programable para automatización industrial con interface HMI integrada.',
    category: 'electronica',
    tags: ['PLC', 'HMI', 'Industrial'],
    icon: '⚡',
    status: 'available',
    available: true
  },
  {
    id: 'scada-pro-01',
    code: 'SCADA-PRO-01',
    name: 'Sistema SCADA Personalizado',
    description: 'Software de supervisión y control en tiempo real con dashboards intuitivos.',
    category: 'software',
    tags: ['Software', 'Dashboard', 'Cloud'],
    icon: '📊',
    status: 'popular',
    available: true
  },
  {
    id: 'iot-sens-01',
    code: 'IOT-SENS-01',
    name: 'Kit IoT Sensores Industriales',
    description: 'Conjunto de sensores inteligentes con conectividad IoT y monitoreo remoto.',
    category: 'automatizacion',
    tags: ['IoT', 'Sensores', 'Wireless'],
    icon: '🔌',
    status: null,
    available: true
  },
  {
    id: 'vfd-ctrl-01',
    code: 'VFD-CTRL-01',
    name: 'Variador de Frecuencia',
    description: 'Control de velocidad para motores trifásicos con protección integrada.',
    category: 'electronica',
    tags: ['VFD', 'Control', 'Motores'],
    icon: '⚡',
    status: 'available',
    available: true
  },
  {
    id: 'mes-sys-01',
    code: 'MES-SYS-01',
    name: 'Sistema MES Producción',
    description: 'Software de gestión de ejecución de manufactura para optimizar producción.',
    category: 'software',
    tags: ['MES', 'Producción', 'Analítica'],
    icon: '📈',
    status: null,
    available: true
  },
  {
    id: 'hmi-panel-01',
    code: 'HMI-PANEL-01',
    name: 'Panel HMI Touchscreen',
    description: 'Interface hombre-máquina con pantalla táctil de 10" para control industrial.',
    category: 'electronica',
    tags: ['HMI', 'Touchscreen', 'Interface'],
    icon: '📱',
    status: null,
    available: true
  },
  {
    id: 'iot-gateway-01',
    code: 'IOT-GATEWAY-01',
    name: 'Gateway IoT Industrial',
    description: 'Puente de comunicación entre dispositivos industriales y la nube.',
    category: 'automatizacion',
    tags: ['IoT', 'Gateway', 'Cloud'],
    icon: '🌐',
    status: 'available',
    available: true
  },
  {
    id: 'energy-monitor-01',
    code: 'ENERGY-MON-01',
    name: 'Sistema de Monitoreo Energético',
    description: 'Software para monitoreo y análisis de consumo energético en tiempo real.',
    category: 'software',
    tags: ['Energía', 'Monitoreo', 'Dashboard'],
    icon: '⚡',
    status: null,
    available: true
  },
  {
    id: 'safety-relay-01',
    code: 'SAFETY-RELAY-01',
    name: 'Relé de Seguridad Industrial',
    description: 'Sistema de paro de emergencia con certificación de seguridad.',
    category: 'electronica',
    tags: ['Seguridad', 'Relé', 'Emergencia'],
    icon: '🛡️',
    status: null,
    available: true
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'electronica', label: 'Electrónica' },
  { id: 'software', label: 'Software' },
  { id: 'automatizacion', label: 'Automatización' }
];
```

- [ ] **Step 2: Verify data structure**

Create temporary test file `src/data/products.test.js`:

```javascript
import { PRODUCTS, PRODUCT_CATEGORIES } from './products.js';

console.log('Product count:', PRODUCTS.length);
console.log('First product:', PRODUCTS[0]);
console.log('Categories:', PRODUCT_CATEGORIES);

// Verify all required fields exist
const requiredFields = ['id', 'code', 'name', 'description', 'category', 'tags', 'icon', 'status', 'available'];
const missingFields = PRODUCTS.filter(p =>
  requiredFields.some(field => !(field in p))
);
console.log('Products with missing fields:', missingFields.length);
```

Run: `node src/data/products.test.js`
Expected: Product count: 9, no missing fields

- [ ] **Step 3: Remove test file**

```bash
rm src/data/products.test.js
```

- [ ] **Step 4: Commit**

```bash
git add src/data/products.js
git commit -m "feat: add products catalog data

- Add 9 products across 3 categories
- Include product metadata (code, tags, status)
- Define product category filters"
```

---

### Task 4: Data Files - Projects

**Files:**
- Create: `src/data/projects.js`

- [ ] **Step 1: Create projects data file**

Create `src/data/projects.js`:

```javascript
export const FEATURED_PROJECTS = [
  {
    id: 'project-001',
    title: 'Tablero de Control Industrial',
    subtitle: 'Automatización Línea de Producción',
    client: 'Industrias XYZ',
    sector: 'Manufactura',
    category: 'electronica',
    result: {
      metric: '+35%',
      label: 'Eficiencia'
    },
    tags: ['PLC', 'HMI', 'SCADA'],
    image: null
  },
  {
    id: 'project-002',
    title: 'Sistema SCADA Planta Norte',
    subtitle: 'Monitoreo en Tiempo Real',
    client: 'Energía ABC',
    sector: 'Energía',
    category: 'software',
    result: {
      metric: '99.8%',
      label: 'Uptime'
    },
    tags: ['SCADA', 'Dashboard', 'API'],
    image: null
  },
  {
    id: 'project-003',
    title: 'Red de Sensores IoT',
    subtitle: 'Monitoreo de Temperatura y Humedad',
    client: 'AgroTech Solutions',
    sector: 'Agricultura',
    category: 'automatizacion',
    result: {
      metric: '-20%',
      label: 'Pérdidas'
    },
    tags: ['IoT', 'Sensores', 'Cloud'],
    image: null
  },
  {
    id: 'project-004',
    title: 'Dashboard Energético',
    subtitle: 'Análisis de Consumo en Tiempo Real',
    client: 'Manufactura DEF',
    sector: 'Manufactura',
    category: 'software',
    result: {
      metric: '-18%',
      label: 'Costos'
    },
    tags: ['Dashboard', 'Energía', 'Analítica'],
    image: null
  }
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add featured projects data

- Add 4 featured projects for hero carousel
- Include client, sector, results data
- Placeholder for project images"
```

---

### Task 5: Expand Constants Data

**Files:**
- Modify: `src/data/constants.js`

- [ ] **Step 1: Read existing constants file**

(Already done in context)

- [ ] **Step 2: Add new constants at end of file**

Append to `src/data/constants.js`:

```javascript

// ─── Client Logos ───
export const CLIENTS = [
  {
    id: 'client-001',
    name: 'Industrias XYZ',
    logo: null,
    sector: 'Manufactura'
  },
  {
    id: 'client-002',
    name: 'Energía ABC',
    logo: null,
    sector: 'Energía'
  },
  {
    id: 'client-003',
    name: 'AgroTech Solutions',
    logo: null,
    sector: 'Agricultura'
  },
  {
    id: 'client-004',
    name: 'Manufactura DEF',
    logo: null,
    sector: 'Manufactura'
  },
  {
    id: 'client-005',
    name: 'Logística GHI',
    logo: null,
    sector: 'Logística'
  },
  {
    id: 'client-006',
    name: 'Alimentos JKL',
    logo: null,
    sector: 'Alimentos'
  }
];

// ─── Testimonials ───
export const TESTIMONIALS = [
  {
    id: 'test-001',
    client: 'Juan Pérez',
    company: 'Industrias XYZ',
    position: 'Gerente de Planta',
    text: 'Excelente trabajo en la automatización de nuestra línea de producción. El equipo de Electrosistemas demostró gran profesionalismo y conocimiento técnico.',
    rating: 5
  },
  {
    id: 'test-002',
    client: 'María González',
    company: 'Energía ABC',
    position: 'Directora de Operaciones',
    text: 'El sistema SCADA que implementaron superó nuestras expectativas. Ahora tenemos visibilidad completa de nuestra operación.',
    rating: 5
  }
];

// ─── Contact Information ───
export const CONTACT_INFO = {
  email: 'info@electrosistemas.com',
  phone: '+1 234 567 8900',
  address: 'Calle Principal 123, Ciudad, País, CP 12345',
  hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
  social: {
    linkedin: 'https://linkedin.com/company/electrosistemas',
    facebook: 'https://facebook.com/electrosistemas',
    instagram: 'https://instagram.com/electrosistemas'
  }
};

// ─── Service Statistics ───
export const SERVICE_STATS = {
  electronica: [
    { value: '24', label: 'PLCs Implementados' },
    { value: '98%', label: 'Uptime Promedio' }
  ],
  software: [
    { value: '18', label: 'Apps Desarrolladas' },
    { value: '15', label: 'Integraciones API' }
  ]
};
```

- [ ] **Step 3: Commit**

```bash
git add src/data/constants.js
git commit -m "feat: expand constants with clients, testimonials, contact

- Add 6 client entries
- Add 2 testimonials
- Add contact information and hours
- Add service statistics for Electrónica and Software"
```

---

## Phase 2: Custom Hooks

### Task 6: useScrollProgress Hook

**Files:**
- Create: `src/hooks/useScrollProgress.js`

- [ ] **Step 1: Create hook file**

Create `src/hooks/useScrollProgress.js`:

```javascript
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Throttle scroll event
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Detect active section using Intersection Observer
    const sections = document.querySelectorAll('[id]');

    const observerOptions = {
      threshold: 0.5, // Section is active when 50% visible
      rootMargin: '-20% 0px -20% 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return { scrollProgress, activeSection };
}
```

- [ ] **Step 2: Create test component to verify hook**

Create `src/hooks/useScrollProgress.test.jsx`:

```javascript
import { useScrollProgress } from './useScrollProgress';

export default function ScrollProgressTest() {
  const { scrollProgress, activeSection } = useScrollProgress();

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, background: '#fff', padding: '16px', border: '2px solid #000', zIndex: 9999 }}>
      <div>Progress: {scrollProgress.toFixed(1)}%</div>
      <div>Active: {activeSection}</div>
    </div>
  );
}
```

Temporarily add to `src/App.jsx`:

```javascript
import ScrollProgressTest from './hooks/useScrollProgress.test';

// Inside return, add at top:
<ScrollProgressTest />
```

- [ ] **Step 3: Test hook manually**

Run: `npm run dev`
Open browser, scroll page
Expected: Progress increases 0-100%, activeSection changes as you scroll

- [ ] **Step 4: Remove test component**

Remove `<ScrollProgressTest />` from App.jsx
Delete `src/hooks/useScrollProgress.test.jsx`

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useScrollProgress.js
git commit -m "feat: add useScrollProgress hook

- Track scroll position as percentage (0-100)
- Detect active section using Intersection Observer
- Throttle scroll events with requestAnimationFrame"
```

---

### Task 7: useInView Hook

**Files:**
- Create: `src/hooks/useInView.js`

- [ ] **Step 1: Create hook file**

Create `src/hooks/useInView.js`:

```javascript
import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold || 0.2, // Default: 20% visible
      rootMargin: options.rootMargin || '0px'
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        // Once triggered, stop observing (one-time animation)
        if (options.once !== false) {
          observer.disconnect();
        }
      } else if (!options.once) {
        setInView(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return { ref, inView };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useInView.js
git commit -m "feat: add useInView hook

- Detect when element enters viewport
- Configurable threshold and rootMargin
- Support one-time or continuous observation"
```

---

### Task 8: useForm Hook

**Files:**
- Create: `src/hooks/useForm.js`

- [ ] **Step 1: Create hook file**

Create `src/hooks/useForm.js`:

```javascript
import { useState } from 'react';

export function useForm(initialValues = {}, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    if (validationRules[name]) {
      const error = validationRules[name](values[name]);
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((field) => {
      const error = validationRules[field](values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {})
    );

    return isValid;
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();

    if (validateAll()) {
      onSubmit(values);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useForm.js
git commit -m "feat: add useForm hook

- Manage form state (values, errors, touched)
- Support field-level validation on blur
- Support form-level validation on submit
- Provide reset functionality"
```

---

## Phase 3: Shared Components

### Task 9: Button Component

**Files:**
- Create: `src/components/shared/Button/Button.jsx`
- Create: `src/components/shared/Button/Button.module.css`

- [ ] **Step 1: Create Button component**

Create `src/components/shared/Button/Button.jsx`:

```javascript
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button'
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className={styles.spinner}></span> : children}
    </button>
  );
}
```

- [ ] **Step 2: Create Button styles**

Create `src/components/shared/Button/Button.module.css`:

```css
.button {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border-radius: var(--radius-lg);
}

.button:hover:not(.disabled) {
  transform: translateY(-2px);
}

.button:active:not(.disabled) {
  transform: translateY(0);
}

/* Variants */
.primary {
  background: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-md);
}

.primary:hover:not(.disabled) {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
}

.secondary {
  background: var(--color-accent-amber);
  color: white;
  box-shadow: var(--shadow-md);
}

.secondary:hover:not(.disabled) {
  background: #d97706;
  box-shadow: var(--shadow-lg);
}

.outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.outline:hover:not(.disabled) {
  background: rgba(37, 99, 235, 0.05);
  border-color: var(--color-primary-dark);
}

/* Sizes */
.small {
  padding: 10px 20px;
  font-size: var(--text-sm);
}

.medium {
  padding: 14px 28px;
  font-size: var(--text-base);
}

.large {
  padding: 16px 32px;
  font-size: var(--text-lg);
}

/* Modifiers */
.fullWidth {
  width: 100%;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  opacity: 0.8;
  cursor: wait;
}

/* Spinner */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

- [ ] **Step 3: Test Button component**

Create test file `src/components/shared/Button/ButtonTest.jsx`:

```javascript
import Button from './Button';

export default function ButtonTest() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <h3>Button Variants</h3>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>

      <h3>Button Sizes</h3>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>

      <h3>Button States</h3>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button fullWidth>Full Width</Button>
    </div>
  );
}
```

Temporarily import and render in App.jsx, verify visually

- [ ] **Step 4: Remove test file**

Delete `src/components/shared/Button/ButtonTest.jsx`

- [ ] **Step 5: Commit**

```bash
git add src/components/shared/Button/
git commit -m "feat: add shared Button component

- Support primary, secondary, outline variants
- Support small, medium, large sizes
- Support disabled, loading, fullWidth states
- Include hover and active animations"
```

---

### Task 10: Card Component

**Files:**
- Create: `src/components/shared/Card/Card.jsx`
- Create: `src/components/shared/Card/Card.module.css`

- [ ] **Step 1: Create Card component**

Create `src/components/shared/Card/Card.jsx`:

```javascript
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
```

- [ ] **Step 2: Create Card styles**

Create `src/components/shared/Card/Card.module.css`:

```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

/* Variants */
.default {
  border: 2px solid var(--color-border-light);
}

.elevated {
  box-shadow: var(--shadow-md);
}

.outlined {
  border: 2px solid var(--color-border-light);
  box-shadow: none;
}

/* Hoverable */
.hoverable:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Padding */
.padding-small {
  padding: var(--space-4);
}

.padding-medium {
  padding: var(--space-8);
}

.padding-large {
  padding: var(--space-12);
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/Card/
git commit -m "feat: add shared Card component

- Support default, elevated, outlined variants
- Support hoverable state with lift effect
- Support small, medium, large padding options"
```

---

### Task 11: Input Component

**Files:**
- Create: `src/components/shared/Input/Input.jsx`
- Create: `src/components/shared/Input/Input.module.css`

- [ ] **Step 1: Create Input component**

Create `src/components/shared/Input/Input.jsx`:

```javascript
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
```

- [ ] **Step 2: Create Input styles**

Create `src/components/shared/Input/Input.module.css`:

```css
.inputGroup {
  margin-bottom: var(--space-4);
}

.label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-industrial-light);
  margin-bottom: var(--space-2);
}

.required {
  color: var(--color-error);
}

.input {
  width: 100%;
  padding: var(--space-3);
  border: 2px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  font-family: var(--font-primary);
  transition: border-color var(--transition-base);
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--color-bg-tertiary);
}

.input.error {
  border-color: var(--color-error);
}

.errorMessage {
  margin-top: var(--space-1);
  font-size: var(--text-xs);
  color: var(--color-error);
}

textarea.input {
  resize: vertical;
  min-height: 80px;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/Input/
git commit -m "feat: add shared Input component

- Support text, email, tel, number, textarea types
- Support label with required indicator
- Support error state with message display
- Support disabled state"
```

---

### Task 12: Modal Component

**Files:**
- Create: `src/components/shared/Modal/Modal.jsx`
- Create: `src/components/shared/Modal/Modal.module.css`

- [ ] **Step 1: Create Modal component**

Create `src/components/shared/Modal/Modal.jsx`:

```javascript
import { useEffect } from 'react';
import styles from './Modal.module.css';

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = '500px',
  closeOnOverlayClick = true
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Modal styles**

Create `src/components/shared/Modal/Modal.module.css`:

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  animation: fadeIn 0.2s ease-out;
}

.modal {
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: scaleIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/Modal/
git commit -m "feat: add shared Modal component

- Support overlay with backdrop blur
- Lock body scroll when open
- Close on ESC key or overlay click
- Configurable max width
- Fade and scale animations"
```

---

## Phase 4: Layout Components

### Task 13: IndustrialNavbar Component

**Files:**
- Create: `src/components/layout/IndustrialNavbar/IndustrialNavbar.jsx`
- Create: `src/components/layout/IndustrialNavbar/IndustrialNavbar.module.css`

- [ ] **Step 1: Create IndustrialNavbar component**

Create `src/components/layout/IndustrialNavbar/IndustrialNavbar.jsx`:

```javascript
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
```

- [ ] **Step 2: Create IndustrialNavbar styles**

Create `src/components/layout/IndustrialNavbar/IndustrialNavbar.module.css`:

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
  border-bottom: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-sm);
}

.navbarContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-12);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.accentLine {
  width: 3px;
  height: 32px;
  background: linear-gradient(180deg, var(--color-accent-amber), var(--color-accent-green));
  border-radius: 2px;
}

.logoText {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: var(--font-bold);
  color: var(--color-industrial-dark);
}

.logoAccent {
  color: var(--color-primary);
}

.navLinks {
  display: flex;
  gap: var(--space-8);
  align-items: center;
}

.navLink {
  position: relative;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-base);
  padding-bottom: var(--space-1);
}

.navLink:hover {
  color: var(--color-primary);
}

.navLink.active {
  font-weight: var(--font-semibold);
  color: var(--color-primary);
}

.activeIndicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
}

.progressBar {
  height: 3px;
  background: var(--color-border-light);
  position: relative;
}

.progressFill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent-amber));
  transition: width var(--transition-base);
}

.breadcrumb {
  background: var(--color-bg-secondary);
  padding: var(--space-2) var(--space-12);
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  border-bottom: 1px solid var(--color-border-light);
}

.statusDot {
  color: var(--color-accent-green);
  font-size: 8px;
}

.breadcrumbLabel {
  color: var(--color-text-muted);
}

.breadcrumbSection {
  color: var(--color-primary);
  font-weight: var(--font-semibold);
}

.breadcrumbProgress {
  color: var(--color-text-light);
  margin-left: auto;
}

@media (max-width: 768px) {
  .navLinks {
    display: none;
  }

  .navbarContent {
    padding: var(--space-4) var(--space-6);
  }

  .breadcrumb {
    padding: var(--space-2) var(--space-6);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/IndustrialNavbar/
git commit -m "feat: add IndustrialNavbar component

- Sticky navbar with logo and nav links
- Progress bar tracking scroll position
- Breadcrumb showing active section
- Smooth scroll to sections on link click
- Integrate useScrollProgress hook"
```

---

## Remaining Tasks Summary

**Note:** Tasks 1-13 above provide detailed step-by-step implementation for foundation, hooks, shared components, and navbar. Tasks 14-32 below follow similar patterns with key implementation guidance.

---

### Task 14-32: Complete Implementation

**These tasks follow the established patterns from Tasks 1-13. Each involves:**
1. Create/modify component files
2. Apply design tokens and animations
3. Wire up data sources
4. Test manually
5. Commit with descriptive message

**Hero Enhancement (Task 14):** Add carousel using FEATURED_PROJECTS, animated metrics, pulse badge
**Services Redesign (Task 15):** Add SERVICE_STATS display, useInView animations, hover effects
**ProductShowcase (Task 16):** Grid with category filters, ProductCard components, quote CTAs
**Portfolio Improvements (Task 17):** Add image containers, result metrics, animations
**ClientShowcase (Task 18):** Client logo grid with grayscale hover, optional testimonials
**ContactSection (Task 19):** Contact form with use Form hook, info display
**QuoteModal (Task 20):** Modal with form validation, product pre-selection
**Footer Improvements (Task 21):** 4-column layout, social links, dark theme
**App Integration (Tasks 22-25):** Wire all components, add section IDs, test integration and responsive
**Polish (Tasks 26-28):** Scroll animations, accessibility audit, performance optimization
**Deployment Prep (Tasks 29-32):** Content review, cross-browser testing, SEO, production build

---

## Plan Complete - Ready for Execution

**Total Tasks:** 32
**Estimated Time:** 8-12 working days
**Current Status:** Foundation tasks (1-13) fully detailed. Remaining tasks (14-32) summarized with clear patterns.

Execute using either:
- **superpowers:subagent-driven-development** (recommended)
- **superpowers:executing-plans**