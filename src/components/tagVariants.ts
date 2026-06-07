export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "three"
  | "websockets"
  | "redis"
<<<<<<< Updated upstream
=======
  | "ganttchart"
  | "golang"
>>>>>>> Stashed changes
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
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  three: "Three.js",
  websockets: "WebSockets",
  redis: "Redis",
<<<<<<< Updated upstream
=======
  ganttchart: "Gantt Chart",
  golang: "Golang",
>>>>>>> Stashed changes
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
