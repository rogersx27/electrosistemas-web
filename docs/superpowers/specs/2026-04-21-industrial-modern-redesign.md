# Electrosistemas Web - Industrial-Modern Redesign Specification

**Date:** 2026-04-21
**Project:** Electrosistemas Landing Page Transformation
**Approach:** Hybrid Pragmatic - Maintain, Improve, and Add Components
**Design Style:** Industrial-Modern Hybrid

---

## 1. Executive Summary

Transform the current Electrosistemas landing page from a basic corporate site into a modern, accessible, and technologically sophisticated interface that appeals to both B2B industrial clients and individual/small business customers. The redesign follows a hybrid pragmatic approach: maintaining well-functioning components, improving key sections, and adding new interactive features including quotable products, project showcase carousel, and integrated contact/quote forms.

**Key Goals:**
- Project a balance of professionalism (for B2B) and accessibility (for individuals/small businesses)
- Implement industrial-modern visual style combining clean minimalism with technical elements
- Add moderate interactivity (parallax, scroll animations, filters, real-time validation)
- Enable product quotation workflow with modal forms
- Showcase real project work to build credibility

---

## 2. Design Philosophy

### 2.1 Visual Identity: Industrial-Modern Hybrid

**Core Concept:** Blend the clean professionalism of modern minimalism with technical industrial elements to convey both innovation and reliability.

**Primary Colors:**
- Modern Blue: `#2563eb` - Primary CTA, links, progress indicators
- Industrial Dark: `#1e293b` - Headers, technical panels, dark sections
- Slate Gray: `#334155`, `#475569`, `#64748b` - Supporting grays for hierarchy

**Accent Colors:**
- Amber: `#f59e0b` - Technical accents, warning states, industrial highlights
- Tech Green: `#10b981` - Success states, active indicators, positive metrics

**Background Palette:**
- White: `#ffffff` - Primary background
- Light Gray: `#f8f9fc`, `#f1f5f9` - Alternating sections
- Gradient Backgrounds: `linear-gradient(165deg, #ffffff 0%, #f8f9fc 50%, #eff2f9 100%)`

**Typography:**
- Primary: `DM Sans` (already in use) - Body text, UI elements
- Display: `Sora` (already in use) - Headers, hero titles
- Technical: `monospace` - Data displays, technical labels, breadcrumbs

**Industrial Elements:**
- Vertical accent lines (3-4px) with gradients (blue→amber, blue→green)
- Monospace labels for technical data
- Progress bars and metrics visualizations
- Subtle dashed borders for technical containers
- Badge indicators (AVAILABLE, POPULAR, ONLINE status dots)

**Modern Elements:**
- Clean white space and generous padding
- Subtle shadows for elevation (`0 2px 8px rgba(0,0,0,0.04)`)
- Rounded corners (6px buttons, 8px cards, 12-16px large containers)
- Smooth transitions (150ms, 300ms, 500ms)
- Backdrop blur effects for overlays

### 2.2 Interaction Principles

**Moderate Interactivity** (Level B from brainstorming):
- Fade-in animations when sections enter viewport
- Smooth parallax on hero background (subtle, 0.5 factor)
- Hover effects: card lift (translateY(-4px)), button shadow increase
- Real-time form validation with inline error messages
- Scroll progress tracking with visual indicator
- Smooth scroll to anchor sections (CSS `scroll-behavior: smooth`)

**No Heavy Frameworks:**
- No Framer Motion or heavy animation libraries
- Use CSS transitions, transforms, and keyframes
- JavaScript only for state management and DOM manipulation
- Intersection Observer API for scroll-triggered animations

---

## 3. Target Audience

**Primary:** Mixed B2B + Individual/Small Business Clients

**B2B Characteristics:**
- Industrial engineers, plant managers, technical directors
- Seeking: Reliability, technical expertise, proven results
- Decision drivers: Case studies, metrics, certifications, professional presentation

**Individual/Small Business Characteristics:**
- Small manufacturers, maintenance teams, startup founders
- Seeking: Accessible pricing, clear communication, approachable service
- Decision drivers: Clear product information, easy contact, transparent processes

**Design Implications:**
- Balance technical terminology with clear explanations
- Provide both detailed specs and simplified summaries
- Offer multiple contact methods (quote form, general contact, phone)
- Show both large enterprise projects and smaller solutions

---

## 4. Information Architecture

### 4.1 Page Structure (Single Page Scroll)

```
┌─────────────────────────────────────┐
│ IndustrialNavbar (sticky)           │ ← ALWAYS VISIBLE
│  - Logo + Nav Links                 │
│  - "Solicitar Cotización" CTA       │
│  - Progress Bar (3px)               │
│  - Breadcrumb (current section)     │
├─────────────────────────────────────┤
│ #inicio - Hero                      │
│  - Badge + Title + Tagline          │
│  - Metrics (150+ / 50+ / 10+)       │
│  - CTAs                             │
│  - Project Carousel                 │
├─────────────────────────────────────┤
│ TVAnnouncement                      │ ← MAINTAIN
│  - Ticker of partner brands         │
├─────────────────────────────────────┤
│ BrandMarquee                        │ ← MAINTAIN
│  - Carousel of logos                │
├─────────────────────────────────────┤
│ #servicios - Services               │ ← REDESIGN
│  - Section header                   │
│  - Service cards (2 cards)          │
│  - Features + stats per service     │
├─────────────────────────────────────┤
│ #productos - ProductShowcase        │ ← NEW
│  - Section header                   │
│  - Category filters                 │
│  - Product grid (3 cols)            │
│  - "Solicitar Cotización" per card  │
├─────────────────────────────────────┤
│ #portafolio - Portfolio             │ ← IMPROVE
│  - Section header                   │
│  - Case studies (electrónica)       │
│  - Case studies (software)          │
│  - Project metrics displayed        │
├─────────────────────────────────────┤
│ #clientes - ClientShowcase          │ ← NEW
│  - Section header                   │
│  - Client logos grid                │
│  - Testimonials (optional)          │
│  - Animated counter                 │
├─────────────────────────────────────┤
│ #contacto - ContactSection          │ ← NEW
│  - Section header                   │
│  - Contact form                     │
│  - Contact info + map               │
├─────────────────────────────────────┤
│ Footer                              │ ← IMPROVE
│  - 4 columns (Empresa / Servicios  │
│    / Contacto / Legal)              │
│  - Social links + Copyright         │
└─────────────────────────────────────┘

OVERLAY LAYER:
┌─────────────────────────────────────┐
│ QuoteModal (triggered)              │ ← NEW
│  - Product info                     │
│  - Form fields                      │
│  - Submit button                    │
└─────────────────────────────────────┘
```

