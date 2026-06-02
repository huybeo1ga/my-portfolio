export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "resume",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
