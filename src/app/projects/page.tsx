import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Helbin Rapheal's portfolio of freelancing, corporate, and personal projects showcasing expertise in React, Next.js, Drupal, WordPress, and modern web development technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Helbin Rapheal",
    description: "Portfolio of web development projects including freelancing, corporate, and personal work in React, Next.js, and modern frameworks.",
    url: "https://helbinrapheal.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Helbin Rapheal",
    description: "Portfolio of web development projects including freelancing, corporate, and personal work.",
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