### 4.2 Navigation Flow

**Primary Path (Linear Scroll):**
1. User lands on Hero → sees value proposition + project proof
2. Scrolls → learns about partner brands (TVAnnouncement, BrandMarquee)
3. Scrolls → understands service offerings (Services)
4. Scrolls → browses quotable products (ProductShowcase)
5. Scrolls → reviews case studies (Portfolio)
6. Scrolls → sees client testimonials (ClientShowcase)
7. Scrolls → contacts or quotes (ContactSection)

**Navigation Bar Path (Jump to Section):**
- User clicks nav link → smooth scroll to section
- Progress bar updates to show position
- Breadcrumb updates to show active section

**Quote Path (Conversion Funnel):**
1. User sees product in ProductShowcase
2. Clicks "Solicitar Cotización" button on product card
3. QuoteModal opens with product pre-selected
4. User fills form (Name, Company, Email, Phone, Quantity, Message)
5. Submits → confirmation + backend processing

**Alternative Contact Path:**
- Navbar "Solicitar Cotización" button → opens QuoteModal (no product pre-selected)
- ContactSection form → general inquiry (not quote-specific)

---

## 5. Component Specifications

### 5.1 IndustrialNavbar (NEW)

**File:** `src/components/layout/IndustrialNavbar/IndustrialNavbar.jsx`

**Purpose:** Persistent top navigation with scroll progress tracking and section awareness.

**Visual Design:**
- Background: `linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%)`
- Border bottom: `1px solid #e5e7eb`
- Box shadow: `0 2px 8px rgba(0,0,0,0.04)`
- Padding: `16px 48px`
- Layout: Flexbox, space-between

**Structure:**
```
┌────────────────────────────────────────────────────────────┐
│ [Accent Line] ELECTROSISTEMAS    Nav Links...    [CTA Btn] │
│ ──────────────────────────────────────────────────────────  │ ← Progress bar
│ ● SECCIÓN ACTIVA: INICIO                  PROGRESO: 20%   │ ← Breadcrumb
└────────────────────────────────────────────────────────────┘
```

**Left Section:**
- Vertical gradient line: 3px width, 32px height, gradient from amber to green
- Logo text: "ELECTRO" (dark) + "SISTEMAS" (blue)
- Font: Sora, 18px, bold

**Center Section (Nav Links):**
- Links: Inicio, Servicios, Productos, Clientes, Contacto
- Font: DM Sans, 13px, weight 500 (normal) / 600 (active)
- Color: `#64748b` (normal), `#2563eb` (active)
- Active indicator: 2px underline in `#2563eb`
- Gap: 32px between links

**Right Section:**
- Button: "Solicitar Cotización"
- Background: `#2563eb`
- Color: white
- Padding: `10px 20px`
- Border radius: 6px
- Font: DM Sans, 13px, weight 600
- Shadow: `0 2px 8px rgba(37, 99, 235, 0.2)`

**Progress Bar:**
- Height: 3px
- Background: `#e5e7eb`
- Fill: `linear-gradient(90deg, #2563eb, #f59e0b)`
- Width: Calculated from scroll position (0-100%)
- Transition: `width 0.3s ease`

**Breadcrumb Bar:**
- Background: `#f8f9fc`
- Border bottom: `1px solid #e5e7eb`
- Padding: `8px 48px`
- Font: monospace, 11px
- Layout:
  - Left: `● SECCIÓN ACTIVA: [SECTION_NAME]`
  - Right: `PROGRESO: [XX]%`
- Colors: Green dot `#10b981`, section name `#2563eb`, progress `#94a3b8`

**Behavior:**
- Sticky position (always at top)
- Backdrop blur when scrolled: `backdrop-filter: blur(10px)`
- useScrollProgress hook tracks:
  - % of page scrolled (for progress bar)
  - Current section in viewport (for breadcrumb + active link)
- Smooth scroll on nav link click

**Responsive:**
- Mobile (<768px): Hamburger menu, collapse nav links, keep CTA button

---

### 5.2 Hero (IMPROVED)

**File:** `src/components/sections/Hero/Hero.jsx`

**Purpose:** First impression section with value proposition, credibility metrics, and project showcase.

**Layout:** Two-column grid (1fr 1fr), gap 64px, max-width 1120px

**Left Column - Content:**

1. **Badge (Animated):**
   - Background: `rgba(37, 99, 235, 0.1)`
   - Border left: `3px solid #2563eb`
   - Padding: `8px 16px`
   - Layout: Flexbox with status dot + text
   - Status dot: 6px circle, `#10b981`, pulse animation (2s infinite)
   - Text: "INGENIERÍA & TECNOLOGÍA" (uppercase, 11px, letter-spacing 0.1em, `#2563eb`)

2. **Title:**
   - Font: Sora, 48px, weight 800
   - Line height: 1.1
   - Text: "ELECTRO" (dark `#1e293b`) + "SISTEMAS" (blue `#2563eb`)
   - Margin bottom: 16px

3. **Accent Line:**
   - Height: 3px
   - Width: 120px
   - Background: `linear-gradient(90deg, #2563eb, #f59e0b)`
   - Margin bottom: 20px

4. **Tagline:**
   - Font: DM Sans, 17px, line-height 1.7
   - Color: `#475569`
   - Text: "Soluciones integrales en **electrónica industrial** y **desarrollo de software** para la automatización inteligente de su operación."
   - Max width: 480px
   - Margin bottom: 32px

5. **Metrics Grid:**
   - Layout: 3 columns, gap 16px
   - Each metric card:
     - Background: `rgba(255,255,255,0.8)`
     - Border: `1px solid #e5e7eb`
     - Border radius: 8px
     - Padding: 12px
     - Text align: center
     - Number: monospace, 24px, weight 700, colored (blue/green/amber)
     - Label: 11px, uppercase, letter-spacing 0.05em, `#64748b`
   - Metrics:
     - **150+** Proyectos (blue)
     - **50+** Clientes (green)
     - **10+** Años (amber)

