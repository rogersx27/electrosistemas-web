// ─── Brand Data ───
export const BRANDS = [
  "Siemens", "Schneider", "ABB", "Allen-Bradley", "Omron", "Mitsubishi"
];

// ─── Services Data ───
export const SERVICES = [
  {
    id: "electronica",
    title: "Electrónica",
    description:
      "Diseño, mantenimiento y reparación de sistemas electrónicos industriales. Automatización de procesos, control de potencia y soluciones a medida.",
    features: [
      "Automatización industrial",
      "Control de procesos",
      "Mantenimiento preventivo",
      "Diseño de circuitos"
    ]
  },
  {
    id: "software",
    title: "Software",
    description:
      "Desarrollo de soluciones de software para monitoreo, control y gestión de sistemas electrónicos. Interfaces intuitivas y arquitecturas escalables.",
    features: [
      "Sistemas SCADA",
      "Aplicaciones IoT",
      "Dashboards en tiempo real",
      "Integración de APIs"
    ]
  }
];

// ─── Portfolio Data ───
export const PORTFOLIO_ITEMS = {
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

// ─── Theme Colors ───
export const COLORS = {
  primary: "#0F3460",
  secondary: "#1A7A5C",
  text: {
    primary: "#1A1D23",
    secondary: "#4A5568",
    muted: "#7B8AA0"
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F7F8FA",
    tertiary: "#FAFBFC"
  }
};

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
