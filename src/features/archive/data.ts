import type { ArchiveProject, ArchiveCategory, ArchiveOrganization } from "./types";

export const archiveOrganizations: ArchiveOrganization[] = [
  "ALTIMEDA",
  "MY_TEAM_PRODUCT", 
  "TELKOM_FOUNDATION",
  "PERSONAL_PROJECTS"
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "adenco",
    name: "Adenco Enterprise System",
    type: "Construction Management Platform",
    status: "production",
    category: "enterprise-systems",
    organization: "ALTIMEDA",
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
    organization: "ALTIMEDA",
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
    organization: "ALTIMEDA",
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
    id: "atlas",
    name: "ATLAS Workflow Automation",
    type: "Workflow Automation Platform",
    status: "active-development",
    category: "enterprise-systems",
    organization: "ALTIMEDA",
    info: {
      role: "Project Manager",
      industry: "Technology",
      duration: "2024 - Present",
      teamSize: "5 Members",
      platform: "Web Application",
    },
    summary:
      "A workflow automation platform that streamlines business processes through customizable automation rules and integrations with existing enterprise systems.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    challenges: [
      {
        challenge: "Creating a flexible automation engine that works across different business domains.",
        solution: "Built a modular rule-based system with drag-and-drop workflow builder and extensible integration connectors.",
      },
    ],
    achievements: [
      { value: "50+", label: "Automated Workflows" },
      { value: "3", label: "Enterprise Integrations" },
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
    id: "digits",
    name: "DIGITS",
    type: "Education Management Platform",
    status: "production",
    category: "education",
    organization: "TELKOM_FOUNDATION",
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
    organization: "MY_TEAM_PRODUCT",
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
    name: "Empatrima QUIZ",
    type: "Online Assessment Tool",
    status: "completed",
    category: "education",
    organization: "MY_TEAM_PRODUCT",
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
    organization: "MY_TEAM_PRODUCT",
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
    id: "x-pos",
    name: "X-POS",
    type: "Point of Sale System",
    status: "active-development",
    category: "internal-products",
    organization: "MY_TEAM_PRODUCT",
    info: {
      role: "Project Manager",
      industry: "Retail",
      duration: "2024 - Present",
      teamSize: "4 Members",
      platform: "Web Application",
    },
    summary:
      "A modern point of sale system for retail businesses with inventory management, customer tracking, and sales analytics.",
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
        challenge: "Handling real-time inventory updates across multiple store locations.",
        solution: "Implemented a distributed inventory system with optimistic UI updates and conflict resolution.",
      },
    ],
    achievements: [
      { value: "5", label: "Store Locations" },
      { value: "99.9%", label: "Uptime" },
    ],
    gallery: [],
    timeline: [
      { label: "Discovery" },
      { label: "Planning" },
      { label: "Development" },
    ],
  },
  {
    id: "checkclip",
    name: "Checkclip",
    type: "Task Management Tool",
    status: "maintenance",
    category: "internal-products",
    organization: "MY_TEAM_PRODUCT",
    info: {
      role: "Project Manager",
      industry: "Internal Tools",
      duration: "2023 - Present",
      teamSize: "3 Members",
      platform: "Web Application",
    },
    summary:
      "A lightweight task management and checklist tool for personal and team productivity with reminders and collaboration features.",
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
        challenge: "Balancing simplicity with powerful features for different user types.",
        solution: "Created a progressive interface that reveals advanced features based on user behavior and preferences.",
      },
    ],
    achievements: [
      { value: "500+", label: "Active Users" },
      { value: "10K+", label: "Tasks Completed" },
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
    id: "papaya",
    name: "Papaya",
    type: "File Sharing Platform",
    status: "maintenance",
    category: "internal-products",
    organization: "MY_TEAM_PRODUCT",
    info: {
      role: "Project Manager",
      industry: "Internal Tools",
      duration: "2023 - Present",
      teamSize: "3 Members",
      platform: "Web Application",
    },
    summary:
      "A secure file sharing and collaboration platform for teams with features like large file transfers, folder sharing, and access control using PostgreSQL for metadata management.",
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Delivery Management",
    ],
    tech: [
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    challenges: [
      {
        challenge: "Managing large file transfers efficiently without blocking the UI.",
        solution: "Implemented chunked uploads with resumable transfers and progress indicators.",
      },
    ],
    achievements: [
      { value: "1TB+", label: "Data Transferred" },
      { value: "200+", label: "Teams Using" },
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
    id: "ai-sprint-intelligence",
    name: "AI Sprint Intelligence",
    type: "AI-Powered Sprint Analytics",
    status: "archived",
    category: "experiments",
    organization: "PERSONAL_PROJECTS",
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
    organization: "PERSONAL_PROJECTS",
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
