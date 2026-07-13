import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Freelance, corporate and personal projects by Helbin Rapheal: marketplaces, CRMs and client sites built with React, Next.js, Drupal and WordPress.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Helbin Rapheal",
    description: "Freelance, corporate and personal projects: marketplaces, CRMs and client sites in React and Next.js.",
    url: "https://helbinrapheal.vercel.app/projects",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Helbin Rapheal",
    description: "Freelance, corporate and personal projects: marketplaces, CRMs and client sites in React and Next.js.",
    images: ["/twitter-image"],
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
