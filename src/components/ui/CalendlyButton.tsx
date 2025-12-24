'use client'

import Link from "next/link"
import { SiCalendly } from "react-icons/si"

export default function CalendlyButton() {
  return (
    <Link
      href="/booking"
      className="text-2xl hover:text-blue-500 transition-colors"
    >
      <SiCalendly />
    </Link>
  )
}
