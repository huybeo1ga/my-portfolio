"use client";

import { useEffect } from "react";

interface PerformanceNavigationTiming extends PerformanceEntry {
  domainLookupEnd: number;
  domainLookupStart: number;
  connectEnd: number;
  connectStart: number;
  responseStart: number;
  requestStart: number;
  domContentLoadedEventEnd: number;
  domContentLoadedEventStart: number;
  loadEventEnd: number;
  loadEventStart: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    import("web-vitals")
      .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      })
      .catch(() => {
        // Web vitals not available, continue without it
      });

    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType(
            "navigation"
          )[0] as PerformanceNavigationTiming | undefined;
          const paint = performance.getEntriesByType("paint");

          if (!navigation) return;

          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            loadComplete:
              navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find((entry) => entry.name === "first-paint")
              ?.startTime,
            firstContentfulPaint: paint.find(
              (entry) => entry.name === "first-contentful-paint"
            )?.startTime,
          };

          console.log("Performance Metrics:", metrics);
        }, 0);
      });
    }
  }, []);

  return null;
}
