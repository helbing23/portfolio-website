import type { Metadata } from "next";
import Maintenance from "@/components/ui/Maintenance";
import { MAINTENANCE } from "@/config/maintenance";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development services by Helbin Rapheal. Offering React/Next.js development, custom CMS solutions (WordPress, Drupal, Strapi), SEO optimization, and full-stack development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Helbin Rapheal",
    description: "Professional web development services including React/Next.js, CMS development, and SEO optimization.",
    url: "https://helbinrapheal.vercel.app/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Helbin Rapheal",
    description: "Professional web development services.",
  },
};

export default function Services() {
  if (MAINTENANCE.services) {
    return (
      <Maintenance
        title="Services page is under maintenance"
        description="We're polishing this page. Please check back soon."
      />
    );
  }

  // Original content
  return <div>All Services</div>;
}
