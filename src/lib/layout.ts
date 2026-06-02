import { SECTION_IDS, type SectionId } from "@/types/layout";

export { SECTION_IDS };
export type { SectionId };

export const HEADER_HEIGHT = 64;

/**
 * Scrolls the page so the element with the given id is in view, accounting for fixed header.
 */
export function scrollToSection(id: SectionId | string): void {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - HEADER_HEIGHT,
      behavior: "smooth",
    });
  }
}

/** Maps section id to nav label (e.g. "resume" -> "Resume"). */
export function sectionIdToLabel(id: SectionId | string): string {
  if (id === "resume") return "Resume";
  return id.charAt(0).toUpperCase() + id.slice(1);
}
