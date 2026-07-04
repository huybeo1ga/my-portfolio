import type { Experience as ExperienceType, ExperienceStat, ResumeExperience, Education } from "@/types/experience";

/** Single source of truth for work experience (Experience section + Resume + CV) */
export const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "IVC (ISB Vietnam)",
    position: "Fullstack Developer - Project KPI Management System",
    duration: "Apr 2026 – Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "KPI Management System - Full-stack web app for employee KPI management and evaluation cycles (goal setting, mid-year, year-end), supporting GM/PM/Leader/Member role-based workflows.",
    resumeTime: "Apr 2026 – Present",
    achievements: [
      "Built role-based KPI dashboards with scoring, sheet approval, and evidence submission flows",
      "Implemented strategic KPI library, promotion cycles, and configurable score scales",
      "Integrated OIDC/SSO and JWT-based authentication with secure cookie flow",
      "Implemented file upload for KPI evidence and automated email notification flows",
      "Containerized full stack with Docker Compose and Nginx reverse proxy for deployment consistency",
    ],
    technologies: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Pinia",
      "Spring Boot 3",
      "Java 21",
      "MyBatis",
      "PostgreSQL",
      "Spring Security",
      "OAuth2/OIDC",
      "JWT",
      "Docker",
      "Nginx",
    ],
    logo: "🏢",
    resumeDescription:
      "Built a full-stack KPI platform with role-based workflows, OIDC auth, and containerized deployment.",
  },
  {
    id: 2,
    company: "IVC (ISB Vietnam)",
    position: "Fullstack Developer - Project FaceDB",
    duration: "Jan 2026 – Apr 2026",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Developing fullstack features for enterprise modules with a focus on robust architecture, maintainability, and delivery speed.",
    resumeTime: "01/2026 – 04/2026",
    achievements: [
      "Transitioned from frontend-heavy work into robust Node.js/NestJS backend development",
      "Delivered scalable modules while maintaining code quality and long-term maintainability",
      "Applied AI-assisted workflows to accelerate implementation and reduce rework",
    ],
    technologies: ["ReactJS", "TypeScript", "Node.js", "NestJS", "Prisma", "RESTful APIs"],
    logo: "🏢",
    resumeDescription:
      "Contributed fullstack features for FaceDB, combining frontend delivery with backend architecture.",
  },
  {
    id: 3,
    company: "IVC (ISB Vietnam)",
    position: "Frontend Developer - Project TAKEX",
    duration: "Jan 2025 – Dec 2025",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Built a real-time camera web application for document scanning and processing with ReactJS and Material UI.",
    resumeTime: "01/2025 – 12/2025",
    achievements: [
      "Integrated Google MediaPipe for liveness detection and document boundary tracking",
      "Designed high-performance atom-based state handling for high-frequency camera updates",
      "Improved UI responsiveness and rendering stability for real-time processing screens",
    ],
    technologies: ["ReactJS", "Material UI", "Jotai", "Google MediaPipe", "OCR", "Node.js", "NestJS"],
    logo: "🏢",
    resumeDescription:
      "Developed a real-time camera and document processing app with MediaPipe and optimized state flow.",
  },
  {
    id: 4,
    company: "IVC (ISB Vietnam)",
    position: "Frontend Developer - Project NEOHOPS (Legacy Migration)",
    duration: "Jun 2024 – Jan 2025",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Analyzed and migrated a legacy Visual Basic (VB) system into a modern web application using Angular.",
    resumeTime: "06/2024 – 01/2025",
    achievements: [
      "Implemented business logic and reusable components with TypeScript",
      "Wrote unit tests using Jasmine and Karma to ensure reliability",
      "Collaborated with backend team for API integration and RxJS data streams",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "SCSS", "Jasmine", "Karma"],
    logo: "🏢",
    resumeDescription:
      "Led migration from legacy VB to Angular, with test coverage and backend integration.",
  },
  {
    id: 5,
    company: "IVC (ISB Vietnam)",
    position: "Frontend Developer - Project Fujia Banking (E-commerce)",
    duration: "May 2022 – Jun 2024",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Built a multifunctional e-commerce web application using ReactJS, focusing on complex ordering systems and dynamic forms.",
    resumeTime: "05/2022 – 06/2024",
    achievements: [
      "Architected global state management using Redux for cross-role UI consistency",
      "Handled asynchronous side effects and complex API integration using Redux Saga",
      "Optimized component rendering and lifecycle behavior for better performance",
    ],
    technologies: ["ReactJS", "Redux", "Redux-Saga", "JavaScript", "Next.js", "Axios"],
    logo: "🏢",
    resumeDescription:
      "Built an e-commerce platform with complex order flows, Redux state architecture, and performant UI rendering.",
  },
  {
    id: 6,
    company: "The New Tech",
    position: "Frontend Developer - CRM & E-commerce Platforms",
    duration: "Jun 2021 – Apr 2022",
    resumeTime: "06/2021 – 04/2022",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Developed dashboard and admin interfaces for CRM, e-commerce, and logistics products.",
    resumeDescription:
      "Built CRM dashboards and e-commerce admin interfaces for product, category, and order management.",
    achievements: [
      "Built CRM dashboard for user management and reporting using ReactJS, TypeScript, and Next.js",
      "Implemented admin modules for Pharmacity and Popeyes e-commerce workflows",
      "Created logistics statistical charts and order creation modules with Ant Design",
    ],
    technologies: ["ReactJS", "TypeScript", "Next.js", "SCSS", "Ant Design"],
    logo: "💻",
  },
];

export const experienceStats: ExperienceStat[] = [
  { number: "4+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "20+", label: "Technologies" },
  { number: "2", label: "Companies" },
];

/** Resume section summary view derived from experiences */
export function getResumeExperiences(): ResumeExperience[] {
  return experiences.map((exp) => ({
    role: exp.position,
    company: exp.company,
    time: exp.resumeTime ?? exp.duration,
    description: exp.resumeDescription ?? exp.description,
  }));
}

export const education: Education[] = [
  {
    school: "Ho Chi Minh City University of Technology",
    degree: "Bachelor of Engineering (GPA: 3.8/4.0)",
    time: "2018 – 2022",
  },
];

/** Resume section skill tags */
export const resumeSkillTags: string[] = [
  "JavaScript (ES6+)", "TypeScript", "ReactJS", "Next.js", "Vue.js",
  "Angular", "Redux Toolkit", "Redux-Saga", "Vuex", "NgRx",
  "TanStack Query", "Ant Design", "Material UI", "Bootstrap", "Tailwind CSS",
  "Node.js", "NestJS", "Java 21", "Spring Boot 3", "MyBatis", "PostgreSQL",
  "Spring Security", "OAuth2/OIDC", "JWT", "Prisma Client", "RESTful APIs",
  "Docker", "Nginx", "Git", "Webpack", "Cursor", "Gemini",
];

/** Resume section counter values (for CountUp) */
export const resumeCounters = {
  yearsExperience: 3,
  majorProjects: 10,
  companies: 2,
  commitment: 100,
};
