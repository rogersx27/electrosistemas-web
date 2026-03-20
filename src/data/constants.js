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
