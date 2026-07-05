import atlasThumb from "../../../assets/thumbnails/atlas.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "ATLAS Workflow Automation",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "ATLAS is a workflow automation platform that streamlines business processes through customizable automation rules and integrations with existing enterprise systems. It enables teams to eliminate manual overhead and build scalable, repeatable operations across multiple business domains.",
  caseStudy: {
    category: "Web Application",
    heroImage: atlasThumb,
    meta: {
      duration: "Ongoing",
      role: "Project Manager",
      teamSize: "10 Members",
      year: "2026",
    },
    overview:
      "ATLAS was built to solve the growing complexity of enterprise operations — where repetitive manual processes across departments drain productivity and introduce errors. The platform provides a no-code workflow builder with an extensible connector architecture, allowing teams to automate processes across different business domains without deep technical expertise.",
    contributions: [
      "Led product discovery to define automation use cases across multiple business domains.",
      "Managed sprint planning and delivery cadence for modular, incremental feature releases.",
      "Aligned stakeholders on workflow automation strategy and integration priorities.",
      "Ensured platform extensibility through structured architectural planning sessions.",
      "Facilitated cross-team alignment between engineering and business process owners.",
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
        title: "Initiation & Planning",
        description: "Conducted business process mapping workshops to identify high-value automation opportunities across enterprise operations.",
      },
      {
        icon: "execution",
        title: "Execution",
        description: "Managed modular sprint delivery building the workflow engine, connector framework, and drag-and-drop builder incrementally.",
      },
      {
        icon: "monitoring",
        title: "Monitoring & Control",
        description: "Tracked automation adoption rates and workflow execution metrics, iterating on UX and reliability based on user feedback.",
      },
      {
        icon: "closing",
        title: "Closing",
        description: "Coordinated enterprise-wide rollout with training sessions and documentation to ensure successful adoption.",
      },
    ],
    challenges:
      "Creating a flexible automation engine generic enough to work across vastly different business domains while remaining intuitive for non-technical users.",
    approach:
      "Built a modular rule-based system with a drag-and-drop workflow builder and extensible integration connectors, allowing teams to configure automations without writing code.",
    outcomes: [
      "Automated 50+ business workflows across enterprise operations",
      "Integrated 3 enterprise systems through extensible connector architecture",
      "Reduced manual process overhead significantly for participating teams",
    ],
  },
} as const satisfies ProjectContent;