6. **CTA Buttons:**
   - Layout: Flexbox, gap 16px
   - Primary button:
     - Background: `#2563eb`
     - Color: white
     - Padding: `14px 28px`
     - Border radius: 8px
     - Font: 14px, weight 600
     - Shadow: `0 4px 12px rgba(37, 99, 235, 0.3)`
     - Hover: slight lift (translateY(-2px))
     - Text: "Solicitar Cotización"
   - Secondary button:
     - Background: transparent
     - Color: `#2563eb`
     - Border: `2px solid #2563eb`
     - Padding: `14px 28px`
     - Border radius: 8px
     - Font: 14px, weight 600
     - Hover: background `rgba(37, 99, 235, 0.05)`
     - Text: "Ver Servicios"

**Right Column - Project Carousel:**

Container styling:
- Background: white
- Border radius: 16px
- Padding: 24px
- Box shadow: `0 20px 60px rgba(0,0,0,0.1)`
- Border: `2px solid #e5e7eb`

**Carousel Header:**
- Layout: Flexbox, space-between
- Left:
  - Label: "Nuestros Proyectos" (uppercase, 12px, `#64748b`)
  - Title: "Trabajos Destacados" (18px, weight 700, `#1e293b`)
- Right:
  - Navigation buttons: Prev/Next arrows
  - Size: 32px circles
  - Border: `2px solid #e5e7eb` (inactive), `2px solid #2563eb` (active)
  - Background: white (inactive), `#2563eb` (active)

**Carousel Slide (per project):**

1. **Project Image Container:**
   - Height: 280px
   - Border radius: 12px
   - Background: Actual project photo or gradient placeholder
   - Position relative for overlays

2. **Category Badge (top-left overlay):**
   - Background: `rgba(37, 99, 235, 0.9)` with backdrop blur
   - Padding: `6px 12px`
   - Border radius: 6px
   - Font: 11px, weight 600, uppercase, white
   - Text: "ELECTRÓNICA" or "SOFTWARE"

3. **Slide Indicators (bottom-center overlay):**
   - Horizontal flexbox, gap 6px
   - Active: 24px width x 3px height, white
   - Inactive: 8px width x 3px height, `rgba(255,255,255,0.4)`

4. **Project Info (below image):**
   - Padding: 12px 0
   - Border bottom: `1px solid #e5e7eb`
   - Layout: Flexbox, space-between
   - Left:
     - Client name: 13px, weight 600, `#1e293b`
     - Sector: 12px, `#64748b`
   - Right:
     - "Resultado" label: 11px, `#64748b`
     - Metric: 14px, weight 700, `#10b981` (green for positive)
     - Example: "+35% Eficiencia"

5. **Project Tags:**
   - Flexbox, gap 6px, wrap
   - Each tag:
     - Background: `#eff6ff` (blue tags) or `#f0fdf4` (green tags)
     - Color: `#2563eb` or `#10b981`
     - Font: 11px, weight 500
     - Padding: `4px 10px`
     - Border radius: 4px
   - Examples: PLC, HMI, SCADA, Dashboard, IoT

**Data Structure for Projects:**
```javascript
{
  id: 'project-001',
  title: 'Tablero de Control Industrial',
  subtitle: 'Automatización Línea de Producción',
  client: 'Industrias XYZ',
  sector: 'Manufactura',
  category: 'electronica', // or 'software'
  result: {
    metric: '+35%',
    label: 'Eficiencia'
  },
  tags: ['PLC', 'HMI', 'SCADA'],
  image: '/images/projects/project-001.jpg' // or null for placeholder
}
```

**Carousel Behavior:**
- Auto-rotate every 5 seconds (pause on hover)
- Click prev/next to navigate manually
- Swipe gesture support on mobile
- Smooth CSS transitions (500ms)

**Responsive:**
- Mobile (<768px): Stack columns vertically, reduce title to 40px, metrics 2 columns

---

### 5.3 TVAnnouncement (MAINTAIN)

**File:** `src/components/sections/TVAnnouncement/TVAnnouncement.jsx`

**Status:** Keep as-is. Already functional ticker with brand message.

**No changes required.**

---

### 5.4 BrandMarquee (MAINTAIN)

**File:** `src/components/sections/BrandMarquee/BrandMarquee.jsx`

**Status:** Keep as-is. Existing carousel of partner brand logos (Siemens, Schneider, ABB, etc.).

**No changes required.**

---

### 5.5 Services (REDESIGN)

**File:** `src/components/sections/Services/Services.jsx`

**Purpose:** Showcase two main service categories (Electrónica, Software) with enhanced visual design.

**Section Header:**
- Label: "Lo que hacemos" (11px, uppercase, `#2563eb`, background `rgba(37, 99, 235, 0.1)`, padding 6px 12px, rounded)
- Title: "Servicios" (36px, weight 700, `#1e293b`)
- Centered alignment

**Services Grid:**
- Layout: 2 columns, gap 32px
- Max width: 1120px, centered

**Service Card (per service):**

Container:
- Background: white
- Border: `2px solid #e5e7eb`
- Border radius: 12px
- Padding: 32px
- Transition: all 0.3s
- Hover:
  - Border color: `#2563eb`
  - Transform: `translateY(-4px)`
  - Shadow: `0 12px 24px rgba(0,0,0,0.1)`

**Card Header:**
- Icon area: 56px circle
  - Background: gradient (`#2563eb` to `#1e40af` for Electrónica, `#10b981` to `#059669` for Software)
  - Icon: ⚡ for Electrónica, 💻 for Software (48px emoji or SVG)
- Title: Service name (20px, weight 700, `#1e293b`)
- Description: Existing description text (15px, line-height 1.6, `#64748b`)

**Metrics Section (NEW):**
- Label: "Estadísticas" (12px, uppercase, `#94a3b8`)
- Layout: 2 columns grid
- Each metric:
  - Number: 28px, weight 700, monospace, colored
  - Label: 11px, `#64748b`
- Example metrics:
  - Electrónica: "24 PLCs implementados", "98% uptime promedio"
  - Software: "18 apps desarrolladas", "15 integraciones API"

**Features List:**
- Maintain existing features from `data/constants.js`
- Style: Checkmark icons (blue) + text (14px, `#475569`)
- Layout: Vertical list, gap 8px

**CTA Button:**
- "Ver detalles" link
- Color: `#2563eb`
- Font: 14px, weight 600
- Underline on hover

**Animation:**
- Use `useInView` hook to trigger fade-in when card enters viewport
- Stagger animation: left card 0ms delay, right card 150ms delay

