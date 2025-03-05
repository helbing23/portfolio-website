'use client'

import { SiCalendly } from "react-icons/si"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (config: { url: string }) => void;
    };
  }
}

export default function CalendlyButton() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.Calendly?.initPopupWidget({
          url: 'https://calendly.com/helbinrapheal'
        });
      }}
      className="text-2xl hover:text-blue-500 transition-colors"
    >
      <SiCalendly />
    </a>
  )
}