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
