import type { Metadata } from "next";
import PersonalClient from "./PersonalClient";

export const metadata: Metadata = {
  title: "Personal Projects",
  description: "Discover Helbin Rapheal's personal web development projects and learning journey, including portfolio sites and professional development work in React and Next.js.",
  alternates: {
    canonical: "/projects/personal",
  },
  openGraph: {
    title: "Personal Projects | Helbin Rapheal",
    description: "Personal web development projects showcasing continuous learning and skill development in modern frameworks.",
    url: "https://helbinrapheal.vercel.app/projects/personal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Projects | Helbin Rapheal",
    description: "Personal web development projects and learning journey.",
  },
};

export default function PersonalProjects() {
  return <PersonalClient />;
}
