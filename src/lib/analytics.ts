/**
 * Analytics Utility
 * 
 * Unified analytics tracking for Vercel Analytics, Google Analytics 4, and Microsoft Clarity.
 * All analytics only run in production mode.
 * 
 * Environment Variables Required:
 * - VITE_GA4_ID: Google Analytics 4 Measurement ID (optional)
 * - VITE_CLARITY_ID: Microsoft Clarity Project ID (optional)
 */

// Declare gtag function for Google Analytics (injected via script tag)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

type EventName = 
  | 'resume_download'
  | 'github_click'
  | 'linkedin_click'
  | 'contact_click'
  | 'project_view'
  | 'nav_click'
  | 'email_click'
  | 'link_click'
  | 'button_click'
  | 'file_download'
  | 'engagement'
  | 'page_view'
  | 'phone_click';

interface AnalyticsConfig {
  isProduction: boolean;
  ga4Id?: string;
  clarityId?: string;
}

class AnalyticsService {
  private isProduction: boolean;
  private ga4Id?: string;
  private clarityId?: string;
  private trackedEvents = new Set<string>();
  private initialized = false;

  constructor(config: AnalyticsConfig) {
    this.isProduction = config.isProduction;
    this.ga4Id = config.ga4Id;
    this.clarityId = config.clarityId;
  }

  /**
   * Initialize all analytics providers
   * Should be called once at application startup
   */
  init(): void {
    if (this.initialized) return;
    this.initialized = true;

    if (!this.isProduction) {
      if (import.meta.env.DEV) {
        console.log('[Analytics] Disabled in development mode');
      }
      return;
    }

    if (import.meta.env.DEV) {
      console.log('[Analytics] Initializing analytics providers in production mode');
    }

    this.initGoogleAnalytics();
    this.initMicrosoftClarity();
    this.trackPageView();
  }

  /**
   * Initialize Google Analytics 4
   * The gtag script must be injected via index.html before this runs
   */
  private initGoogleAnalytics(): void {
    if (!this.ga4Id) {
      if (import.meta.env.DEV) {
        console.warn('[Analytics] GA4 ID not configured, skipping GA4 initialization');
      }
      return;
    }

    if (!window.gtag) {
      console.warn('[Analytics] Google Analytics script not loaded');
      return;
    }

    try {
      window.gtag('config', this.ga4Id, {
        page_path: window.location.pathname,
        page_title: document.title,
        send_page_view: false, // We handle page views manually
      });
      if (import.meta.env.DEV) {
        console.log('[Analytics] Google Analytics 4 initialized with ID:', this.ga4Id);
      }
    } catch (error) {
      console.error('[Analytics] Failed to initialize Google Analytics:', error);
    }
  }

  /**
   * Initialize Microsoft Clarity
   * The clarity script must be injected via index.html before this runs
   */
  private initMicrosoftClarity(): void {
    if (!this.clarityId) {
      if (import.meta.env.DEV) {
        console.warn('[Analytics] Clarity ID not configured, skipping Clarity initialization');
      }
      return;
    }

    if (!window.clarity) {
      console.warn('[Analytics] Microsoft Clarity script not loaded');
      return;
    }

    try {
      window.clarity('identify', this.clarityId);
      if (import.meta.env.DEV) {
        console.log('[Analytics] Microsoft Clarity initialized with ID:', this.clarityId);
      }
    } catch (error) {
      console.error('[Analytics] Failed to initialize Microsoft Clarity:', error);
    }
  }

  /**
   * Track a custom event with deduplication
   * Prevents duplicate events within 500ms of the same type
   */
  trackEvent(eventName: EventName, eventData?: Record<string, any>): void {
    if (!this.isProduction) return;

    const eventId = `${eventName}-${JSON.stringify(eventData || {})}`;
    
    // Prevent duplicate events within 500ms
    if (this.trackedEvents.has(eventId)) {
      if (import.meta.env.DEV) {
        console.log(`[Analytics] Skipping duplicate event: ${eventName}`);
      }
      return;
    }

    this.trackedEvents.add(eventId);
    setTimeout(() => this.trackedEvents.delete(eventId), 500);

    // Prepare event data with timestamp
    const enrichedData = {
      ...eventData,
      timestamp: new Date().toISOString(),
    };

    // Track with Google Analytics
    if (window.gtag) {
      try {
        window.gtag('event', eventName, enrichedData);
      } catch (error) {
        console.error('[Analytics] GA4 tracking failed:', error);
      }
    }

    // Track with Microsoft Clarity
    if (window.clarity) {
      try {
        window.clarity('event', eventName, enrichedData);
      } catch (error) {
        console.error('[Analytics] Clarity tracking failed:', error);
      }
    }

    if (import.meta.env.DEV) {
      console.log(`[Analytics] Event tracked: ${eventName}`, enrichedData);
    }
  }

  /**
   * Track page view (called automatically on init, can be called manually)
   */
  trackPageView(path?: string, title?: string): void {
    if (!this.isProduction) return;

    const pagePath = path || window.location.pathname;
    const pageTitle = title || document.title;

    // Google Analytics tracks page views automatically with send_page_view: true
    // But we send manual page_view events for consistency
    if (window.gtag) {
      try {
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_title: pageTitle,
          page_location: window.location.href,
        });
      } catch (error) {
        console.error('[Analytics] GA4 page view tracking failed:', error);
      }
    }

    if (import.meta.env.DEV) {
      console.log(`[Analytics] Page view tracked: ${pagePath}`);
    }
  }

  /**
   * Track link clicks with destination and label
   */
  trackLinkClick(
    label: string,
    destination: string,
    category: string = 'external_link'
  ): void {
    this.trackEvent('link_click', {
      link_label: label,
      link_url: destination,
      link_category: category,
    });
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonName: string, label?: string): void {
    this.trackEvent('button_click', {
      button_name: buttonName,
      button_label: label || '',
    });
  }

  /**
   * Track file downloads
   */
  trackDownload(fileName: string, fileType: string = 'pdf'): void {
    this.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
    });
  }

  /**
   * Track engagement metrics
   */
  trackEngagement(action: string, value?: number): void {
    this.trackEvent('engagement', {
      engagement_action: action,
      engagement_value: value || 1,
    });
  }

  /**
   * Check if analytics is enabled in production
   */
  isEnabled(): boolean {
    return this.isProduction;
  }
}

// Create singleton instance
const isProduction = import.meta.env.PROD === true;
const ga4Id = isProduction ? import.meta.env.VITE_GA4_ID : undefined;
const clarityId = isProduction ? import.meta.env.VITE_CLARITY_ID : undefined;

const analytics = new AnalyticsService({
  isProduction,
  ga4Id,
  clarityId,
});

export default analytics;
