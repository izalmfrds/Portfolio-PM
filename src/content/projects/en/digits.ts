import digits from "../../../assets/images/projects/digits/digits-thumb.png";

import type { ProjectContent } from "../../types";

export default {
  title: "DIGITS",
  theme: "dark",
  tags: ["uiux", "figma", "designthinking"],
  videoBorder: false,
  description:
    "DIGITS is a digital registration platform developed to streamline the student admission process for educational institutions under Telkom through a modern digital interface.",
  caseStudy: {
    category: "Web Application",
    heroImage: digits,
    meta: {
      duration: "1 Year",
      role: "UI/UX Designer",
      teamSize: "Cross-functional Team",
      year: "2025",
    },
    overview:
      "DIGITS is designed to simplify and optimize the school registration process by digitizing the entire admission journey. The platform focuses on delivering a seamless user experience for students, parents, and administrators through clear information architecture, accessible interfaces, and efficient interaction flows. As a UI/UX Designer, I was responsible for ensuring that the platform addressed both user needs and business objectives by creating intuitive designs that enhanced usability and engagement throughout the registration process.",
    contributions: [
      "Conducted user research to identify pain points and understand user behavior during the registration process.",
      "Created user personas and user journey maps to define key user needs and expectations.",
      "Designed information architecture and user flows to optimize the end-to-end registration experience.",
      "Developed low-fidelity wireframes and interactive high-fidelity prototypes using Figma.",
      "Established and maintained a consistent design system to ensure visual coherence across the platform.",
      "Collaborated closely with product managers and developers to ensure design feasibility and implementation quality.",
      "Facilitated usability testing sessions and iterated designs based on user feedback and insights.",
      "Delivered developer-ready design specifications to support efficient handoff and development processes.",
    ],
    tech: [
      { name: "Figma", icon: "figma", featured: true },
      { name: "Design Thinking", icon: "design", featured: true },
      { name: "FigJam", icon: "figma" },
      { name: "Miro", icon: "miro" },
      { name: "User-Centered Design", icon: "user" },
      { name: "Wireframing", icon: "wireframe" },
      { name: "Prototyping", icon: "prototype" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Research & Discovery",
        description: "Conducted stakeholder interviews, identified user pain points through discovery sessions, and defined business goals and user requirements.",
      },
      {
        icon: "execution",
        title: "Information Architecture",
        description:
          "Structured content and navigation flows, and designed clear user pathways to minimize cognitive load.",
      },
      {
        icon: "monitoring",
        title: "Wireframing & Prototyping",
        description:
          "Created low-fidelity wireframes to validate concepts early, and developed interactive prototypes for stakeholder reviews and usability testing.",
      },
      {
        icon: "closing",
        title: "Visual Design & Testing",
        description:
          "Applied modern and accessible UI principles, established typography and color systems, gathered feedback through usability testing, and refined designs based on insights.",
      },
    ],
    challenges:
      "Creating a seamless registration experience that addresses the diverse needs of students, parents, and administrators while maintaining consistency across the platform.",
    approach: "Implemented a user-centered design approach with iterative testing and a comprehensive design system to ensure intuitive and accessible experiences for all user types.",
    outcomes: [
      "Improved overall registration experience through simplified user flows",
      "Reduced friction during the admission process by optimizing form interactions and navigation",
      "Enhanced consistency and scalability through the implementation of a reusable design system",
      "Strengthened collaboration between design and development teams through clear design documentation",
    ],
  },
} as const satisfies ProjectContent;
