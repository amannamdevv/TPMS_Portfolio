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
      image: "./images/tpms-device.png"
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
    { title: "2000+", desc: "APEC Region" }
  ],
  aboutShroti: "At Shroti Telecom, we take pride in offering cutting-edge solutions to safeguard the active and passive assets of the telecommunications industry. Our flagship product, TPMS (Theft Prevention Management System), has been at the forefront of protecting valuable assets for the past 8 years, consistently proving its efficacy and reliability.",
  detailedIntro: "TPMS is an advanced security solution designed specifically for the telecom sector to combat the rising challenges of theft and unauthorized access to assets. Whether it's equipment, infrastructure, or sensitive data, TPMS provides comprehensive protection to ensure the integrity and security of your assets.",
  detailedFeatures: [
    {
      title: "1. Proactive Theft Prevention",
      description: "TPMS employs state-of-the-art technology to proactively detect and prevent theft attempts, minimizing the risk of downtime and disruption to operations."
    },
    {
      title: "2. Comprehensive Asset Protection",
      description: "From active equipment like base stations and routers to passive infrastructure such as cables and towers, TPMS offers robust protection for all types of critical assets in telecom operations."
    },
    {
      title: "3. Real-time Monitoring and Alerts",
      description: "With TPMS, you can monitor your assets in real-time and receive instant alerts in case of any suspicious activity or unauthorized access, enabling swift response and mitigation of risks."
    },
    {
      title: "4. Customized Security Solutions",
      description: "We understand that every telecom environment is unique. That's why TPMS offers customizable security configurations tailored to your specific needs and requirements, ensuring optimal protection without unnecessary complexity."
    },
    {
      title: "5. Trusted by Industry Leaders",
      description: "TPMS has earned the trust of industry leaders, including ATC, Indus, and Airtel, who have chosen our solution to safeguard their critical assets. Our track record of successful implementations and satisfied customers speaks volumes about the reliability and effectiveness of TPMS."
    }
  ],
  whyChooseTPMS: [
    {
      title: "1. Proven Performance",
      description: "With 8 years of successful operation and numerous satisfied customers, TPMS has consistently delivered results, protecting assets and minimizing losses."
    },
    {
      title: "2. Industry Expertise",
      description: "Backed by our team of telecom industry experts, TPMS is built to address the unique security challenges faced by telecom operators, ensuring robust protection and peace of mind."
    },
    {
      title: "3. Scalability and Flexibility",
      description: "Whether you operate a small local network or a nationwide infrastructure, TPMS can scale seamlessly to meet your evolving security needs, offering flexibility and versatility without compromising on performance."
    }
  ],
  getStartedQuote: "Protect your telecom assets with the industry-leading security solution – TPMS from Shroti Telecom. Join the ranks of satisfied customers and experience peace of mind knowing that your assets are safeguarded against theft and unauthorized access.",
  keyBenefits: [
    "Real-time site status updates",
    "Theft and operation alarms",
    "Detailed alarm reports",
    "Energy consumption analysis",
    "Run hour monitoring"
  ],
  detailedFeatures: [
    { title: "Proactive Theft Prevention", description: "TPMS employs state-of-the-art technology to proactively detect and prevent theft attempts, minimizing the risk of asset loss and disruption to operations." },
    { title: "Comprehensive Asset Protection", description: "From critical equipment like smart meters and routers, to passive infrastructure such as cables and towers, TPMS offers holistic protection for all types of assets crucial to telecom operations." },
    { title: "Real-time Monitoring and Alerts", description: "With TPMS, you can monitor your assets in real-time and receive instant alerts in case of any suspicious activity or unauthorized access, enabling swift intervention and mitigation of risks." },
    { title: "Customized Security Solutions", description: "We understand that every telecom environment is unique. That's why TPMS offers customizable security configurations tailored to your specific needs and requirements, ensuring optimal protection without unnecessary complexity." },
    { title: "Trusted by Industry Leaders", description: "TPMS has earned the trust of industry leaders, including ATC, Indus, and Airtel, who have chosen our solution to safeguard their critical assets." }
  ],
  whyChooseTPMS: [
    { title: "Proven Performance", description: "With years of successful operation and numerous satisfied customers, TPMS has consistently delivered results, protecting assets and minimizing losses." },
    { title: "Industry Expertise", description: "Backed by our team of telecom industry experts, TPMS is built to address the unique security challenges faced by telecom operators." },
    { title: "Scalability and Flexibility", description: "Whether you operate a small local network or a nationwide infrastructure, TPMS can scale seamlessly to meet your evolving security needs." }
  ]
};
