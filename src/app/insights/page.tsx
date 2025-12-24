import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description: "Read Helbin Rapheal's insights on technology, web development, programming, and software engineering. Thoughts and experiences on React, Next.js, AI, and modern development practices.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Helbin Rapheal",
    description: "Technology insights, programming thoughts, and web development experiences from a software engineer.",
    url: "https://helbinrapheal.vercel.app/insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Helbin Rapheal",
    description: "Technology insights and programming thoughts.",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