**Responsive:**
- Mobile (<768px): Single column layout

---

### 5.6 ProductShowcase (NEW)

**File:** `src/components/sections/ProductShowcase/ProductShowcase.jsx`

**Purpose:** Display quotable products with filtering and direct quote CTAs.

**Section Header:**
- Badge: "Catálogo" (same style as other sections)
- Title: "Productos & Soluciones" (36px, weight 700)
- Subtitle: "Seleccione un producto para solicitar cotización" (15px, `#64748b`)
- Centered alignment

**Category Filters:**
- Layout: Horizontal flexbox, centered, gap 12px
- Buttons:
  - Active: Background `#2563eb`, color white
  - Inactive: Background `#f1f5f9`, color `#64748b`
  - Padding: `8px 20px`
  - Border radius: 6px
  - Font: 13px, weight 500 (inactive) / 600 (active)
  - Cursor: pointer
  - Hover (inactive): Background `#e5e7eb`
- Categories: "Todos", "Electrónica", "Software", "Automatización"

**Product Grid:**
- Layout: 3 columns, gap 24px
- Max width: 1120px, centered
- Responsive: 2 cols at tablet, 1 col at mobile

**Product Card:**

Container:
- Background: white
- Border: `2px solid #e5e7eb`
- Border radius: 12px
- Overflow: hidden
- Transition: all 0.3s
- Hover:
  - Border color: `#2563eb`
  - Transform: `translateY(-4px)`
  - Shadow: `0 12px 32px rgba(0,0,0,0.12)`

**Card Image/Header:**
- Height: 180px
- Background: Gradient based on category
  - Electrónica: `linear-gradient(135deg, #1e293b, #334155)`
  - Software: `linear-gradient(135deg, #065f46, #047857)`
  - Automatización: `linear-gradient(135deg, #92400e, #b45309)`
- Padding: 40px 20px
- Text align: center
- Contains:
  - Icon/emoji: 48px size
  - Product code: 12px, monospace, light color

**Status Badge (top-right of image):**
- Position: absolute, top 10px, right 10px
- Background: `#10b981` (DISPONIBLE) or `#f59e0b` (POPULAR)
- Color: white
- Font: 10px, weight 600, uppercase
- Padding: `4px 8px`
- Border radius: 4px

**Card Body:**
- Padding: 20px

1. **Title:** Product name (16px, weight 600, `#1e293b`)
2. **Description:** Product description (13px, line-height 1.5, `#64748b`, max 2-3 lines)
3. **Tags:**
   - Flexbox, gap 6px, wrap
   - Each tag: background color-coded, 11px, padding `4px 8px`, rounded 4px
   - Examples: PLC, HMI, Software, Dashboard, IoT, Sensores
4. **CTA Button:**
   - "Solicitar Cotización"
   - Width: 100%
   - Background: Category color (`#2563eb`, `#10b981`, `#f59e0b`)
   - Color: white
   - Padding: `12px`
   - Border radius: 6px
   - Font: 13px, weight 600
   - Cursor: pointer
   - onClick: Opens QuoteModal with this product pre-selected

**Data Structure:**
```javascript
{
  id: 'plc-ctrl-01',
  code: 'PLC-CTRL-01',
  name: 'Sistema PLC Siemens S7-1200',
  description: 'Control programable para automatización industrial con interface HMI integrada.',
  category: 'electronica', // 'software', 'automatizacion'
  tags: ['PLC', 'HMI', 'Industrial'],
  icon: '⚡', // or SVG path
  status: 'available', // 'popular', null
  available: true
}
```

**Filtering Behavior:**
- State: `selectedCategory` (default: 'all')
- On button click: Update state, filter products array
- Filtered products re-render with fade-in animation (300ms)

**Animation:**
- Grid items fade-in on filter change
- Stagger: each card delays by (index * 50)ms

---

### 5.7 Portfolio (IMPROVE)

**File:** `src/components/sections/Portfolio/Portfolio.jsx`

**Purpose:** Showcase completed projects as case studies with results.

**Current State:** Two sections (Electrónica, Software) with carousel of project cards.

**Improvements:**

1. **Add project images:**
   - Each portfolio item should have an optional image
   - If no image: Use gradient placeholder with category icon
   - Image height: 200px, cover fit, border radius top

2. **Add result metrics:**
   - Each item displays a key result metric
   - Example: "+35% Eficiencia", "-20% Costos", "99.8% Uptime"
   - Font: 14px, weight 700, `#10b981`
   - Position: Below title, in badge format

3. **Enhanced card design:**
   - Current card + hover effect (lift 4px)
   - Border: `2px solid #e5e7eb`, hover `#2563eb`
   - Add "Ver caso de estudio" link at bottom (optional, can be placeholder)

4. **Keep carousel behavior:**
   - Maintain existing `Carousel` component
   - Keep color coding per category

**Updated Data Structure:**
```javascript
{
  id: 1,
  title: 'PLC Automatización Línea 3',
  category: 'Automatización',
  client: 'Industrias ABC', // NEW
  result: '+35% Eficiencia', // NEW
  image: '/images/portfolio/project-001.jpg', // NEW (optional)
  description: 'Sistema de control automatizado para línea de ensamble...' // NEW (optional)
}
```

**No major structural changes.** Keep existing carousel layout, enhance visual design and data.

---

### 5.8 ClientShowcase (NEW)

**File:** `src/components/sections/ClientShowcase/ClientShowcase.jsx`

**Purpose:** Display client logos and testimonials to build trust.

**Section Header:**
- Badge: "Confianza" (11px, uppercase, `#10b981` theme)
- Title: "Nuestros Clientes" (36px, weight 700)
- Subtitle: "Empresas que confían en nuestras soluciones" (15px, `#64748b`)

**Client Logos Grid:**
- Layout: Grid, 5-6 columns, gap 24px
- Each logo container:
  - Background: white
  - Border: `1px solid #e5e7eb`
  - Border radius: 8px
  - Padding: 24px
  - Height: 100px
  - Display: flex, center align
  - Grayscale filter (100%), transition to color on hover
  - Hover: Border color `#2563eb`, grayscale(0%)

**Logos:**
- Use actual client logos if available
- Fallback: Text placeholder with company initials
- Max width: 140px, height: auto
- Object fit: contain

**Animated Counter (Optional):**
- Above or below grid
- Format: "Más de **50** empresas confían en nosotros"
- Counter animates from 0 to 50 when section enters viewport
- Use Intersection Observer + setTimeout increments

