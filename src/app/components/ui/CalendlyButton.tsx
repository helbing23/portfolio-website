'use client'

import { SiCalendly } from "react-icons/si"

export default function CalendlyButton() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        // @ts-ignore (Calendly is loaded globally)
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