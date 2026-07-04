import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "KPI Management System",
    slug: "kpi-management-system",
    description:
      "Full-stack KPI management platform for employee evaluation cycles (goal setting, mid-year, year-end), supporting GM/PM/Leader/Member role workflows and approval flows.",
    image: "/images/dashboard.png",
    domain: "Enterprise",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Pinia", "Spring Boot 3", "Java 21", "MyBatis", "PostgreSQL", "Spring Security", "OAuth2/OIDC", "JWT", "Docker", "Nginx"],
    features: [
      "Role-based KPI dashboard with scoring, sheet approval, and evidence submission",
      "Strategic KPI library, promotion cycles, and configurable score scale",
      "OIDC/SSO auth flow with secure token handling",
      "Evidence file upload and email notifications",
      "Mock mode on FE for UI development without backend",
      "Full-stack containerization with Docker Compose and Nginx reverse proxy",
    ],
    year: "2026",
    relatedPostSlugs: [],
  },
  {
    title: "FaceDB",
    slug: "facedb",
    description:
      "Enterprise fullstack module focused on reliable architecture and scalable delivery. Built features across React frontend and Node.js/NestJS backend services for internal platform workflows.",
    image: "/images/facedb.png",
    domain: "Enterprise",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "TypeScript", "Node.js", "NestJS", "Prisma", "RESTful APIs"],
    features: [
      "Implemented fullstack modules with maintainable architecture",
      "Integrated frontend workflows with backend APIs",
      "Optimized development throughput with AI-assisted coding workflows",
      "Focused on code quality and long-term maintainability",
    ],
    year: "2026",
    relatedPostSlugs: [],
  },
  {
    title: "Fujia Banking (E-commerce)",
    slug: "fujia-banking-ecommerce",
    description:
      "Built a multifunctional e-commerce web application with complex ordering flows and dynamic forms, focusing on maintainable state architecture and performance optimization.",
    image: "/images/bank.jpg",
    domain: "Finance",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "Next.js", "JavaScript", "Redux", "Redux-Saga", "Axios"],
    features: [
      "Global state architecture for multi-role consistency",
      "Complex async API integration with Redux-Saga",
      "Performance optimization for high-traffic interfaces",
      "Dynamic forms and robust ordering workflow implementation",
    ],
    year: "2024",
    relatedPostSlugs: [],
  },
  {
    title: "CRM Dashboard",
    slug: "crm-dashboard",
    description:
      "Personal project: dashboard for user management and reporting, with role-oriented layout blocks and event-driven interaction modules.",
    image: "/images/wordanalytics.jpg",
    domain: "Personal",
    category: "personal",
    liveUrl: "https://my-workroom-dashboard.vercel.app/dashboard",
    githubUrl: "",
    technologies: ["ReactJS", "TypeScript", "Dashboard UI", "Responsive Design"],
    features: [
      "User management and reporting dashboard modules",
      "Reusable layout structure with event-based views",
      "Responsive interface and component-driven architecture",
    ],
    year: "2022",
    relatedPostSlugs: [],
  },
  {
    title: "Movie Film",
    slug: "movie-film",
    description:
      "Personal project using Next.js and NextAuth authentication flow. Implemented API calls via Prisma Client and client API routes.",
    image: "/images/corpcomment.jpg",
    domain: "Personal",
    category: "personal",
    liveUrl: "",
    githubUrl: "https://github.com/huy1231a/Movie_Film",
    technologies: ["Next.js", "NextAuth", "Prisma Client", "REST API"],
    features: [
      "Login/Logout flow with NextAuth",
      "Prisma Client for backend data access",
      "Client API integration with Next.js",
    ],
    year: "2022",
    relatedPostSlugs: [],
  },
  {
    title: "Akademi Dashboard",
    slug: "akademi-dashboard",
    description:
      "Personal dashboard project focused on reusable layout blocks and event-based page interactions.",
    image: "/images/rmtdev.jpg",
    domain: "Personal",
    category: "personal",
    liveUrl: "",
    githubUrl: "https://github.com/huy1231a/Akademi",
    technologies: ["ReactJS", "Dashboard UI", "Event-based Components"],
    features: [
      "Multi-layout dashboard structure",
      "Reusable UI blocks for rapid feature iteration",
      "Event-driven page interactions",
    ],
    year: "2021",
    relatedPostSlugs: [],
  },
];

/** Get project by slug for blog → portfolio linking. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ["All", "Enterprise", "Finance", "Personal"];