**Testimonials Section (Optional Enhancement):**
- Below logos grid
- Layout: 2-3 column grid or carousel
- Each testimonial card:
  - Quote text: Italic, 15px, `#475569`
  - Author name: 14px, weight 600, `#1e293b`
  - Company: 13px, `#64748b`
  - Rating stars: 5 stars, `#f59e0b` fill
- Can be added in future iteration if testimonial data is available

**Data Structure:**
```javascript
// data/constants.js - CLIENTS
export const CLIENTS = [
  {
    id: 'client-001',
    name: 'Empresa ABC S.A.',
    logo: '/images/clients/abc-logo.svg', // or null
    sector: 'Manufactura'
  },
  // ... more clients
];

// Optional testimonials
export const TESTIMONIALS = [
  {
    id: 'test-001',
    client: 'Juan Pérez',
    company: 'Empresa ABC',
    position: 'Gerente de Planta',
    text: 'Excelente trabajo en la automatización de nuestra línea...',
    rating: 5
  }
];
```

**Responsive:**
- Mobile: 2-3 columns for logos, stack testimonials

---

### 5.9 ContactSection (NEW)

**File:** `src/components/sections/ContactSection/ContactSection.jsx`

**Purpose:** Provide contact form and company contact information.

**Layout:** Two-column grid (60% form, 40% info)

**Section Header:**
- Badge: "Hablemos" (11px, uppercase, `#2563eb`)
- Title: "Contáctenos" (36px, weight 700)
- Subtitle: "Estamos aquí para ayudarle" (15px, `#64748b`)

**Left Column - Contact Form:**

Container:
- Background: white
- Border: `2px solid #e5e7eb`
- Border radius: 12px
- Padding: 32px

**Form Fields:**
1. **Nombre completo** (required)
   - Label: 13px, weight 600, `#475569`
   - Input: Full width, padding 12px, border `2px solid #e5e7eb`, rounded 8px
   - Focus: Border color `#2563eb`
   - Error: Border color `#ef4444`, helper text below

2. **Email** (required)
   - Same styling as above
   - Validation: Email format

3. **Teléfono**
   - Same styling
   - Optional field

4. **Asunto**
   - Dropdown select or text input
   - Options: "Consulta general", "Soporte técnico", "Solicitud de cotización", "Otro"

5. **Mensaje** (required)
   - Textarea, rows 5
   - Same border/focus styling
   - Resize: vertical only

6. **Submit Button:**
   - "Enviar Mensaje"
   - Background: `#2563eb`
   - Color: white
   - Width: 100%
   - Padding: `14px`
   - Border radius: 8px
   - Font: 14px, weight 600
   - Shadow: `0 4px 12px rgba(37, 99, 235, 0.3)`
   - Disabled state: Opacity 0.6, cursor not-allowed
   - Loading state: Show spinner icon

**Form Behavior:**
- Use `useForm` custom hook for state management
- Real-time validation on blur
- Display inline errors below each field
- On submit: POST to backend endpoint or email service
- Success: Show confirmation message, clear form
- Error: Show error message, keep form data

**Right Column - Contact Info:**

**Contact Details Card:**
- Background: `#f8f9fc`
- Border radius: 12px
- Padding: 24px

Content blocks:
1. **Dirección:**
   - Icon: 📍
   - Text: Full address (multi-line)

2. **Teléfono:**
   - Icon: 📞
   - Text: Clickable tel: link

3. **Email:**
   - Icon: ✉️
   - Text: Clickable mailto: link

4. **Horarios:**
   - Icon: 🕐
   - Text: "Lunes a Viernes: 8:00 AM - 6:00 PM"

Styling:
- Each block: margin-bottom 16px
- Icon: 20px, left aligned
- Label: 12px, weight 600, uppercase, `#64748b`
- Value: 14px, `#1e293b`

**Map Embed (Optional):**
- Below contact info
- Embed Google Maps iframe or static map image
- Height: 200px
- Border radius: 8px
- Margin top: 24px

**Social Links:**
- Below map
- Icons: LinkedIn, Facebook, Instagram, Twitter (if applicable)
- Layout: Horizontal flexbox, gap 12px
- Each icon: 36px circle, border `2px solid #e5e7eb`, hover `#2563eb`

**Responsive:**
- Mobile: Stack columns, form first then info

---

### 5.10 Footer (IMPROVE)

**File:** `src/components/layout/Footer/Footer.jsx`

**Current State:** Basic footer with minimal content.

**New Design:**

**Container:**
- Background: `#1e293b` (dark industrial)
- Color: `rgba(255, 255, 255, 0.8)`
- Padding: `48px 48px 24px`

**Layout:** 4-column grid + bottom bar

**Columns:**

1. **Empresa**
   - Logo (white version)
   - Tagline: Short description (2 lines)
   - Social icons (horizontal, 32px each)

2. **Servicios**
   - Title: "Servicios" (14px, weight 600, white)
   - Links:
     - Electrónica Industrial
     - Desarrollo de Software
     - Automatización
     - Soporte Técnico
   - Link styling: 13px, `rgba(255,255,255,0.7)`, hover white + underline

3. **Contacto**
   - Title: "Contacto"
   - Info:
     - Dirección (short)
     - Teléfono
     - Email
   - Same styling as Servicios links

4. **Legal**
   - Title: "Legal"
   - Links:
     - Términos de Servicio
     - Política de Privacidad
     - Aviso Legal
   - Same styling

**Bottom Bar:**
- Border top: `1px solid rgba(255,255,255,0.1)`
- Padding top: 24px
- Layout: Flexbox, space-between
- Left: Copyright text "© 2026 Electrosistemas. Todos los derechos reservados."
- Right: "Hecho con ❤️ en [País]" (optional)
- Font: 12px, `rgba(255,255,255,0.6)`

**Responsive:**
- Tablet: 2x2 grid
- Mobile: Single column, stack all sections

---

### 5.11 QuoteModal (NEW)

**File:** `src/components/forms/QuoteForm/QuoteModal.jsx`

**Purpose:** Modal overlay for product quotation requests.

**Trigger:**
- Navbar "Solicitar Cotización" button
- Product card "Solicitar Cotización" button (with product pre-selected)

**Overlay:**
- Background: `rgba(0, 0, 0, 0.5)`
- Backdrop blur: 4px
- Z-index: 1000
- Click outside to close (optional: require explicit close button)

