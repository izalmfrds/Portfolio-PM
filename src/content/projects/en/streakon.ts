import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn is a habit tracking and social accountability platform designed to help users build consistency through shared progress and meaningful interactions.",
  caseStudy: {
    category: "Web & Mobile Application",
    heroImage: streakon0,
    meta: {
      duration: "3 Weeks",
      role: "Full Stack Developer",
      teamSize: "2 Developers",
      year: "2024",
    },
    overview:
      "The project focuses on building a reliable and scalable application that encourages positive daily habits through collaborative experiences.<br/><br/>It provides a smooth, engaging experience across web and mobile platforms.",
    contributions: [
      "Designed and implemented end-to-end system architecture",
      "Developed user interfaces with a focus on usability",
      "Built RESTful APIs and database integrations",
      "Managed deployment and production environments",
      "Ensured performance optimization and code quality",
      "Collaborated on planning and technical decisions",
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
        title: "Planning",
        description: "Analyzed requirements and defined scope & timeline",
      },
      {
        icon: "design",
        title: "Design",
        description: "Designed system flow, architecture, and UI/UX",
      },
      {
        icon: "development",
        title: "Development",
        description: "Implemented features and integrated services",
      },
      {
        icon: "testing",
        title: "Testing",
        description: "Conducted testing and ensured stability",
      },
      {
        icon: "deployment",
        title: "Deployment",
        description: "Deployed to production and monitored",
      },
    ],
    challenges:
      "Ensuring smooth performance and data consistency across multiple user interactions.",
    approach:
      "Optimized backend logic and query performance with caching and structured data models.",
    outcomes: [
      "Delivered a stable and scalable application within timeline",
      "Improved user engagement through intuitive experience",
      "Built a strong foundation for future feature expansion",
    ],
  },
} as const satisfies ProjectContent;
