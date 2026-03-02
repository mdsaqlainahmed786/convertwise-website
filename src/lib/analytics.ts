// ── GA4 event helper ────────────────────────────────────────────────
// Wraps window.gtag so components don't need to check for its existence.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// ── Preset events ───────────────────────────────────────────────────

export function trackLead(source: string, email: string) {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
    lead_source: source,
    lead_email: email,
  });
}

export function trackCtaClick(label: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: label,
  });
}

export function trackVideoPlay() {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: 'hero_demo_video',
  });
}
