import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Journey",
  description: "Follow Helbin Rapheal's continuous learning journey in software development, exploring new technologies, frameworks, and best practices in web development and AI engineering.",
  alternates: {
    canonical: "/learning",
  },
  openGraph: {
    title: "Learning Journey | Helbin Rapheal",
    description: "Continuous learning in software development, new technologies, and modern frameworks.",
    url: "https://helbinrapheal.vercel.app/learning",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Journey | Helbin Rapheal",
    description: "Continuous learning in software development.",
  },
};

export default function Learning() {
    return <div>Learning Journey Content</div>;
}