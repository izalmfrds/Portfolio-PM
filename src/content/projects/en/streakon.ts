import adex01 from "../../../assets/images/projects/adex/adex01.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Adenco Enterprise System",
  theme: "dark",
  tags: ["agile", "clickup", "ganttchart"],
  videoBorder: false,
  live: "https://www.adenco.com.au/",
  description:
    "Adenco Enterprise System is a comprehensive enterprise solution designed to streamline construction operations through centralized data management and integrated workflows. By providing real-time visibility into critical business information, the platform empowers organizations to improve operational efficiency and make informed strategic decisions with confidence.",
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
      "Sustainability Management System is a digital platform developed for ADENCO to support the company’s sustainability initiatives within the construction industry. The system centralizes ESG-related data, facilitates sustainability reporting, tracks environmental and operational performance indicators, and provides actionable insights to support informed decision-making and regulatory compliance.",
    contributions: [
  "Conducted business analysis and facilitated requirement gathering sessions with key stakeholders.",
  "Defined project scope, timelines, and delivery plans to ensure successful project execution.",
  "Coordinated stakeholders and development teams to align business needs with technical solutions.",
  "Tracked project progress and managed risks to ensure on-time and high-quality delivery.",
  "Provided regular project updates and reporting to support strategic decision-making.",
  "Ensured solutions were delivered in accordance with business requirements and digital transformation objectives."
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
    description: "Conducted requirement gathering to define project scope, timelines, and key deliverables."
  },
  {
    icon: "execution",
    title: "Execution",
    description: "Coordinated stakeholders and development teams to ensure alignment between business requirements and technical solutions."
  },
  {
    icon: "monitoring",
    title: "Monitoring & Control",
    description: "Monitored project progress, managed risks and issues, and provided regular status reporting to support decision-making."
  },
  {
    icon: "closing",
    title: "Closing",
    description: "Ensured successful implementation, facilitated project handover, and captured lessons learned for continuous improvement."
  }
],
    challenges:
      "Synchronizing related modules from project creation, labor and equipment management, and cost forecasting through to project completion.",
    approach:
      "ensuring that data connectivity is consistent from start to finish.",
    outcomes: [
      "Delivered a stable and scalable application within timeline",
      "Improved user engagement through intuitive experience",
      "Built a strong foundation for future feature expansion",
    ],
  },
} as const satisfies ProjectContent;