**Modal Container:**
- Background: white
- Border radius: 16px
- Padding: 40px
- Max width: 500px
- Box shadow: `0 20px 60px rgba(0,0,0,0.3)`
- Centered on screen (position fixed, transform translate)

**Modal Header:**
- Layout: Flexbox, space-between
- Title: "Solicitar Cotización" (24px, weight 700, `#1e293b`)
- Close button: × (24px, `#94a3b8`, hover `#1e293b`, cursor pointer)

**Product Info Badge (if product pre-selected):**
- Background: `#f8f9fc`
- Border left: `3px solid #2563eb`
- Padding: `12px 16px`
- Border radius: 4px
- Margin bottom: 24px
- Content:
  - Label: "Producto seleccionado" (12px, `#64748b`)
  - Product name: (14px, weight 600, `#1e293b`)

**Form Fields:**

1. **Nombre completo*** (required)
   - Placeholder: "Juan Pérez"

2. **Empresa**
   - Placeholder: "Mi Empresa S.A."
   - Optional

3. **Email*** (required)
   - Placeholder: "email@empresa.com"
   - Validation: Email format

4. **Teléfono*** (required)
   - Placeholder: "+1 234 567 890"

5. **Producto** (if not pre-selected)
   - Dropdown select
   - Options: All products from `data/products.js`

6. **Cantidad estimada**
   - Number input, min 1
   - Placeholder: "1"
   - Optional

7. **Mensaje adicional**
   - Textarea, rows 3
   - Placeholder: "Detalles de su requerimiento..."
   - Optional

**Field Styling:**
- Label: 13px, weight 600, `#475569`, margin-bottom 6px
- Input/Textarea:
  - Width: 100%
  - Padding: 12px
  - Border: `2px solid #e5e7eb`
  - Border radius: 8px
  - Font: 14px
  - Box sizing: border-box
  - Focus: Border color `#2563eb`, outline none
  - Error: Border color `#ef4444`

**Submit Button:**
- Text: "Enviar Solicitud"
- Width: 100%
- Background: `#2563eb`
- Color: white
- Padding: `14px`
- Border radius: 8px
- Font: 14px, weight 600
- Shadow: `0 4px 12px rgba(37, 99, 235, 0.3)`
- Cursor: pointer
- Disabled: Opacity 0.6, cursor not-allowed
- Loading: Show spinner, disable button

**Helper Text:**
- Below button
- "Nos comunicaremos contigo en menos de 24 horas"
- Font: 12px, `#94a3b8`, center aligned

**Form Behavior:**
- Use `useForm` hook for validation
- Required fields validated on blur and submit
- Email format validation
- Phone format validation (optional)
- On submit:
  - Validate all fields
  - POST to backend endpoint (e.g., `/api/quotes`)
  - Payload: { name, company, email, phone, product_id, quantity, message }
  - Success: Show confirmation message, close modal after 2s
  - Error: Show error message, keep form open

**Success State:**
- Replace form content with:
  - ✅ Icon (48px, green)
  - Message: "¡Solicitud enviada con éxito!"
  - Subtext: "Nos pondremos en contacto pronto."
  - Auto-close after 2 seconds

**Responsive:**
- Mobile: Max width 90vw, padding 24px, font sizes slightly smaller

---

## 6. Shared Components

### 6.1 Button Component

**File:** `src/components/shared/Button/Button.jsx`

**Purpose:** Reusable button with consistent styling.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean
- `loading`: boolean (shows spinner)
- `onClick`: function
- `children`: button text/content
- `type`: 'button' | 'submit' (default: 'button')

**Variants:**
- **Primary:** Blue background, white text, shadow
- **Secondary:** Amber background, white text, shadow
- **Outline:** Transparent background, blue border, blue text

**Sizes:**
- Small: padding `10px 20px`, font 13px
- Medium: padding `14px 28px`, font 14px
- Large: padding `16px 32px`, font 15px

---

### 6.2 Card Component

**File:** `src/components/shared/Card/Card.jsx`

**Purpose:** Reusable card container.

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined'
- `hoverable`: boolean (adds lift effect)
- `padding`: 'small' | 'medium' | 'large'
- `children`: card content

**Styling:**
- Border radius: 12px
- Border: `2px solid #e5e7eb` (outlined variant)
- Shadow: varies by variant
- Hover: translateY(-4px) if hoverable

---

### 6.3 Input Component

**File:** `src/components/shared/Input/Input.jsx`

**Purpose:** Reusable form input.

**Props:**
- `type`: 'text' | 'email' | 'tel' | 'number' | 'password'
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `onBlur`: function
- `error`: string (error message)
- `required`: boolean
- `disabled`: boolean

**Styling:**
- Label above input
- Input border `2px solid #e5e7eb`
- Focus border `#2563eb`
- Error border `#ef4444` + red text below
- Disabled: opacity 0.6, cursor not-allowed

---

### 6.4 Modal Component

**File:** `src/components/shared/Modal/Modal.jsx`

**Purpose:** Reusable modal overlay container.

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `children`: modal content
- `maxWidth`: string (default: '500px')
- `closeOnOverlayClick`: boolean (default: true)

**Behavior:**
- Renders portal to document.body
- Traps focus within modal when open
- ESC key closes modal
- Body scroll locked when open

---

## 7. Custom Hooks

### 7.1 useScrollProgress

**File:** `src/hooks/useScrollProgress.js`

**Purpose:** Track scroll position and active section.

**Returns:**
```javascript
{
  scrollProgress: number, // 0-100 (% of page scrolled)
  activeSection: string   // ID of section currently in viewport
}
```

**Implementation:**
- Listen to window scroll event (throttled)
- Calculate: (scrollY / (scrollHeight - clientHeight)) * 100
- Use Intersection Observer to detect which section is in viewport
- Section is "active" when 50% of it is visible

**Usage in IndustrialNavbar:**
- Update progress bar width
- Highlight active nav link
- Update breadcrumb text

---

### 7.2 useInView

**File:** `src/hooks/useInView.js`

**Purpose:** Detect when element enters viewport for animations.

**Parameters:**
- `options`: IntersectionObserver options (threshold, rootMargin)

**Returns:**
```javascript
{
  ref: React.RefObject,  // Attach to target element
  inView: boolean        // True when element in viewport
}
```

**Implementation:**
- Use Intersection Observer API
- Set threshold (default: 0.2 = 20% visible)
- Return ref to attach to target element
- Return boolean indicating visibility

