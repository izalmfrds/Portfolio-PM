import aimosThumb from "../../../assets/thumbnails/AImos.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AIMOS",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "AIMOS ist ein KI-gestütztes Betriebsüberwachungssystem, das prädiktive Analysen und Anomalieerkennung für Marketing-Geschäftsprozesse bietet. Es wandelt Rohdaten in handlungsorientierte Erkenntnisse um, damit Teams Probleme proaktiv angehen können.",
  caseStudy: {
    category: "Web-Anwendung",
    heroImage: aimosThumb,
    meta: {
      duration: "Laufend",
      role: "Project Manager",
      teamSize: "12 Mitglieder",
      year: "2026",
    },
    overview:
      "AIMOS überbrückt die Lücke zwischen KI-Fähigkeiten und realen Geschäftsoperationen. Durch die Integration prädiktiver Analysen und Anomalieerkennung in ein einheitliches Dashboard können Marketing-Operations-Teams von reaktiver Fehlerbehebung zu proaktivem Management wechseln.",
    contributions: [
      "Durchführung von Anforderungsanalysen zur Übersetzung von KI-Fähigkeiten in Benutzer-Features.",
      "Verwaltung von Sprint-Zyklen zur Balance zwischen ML-Experimentierung und Produktlieferung.",
      "Moderation von UAT-Sitzungen zur Sicherstellung der Genauigkeit von KI-Vorhersagen.",
      "Koordinierung von Releases, die ML-Modell-Updates mit Anwendungsdeployments integrieren.",
      "Vermittlung zwischen Data-Science- und Engineering-Teams zur Ausrichtung der Feature-Lieferung.",
    ],
    tech: [
      { name: "Next.js", icon: "next", featured: true },
      { name: "Node.js", icon: "node", featured: true },
      { name: "TypeScript", icon: "typescript", featured: true },
      { name: "ClickUp", icon: "clickup" },
      { name: "Figma", icon: "figma" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Initiierung & Planung",
        description: "Definition des KI-Integrationsumfangs und Ausrichtung der Stakeholder auf Vorhersagegenauigkeitserwartungen.",
      },
      {
        icon: "execution",
        title: "Ausführung",
        description: "Verwaltung von Sprints zur Koordinierung von ML-Modellentwicklung mit Frontend-Dashboard-Lieferung.",
      },
      {
        icon: "monitoring",
        title: "Überwachung & Steuerung",
        description: "Verfolgung von Modellgenauigkeitsmetriken und Iteration auf Basis von Geschäfts-Feedback.",
      },
      {
        icon: "closing",
        title: "Abschluss",
        description: "Überwachung der Produktionsbereitstellung von ML-Modellen und erfolgreiche Übergabe an Operations-Teams.",
      },
    ],
    challenges:
      "Integration von ML-Modell-Ausgaben in handlungsorientierte Erkenntnisse, die nicht-technische Stakeholder verstehen und vertrauen können.",
    approach:
      "Erstellung einer Visualisierungsschicht, die rohe Modellvorhersagen in entscheidungsbereite Dashboards mit klaren Konfidenzindikatoren übersetzt.",
    outcomes: [
      "85% Vorhersagegenauigkeit für Betriebsanomalieerkennung erreicht",
      "2 ML-Modelle erfolgreich in der Produktionsumgebung bereitgestellt",
      "Manuellen Überwachungsaufwand durch automatisierte KI-gestützte Erkenntnisse reduziert",
    ],
  },
} as const satisfies ProjectContent;
