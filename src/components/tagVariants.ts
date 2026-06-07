export type TagVariant =
  | "agile"
  | "clickup"
  | "react"
  | "three"
  | "websockets"
  | "redis"
  | "ganttchart"
  | "golang"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  agile: "Agile",
  clickup: "Clickup",
  react: "React",
  three: "Three.js",
  websockets: "WebSockets",
  redis: "Redis",
  ganttchart: "Gantt Chart",
  golang: "Golang",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