**Usage in Services, Products, Portfolio:**
- Attach ref to container
- Add CSS class when inView is true
- CSS class triggers fade-in animation

---

### 7.3 useForm

**File:** `src/hooks/useForm.js`

**Purpose:** Manage form state and validation.

**Parameters:**
- `initialValues`: object with field names and initial values
- `validationRules`: object with field names and validation functions

**Returns:**
```javascript
{
  values: object,           // Current field values
  errors: object,           // Error messages per field
  touched: object,          // Which fields have been blurred
  handleChange: function,   // Update field value
  handleBlur: function,     // Mark field as touched, validate
  handleSubmit: function,   // Validate all fields, call onSubmit if valid
  resetForm: function       // Reset to initial values
}
```

**Validation Rules Example:**
```javascript
{
  email: (value) => {
    if (!value) return 'Email es requerido';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Email inválido';
    return null; // No error
  }
}
```

**Usage in QuoteModal and ContactForm:**
- Initialize hook with form fields
- Bind handleChange to inputs
- Bind handleBlur to inputs
- Bind handleSubmit to form onSubmit
- Display errors where `touched[field] && errors[field]`

---

## 8. Data Structure

### 8.1 Products Data

**File:** `src/data/products.js`

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
    status: 'available', // 'popular' | null
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
  }
  // Add 6-9 more products for a full grid
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'electronica', label: 'Electrónica' },
  { id: 'software', label: 'Software' },
  { id: 'automatizacion', label: 'Automatización' }
];
```

---

### 8.2 Projects Data (Hero Carousel)

**File:** `src/data/projects.js`

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
    image: '/images/projects/project-001.jpg' // or null
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
    image: null // Will use gradient placeholder
  }
  // Add 2-4 more projects for carousel
];
```

---

### 8.3 Constants Updates

**File:** `src/data/constants.js` (EXPAND EXISTING)

**Add:**

```javascript
// Existing: BRANDS, SERVICES, PORTFOLIO_ITEMS, COLORS

// NEW: Client logos
export const CLIENTS = [
  {
    id: 'client-001',
    name: 'Empresa ABC S.A.',
    logo: '/images/clients/abc-logo.svg', // or null
    sector: 'Manufactura'
  },
  {
    id: 'client-002',
    name: 'Industrias XYZ',
    logo: '/images/clients/xyz-logo.svg',
    sector: 'Manufactura'
  }
  // Add 8-12 more clients for grid
];

// NEW: Testimonials (optional)
export const TESTIMONIALS = [
  {
    id: 'test-001',
    client: 'Juan Pérez',
    company: 'Empresa ABC',
    position: 'Gerente de Planta',
    text: 'Excelente trabajo en la automatización de nuestra línea de producción. El equipo de Electrosistemas demostró gran profesionalismo y conocimiento técnico.',
    rating: 5
  }
  // Add 2-3 more testimonials
];

// NEW: Contact information
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

// NEW: Service statistics (for Services section)
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

---

## 9. Styling System

### 9.1 Design Tokens (CSS Variables)

**File:** `src/styles/tokens.css`

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

**Usage:**
```css
/* In component CSS modules */
.button {
  background: var(--color-primary);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}
```

---

### 9.2 Animation Keyframes

**File:** `src/styles/animations.css`

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

---

## 10. Implementation Approach

### 10.1 Phase 1: Foundation (Days 1-2)

**Tasks:**
1. Create design tokens (`src/styles/tokens.css`)
2. Create animation keyframes (`src/styles/animations.css`)
3. Create shared components:
   - Button
   - Card
   - Input
   - Modal
4. Create custom hooks:
   - useScrollProgress
   - useInView
   - useForm
5. Create data files:
   - `src/data/products.js`
   - `src/data/projects.js`
   - Expand `src/data/constants.js`

**Testing:** Verify tokens load correctly, test hooks in isolation, test shared components with Storybook or simple test pages.

---

### 10.2 Phase 2: Layout Components (Days 3-4)

**Tasks:**
1. Build IndustrialNavbar
   - Implement scroll progress tracking
   - Implement section detection
   - Test sticky behavior
2. Improve Hero
   - Add project carousel
   - Integrate metrics
   - Add CTAs
3. Improve Footer
   - 4-column layout
   - Social links
   - Copyright

**Testing:** Test navbar scroll behavior, test carousel navigation, verify responsive layouts.

---

### 10.3 Phase 3: Section Components (Days 5-7)

**Tasks:**
1. Redesign Services section
   - Add statistics
   - Add hover effects
   - Integrate useInView animations
2. Build ProductShowcase
   - Product grid
   - Category filters
   - Quote button integration
3. Improve Portfolio
   - Add images
   - Add metrics
   - Enhance cards
4. Build ClientShowcase
   - Logo grid
   - Testimonials (optional)
   - Animated counter

**Testing:** Test filtering logic, test animations on scroll, verify product data displays correctly.

---

### 10.4 Phase 4: Forms & Interactivity (Days 8-9)

**Tasks:**
1. Build QuoteModal
   - Form layout
   - Validation with useForm
   - Submit logic (integrate with backend endpoint)
2. Build ContactSection
   - Contact form
   - Contact info display
   - Map embed (optional)
3. Wire up all CTA buttons to open QuoteModal
4. Implement smooth scroll for nav links

**Testing:** Test form validation (all fields), test submit flow, test error handling, test modal open/close.

---

### 10.5 Phase 5: Polish & Optimization (Days 10-11)

**Tasks:**
1. Add all scroll animations
2. Optimize images (lazy loading, WebP format)
3. Test responsive layouts on all breakpoints
4. Accessibility audit:
   - Keyboard navigation
   - ARIA labels
   - Focus states
   - Color contrast
5. Performance optimization:
   - Code splitting
   - Bundle size analysis
   - Lighthouse audit
6. Cross-browser testing (Chrome, Firefox, Safari, Edge)

**Testing:** Full QA pass, user testing, performance benchmarks.

---

### 10.6 Phase 6: Content & Deployment (Day 12)

**Tasks:**
1. Replace placeholder content with real data:
   - Product descriptions
   - Project photos
   - Client logos
   - Contact information
2. SEO optimization:
   - Meta tags
   - Structured data
   - Alt text for images
3. Deploy to production
4. Monitor analytics and user feedback

---

## 11. Technical Dependencies

### 11.1 Existing Dependencies (Keep)
- React 19.2.4
- React DOM 19.2.4
- Vite 8.0.1
- ESLint + plugins

### 11.2 New Dependencies (Add)

**Required:**
None! We're implementing everything with vanilla React and CSS to avoid bloat.

**Optional (Nice to Have):**
- `react-intersection-observer` (v9.x) - Helper for Intersection Observer (can implement manually)
- `react-modal` (v3.x) - Accessible modal primitives (can implement manually)

**Recommendation:** Start without new dependencies. Only add if manual implementation becomes too complex.

---

## 12. Backend Integration

### 12.1 API Endpoints

**Quote Submission:**
```
POST /api/quotes
Content-Type: application/json

