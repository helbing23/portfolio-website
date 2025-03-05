"use client";
import Link from "next/link";
import { ServiceCards } from "@/components/services/ServiceCards";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">I can help you with</h2>
      
      <ServiceCards />

      <Link href="/services" className="text-blue-600 hover:text-purple-600 mt-8 flex items-center group">
        <span className="text-sm underline group-hover:no-underline">
          View all services
        </span>
        <MdOutlineDoubleArrow className="ml-2" />
      </Link>
    </section>
  );
}
