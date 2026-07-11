/**
 * Analytics Utility
 * 
 * Unified analytics tracking for Vercel Analytics, Google Analytics 4, and Microsoft Clarity.
 * Dynamically injects analytics scripts and initializes them only in production.
 * 
 * Environment Variables Required:
 * - VITE_GA4_ID: Google Analytics 4 Measurement ID (optional, production only)
 * - VITE_CLARITY_ID: Microsoft Clarity Project ID (optional, production only)
 * - VITE_ENABLE_ANALYTICS: Set to "true" to enable analytics in production
 */

// Declare gtag function for Google Analytics (injected dynamically)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    dataLayer?: any[];
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
  analyticsEnabled: boolean;
  ga4Id?: string;
  clarityId?: string;
}

class AnalyticsService {
  private analyticsEnabled: boolean;
  private ga4Id?: string;
  private clarityId?: string;
  private trackedEvents = new Set<string>();
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  constructor(config: AnalyticsConfig) {
    this.analyticsEnabled = config.analyticsEnabled;
    this.ga4Id = config.ga4Id;
    this.clarityId = config.clarityId;
  }

  /**
   * Initialize all analytics providers
   * Should be called once at application startup
   * Returns a promise that resolves when all scripts are loaded or skipped
   * Never throws - analytics failures don't block app
   */
  async init(): Promise<void> {
    if (this.initialized) {
      return this.initPromise || Promise.resolve();
    }

    if (!this.analyticsEnabled) {
      if (import.meta.env.DEV) {
        console.log('[Analytics] Disabled (not in production or VITE_ENABLE_ANALYTICS not set)');
      }
      this.initialized = true;
      return Promise.resolve();
    }

    if (import.meta.env.DEV) {
      console.log('[Analytics] Initializing analytics providers in production mode');
    }

    // Create the initialization promise
    this.initPromise = Promise.all([
      this.ga4Id ? this.injectGoogleAnalytics().catch(err => {
        console.error('[Analytics] GA4 initialization failed:', err);
      }) : Promise.resolve(),
      this.clarityId ? this.injectMicrosoftClarity().catch(err => {
        console.error('[Analytics] Clarity initialization failed:', err);
      }) : Promise.resolve(),
    ]).then(() => {
      try {
        this.trackPageView();
      } catch (error) {
        console.error('[Analytics] Failed to track initial page view:', error);
      }
    }).catch(err => {
      console.error('[Analytics] Initialization error:', err);
      // Never throw - analytics is not critical to app
    });

    this.initialized = true;
    await this.initPromise;
  }

  /**
   * Dynamically inject Google Analytics 4 script
   * Uses the official gtag.js from Google's CDN
   */
  private injectGoogleAnalytics(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.ga4Id) {
        if (import.meta.env.DEV) {
          console.warn('[Analytics] GA4 ID not configured, skipping GA4 initialization');
        }
        resolve();
        return;
      }

      // Check if gtag already loaded
      if (window.gtag) {
        if (import.meta.env.DEV) {
          console.log('[Analytics] Google Analytics already loaded');
        }
        this.configureGoogleAnalytics();
        resolve();
        return;
      }

      try {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];

        // Create gtag function
        window.gtag = function () {
          (window.dataLayer as any).push(arguments);
        };

        // Set initial command
        window.gtag('js', new Date());

        // Load the gtag script from Google's CDN
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.ga4Id}`;

        script.onload = () => {
          if (import.meta.env.DEV) {
            console.log('[Analytics] Google Analytics script loaded');
          }
          this.configureGoogleAnalytics();
          resolve();
        };

        script.onerror = () => {
          console.error('[Analytics] Failed to load Google Analytics script');
          resolve(); // Don't throw - analytics is optional
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('[Analytics] Error injecting Google Analytics:', error);
        resolve(); // Don't throw - analytics is optional
      }
    });
  }

  /**
   * Configure Google Analytics after script is loaded
   */
  private configureGoogleAnalytics(): void {
    if (!window.gtag || !this.ga4Id) return;

    try {
      window.gtag('config', this.ga4Id, {
        page_path: window.location.pathname,
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false, // We handle page views manually
      });
      if (import.meta.env.DEV) {
        console.log('[Analytics] Google Analytics 4 configured with ID:', this.ga4Id);
      }
    } catch (error) {
      console.error('[Analytics] Failed to configure Google Analytics:', error);
    }
  }

  /**
   * Dynamically inject Microsoft Clarity script
   */
  private injectMicrosoftClarity(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.clarityId) {
        if (import.meta.env.DEV) {
          console.warn('[Analytics] Clarity ID not configured, skipping Clarity initialization');
        }
        resolve();
        return;
      }

      // Check if clarity already loaded
      if (window.clarity) {
        if (import.meta.env.DEV) {
          console.log('[Analytics] Microsoft Clarity already loaded');
        }
        resolve();
        return;
      }

      try {
        // Create the clarity function placeholder
        window.clarity = function () {
          // Placeholder until actual script loads
        };

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${this.clarityId}`;

        script.onload = () => {
          if (import.meta.env.DEV) {
            console.log('[Analytics] Microsoft Clarity script loaded');
          }
          resolve();
        };

        script.onerror = () => {
          console.error('[Analytics] Failed to load Microsoft Clarity script');
          resolve(); // Don't throw - Clarity is optional
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('[Analytics] Error injecting Microsoft Clarity:', error);
        resolve(); // Don't throw - Clarity is optional
      }
    });
  }

  /**
   * Track a custom event with deduplication
   * Prevents duplicate events within 500ms of the same type
   */
  trackEvent(eventName: EventName, eventData?: Record<string, any>): void {
    if (!this.analyticsEnabled) return;

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
    if (!this.analyticsEnabled) return;

    const pagePath = path || window.location.pathname;
    const pageTitle = title || document.title;

    // Send manual page_view event to Google Analytics
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
   * Check if analytics is enabled
   */
  isEnabled(): boolean {
    return this.analyticsEnabled;
  }
}

// Create singleton instance
const analyticsEnabled =
  import.meta.env.PROD &&
  import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

const ga4Id = analyticsEnabled ? import.meta.env.VITE_GA4_ID : undefined;
const clarityId = analyticsEnabled ? import.meta.env.VITE_CLARITY_ID : undefined;

const analytics = new AnalyticsService({
  analyticsEnabled,
  ga4Id,
  clarityId,
});

export default analytics;
