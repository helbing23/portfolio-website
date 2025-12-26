'use client'

import { useEffect, useState, useRef } from 'react'

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
  const [error, setError] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const initAttempted = useRef(false);

  useEffect(() => {
    // Prevent multiple initialization attempts
    if (initAttempted.current) return;

    const initWidget = () => {
      try {
        if (widgetRef.current && window.Calendly) {
          // Clear any existing content
          widgetRef.current.innerHTML = '';

          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/helbinrapheal',
            parentElement: widgetRef.current,
            utm: {
              utmSource: 'portfolio',
              utmMedium: 'website',
              utmCampaign: 'booking_page'
            }
          });

          initAttempted.current = true;
          setIsLoading(false);
          setError(false);
          return true;
        }
        return false;
      } catch (err) {
        console.error('Failed to initialize Calendly widget:', err);
        setError(true);
        setIsLoading(false);
        return false;
      }
    };

    // Try to initialize immediately if script is already loaded
    if (initWidget()) {
      return;
    }

    // Otherwise, wait for script to load with retry mechanism
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max (50 * 100ms)

    const checkAndInit = setInterval(() => {
      retryCount++;

      if (initWidget()) {
        clearInterval(checkAndInit);
      } else if (retryCount >= maxRetries) {
        clearInterval(checkAndInit);
        setError(true);
        setIsLoading(false);
        console.error('Calendly script failed to load after 5 seconds');
      }
    }, 100);

    return () => {
      clearInterval(checkAndInit);
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl z-10">
          <div className="text-center p-6">
            <p className="text-destructive mb-4">Failed to load calendar widget</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      <div
        ref={widgetRef}
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
