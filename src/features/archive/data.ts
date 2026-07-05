import type { ArchiveProject, ArchiveCategory, ArchiveOrganization } from "./types";
import adencoThumb from "../../assets/thumbnails/adenco-thumb.png";
import digitsThumb from "../../assets/thumbnails/digits-thumb.png";
import wccThumb from "../../assets/thumbnails/wcc-thumb.png";
import aimosThumb from "../../assets/thumbnails/AImos.jpeg";
import atlasThumb from "../../assets/thumbnails/atlas.jpeg";
import baitulThumb from "../../assets/images/projects/baituladab/baitul-thumb.webp";
import checkclipThumb from "../../assets/thumbnails/checkclip.jpeg";
import empatrimaThumb from "../../assets/thumbnails/empatrima.jpeg"
import papanclipThumb from "../../assets/thumbnails/papanclip.jpeg";
import xposThumb from "../../assets/thumbnails/xpos.jpeg";


//start


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
      duration: "2025 - Present",
      teamSize: "12 Members",
      platform: "Web Application",
    },
    summary:
      "Enterprise resource planning system for a construction company, integrating project management, procurement, financial tracking, and workforce scheduling into a unified platform.",
    mockup: adencoThumb,
    responsibilities: [
      "Requirement Analysis",
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "User Acceptance Testing",
      "Release Coordination",
      "Delivery Management",
    ],
    contributions: [
      "Conducted business analysis and facilitated requirement gathering sessions with key stakeholders.",
      "Defined project scope, timelines, and delivery plans to ensure successful project execution.",
      "Coordinated stakeholders and development teams to align business needs with technical solutions.",
      "Tracked project progress and managed risks to ensure on-time and high-quality delivery.",
      "Provided regular project updates and reporting to support strategic decision-making.",
      "Ensured solutions were delivered in accordance with business requirements and digital transformation objectives."
    ],
    outcomes: [
      "Delivered a stable and scalable enterprise platform within timeline.",
      "Improved operational efficiency through integrated project management workflows.",
      "Built a strong foundation for future feature expansion across construction operations."
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
      industry: "Constructions",
      duration: "2026 - Present",
      teamSize: "8 Members",
      platform: "Web Application",
    },
    summary:
      "A workforce management platform handling employee scheduling, attendance tracking, and performance analytics for enterprise clients.",
    mockup: wccThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "Delivery Management",
    ],
    contributions: [
      "Led product discovery workshops to identify core workforce management needs.",
      "Defined sprint plans and managed backlog prioritization for iterative delivery.",
      "Coordinated cross-functional teams across HR and engineering departments.",
      "Tracked delivery metrics and provided actionable insights to leadership."
    ],
    outcomes: [
      "Delivered a workforce platform serving 200+ active users.",
      "Improved scheduling efficiency across multiple departments.",
      "Enabled data-driven workforce decisions through analytics dashboard."
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
    status: "active-development",
    category: "enterprise-systems",
    organization: "ALTIMEDA",
    info: {
      role: "Project Manager",
      industry: "Marketing",
      duration: "2026 - Present",
      teamSize: "12 Members",
      platform: "Web Application",
    },
    summary:
      "An AI-powered operations monitoring system that provides predictive analytics and anomaly detection for marketing business processes.",
    mockup: aimosThumb,
    responsibilities: [
      "Requirement Analysis",
      "Sprint Planning",
      "User Acceptance Testing",
      "Release Coordination",
    ],
    contributions: [
      "Conducted requirement analysis to translate AI capabilities into user-facing features.",
      "Managed sprint cycles to balance ML experimentation with product delivery.",
      "Facilitated UAT sessions ensuring AI predictions met business accuracy thresholds.",
      "Coordinated releases integrating ML model updates with application deployments."
    ],
    outcomes: [
      "Achieved 85% prediction accuracy for operational anomaly detection.",
      "Successfully deployed 2 ML models into production environment.",
      "Reduced manual monitoring effort through automated AI-driven insights."
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
      duration: "2026 - Present",
      teamSize: "10 Members",
      platform: "Web Application",
    },
    summary:
      "A workflow automation platform that streamlines business processes through customizable automation rules and integrations with existing enterprise systems.",
    mockup:atlasThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "Delivery Management",
    ],
    contributions: [
      "Led product discovery to define automation use cases across business domains.",
      "Managed sprint planning and delivery cadence for modular feature releases.",
      "Aligned stakeholders on workflow automation strategy and integration priorities.",
      "Ensured platform extensibility through structured architectural planning."
    ],
    outcomes: [
      "Automated 50+ business workflows across enterprise operations.",
      "Integrated 3 enterprise systems through extensible connector architecture.",
      "Reduced manual process overhead significantly for participating teams."
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
    mockup: digitsThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "User Acceptance Testing",
      "Delivery Management",
    ],
    contributions: [
      "Facilitated product discovery sessions with educators and school administrators.",
      "Defined sprint plans accommodating diverse school requirements and timelines.",
      "Managed stakeholder communication across multiple educational institutions.",
      "Led UAT sessions to validate platform usability with non-technical users.",
      "Coordinated delivery milestones across enrollment, grading, and attendance modules."
    ],
    outcomes: [
      "Successfully onboarded 5 schools managing 1000+ students.",
      "Reduced administrative workload by 40% through process automation.",
      "Delivered a configurable platform adaptable to different school types."
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
      mockup:baitulThumb,
    responsibilities: [
      "Requirement Analysis",
      "Product Discovery",
      "Stakeholder Management",
      "Release Coordination",
    ],
    contributions: [
      "Conducted requirement analysis bridging school branding with modern web standards.",
      "Facilitated product discovery with school administration and parent representatives.",
      "Managed stakeholder expectations across 3 school branches with distinct needs.",
      "Coordinated release cycles ensuring seamless transition from legacy communication channels."
    ],
    outcomes: [
      "Launched unified web presence for 3 school branches.",
      "Achieved 100% online enrollment adoption.",
      "Improved parent-school communication through integrated portal features."
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
    status: "production",
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
      mockup:empatrimaThumb,
    responsibilities: [
      "Requirement Analysis",
      "Sprint Planning",
      "User Acceptance Testing",
    ],
    contributions: [
      "Defined assessment platform requirements with educators and exam administrators.",
      "Managed sprint planning to deliver timed exam and auto-grading features iteratively.",
      "Led UAT sessions validating exam integrity and question randomization logic."
    ],
    outcomes: [
      "Conducted 500+ exams with 99% platform uptime.",
      "Ensured exam integrity through anti-cheating detection mechanisms.",
      "Automated grading reduced assessment turnaround time significantly."
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
      mockup:papanclipThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Delivery Management",
    ],
    contributions: [
      "Led product discovery to identify team productivity pain points and tool requirements.",
      "Managed iterative sprint delivery of clipboard, tagging, and search features.",
      "Coordinated browser extension integration with the cloud-synced backend."
    ],
    outcomes: [
      "Adopted by 10+ team members for daily workflow optimization.",
      "Saved 1000+ snippets improving team knowledge sharing.",
      "Streamlined repetitive tasks through quick-access command templates."
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
      mockup:xposThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Stakeholder Management",
      "Delivery Management",
    ],
    contributions: [
      "Conducted product discovery sessions with retail stakeholders to define POS requirements.",
      "Managed sprint delivery of inventory, customer tracking, and analytics modules.",
      "Coordinated multi-location deployment strategy and stakeholder alignment.",
      "Ensured real-time inventory sync architecture met performance requirements."
    ],
    outcomes: [
      "Deployed POS system across 5 store locations with 99.9% uptime.",
      "Enabled real-time inventory tracking across all retail locations.",
      "Improved sales analytics capabilities for data-driven business decisions."
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
      mockup:checkclipThumb,
    responsibilities: [
      "Product Discovery",
      "Sprint Planning",
      "Delivery Management",
    ],
    contributions: [
      "Led product discovery balancing simplicity with power-user feature needs.",
      "Managed sprint planning for progressive feature disclosure implementation.",
      "Coordinated delivery of collaboration and reminder features across platforms."
    ],
    outcomes: [
      "Achieved 500+ active users with high engagement rates.",
      "Facilitated completion of 10K+ tasks across user base.",
      "Built a progressive interface adapting to different user expertise levels."
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
    contributions: [
      "Led product discovery identifying secure file sharing needs for distributed teams.",
      "Managed sprint delivery of chunked upload, folder sharing, and access control features.",
      "Coordinated backend architecture planning for large file transfer optimization."
    ],
    outcomes: [
      "Transferred 1TB+ of data securely across 200+ teams.",
      "Enabled resumable file transfers reducing upload failure rates.",
      "Delivered enterprise-grade access control for sensitive file sharing."
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
    contributions: [
      "Led product discovery exploring AI applications for sprint prediction.",
      "Managed experimental sprint cycles for model training and validation."
    ],
    outcomes: [
      "Achieved 70% risk prediction accuracy on sprint delivery.",
      "Analyzed 3 sprints generating actionable risk insights.",
      "Validated feasibility of AI-driven sprint planning assistance."
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
    contributions: [
      "Conducted product discovery mapping AI insight generation to actionable recommendations.",
      "Defined requirements for structured recommendation engine architecture."
    ],
    outcomes: [
      "Generated 15+ actionable insights from delivery metadata analysis.",
      "Piloted with 2 teams validating AI-driven process improvement recommendations.",
      "Created a framework for translating AI outputs into specific workflow improvements."
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
