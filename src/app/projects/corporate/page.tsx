import type { Metadata } from "next";
import CorporateClient from "./CorporateClient";

export const metadata: Metadata = {
  title: "Corporate Projects",
  description: "View Helbin Rapheal's corporate front-end development projects showcasing teamwork and professional solutions in React, Next.js, and enterprise web applications.",
  alternates: {
    canonical: "/projects/corporate",
  },
  openGraph: {
    title: "Corporate Projects | Helbin Rapheal",
    description: "Front-end development projects from corporate experience, demonstrating team collaboration and enterprise-level solutions.",
    url: "https://helbinrapheal.vercel.app/projects/corporate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Projects | Helbin Rapheal",
    description: "Front-end development projects from corporate experience.",
  },
};

export default function CorporateProjects() {
  return <CorporateClient />;
}
