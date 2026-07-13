import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdOutlineDoubleArrow } from "react-icons/md";
import caseStudies from "@/data/case-study-data";
import CaseStudyFlow from "@/components/case-study/CaseStudyFlow";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  return {
    title: `${study.title} Case Study`,
    description: study.tagline,
    alternates: {
      canonical: `/projects/case-study/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} Case Study | Helbin Rapheal`,
      description: study.tagline,
      url: `https://helbinrapheal.vercel.app/projects/case-study/${study.slug}`,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} Case Study | Helbin Rapheal`,
      description: study.tagline,
      images: ["/twitter-image"],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-3 py-0.5 text-xs">
            {study.category} · Case Study
          </span>
          {study.status && (
            <span className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-0.5 text-xs text-gray-500 dark:text-gray-400">
              {study.status}
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{study.title}</h1>
        <p className="text-gray-500 dark:text-gray-300">{study.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">The problem</h2>
        {study.problem.map((paragraph, index) => (
          <p key={`problem-${index}`} className="mb-3 text-sm text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <CaseStudyFlow steps={study.flow} />
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">What I built</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {study.built.map((item, index) => (
            <li key={`built-${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Outcome</h2>
        {study.outcome.map((paragraph, index) => (
          <p key={`outcome-${index}`} className="mb-3 text-sm text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
        ))}
        {study.githubUrl && (
          <Link
            href={study.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-link text-sm"
          >
            View the code on GitHub
          </Link>
        )}
      </div>

      <Link
        href="/projects"
        className="mt-6 text-blue-600 hover:text-purple-600 flex items-center group"
      >
        <MdOutlineDoubleArrow className="mr-2 transform rotate-180" />
        <span className="underline group-hover:no-underline">Back to projects</span>
      </Link>
    </section>
  );
}
