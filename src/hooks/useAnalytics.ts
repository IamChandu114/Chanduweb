/**
 * Custom hook for analytics tracking in React components
 */

import { useEffect } from 'react';
import analytics from '@/lib/analytics';

export const useAnalytics = () => {
  /**
   * Initialize analytics on component mount
   */
  useEffect(() => {
    analytics.init();
  }, []);

  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackLinkClick: analytics.trackLinkClick.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackDownload: analytics.trackDownload.bind(analytics),
    trackEngagement: analytics.trackEngagement.bind(analytics),
  };
};
