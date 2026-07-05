import atlasThumb from "../../../assets/thumbnails/atlas.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "ATLAS Workflow-Automatisierung",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "ATLAS ist eine Workflow-Automatisierungsplattform, die Geschäftsprozesse durch anpassbare Automatisierungsregeln und Integrationen mit bestehenden Unternehmenssystemen optimiert. Teams können manuelle Arbeitslasten eliminieren und skalierbare, wiederholbare Abläufe aufbauen.",
  caseStudy: {
    category: "Web-Anwendung",
    heroImage: atlasThumb,
    meta: {
      duration: "Laufend",
      role: "Project Manager",
      teamSize: "10 Mitglieder",
      year: "2026",
    },
    overview:
      "ATLAS wurde entwickelt, um die wachsende Komplexität von Unternehmensabläufen zu lösen — wo repetitive manuelle Prozesse abteilungsübergreifend die Produktivität beeinträchtigen. Die Plattform bietet einen No-Code-Workflow-Builder mit einer erweiterbaren Connector-Architektur.",
    contributions: [
      "Leitete Produktentdeckung zur Definition von Automatisierungsanwendungsfällen über mehrere Geschäftsbereiche.",
      "Verwaltete Sprint-Planung und Liefertakt für modulare, inkrementelle Feature-Releases.",
      "Stimmte Stakeholder auf Workflow-Automatisierungsstrategie und Integrationsprioritäten ab.",
      "Sicherstellung der Plattformerweiterbarkeit durch strukturierte architektonische Planungssitzungen.",
      "Facilitation der teamübergreifenden Ausrichtung zwischen Engineering und Geschäftsprozesseigentümern.",
    ],
    tech: [
      { name: "Next.js", icon: "next", featured: true },
      { name: "Node.js", icon: "node", featured: true },
      { name: "PostgreSQL", icon: "postgresql", featured: true },
      { name: "TypeScript", icon: "typescript", featured: true },
      { name: "ClickUp", icon: "clickup" },
      { name: "Figma", icon: "figma" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Initiierung & Planung",
        description: "Durchführung von Business-Process-Mapping-Workshops zur Identifizierung hochwertiger Automatisierungsmöglichkeiten.",
      },
      {
        icon: "execution",
        title: "Ausführung",
        description: "Verwaltung modularer Sprint-Lieferung des Workflow-Engines, Connector-Frameworks und Drag-and-Drop-Builders.",
      },
      {
        icon: "monitoring",
        title: "Überwachung & Steuerung",
        description: "Verfolgung von Automatisierungs-Adoptionsraten und Workflow-Ausführungsmetriken.",
      },
      {
        icon: "closing",
        title: "Abschluss",
        description: "Koordinierung des unternehmensweiten Rollouts mit Schulungen und Dokumentation.",
      },
    ],
    challenges:
      "Erstellung eines flexiblen Automatisierungs-Engines, der generisch genug für verschiedene Geschäftsbereiche ist und gleichzeitig für nicht-technische Benutzer intuitiv bleibt.",
    approach:
      "Aufbau eines modularen regelbasierten Systems mit Drag-and-Drop-Workflow-Builder und erweiterbaren Integrations-Connectoren.",
    outcomes: [
      "50+ Geschäfts-Workflows über Unternehmensoperationen automatisiert",
      "3 Unternehmenssysteme durch erweiterbare Connector-Architektur integriert",
      "Manuellen Prozessaufwand für beteiligte Teams erheblich reduziert",
    ],
  },
} as const satisfies ProjectContent;
