import type { ArchiveProject, ArchiveCategory } from "./types";

export const archiveProjects: ArchiveProject[] = [
  {
    id: "adenco",
    name: "Adenco Enterprise System",
    type: "Construction Management Platform",
    status: "production",
    category: "enterprise-systems",
    info: {
      role: "Project Manager",
      industry: "Construction",
      duration: "2023 - Present",
      teamSize: "12 Members",
      platform: "Web Application",
    },
    summary:
      "Enterprise resource planning system for a construction company, integrating project management, procurement, financial tracking, and workforce scheduling into a unified platform.",
    responsibilities: [
      "Requirement Analysis",
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "User Acceptance Testing",
      "Release Coordination",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    challenges: [
      {
        challenge: "Data silos across multiple legacy systems made reporting unreliable.",
        solution: "Built a centralized data layer integrating all sources into a single dashboard with real-time sync.",
      },
    ],
    achievements: [
      { value: "95%", label: "On-Time Delivery" },
      { value: "4", label: "Integrated Platforms" },
      { value: "500+", label: "Users" },
      { value: "30%", label: "Reporting Efficiency" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
      { label: "Testing" },
      { label: "Launch" },
    ],
  },
  {
    id: "wcc",
    name: "WCC Workforce Platform",
    type: "Workforce Management System",
    status: "active-development",
    category: "enterprise-systems",
    info: {
      role: "Project Manager",
      industry: "Human Resources",
      duration: "2024 - Present",
      teamSize: "8 Members",
      platform: "Web Application",
    },
    summary:
      "A workforce management platform handling employee scheduling, attendance tracking, and performance analytics for enterprise clients.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "TypeScript", icon: "typescript" },
    ],
    challenges: [
      {
        challenge: "Complex scheduling rules across multiple departments and regions.",
        solution: "Designed a rule-based scheduling engine that adapts to different organizational structures.",
      },
    ],
    achievements: [
      { value: "200+", label: "Active Users" },
      { value: "3", label: "Client Organizations" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
    ],
  },
  {
    id: "aimos",
    name: "AIMOS",
    type: "AI Operations System",
    status: "completed",
    category: "enterprise-systems",
    info: {
      role: "Project Manager",
      industry: "Technology",
      duration: "2023 - 2024",
      teamSize: "6 Members",
      platform: "Web Application",
    },
    summary:
      "An AI-powered operations monitoring system that provides predictive analytics and anomaly detection for business processes.",
    responsibilities: [
      "Requirement Analysis",
      "Sprint Planning",
      "User Acceptance Testing",
      "Release Coordination",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "TypeScript", icon: "typescript" },
    ],
    challenges: [
      {
        challenge: "Integrating ML model outputs into actionable business insights.",
        solution: "Created a visualization layer that translates raw model predictions into decision-ready dashboards.",
      },
    ],
    achievements: [
      { value: "85%", label: "Prediction Accuracy" },
      { value: "2", label: "ML Models Deployed" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
      { label: "Testing" },
      { label: "Launch" },
    ],
  },
  {
    id: "digits",
    name: "DIGITS",
    type: "Education Management Platform",
    status: "production",
    category: "education",
    info: {
      role: "Project Manager",
      industry: "Education",
      duration: "2022 - 2024",
      teamSize: "10 Members",
      platform: "Web Application",
    },
    summary:
      "A comprehensive school management system covering student enrollment, grading, attendance, and parent communication for educational institutions.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "User Acceptance Testing",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    challenges: [
      {
        challenge: "Diverse requirements across different school types and grade levels.",
        solution: "Implemented a configurable module system allowing schools to enable features based on their needs.",
      },
    ],
    achievements: [
      { value: "1000+", label: "Students Managed" },
      { value: "5", label: "Schools Onboarded" },
      { value: "40%", label: "Admin Time Saved" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
      { label: "Testing" },
      { label: "Launch" },
    ],
  },
  {
    id: "baitul-adab",
    name: "Baitul Adab Schools",
    type: "School Website & Portal",
    status: "production",
    category: "education",
    info: {
      role: "Project Manager",
      industry: "Education",
      duration: "2023 - 2024",
      teamSize: "5 Members",
      platform: "Web Application",
    },
    summary:
      "A school website and parent portal for an Islamic school network, featuring news, announcements, academic calendars, and online enrollment.",
    responsibilities: [
      "Requirement Analysis",
      "Product Discovery",
      "Stakeholder Management",
      "Release Coordination",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Figma", icon: "figma" },
    ],
    challenges: [
      {
        challenge: "Balancing modern design with the school's traditional branding identity.",
        solution: "Developed a design system that merges contemporary UX patterns with the school's visual heritage.",
      },
    ],
    achievements: [
      { value: "3", label: "School Branches" },
      { value: "100%", label: "Online Enrollment" },
    ],
    gallery: [],
    timeline: [
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
      { label: "Launch" },
    ],
  },
  {
    id: "empatrima-quiz",
    name: "Empatrima Quiz",
    type: "Online Assessment Tool",
    status: "completed",
    category: "education",
    info: {
      role: "Project Manager",
      industry: "Education",
      duration: "2022 - 2023",
      teamSize: "4 Members",
      platform: "Web Application",
    },
    summary:
      "An interactive online quiz platform for educational assessment, supporting multiple question types, timed exams, and automated grading.",
    responsibilities: [
      "Requirement Analysis",
      "Sprint Planning",
      "User Acceptance Testing",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "TypeScript", icon: "typescript" },
    ],
    challenges: [
      {
        challenge: "Ensuring exam integrity and preventing cheating during online assessments.",
        solution: "Implemented tab-switch detection, randomized question order, and time-based auto-submission.",
      },
    ],
    achievements: [
      { value: "500+", label: "Exams Conducted" },
      { value: "99%", label: "Uptime" },
    ],
    gallery: [],
    timeline: [
      { label: "Planning" },
      { label: "Development" },
      { label: "Testing" },
      { label: "Launch" },
    ],
  },
  {
    id: "papanclip",
    name: "Papanclip",
    type: "Internal Dashboard Tool",
    status: "maintenance",
    category: "internal-products",
    info: {
      role: "Project Manager",
      industry: "Internal Tools",
      duration: "2023 - Present",
      teamSize: "3 Members",
      platform: "Web Application",
    },
    summary:
      "An internal clipboard and snippet management tool for the development team, enabling quick access to frequently used commands, links, and templates.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    challenges: [
      {
        challenge: "Managing shared snippets across different team members and devices.",
        solution: "Built a cloud-synced clipboard with tagging, search, and browser extension integration.",
      },
    ],
    achievements: [
      { value: "10+", label: "Team Members" },
      { value: "1000+", label: "Snippets Saved" },
    ],
    gallery: [],
    timeline: [
      { label: "Discovery" },
      { label: "Development" },
      { label: "Launch" },
    ],
  },
  {
    id: "pm-dashboard",
    name: "PM Dashboard",
    type: "Project Management Dashboard",
    status: "active-development",
    category: "internal-products",
    info: {
      role: "Project Manager",
      industry: "Internal Tools",
      duration: "2024 - Present",
      teamSize: "2 Members",
      platform: "Web Application",
    },
    summary:
      "A personal project management dashboard providing bird's-eye view of all active projects, sprint progress, and team velocity metrics.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    challenges: [
      {
        challenge: "Aggregating data from multiple project management tools into one view.",
        solution: "Built API connectors for Jira, ClickUp, and GitHub with a unified data model.",
      },
    ],
    achievements: [
      { value: "5", label: "Active Projects Tracked" },
      { value: "20%", label: "Time Saved on Reporting" },
    ],
    gallery: [],
    timeline: [
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
    ],
  },
  {
    id: "ai-sprint-intelligence",
    name: "AI Sprint Intelligence",
    type: "AI-Powered Sprint Analytics",
    status: "archived",
    category: "experiments",
    info: {
      role: "Project Manager",
      industry: "R&D",
      duration: "2024",
      teamSize: "2 Members",
      platform: "Web Application",
    },
    summary:
      "An experimental tool using AI to analyze sprint data and predict delivery risks, team burnout, and scope creep before they happen.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
    ],
    challenges: [
      {
        challenge: "Training AI models on limited historical sprint data.",
        solution: "Used transfer learning from public agile datasets combined with team-specific calibration.",
      },
    ],
    achievements: [
      { value: "70%", label: "Risk Prediction Accuracy" },
      { value: "3", label: "Sprints Analyzed" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Development" },
      { label: "Testing" },
    ],
  },
  {
    id: "ai-delivery-insights",
    name: "AI Delivery Insights",
    type: "AI Delivery Analytics",
    status: "archived",
    category: "experiments",
    info: {
      role: "Project Manager",
      industry: "R&D",
      duration: "2024",
      teamSize: "2 Members",
      platform: "Web Application",
    },
    summary:
      "An experimental analytics tool that uses AI to generate delivery insights from project metadata, identifying patterns and improvement opportunities.",
    responsibilities: [
      "Product Discovery",
      "Requirement Analysis",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    challenges: [
      {
        challenge: "Translating AI-generated insights into actionable recommendations.",
        solution: "Created a structured recommendation engine that maps AI outputs to specific process improvements.",
      },
    ],
    achievements: [
      { value: "15+", label: "Insights Generated" },
      { value: "2", label: "Pilot Teams" },
    ],
    gallery: [],
    timeline: [
      { label: "Research" },
      { label: "Development" },
    ],
  },
];

export const archiveCategories: ArchiveCategory[] = [
  "enterprise-systems",
  "education",
  "internal-products",
  "experiments",
];
