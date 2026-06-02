"use client";

import { useEffect, useState, useRef } from "react";
import type { SectionId } from "@/types/layout";

const sectionColors: Record<SectionId, string> = {
  home: "#0c0c0c",
  about: "#121212",
  skills: "#0a0a0a",
  experience: "#0f0f0f",
  projects: "#0f1117",
  resume: "#0f0f0f",
  contact: "#0d1b2a",
};

const DEFAULT_BG = sectionColors.home;

function isSectionId(id: string): id is SectionId {
  return id in sectionColors;
}

export default function ScrollBackground() {
  const [bg, setBg] = useState(DEFAULT_BG);
  const currentIdRef = useRef<SectionId | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.find((e) => e.isIntersecting);
        if (vis) {
          const id = vis.target.id;
          if (!isSectionId(id) || id === currentIdRef.current) return;
          currentIdRef.current = id;
          setBg(sectionColors[id]);
        }
      },
      { threshold: 0.5 }
    );

    (Object.keys(sectionColors) as SectionId[]).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-1000"
      style={{ backgroundColor: bg }}
    />
  );
}
