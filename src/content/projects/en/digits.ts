import adex01 from "../../../assets/images/projects/adex/adex01.png";

import type { ProjectContent } from "../../types";

export default {
  title: "DIGITS",
  theme: "dark",
  tags: ["agile", "clickup", "ganttchart"],
  videoBorder: false,
  description:
    "DIGITS is a registration system developed for Telkom to streamline registration workflows through centralized data management and integrated processes.",
  caseStudy: {
    category: "Web Application",
    heroImage: adex01,
    meta: {
      duration: "3 Years",
      role: "Project Management",
      teamSize: "12 Developers",
      year: "2025",
    },
    overview:
      "DIGITS is a digital registration platform developed for Telkom. The system centralizes registration data, streamlines administrative workflows, and provides reliable information to support efficient registration management.",
    contributions: [
      "Conducted business analysis and facilitated requirement gathering sessions with key stakeholders.",
      "Defined project scope, timelines, and delivery plans to ensure successful project execution.",
      "Coordinated stakeholders and development teams to align business needs with technical solutions.",
      "Tracked project progress and managed risks to ensure on-time and high-quality delivery.",
      "Provided regular project updates and reporting to support strategic decision-making.",
      "Ensured solutions were delivered in accordance with business requirements and digital transformation objectives.",
    ],
    tech: [
      { name: "Next.js", icon: "next", featured: true },
      { name: "Node.js", icon: "node", featured: true },
      { name: "PostgreSQL", icon: "postgresql", featured: true },
      { name: "Golang", icon: "golang", featured: true },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vercel", icon: "vercel" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Inisiation & Planning",
        description: "Conducted requirement gathering to define project scope, timelines, and key deliverables.",
      },
      {
        icon: "execution",
        title: "Execution",
        description:
          "Coordinated stakeholders and development teams to ensure alignment between business requirements and technical solutions.",
      },
      {
        icon: "monitoring",
        title: "Monitoring & Control",
        description:
          "Monitored project progress, managed risks and issues, and provided regular status reporting to support decision-making.",
      },
      {
        icon: "closing",
        title: "Closing",
        description:
          "Ensured successful implementation, facilitated project handover, and captured lessons learned for continuous improvement.",
      },
    ],
    challenges:
      "Synchronizing registration data and related workflows while maintaining accuracy throughout the process.",
    approach: "Ensuring that data connectivity is consistent from start to finish.",
    outcomes: [
      "Delivered a stable and scalable application within timeline",
      "Improved registration efficiency through an intuitive experience",
      "Built a strong foundation for future feature expansion",
    ],
  },
} as const satisfies ProjectContent;
