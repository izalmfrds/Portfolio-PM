import papanclipThumb from "../../../assets/thumbnails/papanclip.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "Papanclip",
  theme: "dark",
  tags: ["agile", "clickup"],
  videoBorder: false,
  description:
    "Papanclip is an internal clipboard and snippet management tool built for development teams. It enables quick access to frequently used commands, links, and code templates — synced across devices via a cloud backend and accessible through a browser extension.",
  caseStudy: {
    category: "Internal Tool",
    heroImage: papanclipThumb,
    meta: {
      duration: "Ongoing",
      role: "Project Manager",
      teamSize: "3 Members",
      year: "2023",
    },
    overview:
      "Papanclip was built to solve a real pain point: developers constantly re-typing the same commands, links, and snippets. The tool centralizes these resources in a searchable, taggable cloud-synced library accessible through both a web app and a browser extension — dramatically reducing repetitive effort across the team.",
    contributions: [
      "Led product discovery to identify team productivity pain points and tool requirements.",
      "Managed iterative sprint delivery of clipboard, tagging, and search features.",
      "Coordinated browser extension integration with the cloud-synced backend.",
      "Prioritized backlog to ensure highest-impact features were delivered first.",
      "Facilitated team demos and feedback loops to continuously improve the product.",
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
        title: "Initiation & Planning",
        description: "Conducted discovery sessions to identify team pain points and define the core feature set.",
      },
      {
        icon: "execution",
        title: "Execution",
        description: "Managed iterative sprints delivering clipboard management, tagging, search, and browser extension features.",
      },
      {
        icon: "monitoring",
        title: "Monitoring & Control",
        description: "Tracked usage metrics and gathered team feedback to continuously refine the product.",
      },
      {
        icon: "closing",
        title: "Closing",
        description: "Ensured stable adoption across the team with documentation and onboarding support.",
      },
    ],
    challenges:
      "Managing shared snippets consistently across different team members, devices, and browsers without data conflicts.",
    approach:
      "Built a cloud-synced clipboard with tagging, full-text search, and a browser extension that integrates seamlessly with the web app.",
    outcomes: [
      "Adopted by 10+ team members for daily workflow optimization",
      "Saved 1000+ snippets improving team knowledge sharing",
      "Streamlined repetitive tasks through quick-access command templates",
    ],
  },
} as const satisfies ProjectContent;
