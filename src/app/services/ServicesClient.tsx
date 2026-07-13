"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PackagesBanner from "@/components/services/PackagesBanner";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  FaUserTie,
  FaHandshake,
  FaCompass,
  FaRocket,
  FaStore,
  FaCode,
  FaTools,
  FaWordpress,
  FaLayerGroup,
  FaFileAlt,
  FaRobot,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const founderServices: Service[] = [
  {
    title: "Fractional CTO",
    description:
      "One to three days a week, seed to Series A. Architecture, roadmap, technical hiring and engineering culture. The same work I do as co-founder and CTO at Therapyway, without the full-time salary.",
    icon: <FaUserTie size={20} />,
  },
  {
    title: "Technical Co-Founder",
    description:
      "Equity-based partnership from idea validation through MVP to product-market fit, with full engineering ownership. This is how Therapyway was built.",
    icon: <FaHandshake size={20} />,
  },
  {
    title: "Advisory CTO",
    description:
      "Non-executive. Architecture reviews, stack decisions, hiring guidance and due-diligence preparation. My current arrangement with Shreyanshs CIC.",
    icon: <FaCompass size={20} />,
  },
  {
    title: "Full-Stack MVP Builds",
    description:
      "A lean stack (Next.js, TypeScript, Supabase, AWS) taken from concept to production. Shipped examples: the Therapyway app and SoloTrader CRM.",
    icon: <FaRocket size={20} />,
  },
  {
    title: "Marketplace Launch Advisory",
    description:
      "Service types, booking flows, multi-tenant architecture. Lessons learned building Therapyway and Location Square, applied to your launch.",
    icon: <FaStore size={20} />,
  },
];

const agencyServices: Service[] = [
  {
    title: "White-Label Development",
    description:
      "Overflow capacity under your brand, from marketing sites to SaaS dashboards. Next.js and TypeScript are my daily tools; with my team I also take on Nest.js, Strapi, Python and FastAPI builds. Teams I have worked with shipped 25-30% faster.",
    icon: <FaCode size={20} />,
  },
  {
    title: "Infrastructure Rescue",
    description:
      "DNS untangling, email deliverability (SES, DKIM, SPF, DMARC), hosting migrations, GitHub Actions pipelines. The jobs that stall client projects and that nobody on the bench wants.",
    icon: <FaTools size={20} />,
  },
  {
    title: "WordPress-to-Modern-Stack Migrations",
    description:
      "Moving legacy CMS builds onto Next.js without losing content, SEO or the client's nerve. I have built on both sides of that fence.",
    icon: <FaWordpress size={20} />,
  },
  {
    title: "Long-Term Product Engineering Partner",
    description:
      "Retainer-based ownership of a platform or product line, including mentoring and design systems that outlast the project.",
    icon: <FaLayerGroup size={20} />,
  },
];

const extraServices: Service[] = [
  {
    title: "Project Scoping Template Pack",
    description:
      "PRD, SOW and quote templates for freelance developers. £50 to £150.",
    icon: <FaFileAlt size={20} />,
  },
  {
    title: "AI Development Consulting",
    description:
      "BMAD methodology, Claude Code and prompt architecture for teams adopting AI-assisted delivery.",
    icon: <FaRobot size={20} />,
  },
];

interface ServiceTrackProps {
  heading: string;
  tagline: string;
  services: Service[];
}

const ServiceTrack = ({ heading, tagline, services }: ServiceTrackProps) => (
  <Reveal className="mb-12">
    <h2 className="text-2xl font-semibold">{heading}</h2>
    <p className="mb-4 text-muted-foreground">{tagline}</p>
    <BentoGrid className="mx-auto md:auto-rows-auto">
      {services.map((item) => (
        <BentoGridItem
          key={item.title}
          title={<span className="gradient-text">{item.title}</span>}
          description={item.description}
          icon={item.icon}
          className="bg-gradient-gray hover:shadow-xl"
        />
      ))}
    </BentoGrid>
  </Reveal>
);

export default function ServicesClient() {
  return (
    <section className="py-16 md:py-24">
      <Container as="div">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p>
            Two kinds of people hire me: founders who need technical leadership,
            and agencies that need senior hands. Next.js and TypeScript are what
            I work in daily. For bigger builds I bring my team, which covers
            mobile apps, custom software, Nest.js and Strapi backends, Python
            and FastAPI services, and AWS infrastructure with GitHub Actions
            pipelines. Whatever the shape of the project, someone here has
            shipped one like it.
          </p>
        </header>

        <ServiceTrack
          heading="For founders"
          tagline="You have the vision. I'll own the engineering."
          services={founderServices}
        />

        <ServiceTrack
          heading="For agencies"
          tagline="Senior hands when your pipeline outgrows your team."
          services={agencyServices}
        />

        <ServiceTrack
          heading="Tools and consulting"
          tagline="Smaller offers, same standards."
          services={extraServices}
        />

        <Reveal className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Need a website, not a partnership?</h2>
          <PackagesBanner />
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-gray-200/50 bg-white/70 p-8 text-center backdrop-blur-sm dark:border-white/[0.2] dark:bg-black dark:shadow-none">
            <h2 className="text-2xl font-semibold mb-2">Not sure which of these you need?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book thirty minutes and bring the problem. I&apos;ll tell you honestly
              what I would do, even if the answer is that you don&apos;t need me.
            </p>
            <Link
              href="/booking"
              className="inline-block rounded-xl bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-green-700"
            >
              Book an intro call
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
