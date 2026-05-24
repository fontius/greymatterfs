export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;

export const serviceItems = {
  fire: [
    {
      title: "Point Detection Systems",
      description:
        "The most common fire detection, forming the foundation of many installations. Analogue Addressable systems report to a central panel, offering a single point of reference. We provide a wide range of choices to meet diverse budgetary and technical needs.",
      icon: "Flame",
      certs: ["BS 5839-1:2013"],
    },
    {
      title: "Air Sampling Systems",
      description:
        "Highly sensitive systems using aspirating technology to draw air through pipes for smoke analysis. Ideal for early warning in critical areas like computer rooms and ducting, or high, hard-to-access locations.",
      icon: "Wind",
      certs: ["BS 5839-1:2013"],
    },
    {
      title: "Gas Suppression Systems",
      description:
        "Combines point detection with a mechanical system that automatically discharges a gaseous agent to extinguish fires. Primarily used for protecting computer rooms and areas with financially valuable or business-critical assets.",
      icon: "Shield",
      certs: ["BS 5839-1:2013", "ISO 14520"],
    },
    {
      title: "Wire-Free Detection",
      description:
        "A flexible alternative to traditional wired systems, minimizing disruption and installation time. Ideal for retrofits, listed buildings, and temporary setups, offering advanced detection without damaging building fabric.",
      icon: "Radio",
      certs: ["BS 5839-1:2013"],
    },
  ],
  security: [
    {
      title: "Advanced Access Control",
      description:
        "Secure your premises and manage access effectively. We offer biometric, smart card, and keypad solutions for single or multi-door systems, enabling tailored access levels and real-time tracking for enhanced safety and control.",
      icon: "Lock",
      certs: ["NSI Gold"],
    },
    {
      title: "Modern CCTV Surveillance",
      description:
        "Monitor your property in real-time and record incidents with crystal-clear digital CCTV. Our user-friendly systems offer remote viewing via broadband or mobile, providing peace of mind and crucial evidence when needed.",
      icon: "Eye",
      certs: ["NSI Gold", "GDPR"],
    },
  ],
} as const;