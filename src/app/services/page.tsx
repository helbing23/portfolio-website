import type { Metadata } from "next";
import Maintenance from "@/components/ui/Maintenance";
import { MAINTENANCE } from "@/config/maintenance";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fractional CTO, technical co-founder and advisory roles for early-stage founders. White-label development, infrastructure rescue and WordPress migrations for agencies. Fixed-price website packages from £300.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Helbin Rapheal",
    description:
      "Fractional CTO for founders. White-label development for agencies. Fixed-price website packages from £300.",
    url: "https://helbinrapheal.vercel.app/services",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Helbin Rapheal",
    description:
      "Fractional CTO for founders. White-label development for agencies. Fixed-price website packages from £300.",
    images: ["/twitter-image"],
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

  return <ServicesClient />;
}
