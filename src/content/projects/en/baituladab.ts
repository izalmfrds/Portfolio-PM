import baitulAdab from "../../../assets/images/projects/baituladab/baitul-thumb.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Baitul Adab Schools",
  theme: "dark",
  tags: ["agile", "clickup", "ganttchart"],
  videoBorder: false,
  description:
    "Baitul Adab Schools is a landing page project designed to present school information, programs, and admissions in a clear digital experience. The platform helps families discover the school, understand its values, and access key information with confidence.",
  caseStudy: {
    category: "Web Application",
    heroImage: baitulAdab,
    meta: {
      duration: "3 Years",
      role: "Project Management",
      teamSize: "12 Developers",
      year: "2025",
    },
    overview:
      "Baitul Adab Schools is a digital landing page developed to support school communication and online visibility. The website centralizes important school information, highlights programs and learning activities, and provides a clear pathway for prospective families to understand the school and take the next step.",
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
      "Organizing school information, programs, and admissions content into a clear experience that is easy for families to explore.",
    approach: "Ensuring the content structure and user journey stay consistent from discovery through inquiry.",
    outcomes: [
      "Delivered a stable and scalable application within timeline",
      "Improved user engagement through intuitive experience",
      "Built a strong foundation for future feature expansion",
    ],
  },
} as const satisfies ProjectContent;
