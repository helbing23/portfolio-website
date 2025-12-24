import type { Metadata } from "next";
import FreelancingClient from "./FreelancingClient";

export const metadata: Metadata = {
  title: "Freelancing Projects",
  description: "Explore Helbin Rapheal's freelancing portfolio featuring end-to-end web development solutions, from logo design to SEO optimization for small businesses and startups.",
  alternates: {
    canonical: "/projects/freelancing",
  },
  openGraph: {
    title: "Freelancing Projects | Helbin Rapheal",
    description: "End-to-end web development solutions for small businesses and startups, showcasing comprehensive freelance services.",
    url: "https://helbinrapheal.vercel.app/projects/freelancing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancing Projects | Helbin Rapheal",
    description: "End-to-end web development solutions for small businesses and startups.",
  },
};

export default function FreelancingProjects() {
  return <FreelancingClient />;
}
