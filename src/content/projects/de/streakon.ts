import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn ist eine Plattform für Habit-Tracking und soziale Verbindlichkeit, die Nutzer:innen durch gemeinsamen Fortschritt und sinnvolle Interaktionen zu mehr Beständigkeit verhilft.",
  caseStudy: {
    category: "Web- & Mobile-Anwendung",
    heroImage: streakon0,
    meta: {
      duration: "3 Wochen",
      role: "Full-Stack-Entwickler",
      teamSize: "2 Entwickler",
      year: "2024",
    },
    overview:
      "Das Projekt konzentriert sich auf den Aufbau einer zuverlässigen und skalierbaren Anwendung, die positive tägliche Gewohnheiten durch gemeinsame Erlebnisse fördert.<br/><br/>Es bietet ein reibungsloses, ansprechendes Erlebnis auf Web- und Mobilplattformen.",
    contributions: [
      "Durchgängige Systemarchitektur entworfen und umgesetzt",
      "Benutzeroberflächen mit Fokus auf Usability entwickelt",
      "RESTful-APIs und Datenbankintegrationen gebaut",
      "Deployment- und Produktionsumgebungen verwaltet",
      "Performance-Optimierung und Codequalität sichergestellt",
      "Bei Planung und technischen Entscheidungen mitgewirkt",
    ],
    tech: [
      { name: "Next.js", icon: "next", featured: true },
      { name: "Node.js", icon: "node", featured: true },
      { name: "PostgreSQL", icon: "postgresql", featured: true },
      { name: "Redis", icon: "redis", featured: true },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vercel", icon: "vercel" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Planung",
        description: "Anforderungen analysiert sowie Umfang & Zeitplan definiert",
      },
      {
        icon: "design",
        title: "Design",
        description: "Systemablauf, Architektur und UI/UX gestaltet",
      },
      {
        icon: "development",
        title: "Entwicklung",
        description: "Funktionen implementiert und Services integriert",
      },
      {
        icon: "testing",
        title: "Testing",
        description: "Tests durchgeführt und Stabilität sichergestellt",
      },
      {
        icon: "deployment",
        title: "Deployment",
        description: "In Produktion deployt und überwacht",
      },
    ],
    challenges:
      "Reibungslose Performance und Datenkonsistenz über viele Nutzerinteraktionen hinweg sicherstellen.",
    approach:
      "Backend-Logik und Query-Performance mit Caching und strukturierten Datenmodellen optimiert.",
    outcomes: [
      "Stabile und skalierbare Anwendung im Zeitplan geliefert",
      "Nutzerbindung durch intuitive Experience verbessert",
      "Solide Grundlage für zukünftige Features geschaffen",
    ],
  },
} as const satisfies ProjectContent;
