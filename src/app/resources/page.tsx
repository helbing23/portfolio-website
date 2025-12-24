import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Curated development resources, tools, and references recommended by Helbin Rapheal for web developers. Useful links, libraries, and learning materials for modern web development.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | Helbin Rapheal",
    description: "Curated development resources, tools, and references for web developers.",
    url: "https://helbinrapheal.vercel.app/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Helbin Rapheal",
    description: "Curated development resources and tools.",
  },
};

export default function Resources() {
    return <div>Resources Content</div>;
}