Body:
{
  "name": "Juan Pérez",
  "company": "Mi Empresa S.A.",
  "email": "juan@empresa.com",
  "phone": "+1234567890",
  "product_id": "plc-ctrl-01",
  "quantity": 2,
  "message": "Necesito cotización urgente..."
}

Response:
{
  "success": true,
  "quote_id": "Q-2026-001",
  "message": "Cotización recibida. Nos contactaremos pronto."
}
```

**Contact Form Submission:**
```
POST /api/contact
Content-Type: application/json

Body:
{
  "name": "María González",
  "email": "maria@email.com",
  "phone": "+1234567890",
  "subject": "Consulta general",
  "message": "Me gustaría más información sobre..."
}

Response:
{
  "success": true,
  "message": "Mensaje recibido. Gracias por contactarnos."
}
```

**Alternative (No Backend):**
Use email service like Formspree, EmailJS, or Netlify Forms for initial deployment.

---

## 13. Success Metrics

### 13.1 User Experience Metrics
- **Page Load Time:** < 2 seconds (Lighthouse)
- **Time to Interactive:** < 3 seconds
- **First Contentful Paint:** < 1.5 seconds
- **Cumulative Layout Shift:** < 0.1

### 13.2 Business Metrics
- **Quote Form Submissions:** Track conversion rate
- **Contact Form Submissions:** Track inquiries
- **Scroll Depth:** % of users reaching Products section
- **Product Engagement:** Clicks on "Solicitar Cotización"
- **Carousel Interaction:** Swipes/clicks on project carousel

### 13.3 Accessibility Metrics
- **WCAG 2.1 Level AA** compliance
- **Lighthouse Accessibility Score:** > 95
- **Keyboard Navigation:** 100% of interactive elements
- **Screen Reader Compatibility:** Tested with NVDA/JAWS

---

## 14. Future Enhancements (Out of Scope for v1)

**Phase 2 Features:**
1. Multi-language support (English/Spanish toggle)
2. Dark mode toggle
3. Client portal (login area for existing clients)
4. Blog/news section
5. Product comparison tool
6. Live chat integration
7. Advanced filtering (price ranges, technical specs)
8. Downloadable product catalogs (PDF)
9. Video testimonials
10. 3D product visualizations

**Technical Debt to Address Later:**
1. Migrate to TypeScript for type safety
2. Add Storybook for component documentation
3. Add unit tests (Jest + React Testing Library)
4. Add E2E tests (Playwright or Cypress)
5. Implement i18n library (react-i18next)
6. Add analytics dashboard

---

## 15. Notes and Decisions

### 15.1 Why Hybrid Pragmatic Approach?
- **Speed to Market:** Reusing working components saves 30-40% dev time
- **Lower Risk:** Incremental changes easier to test and debug
- **Budget Friendly:** No need to rebuild everything from scratch
- **Flexibility:** New components use modern patterns, easy to refactor old ones later

### 15.2 Why No Heavy Frameworks?
- **Performance:** Lighter bundle size (<100KB gzipped)
- **Control:** Full control over animations and interactions
- **Simplicity:** Easier to maintain and modify
- **Learning Curve:** Team can easily understand vanilla CSS and React

### 15.3 Design Rationale: Industrial-Modern Hybrid
- **Target Audience:** Appeals to both technical (industrial aesthetic) and non-technical (modern clean UX) users
- **Differentiation:** Unique in the market - most competitors are either too corporate or too generic
- **Scalability:** Visual system can grow with brand (add more technical elements or more modern polish as needed)

### 15.4 Content Strategy
- **Real Projects:** Showing actual work builds trust faster than stock photos
- **Metrics-Driven:** Every claim backed by a number (150+ projects, +35% efficiency)
- **Clear CTAs:** Multiple paths to conversion (quote modal, contact form, phone)
- **Accessibility:** Content written for both experts and beginners

---

## 16. Appendix

### 16.1 Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Modern Blue | #2563eb | Primary buttons, links, active states |
| Blue Dark | #1e40af | Button hover states |
| Industrial Dark | #1e293b | Headers, dark sections, footer |
| Slate Gray | #475569 | Body text secondary |
| Muted Gray | #64748b | Labels, captions |
| Light Gray | #94a3b8 | Disabled text, breadcrumb |
| Accent Amber | #f59e0b | Technical highlights, warnings |
| Accent Green | #10b981 | Success states, positive metrics |
| Background Light | #f8f9fc | Alternating sections |
| Border Light | #e5e7eb | Card borders, dividers |
| Error Red | #ef4444 | Form errors |

### 16.2 Typography Scale

| Size | px | rem | Usage |
|------|----|----|-------|
| xs | 11 | 0.6875 | Breadcrumbs, badges |
| sm | 13 | 0.8125 | Nav links, buttons, labels |
| base | 14 | 0.875 | Body text, form inputs |
| lg | 15 | 0.9375 | Large body text |
| xl | 17 | 1.0625 | Hero tagline |
| 2xl | 20 | 1.25 | Card titles |
| 3xl | 24 | 1.5 | Modal titles |
| 4xl | 36 | 2.25 | Section titles |
| 5xl | 48 | 3 | Hero title |

### 16.3 Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|-----------|-------|----------------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1024px | Tablets, small laptops |
| Desktop | 1024px - 1440px | Standard monitors |
| Large | > 1440px | Large monitors |

---

## 17. Sign-Off

**Design Approved By:** User (2026-04-21)

**Implementation Start Date:** TBD

**Estimated Completion:** 12 working days from start

**Next Steps:**
1. Review and approve this specification document
2. Set up development environment
3. Create implementation plan with detailed task breakdown
4. Begin Phase 1: Foundation

---

**End of Specification Document**