'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

export default function CalendlyInlineWidget() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initWidget = () => {
      const element = document.getElementById('calendly-inline-widget');
      if (element && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/helbinrapheal',
          parentElement: element,
          // Optional: UTM parameters for tracking
          utm: {
            utmSource: 'portfolio',
            utmMedium: 'website',
            utmCampaign: 'booking_page'
          }
        });
        setIsLoading(false);
      }
    };

    // Retry logic in case script hasn't loaded yet
    const checkAndInit = setInterval(() => {
      if (window.Calendly) {
        initWidget();
        clearInterval(checkAndInit);
      }
    }, 100);

    // Cleanup after 5 seconds
    setTimeout(() => {
      clearInterval(checkAndInit);
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);

    return () => clearInterval(checkAndInit);
  }, [isLoading]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      )}
      <div
        id="calendly-inline-widget"
        className="calendly-inline-widget rounded-xl overflow-hidden shadow-lg border border-border w-full"
        style={{
          minWidth: '320px',
          height: '700px'
        }}
      />
    </div>
  );
}
