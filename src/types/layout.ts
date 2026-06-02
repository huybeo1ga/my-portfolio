export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "testimonials",
  "blog",
  "resume",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
