"use client";
import { ServiceCards } from "@/app/components/services/ServiceCards";

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">I can help you with</h2>
      
      <ServiceCards />

      <a 
        href="/services" 
        className="text-sm hover:underline flex items-center gap-2 mt-8"
      >
        {/* <HiEye size={20} /> */}
        View all services
      </a>
    </section>
  );
}
