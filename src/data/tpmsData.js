export const tpmsData = {
  company: {
    name: "Shroti Telecom Pvt. Ltd.",
    product: "TPMS",
    fullName: "Theft Prevention Management System",
    description: "Smart IoT-based Security & Monitoring Platform for Telecom Infrastructure"
  },
  stats: [
    { label: "Total Sites", value: "21,976", icon: "Server" },
    { label: "Active Sites", value: "20,215", icon: "Activity" },
    { label: "Non-Communication Sites", value: "1,760", icon: "WifiOff" }
  ],
  products: [
    {
      name: "TPMS Edge Controller",
      category: "Main Controller",
      description: "Industrial-grade IoT gateway with RL78 Processor, 48V DC, GSM/4G/RS485.",
      image: "/images/tpms-device.png"
    },
    {
      name: "Weatherproof Enclosure",
      category: "Protective Case",
      description: "Rugged IP-rated outdoor enclosure ensuring the safety of TPMS units in harsh climates.",
      image: "/images/tpms-outside.jpg"
    },
    {
      name: "Smoke & Fire Detector",
      category: "Safety Sensor",
      description: "Early warning photoelectric smoke detection system for instant fire alerts.",
      image: "/images/fire-smoke-sensor.jpg"
    }
  ],
  alarms: {
    theft: [
      "Battery Bank Disconnect",
      "BTS Cabinet Open",
      "RRU Disconnect",
      "Solar Panel Theft",
      "TPMS Cover Open",
      "Door Open",
      "Motion Detection"
    ],
    system: [
      "EB Fail",
      "DG Fail",
      "DG On Load",
      "Site on Battery",
      "Battery Low Voltage",
      "Rectifier Fail",
      "Fire & Smoke Alert",
      "System Tampering"
    ],
    features: [
      "Dynamic Configuration",
      "WhatsApp Alerts",
      "Robo Call Alerts",
      "Multi-level escalation"
    ]
  },
  features: [
    { title: "Theft Detection", icon: "ShieldAlert" },
    { title: "Real-Time Monitoring", icon: "Activity" },
    { title: "Energy Monitoring", icon: "Zap" },
    { title: "Automation", icon: "Settings" },
    { title: "WhatsApp Alerts", icon: "MessageCircle" },
    { title: "Voice Alerts", icon: "Mic" },
    { title: "Self Health Monitoring", icon: "HeartPulse" }
  ],
  architecture: [
    { layer: "L1", name: "Field Layer", desc: "Sensors & Detectors", icon: "Radio" },
    { layer: "L2", name: "Control Layer", desc: "TPMS Controller", icon: "Cpu" },
    { layer: "L3", name: "Communication Layer", desc: "GSM / 4G / RS485", icon: "Wifi" },
    { layer: "L4", name: "Cloud Layer", desc: "Data Processing", icon: "Cloud" },
    { layer: "L5", name: "Monitoring Layer", desc: "SOC Dashboard", icon: "Monitor" }
  ],
  hardware: [
    "RL78 Processor",
    "48V DC Supply",
    "24 hr Backup",
    "16 Alarm Ports",
    "GSM / 4G / RS485",
    "125 dB Hooter"
  ],
  energy: [
    "EB / DG / Battery Run Hours",
    "KWH Monitoring",
    "Daily / Monthly Reports",
    "Diesel theft detection"
  ],
  soc: [
    "24x7 monitoring",
    "Live alarm tracking",
    "Instant escalation"
  ],
  clients: [
    "Tata Communication",
    "Tower Vision",
    "Unity Digital",
    "Vodafone",
    "Genius Tele Infra",
    "Husk Power",
    "Indus Towers",
    "Cloud Extel",
    "Crest Digitel",
    "Airtel"
  ],
  achievements: [
    { title: "30,000+", desc: "Sites Deployed" },
    { title: "16,000+", desc: "Telecom Towers" },
    { title: "452+", desc: "Battery Banks Saved" },
    { title: "2000+", desc: "Apec Reason" }
  ]
};
