import papanclipThumb from "../../../assets/thumbnails/papanclip.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "Papanclip",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "Papanclip ist ein internes Clipboard- und Snippet-Management-Tool für Entwicklungsteams. Es ermöglicht schnellen Zugriff auf häufig verwendete Befehle, Links und Code-Vorlagen — synchronisiert über ein Cloud-Backend und zugänglich über eine Browser-Erweiterung.",
  caseStudy: {
    category: "Internes Tool",
    heroImage: papanclipThumb,
    meta: {
      duration: "Laufend",
      role: "Project Manager",
      teamSize: "3 Mitglieder",
      year: "2023",
    },
    overview:
      "Papanclip wurde entwickelt, um ein echtes Problem zu lösen: Entwickler tippen ständig dieselben Befehle, Links und Snippets. Das Tool zentralisiert diese Ressourcen in einer durchsuchbaren, mit Tags versehenen Cloud-Bibliothek, die über eine Web-App und eine Browser-Erweiterung zugänglich ist.",
    contributions: [
      "Leitete Produktentdeckung zur Identifizierung von Team-Produktivitätsproblemen.",
      "Verwaltete iterative Sprint-Lieferung von Clipboard-, Tagging- und Suchfunktionen.",
      "Koordinierte Browser-Erweiterungs-Integration mit dem Cloud-Backend.",
      "Priorisierte Backlog, um Features mit höchstem Einfluss zuerst zu liefern.",
      "Moderierte Team-Demos und Feedback-Schleifen zur kontinuierlichen Produktverbesserung.",
    ],
    tech: [
      { name: "Next.js", icon: "next", featured: true },
      { name: "TypeScript", icon: "typescript", featured: true },
      { name: "Tailwind CSS", icon: "tailwind", featured: true },
      { name: "Figma", icon: "figma" },
      { name: "ClickUp", icon: "clickup" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Initiierung & Planung",
        description: "Durchführung von Discovery-Sitzungen zur Identifizierung von Team-Schmerzpunkten und Definition des Kernfunktionsumfangs.",
      },
      {
        icon: "execution",
        title: "Ausführung",
        description: "Verwaltung iterativer Sprints für Clipboard-Management, Tagging, Suche und Browser-Erweiterungs-Features.",
      },
      {
        icon: "monitoring",
        title: "Überwachung & Steuerung",
        description: "Verfolgung von Nutzungsmetriken und Sammlung von Team-Feedback zur kontinuierlichen Produktverbesserung.",
      },
      {
        icon: "closing",
        title: "Abschluss",
        description: "Sicherstellung stabiler Adoption im Team mit Dokumentation und Onboarding-Unterstützung.",
      },
    ],
    challenges:
      "Konsistentes Verwalten gemeinsamer Snippets über verschiedene Teammitglieder, Geräte und Browser hinweg ohne Datenkonflikte.",
    approach:
      "Aufbau eines cloud-synchronisierten Clipboards mit Tagging, Volltextsuche und einer Browser-Erweiterung, die nahtlos mit der Web-App integriert ist.",
    outcomes: [
      "Von 10+ Teammitgliedern für tägliche Workflow-Optimierung übernommen",
      "1000+ Snippets gespeichert, was das Wissensmanagement im Team verbessert",
      "Wiederholende Aufgaben durch schnell zugängliche Befehlsvorlagen optimiert",
    ],
  },
} as const satisfies ProjectContent;
