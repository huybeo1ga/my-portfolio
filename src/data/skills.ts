import type { SkillCategory } from "@/types/skill";

export const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", iconKey: "FaReact", level: 95, color: "#61DAFB" },
      { name: "Next.js", iconKey: "SiNextdotjs", level: 90, color: "#e2e8f0" },
      { name: "Vue.js", iconKey: "SiVuedotjs", level: 85, color: "#42B883" },
      { name: "Angular", iconKey: "FaAngular", level: 82, color: "#DD0031" },
      { name: "TypeScript", iconKey: "SiTypescript", level: 90, color: "#3178C6" },
      { name: "JavaScript (ES6+)", iconKey: "FaJs", level: 92, color: "#F7DF1E" },
      { name: "HTML5", iconKey: "FaHtml5", level: 95, color: "#E34F26" },
      { name: "CSS3", iconKey: "FaCss3Alt", level: 90, color: "#1572B6" },
      { name: "SCSS", iconKey: "FaCss3Alt", level: 88, color: "#CC6699" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux Toolkit", iconKey: "SiRedux", level: 88, color: "#764ABC" },
      { name: "Redux-Saga", iconKey: "SiRedux", level: 84, color: "#999999" },
      { name: "Vuex", iconKey: "SiVuedotjs", level: 82, color: "#42B883" },
      { name: "NgRx", iconKey: "SiRedux", level: 78, color: "#BA2BD2" },
      { name: "TanStack Query", iconKey: "FaDatabase", level: 80, color: "#FF4154" },
    ],
  },
  {
    category: "UI Libraries",
    items: [
      { name: "Ant Design", iconKey: "FaDatabase", level: 85, color: "#1677FF" },
      { name: "Material UI", iconKey: "FaDatabase", level: 84, color: "#007FFF" },
      { name: "Bootstrap", iconKey: "FaDatabase", level: 80, color: "#7952B3" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss", level: 88, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", iconKey: "FaNodeJs", level: 80, color: "#339933" },
      { name: "NestJS", iconKey: "FaNodeJs", level: 78, color: "#E0234E" },
      { name: "Java 21", iconKey: "FaDatabase", level: 72, color: "#f89820" },
      { name: "Spring Boot 3", iconKey: "FaDatabase", level: 74, color: "#6DB33F" },
      { name: "MyBatis", iconKey: "FaDatabase", level: 72, color: "#dc2626" },
      { name: "PostgreSQL", iconKey: "SiPostgresql", level: 78, color: "#336791" },
      { name: "RESTful APIs", iconKey: "FaDatabase", level: 86, color: "#6366f1" },
      { name: "Prisma Client", iconKey: "FaDatabase", level: 75, color: "#2D3748" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", iconKey: "FaGitAlt", level: 90, color: "#F05032" },
      { name: "Webpack", iconKey: "FaDatabase", level: 78, color: "#8DD6F9" },
      { name: "Docker", iconKey: "FaDatabase", level: 78, color: "#2496ED" },
      { name: "Nginx", iconKey: "FaDatabase", level: 72, color: "#009639" },
      { name: "Figma (Basic)", iconKey: "FaDatabase", level: 65, color: "#A259FF" },
      { name: "Cursor", iconKey: "FaRobot", level: 88, color: "#6366f1" },
      { name: "Gemini", iconKey: "FaRobot", level: 82, color: "#4285F4" },
    ],
  },
];
