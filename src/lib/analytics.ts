export type AnalyticsEventData = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight analytics event tracking.
 * Logs in dev; can be wired to Vercel Analytics or another provider later.
 */
export function trackEvent(name: string, data: AnalyticsEventData = {}): void {
  console.log("[Analytics Event]", name, data);
}
