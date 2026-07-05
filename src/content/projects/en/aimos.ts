import aimosThumb from "../../../assets/thumbnails/AImos.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AIMOS",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "AIMOS is an AI-powered operations monitoring system that provides predictive analytics and anomaly detection for marketing business processes. It transforms raw operational data into actionable intelligence, enabling teams to proactively address issues before they escalate.",
  caseStudy: {
    category: "Web Application",
    heroImage: aimosThumb,
    meta: {
      duration: "Ongoing",
      role: "Project Manager",
      teamSize: "12 Members",
      year: "2026",
    },
    overview:
      "AIMOS bridges the gap between AI capabilities and real business operations. By integrating predictive analytics and anomaly detection into a unified dashboard, the platform empowers marketing operations teams to shift from reactive firefighting to proactive management — driving efficiency and reducing operational blind spots.",
    contributions: [
      "Conducted requirement analysis to translate AI capabilities into user-facing features.",
      "Managed sprint cycles to balance ML experimentation with product delivery timelines.",
      "Facilitated UAT sessions ensuring AI predictions met business accuracy thresholds.",
      "Coordinated releases integrating ML model updates with application deployments.",
      "Bridged communication between data science and engineering teams to align on feature delivery.",
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
        title: "Initiation & Planning",
        description: "Defined AI integration scope, aligned stakeholders on prediction accuracy expectations, and established delivery milestones.",
      },
      {
        icon: "execution",
        title: "Execution",
        description: "Managed sprints coordinating ML model development with frontend dashboard delivery and API integration.",
      },
      {
        icon: "monitoring",
        title: "Monitoring & Control",
        description: "Tracked model accuracy metrics and platform performance, iterating on prediction thresholds based on business feedback.",
      },
      {
        icon: "closing",
        title: "Closing",
        description: "Oversaw production deployment of ML models and ensured successful handover to operations teams.",
      },
    ],
    challenges:
      "Integrating ML model outputs into actionable business insights that non-technical stakeholders could understand and trust.",
    approach:
      "Created a visualization layer that translates raw model predictions into decision-ready dashboards with clear confidence indicators and contextual explanations.",
    outcomes: [
      "Achieved 85% prediction accuracy for operational anomaly detection",
      "Successfully deployed 2 ML models into production environment",
      "Reduced manual monitoring effort through automated AI-driven insights",
    ],
  },
} as const satisfies ProjectContent;
