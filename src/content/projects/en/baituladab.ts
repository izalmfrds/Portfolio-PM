import baitulAdab from "../../../assets/images/projects/baituladab/baitul-thumb.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Baitul Adab Schools",
  theme: "dark",
  tags: ["agile", "figma", "seo"],
  videoBorder: false,
  description:
    "Baitul Adab Schools is a landing page website developed to strengthen the school's digital presence and improve engagement with prospective parents and students through strategic SEO implementation.",
  caseStudy: {
    category: "Landing Page Website",
    heroImage: baitulAdab,
    meta: {
      duration: "3 Months",
      role: "Project Manager & UI/UX Designer",
      teamSize: "2",
      year: "2024",
    },
    overview:
      "Baitul Adab Schools required a modern and informative landing page that could effectively communicate the institution's educational philosophy, programs, and admission information to prospective parents. One of the biggest challenges during this project was balancing an engaging user experience with effective Search Engine Optimization (SEO) strategies. As both Project Manager and UI/UX Designer, I led the project from discovery through delivery, ensuring that business objectives, user needs, and technical SEO requirements were aligned throughout the development process.",
    contributions: [
      "Facilitated requirement gathering sessions with school stakeholders to define project scope and objectives.",
      "Defined project scope, timelines, and delivery milestones to ensure successful execution.",
      "Coordinated communication between content teams, designers, and developers for seamless collaboration.",
      "Managed project risks and ensured timely delivery while maintaining quality standards.",
      "Conducted competitor analysis and research on educational websites to inform design decisions.",
      "Designed user flows focused on parents seeking school information to optimize their journey.",
      "Developed information architecture to improve content discoverability and user experience.",
      "Created wireframes and high-fidelity prototypes using Figma for stakeholder validation.",
      "Designed responsive interfaces optimized for desktop and mobile users.",
      "Collaborated with content teams to ensure SEO considerations were integrated into the design structure.",
      "Conducted keyword research focused on educational services and school admissions.",
      "Optimized page structure using semantic HTML hierarchy to improve search engine visibility.",
      "Implemented metadata recommendations including page titles and meta descriptions.",
    ],
    tech: [
      { name: "Figma", icon: "figma", featured: true },
      { name: "ClickUp", icon: "clickup", featured: true },
      { name: "Google Analytics", icon: "analytics", featured: true },
      { name: "FigJam", icon: "figma" },
      { name: "Google Search Console", icon: "search" },
      { name: "SEO Audit Tools", icon: "seo" },
    ],
    execution: [
      {
        icon: "planning",
        title: "Discovery & Research",
        description: "Conducted stakeholder interviews, competitor benchmarking, and user needs analysis focusing on prospective parents.",
      },
      {
        icon: "execution",
        title: "Information Architecture",
        description:
          "Structured educational content to improve usability and SEO, and defined navigation systems to simplify information access.",
      },
      {
        icon: "monitoring",
        title: "Wireframing & Prototyping",
        description:
          "Created low-fidelity concepts for stakeholder validation and developed high-fidelity interactive prototypes.",
      },
      {
        icon: "closing",
        title: "Visual Design & SEO Optimization",
        description:
          "Established a clean, trustworthy visual identity, applied accessibility principles, and collaborated on content structure and keyword placement for optimal search visibility.",
      },
    ],
    challenges:
      "Creating website content that was optimized for search engines without compromising readability, while balancing business messaging, educational values, and SEO best practices.",
    approach: "Implemented a user-centered design approach with integrated SEO strategy, ensuring design components supported content readability and search visibility through semantic HTML structure and strategic content layout.",
    outcomes: [
      "Enhanced the school's digital presence and credibility through professional web presence",
      "Improved accessibility of important admission information for prospective parents",
      "Established a scalable content structure to support future SEO initiatives",
      "Increased collaboration efficiency across stakeholders and development teams",
      "Delivered a website experience that balances user engagement with search engine visibility",
    ],
  },
} as const satisfies ProjectContent;
