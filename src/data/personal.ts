const BASE_URL = "https://portfolio-virid-pi-75.vercel.app/"; 

export const personalInfo = {
  name: "Nguyễn Quang Huy",
  jobTitle: "Middle Fullstack Developer",
  description:
    "Middle Fullstack Developer with 4+ years of experience, transitioning from strong frontend expertise (ReactJS, Vue.js, Angular) to backend development with Node.js and NestJS.",
  url: BASE_URL,
  image: `${BASE_URL}/images/ava.png`,
  sameAs: [
    "https://github.com/huy1231a/",
    "https://www.linkedin.com/in/nguyen-quang-huy-5a759b1b3/",
    "https://www.facebook.com/nqh2020/",
  ],
  worksFor: {
    "@type": "Organization" as const,
    name: "IVC (ISB Vietnam)",
  },
  address: {
    "@type": "PostalAddress" as const,
    addressLocality: "Ho Chi Minh City",
    addressCountry: "Vietnam",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "NestJS",
    "Prisma",
    "Redux",
    "Vuex",
    "JavaScript",
    "Web Development",
    "Fullstack Development",
  ],
} as const;

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.jobTitle,
    description: personalInfo.description,
    url: personalInfo.url,
    image: personalInfo.image,
    sameAs: personalInfo.sameAs,
    worksFor: personalInfo.worksFor,
    address: personalInfo.address,
    knowsAbout: personalInfo.knowsAbout,
  };
}
